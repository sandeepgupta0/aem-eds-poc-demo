/**
 * EDS Block: product-detail
 * Renders a single product (title, description, price, stock badges).
 * The product object is fetched from the authored Data Source URL.
 */

import { readBlockConfig } from '../../scripts/aem.js';
import { dispatchEvent, formatPrice, renderBadges } from '../shared/generated-jsx.js';
/* eslint-disable no-console */

const DEFAULT_ENDPOINT = 'https://dummyjson.com/products/1';

const normalizeProduct = (json) => {
  if (Array.isArray(json)) return json[0] || null;
  if (json && typeof json === 'object') {
    if (json.product && typeof json.product === 'object') return json.product;
    if (Array.isArray(json.data)) return json.data[0] || null;
    return json;
  }
  return null;
};

export default async function decorate(block) {
  if (block.dataset.blockName == null) block.dataset.blockName = 'product-detail';
  // Read the authored Data Source URL before replacing the UE-delivered
  // table DOM (capture once - children are gone afterwards).
  // UE renders a single-field model as one row with one column holding just
  // the value (often auto-linkified), while document authoring uses
  // two-column key/value rows parsed by readBlockConfig. Support both.
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

  block.replaceChildren();

  let product = null;
  try {
    if (!endpoint) throw new Error('Configure the data-source field with an API URL.');
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    product = normalizeProduct(await response.json());
  } catch (err) {
    const p = document.createElement('p');
    p.className = 'product-detail-error';
    p.textContent = `Could not load product: ${err instanceof Error ? err.message : String(err)}`;
    block.appendChild(p);
    console.error(err);
    return;
  }

  if (!product) {
    const p = document.createElement('p');
    p.className = 'product-detail-empty';
    p.textContent = 'No product found at this URL.';
    block.appendChild(p);
    return;
  }

  const card = document.createElement('div');
  card.className = 'product-detail-card';

  const badges = document.createElement('div');
  badges.className = 'product-detail-badges';
  renderBadges(badges, { children: product.category || 'Uncategorized' });
  renderBadges(badges, {
    children: product.stock > 0 ? `In stock (${product.stock})` : 'Out of stock',
    variant: product.stock > 0 ? 'success' : 'danger',
  });
  card.appendChild(badges);

  const title = document.createElement('h2');
  title.className = 'product-detail-title';
  title.textContent = product.title || 'Untitled product';
  card.appendChild(title);

  if (product.description) {
    const desc = document.createElement('p');
    desc.className = 'product-detail-description';
    desc.textContent = product.description;
    card.appendChild(desc);
  }

  const price = document.createElement('p');
  price.className = 'product-detail-price';
  price.textContent = formatPrice(product.price, block.dataset.currency || null);
  card.appendChild(price);

  if (product.stock > 0) {
    const button = document.createElement('button');
    button.className = 'product-detail-add';
    button.textContent = 'Add to Cart';
    button.addEventListener('click', (e) => dispatchEvent('addToCart', [product], e));
    card.appendChild(button);
  }

  block.appendChild(card);
}
