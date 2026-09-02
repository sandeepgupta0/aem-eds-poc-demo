/**
 * EDS Block: productlisting
 * Auto-generated scaffold - REVIEW BEFORE USE
 * Source: /var/folders/4d/vcs_9pns27q909vg49074y3c0000gp/T/eds-extract-ee36055e-c68c-491f-9047-2d17ef4bee1e/my-react-app/src/components/ProductListing/ProductListing.js
 */

/**
 * Decorates the product listing block by fetching data and rendering product cards.
 * @param {HTMLElement} block - The root element of the EDS block instance.
 * @returns {Promise<void>}
 */
export default async function decorate(block) {
    // --- State Variables ---
    let products = [];
    let errorState = null;

    /**
     * Fetches product data from a dummy endpoint.
     * Handles API calls and populates the 'products' array or sets an error state.
     */
    try {
        // Data fetching: Using optional chaining for safety, though fetch itself is robust.
        const response = await fetch("https://dummyjson.com/products?limit=10&skip=10");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // Assuming the API returns products in an array named 'products' or similar structure
        products = data.products || []; 

    } catch (e) {
        console.error('Failed to fetch product data:', e);
        errorState = e instanceof Error ? e.message : String(e);
    }


    // --- Rendering Functions ---

    /**
     * Renders the loading state into the container element.
     * @param {HTMLElement} container - The block root element.
     */
    function renderLoadingState(container) {
        container.innerHTML = ''; // Clear existing content
        const wrapper = document.createElement('div');
        wrapper.className = 'productlisting__loading';
        // Using template literals for clean HTML injection
        wrapper.innerHTML = '<div class="spinner"></div><p>Loading products...</p>'; 
        container.appendChild(wrapper);
    }

    /**
     * Renders the error state into the container element and attaches a retry handler.
     * @param {HTMLElement} container - The block root element.
     * @param {string} message - The error message to display.
     */
    function renderErrorState(container, message) {
        container.innerHTML = ''; // Clear existing content
        const wrapper = document.createElement('div');
        wrapper.className = 'productlisting__error';

        // Error structure: Title, Message, Button
        wrapper.innerHTML = `
            <h3>Error</h3>
            <p>${message}</p>
            <button class="style-button-node_10">Retry</button>
        `;
        container.appendChild(wrapper);

        // Attach retry handler (re-run the decoration process)
        const retryButton = container.querySelector('.productlisting__error button');
        if (retryButton) {
            retryButton.addEventListener('click', () => {
                // Re-fetch data by re-calling decorate, or simply calling a dedicated fetch function
                decorate(block); 
            });
        }
    }

    /**
     * Renders the successful product listing into the container element.
     * @param {HTMLElement} container - The block root element.
     * @param {Array<Object>} productsList - Array of product objects.
     */
    function renderProductListing(container, productsList) {
        container.innerHTML = ''; // Clear existing content

        const el_node_12 = document.createElement('div');
        el_node_12.classList.add('productlisting__products');

        if (productsList.length === 0) {
            el_node_12.innerHTML = '<p>No products found.</p>';
        } else {
            // Using a DocumentFragment for efficient DOM manipulation
            const fragment = document.createDocumentFragment();

            productsList.forEach((product) => {
                // Placeholder for nested component <ProductCard> - generated as separate EDS block "product-card"
                const row = document.createElement('div');
                row.classList.add('productlisting__item'); 
                row.innerHTML = `
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <div class="product-info">
                        <h4>${product.title}</h4>
                        <p>${product.description}</p>
                        <p class="price">$${product.price}</p>
                    </div>
                `;
                fragment.appendChild(row);
            });

            el_node_12.appendChild(fragment);
        }
        container.appendChild(el_node_12);
    }


    // --- Main Execution Logic (State Machine) ---

    const root = block; // Use the provided block element as the root container

    if (!products.length && !errorState) {
        // Initial state: Loading
        renderLoadingState(root);
    } else if (errorState) {
        // Error state
        renderErrorState(root, errorState);
    } else {
        // Success state
        renderProductListing(root, products);
    }
}