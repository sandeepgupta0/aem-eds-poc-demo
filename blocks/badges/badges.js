export default function decorate(block) {
  const text = block.querySelector('[data-field="text"]')?.textContent?.trim()
    || block.textContent.trim();

  block.replaceChildren();
  if (!text) return;

  const badge = document.createElement('span');
  badge.className = 'style-span-node-0';
  badge.textContent = text;
  block.appendChild(badge);
}
