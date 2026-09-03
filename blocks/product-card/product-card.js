export default function decorate(block) {
  const text = block.querySelector('[data-field="text"]')?.textContent?.trim() || '';
  const price = block.querySelector('[data-field="text-1"]')?.textContent?.trim() || '';

  block.replaceChildren();

  const card = document.createElement('div');
  card.className = 'style-div-node-0';

  const title = document.createElement('div');
  title.textContent = text;

  const priceEl = document.createElement('p');
  priceEl.className = 'style-p-node-3';
  priceEl.textContent = price;

  card.append(title, priceEl);
  block.appendChild(card);
}
