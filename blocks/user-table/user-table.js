/**
 * EDS Block: user-table
 * Renders a users table (ID, Username, Email, Password) with inline
 * edit/delete. Users are fetched from the authored Data Source URL;
 * edits are applied to local state.
 */

import { readBlockConfig } from '../../scripts/aem.js';
import { renderUserTable } from '../shared/generated-jsx.js';
/* eslint-disable no-console */

const DEFAULT_ENDPOINT = 'https://dummyjson.com/users?limit=10';

const componentEventListeners = new WeakMap();

export default async function decorate(block) {
  if (block.dataset.blockName == null) block.dataset.blockName = 'user-table';
  // Read the authored Data Source URL before renderBlock() replaces the
  // UE-delivered table DOM (capture once - children are gone afterwards).
  // UE renders a single-field model as one row with one column holding just
  // the value (often auto-linkified), while document authoring uses
  // two-column key/value rows parsed by readBlockConfig. Support both.
  // Do NOT call moveInstrumentation(block) with a single arg here - it strips
  // the block's data-aue-* attributes.
  const config = readBlockConfig(block);
  const firstCell = block.querySelector(':scope > div > div');
  const firstCellValue = firstCell
    ? (firstCell.querySelector('a')?.href || firstCell.textContent || '')
    : '';
  const normalize = (candidate) => {
    const raw = Array.isArray(candidate) ? candidate[0] : candidate;
    return (typeof raw === 'string' ? raw : '').trim();
  };
  const endpoint = [
    config['data-source'],
    block.dataset.dataSource,
    firstCellValue,
  ].map(normalize).find((value) => value) || DEFAULT_ENDPOINT;

  const entityKey = block.dataset.entityKey || 'id';
  let data = [];
  let editingId = null;
  let editForm = {};

  const renderBlock = (focusTarget = null) => {
    const selector = ['input', 'button'].join(', ');
    const focusables = [...block.querySelectorAll(selector)];
    const focusIndex = focusTarget && block.contains(focusTarget)
      ? focusables.indexOf(focusTarget)
      : -1;
    const selectionStart = focusTarget && 'selectionStart' in focusTarget
      ? focusTarget.selectionStart
      : null;
    const selectionEnd = focusTarget && 'selectionEnd' in focusTarget
      ? focusTarget.selectionEnd
      : null;
    block.replaceChildren();
    try {
      renderUserTable(block, { users: data, editingId, editForm });
    } catch (err) {
      const p = document.createElement('p');
      p.textContent = `Render error: ${err instanceof Error ? err.message : String(err)}`;
      block.appendChild(p);
      console.error(err);
    }
    if (focusIndex >= 0) {
      const nextFocus = block.querySelectorAll(selector)[focusIndex];
      nextFocus?.focus();
      if (selectionStart != null && typeof nextFocus?.setSelectionRange === 'function') {
        nextFocus.setSelectionRange(selectionStart, selectionEnd);
      }
    }
  };

  const normalizeUsers = (json) => {
    if (Array.isArray(json)) return json;
    if (json && Array.isArray(json.users)) return json.users;
    if (json && Array.isArray(json.data)) return json.data;
    return [];
  };

  const load = async () => {
    try {
      if (!endpoint) throw new Error('Configure the data-source field with an API URL.');
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      data = normalizeUsers(await response.json());
    } catch (err) {
      data = [];
      renderBlock();
      const p = document.createElement('p');
      p.className = 'user-table-error';
      p.textContent = `Could not load users: ${err instanceof Error ? err.message : String(err)}`;
      block.appendChild(p);
      console.error(err);
      return;
    }
    renderBlock();
  };

  const onComponentEvent = async (ev) => {
    const source = ev.detail?.event?.target;
    if (source && !block.contains(source)) return;
    const { name, args = [] } = ev.detail || {};
    if (name === 'startEdit') {
      const entity = args[0];
      if (!entity) return;
      editingId = entity[entityKey];
      editForm = { ...entity };
      renderBlock();
    } else if (name === 'saveEdit') {
      const id = args[0];
      data = data.map((u) => (u[entityKey] === id ? { ...u, ...editForm } : u));
      editingId = null;
      editForm = {};
      renderBlock();
    } else if (name === 'cancelEdit') {
      editingId = null;
      editForm = {};
      renderBlock();
    } else if (name === 'handleDelete') {
      const id = args[0];
      data = data.filter((u) => u[entityKey] !== id);
      if (editingId === id) {
        editingId = null;
        editForm = {};
      }
      renderBlock();
    } else if (name === 'updateField') {
      const [field, value] = args;
      if (editingId != null) editForm = { ...editForm, [field]: value || '' };
      renderBlock(source);
    }
  };
  const previousHandler = componentEventListeners.get(block);
  if (previousHandler) document.removeEventListener('eds:component-event', previousHandler);
  document.addEventListener('eds:component-event', onComponentEvent);
  componentEventListeners.set(block, onComponentEvent);

  await load();
}
