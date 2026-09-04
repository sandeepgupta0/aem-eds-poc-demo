/**
 * loads and decorates the product listing block
 * @param {Element} block The block element
 */
export default async function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';

  const list = document.createElement('ul');
  list.classList.add('product-listing-list');

  rows.forEach((row) => {
    const product = document.createElement('li');
    product.classList.add('product-listing-item');

    const link = row.querySelector('a');
    const image = row.querySelector('img');
    const text = row.querySelector('div');

    if (image) {
      const imgContainer = document.createElement('div');
      imgContainer.classList.add('product-listing-image');
      imgContainer.appendChild(image.cloneNode(true));
      product.appendChild(imgContainer);
    }

    if (text) {
      const textContainer = document.createElement('div');
      textContainer.classList.add('product-listing-text');
      textContainer.innerHTML = text.innerHTML;
      product.appendChild(textContainer);
    }

    if (link) {
      const linkClone = link.cloneNode(true);
      linkClone.classList.add('product-listing-link');
      product.appendChild(linkClone);
    }

    list.appendChild(product);
  });

  block.appendChild(list);
}
