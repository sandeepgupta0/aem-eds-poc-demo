/**
 * EDS Block: product-listing
 * Auto-generated scaffold - REVIEW BEFORE USE
 * Source: /var/folders/4d/vcs_9pns27q909vg49074y3c0000gp/T/eds-extract-45e59fb6-4315-45cc-be76-a3ffd34983cc/my-react-app/src/components/ProductListing/ProductListing.js
 */

import { createProductCard } from './components/product-card.js';

export default async function decorate(block) {
  // Authoring field extraction
  let loading = true;
  let error = null;
  let retry = () => {};

  let products = [];

  // Runtime values referenced by the source component but not defined here.
  // Declared with safe defaults so the block still parses; wire real values for production.
  /* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
  const border = ''; /* to be wired: runtime data source not available in this scaffold */
  const borderRadius = []; /* to be wired: runtime data source not available in this scaffold */
  const color = ''; /* to be wired: runtime data source not available in this scaffold */
  const cursor = ''; /* to be wired: runtime data source not available in this scaffold */
  const display = ''; /* to be wired: runtime data source not available in this scaffold */
  const flex = ''; /* to be wired: runtime data source not available in this scaffold */
  const flexWrap = ''; /* to be wired: runtime data source not available in this scaffold */
  const gap = ''; /* to be wired: runtime data source not available in this scaffold */
  const marginTop = ''; /* to be wired: runtime data source not available in this scaffold */
  const onProductClick = () => {}; /* to be wired: runtime data source not available in this scaffold */
  const padding = ''; /* to be wired: runtime data source not available in this scaffold */
  const textAlign = ''; /* to be wired: runtime data source not available in this scaffold */
  const width = ''; /* to be wired: runtime data source not available in this scaffold */
  /* eslint-enable no-unused-vars, @typescript-eslint/no-unused-vars */

  const render = () => {
  // Render logic - scaffold only
    function _renderLoadingState(container) {
      container.innerHTML = '';
      const wrapper = document.createElement('div');
      wrapper.className = 'product-listing-loading';
      wrapper.innerHTML = '<div class="spinner"></div><p>Loading...</p>';
      container.appendChild(wrapper);
    }

    function _renderErrorState(container, message) {
      container.innerHTML = '';
      const wrapper = document.createElement('div');
      wrapper.className = 'product-listing-error';
      wrapper.innerHTML = `<h3>Error</h3><p>${message}</p>`;
      container.appendChild(wrapper);
    }

    function _renderEmptyState(container, message) {
      container.innerHTML = '';
      const wrapper = document.createElement('div');
      wrapper.className = 'product-listing-empty';
      wrapper.innerHTML = `<h3>Nothing to Display</h3><p>${message}</p>`;
      container.appendChild(wrapper);
    }

    const root = document.createElement('div');
    root.className = 'product-listing';
    const el_node_18 = document.createElement('div');
    if (loading) {
      const el_node_1 = document.createElement('div');
      el_node_1.classList.add('style-div-node-1');
      const el_node_2 = document.createElement('div');
      el_node_2.setAttribute('class', 'spinner');
      el_node_1.appendChild(el_node_2);
      const el_node_3 = document.createElement('p');
      const el_node_4 = document.createTextNode('Loading products...');
      el_node_3.appendChild(el_node_4);
      el_node_1.appendChild(el_node_3);
      el_node_18.appendChild(el_node_1);
    }
    if (error) {
      const el_node_6 = document.createElement('div');
      el_node_6.classList.add('style-div-node-6');
      const el_node_7 = document.createElement('p');
      el_node_7.classList.add('style-p-node-7');
      const el_node_8 = document.createTextNode('Error:');
      el_node_7.appendChild(el_node_8);
      const el_node_9 = document.createTextNode(String(error ?? ''));
      el_node_7.appendChild(el_node_9);
      el_node_6.appendChild(el_node_7);
      const el_node_10 = document.createElement('button');
      el_node_10.classList.add('style-button-node-10');
      el_node_10.addEventListener('click', (typeof retry === 'function' ? retry : (event) => document.dispatchEvent(new CustomEvent('eds:component-event', { detail: { name: 'retry', event } }))));
      const el_node_11 = document.createTextNode('Retry');
      el_node_10.appendChild(el_node_11);
      el_node_6.appendChild(el_node_10);
      el_node_18.appendChild(el_node_6);
    }
    if (!products.length) {
      const el_node_13 = document.createElement('div');
      const el_node_14 = document.createTextNode('No Product Available');
      el_node_13.appendChild(el_node_14);
      el_node_18.appendChild(el_node_13);
    }
    const el_node_15 = document.createElement('div');
    el_node_15.classList.add('style-div-node-15');
    const el_node_17 = document.createElement('div');
    el_node_17.setAttribute('data-field', 'repeatable');
    (products || []).forEach((product, _idx) => {
      const row = document.createElement('div');
      const el_node_16 = createProductCard({ product, onClick: (event) => document.dispatchEvent(new CustomEvent('eds:component-event', { detail: { name: 'onProductClick', args: [product.id], event } })) });
      row.appendChild(el_node_16);
      el_node_17.appendChild(row);
    });
    el_node_18.appendChild(el_node_15);
    root.appendChild(el_node_18);
    block.replaceChildren(root);
  };

  render();

  // Data fetching
  async function _loadData() {
    loading = true;
    error = null;
    render();
    try {
      // author-time data fetch for data-0 (GET "https://dummyjson.com/products?limit=10&skip=10")
      const response_data_0 = await fetch('https://dummyjson.com/products?limit=10&skip=10');
      if (!response_data_0.ok) throw new Error(`HTTP ${response_data_0.status}`);
      const payload_data_0 = await response_data_0.json();
      products = Array.isArray(payload_data_0) ? payload_data_0 : (payload_data_0.products || payload_data_0.data?.products || payload_data_0.data || []);
    } catch (e) {
      error = e instanceof Error ? e.message : String(e);
    } finally {
      loading = false;
      render();
    }
  }
  retry = _loadData;
  await _loadData();
}
