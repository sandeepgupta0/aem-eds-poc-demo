const PRODUCTS_URL = 'https://dummyjson.com/products?limit=10&skip=10';

function renderError(block, error) {
  const card = document.createElement('div');
  card.className = 'product-listing-error';
  card.innerHTML = `<h3>Error:</h3><p>${error.message}</p>`;
  block.appendChild(card);
}

async function fetchProducts(block) {
  const loading = document.createElement('div');
  loading.className = 'product-listing-loading';
  loading.innerHTML = '<div class="spinner"></div><p>Loading products...</p>';
  block.appendChild(loading);

  try {
    const response = await fetch(PRODUCTS_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    loading.remove();
    return data.products;
  } catch (error) {
    loading.remove();
    renderError(block, error);
    return null;
  }
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';

  const title = document.createElement('div');
  title.textContent = product.title;

  const price = document.createElement('p');
  price.className = 'style-p-node-3';
  price.textContent = `$${product.price.toFixed ? product.price.toFixed(2) : product.price}`;

  const badge = document.createElement('span');
  badge.className = 'style-span-node-0';
  badge.textContent = product.stock > 0 ? 'In stock' : 'Out of stock';

  card.append(title, price, badge);
  return card;
}

export default async function decorate(block) {
  block.replaceChildren();

  const products = await fetchProducts(block);
  if (!products) return;

  const grid = document.createElement('div');
  grid.className = 'style-div-node-12';

  products.forEach((product) => {
    grid.appendChild(createProductCard(product));
  });

  block.appendChild(grid);
}
