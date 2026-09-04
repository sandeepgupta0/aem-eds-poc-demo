/**
 * EDS Block: product-listing
 * Auto-generated scaffold - REVIEW BEFORE USE
 * Source: /var/folders/4d/vcs_9pns27q909vg49074y3c0000gp/T/eds-extract-ae6df022-6e78-4a00-966a-c72d3bc841fa/my-react-app/src/components/ProductListing/ProductListing.js
 */

import { createProductCard } from './components/product-card.js';

export default async function decorate(block) {
    // Authoring field extraction

  // Runtime values referenced by the source component but not defined here.
  // Declared with safe defaults so the block still parses; wire real values for production.
  /* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
  let border = ''; /* to be wired: runtime data source not available in this scaffold */
  let borderRadius = []; /* to be wired: runtime data source not available in this scaffold */
  let color = ''; /* to be wired: runtime data source not available in this scaffold */
  let cursor = ''; /* to be wired: runtime data source not available in this scaffold */
  let display = ''; /* to be wired: runtime data source not available in this scaffold */
  let error = false; /* to be wired: runtime data source not available in this scaffold */
  let flex = ''; /* to be wired: runtime data source not available in this scaffold */
  let flexWrap = ''; /* to be wired: runtime data source not available in this scaffold */
  let gap = ''; /* to be wired: runtime data source not available in this scaffold */
  let loading = true; /* to be wired: runtime data source not available in this scaffold */
  let marginTop = ''; /* to be wired: runtime data source not available in this scaffold */
  let onProductClick = () => {}; /* to be wired: runtime data source not available in this scaffold */
  let padding = ''; /* to be wired: runtime data source not available in this scaffold */
  let retry = () => {}; /* to be wired: runtime data source not available in this scaffold */
  let textAlign = ''; /* to be wired: runtime data source not available in this scaffold */
  let width = ''; /* to be wired: runtime data source not available in this scaffold */
  /* eslint-enable no-unused-vars, @typescript-eslint/no-unused-vars */

  
  // Data fetching
  // author-time data fetch for data-0 (GET "https://dummyjson.com/products?limit=10&skip=10")
  let products = [];
  try {
    const response = await fetch("https://dummyjson.com/products?limit=10&skip=10");
    if (!response.ok) throw new Error('HTTP ' + response.status);
    const payload = await response.json();
    products = Array.isArray(payload) ? payload : (payload.products || payload.products || payload.data || []);
  } catch (e) {
    console.warn('Failed to fetch data:', e);
  }

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
    wrapper.innerHTML = '<h3>Error</h3><p>' + message + '</p>';
    container.appendChild(wrapper);
  }

  const root = document.createElement('div');
  root.className = 'product-listing';
  const el_node_15 = document.createElement('div');
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
      root.appendChild(el_node_1);
    }
    if (error) {
      const el_node_6 = document.createElement('div');
      el_node_6.classList.add('style-div-node-6');
        const el_node_7 = document.createElement('p');
        el_node_7.classList.add('style-p-node-7');
          const el_node_8 = document.createTextNode('Error:');
        el_node_7.appendChild(el_node_8);
          // TODO: manual wiring needed - expression: error
      el_node_6.appendChild(el_node_7);
        const el_node_10 = document.createElement('button');
        el_node_10.classList.add('style-button-node-10');
        el_node_10.addEventListener('click', (typeof retry === 'function' ? retry : () => {}));
          const el_node_11 = document.createTextNode('Retry');
        el_node_10.appendChild(el_node_11);
      el_node_6.appendChild(el_node_10);
      root.appendChild(el_node_6);
    }
    const el_node_12 = document.createElement('div');
    el_node_12.classList.add('style-div-node-12');
      const el_node_14 = document.createElement('div');
      el_node_14.setAttribute('data-field', 'repeatable');
      (products || []).forEach((product, _idx) => {
        const row = document.createElement('div');
        const el_node_13 = createProductCard({ product: product });
        row.appendChild(el_node_13);
        el_node_14.appendChild(row);
      });
  el_node_15.appendChild(el_node_12);
  root.appendChild(el_node_15);
  block.replaceChildren(root);

  
}


