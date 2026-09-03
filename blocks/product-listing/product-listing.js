/**
 * EDS Block: product-listing
 * Auto-generated scaffold - REVIEW BEFORE USE
 * Source: /var/folders/4d/vcs_9pns27q909vg49074y3c0000gp/T/eds-extract-e7c237f6-c170-4507-a717-d172c9caf87d/my-react-app/src/components/ProductListing/ProductListing.js
 */



export default async function decorate(block) {
    // Authoring field extraction

  
  // Data fetching
  // author-time data fetch for data-0 (GET "https://dummyjson.com/products?limit=10&skip=10")
  try {
    const response = await fetch("https://dummyjson.com/products?limit=10&skip=10");
    if (!response.ok) throw new Error('HTTP ' + response.status);
    await response.json();
    // TODO: map data to block elements
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
      // TODO: dynamic attribute 'style' - wire to EDS field or event handler
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
      // TODO: dynamic attribute 'style' - wire to EDS field or event handler
        const el_node_7 = document.createElement('p');
        el_node_7.classList.add('style-p-node-7');
        // TODO: dynamic attribute 'style' - wire to EDS field or event handler
          const el_node_8 = document.createTextNode('Error:');
        el_node_7.appendChild(el_node_8);
          // TODO: manual wiring needed - expression: error
      el_node_6.appendChild(el_node_7);
        const el_node_10 = document.createElement('button');
        el_node_10.classList.add('style-button-node-10');
        el_node_10.addEventListener('click', retry);
        // TODO: dynamic attribute 'style' - wire to EDS field or event handler
          const el_node_11 = document.createTextNode('Retry');
        el_node_10.appendChild(el_node_11);
      el_node_6.appendChild(el_node_10);
      root.appendChild(el_node_6);
    }
    const el_node_12 = document.createElement('div');
    el_node_12.classList.add('style-div-node-12');
    // TODO: dynamic attribute 'style' - wire to EDS field or event handler
      const el_node_14 = document.createElement('div');
      el_node_14.setAttribute('data-field', 'repeatable');
      (products || []).forEach((_item, _idx) => {
        // Nested component <ProductCard> - generated as separate EDS block "product-card"
        // Wire sub-block via block._edsHandlers if it exposes one
        const row = document.createElement('div');
        el_node_14.appendChild(row);
      });
  el_node_15.appendChild(el_node_12);
  root.appendChild(el_node_15);
  block.replaceChildren(root);

  
}


