/**
 * EDS Block: productlisting
 * Auto-generated scaffold - REVIEW BEFORE USE
 * Source: /var/folders/4d/vcs_9pns27q909vg49074y3c0000gp/T/eds-extract-f251f7d4-b947-4c86-a40f-b0eee1dc0dd1/my-react-app/src/components/ProductListing/ProductListing.js
 */

import { createProductCard } from './components/product-card.js';

export default async function decorate(block) {
    // Authoring field extraction
  let loading = true;
  let error = null;
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  let retry = () => {}; // reassigned to _loadData before first call

  let products = [];

  // Runtime values referenced by the source component but not defined here.
  // Declared with safe defaults so the block still parses; wire real values for production.
  /* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
  let border = ''; /* to be wired: runtime data source not available in this scaffold */
  let borderRadius = []; /* to be wired: runtime data source not available in this scaffold */
  let color = ''; /* to be wired: runtime data source not available in this scaffold */
  let cursor = ''; /* to be wired: runtime data source not available in this scaffold */
  let display = ''; /* to be wired: runtime data source not available in this scaffold */
  let flex = ''; /* to be wired: runtime data source not available in this scaffold */
  let flexWrap = ''; /* to be wired: runtime data source not available in this scaffold */
  let gap = ''; /* to be wired: runtime data source not available in this scaffold */
  let marginTop = ''; /* to be wired: runtime data source not available in this scaffold */
  let onProductClick = () => {}; /* to be wired: runtime data source not available in this scaffold */
  let padding = ''; /* to be wired: runtime data source not available in this scaffold */
  let textAlign = ''; /* to be wired: runtime data source not available in this scaffold */
  let width = ''; /* to be wired: runtime data source not available in this scaffold */
  /* eslint-enable no-unused-vars, @typescript-eslint/no-unused-vars */

  const render = () => {
  // Render logic - scaffold only
  function _renderLoadingState(container) {
    container.innerHTML = '';
    const wrapper = document.createElement('div');
    wrapper.className = 'productlisting-loading';
    wrapper.innerHTML = '<div class="spinner"></div><p>Loading...</p>';
    container.appendChild(wrapper);
  }

  function _renderErrorState(container, message) {
    container.innerHTML = '';
    const wrapper = document.createElement('div');
    wrapper.className = 'productlisting-error';
    wrapper.innerHTML = '<h3>Error</h3><p>' + message + '</p>';
    container.appendChild(wrapper);
  }

  function _renderEmptyState(container, message) {
    container.innerHTML = '';
    const wrapper = document.createElement('div');
    wrapper.className = 'productlisting-empty';
    wrapper.innerHTML = '<h3>Nothing to Display</h3><p>' + message + '</p>';
    container.appendChild(wrapper);
  }

  if (loading) { _renderLoadingState(block); return; }
  if (error) { _renderErrorState(block, error || 'An error occurred'); return; }
  if (!products.length) { _renderEmptyState(block, 'No data available'); return; }
  const root = document.createElement('div');
  root.className = 'productlisting';
  const el_node_18 = document.createElement('div');
    // State 'loading' handled by early-return guard above.
    // State 'error' handled by early-return guard above.
    // State '!products.length' handled by early-return guard above.
    const el_node_15 = document.createElement('div');
    el_node_15.classList.add('style-div-node-15');
      const el_node_17 = document.createElement('div');
      el_node_17.setAttribute('data-field', 'repeatable');
      (products || []).forEach((product, _idx) => {
        const row = document.createElement('div');
        const el_node_16 = createProductCard({ product: product, onClick: (event) => document.dispatchEvent(new CustomEvent('eds:component-event', { detail: { name: 'onProductClick', args: [product.id], event } })) });
        row.appendChild(el_node_16);
        el_node_17.appendChild(row);
      });
    el_node_15.appendChild(el_node_17);
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
      const response_data_0 = await fetch("https://dummyjson.com/products?limit=10&skip=10");
      if (!response_data_0.ok) throw new Error('HTTP ' + response_data_0.status);
      const payload_data_0 = await response_data_0.json();
      products = Array.isArray(payload_data_0) ? payload_data_0 : (payload_data_0.products || payload_data_0.data?.products || payload_data_0.data || []);
    } catch (e) {
      error = e instanceof Error ? e.message : String(e);
    } finally {
      loading = false;
      render();
    }
  }
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  retry = _loadData;
  await _loadData()

  
}


