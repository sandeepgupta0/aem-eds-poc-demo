/**
 * Reusable child component: ProductCard
 * Auto-generated scaffold - REVIEW BEFORE USE
 * Source: /var/folders/4d/vcs_9pns27q909vg49074y3c0000gp/T/eds-extract-ae6df022-6e78-4a00-966a-c72d3bc841fa/my-react-app/src/components/ProductCard/ProductCard.js
 *
 * Builds and returns the DOM for ProductCard. The parent block imports and
 * calls this function, passing the props it needs.
 */

import { createBadges } from './badges.js';
export function createProductCard({ product, onClick } = {}) {
  const root = document.createElement('div');
  root.className = 'product-card';
  // Runtime values referenced by this component but not available in the module.
  /* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
  let addToCart = ''; /* to be wired: runtime data source not available in this scaffold */
  let background = ''; /* to be wired: runtime data source not available in this scaffold */
  let border = ''; /* to be wired: runtime data source not available in this scaffold */
  let borderRadius = []; /* to be wired: runtime data source not available in this scaffold */
  let color = ''; /* to be wired: runtime data source not available in this scaffold */
  let cursor = ''; /* to be wired: runtime data source not available in this scaffold */
  let display = ''; /* to be wired: runtime data source not available in this scaffold */
  let flex = ''; /* to be wired: runtime data source not available in this scaffold */
  let flexWrap = ''; /* to be wired: runtime data source not available in this scaffold */
  let fontSize = ''; /* to be wired: runtime data source not available in this scaffold */
  let fontWeight = ''; /* to be wired: runtime data source not available in this scaffold */
  let formatCurrency = ''; /* to be wired: runtime data source not available in this scaffold */
  let gap = ''; /* to be wired: runtime data source not available in this scaffold */
  let margin = ''; /* to be wired: runtime data source not available in this scaffold */
  let marginTop = ''; /* to be wired: runtime data source not available in this scaffold */
  let maxWidth = ''; /* to be wired: runtime data source not available in this scaffold */
  let padding = ''; /* to be wired: runtime data source not available in this scaffold */
  /* eslint-enable no-unused-vars, @typescript-eslint/no-unused-vars */
const el_node_0 = document.createElement('div');
el_node_0.classList.add('style-div-node-0');
el_node_0.addEventListener('click', (typeof onClick === 'function' ? onClick : () => {}));
  const el_node_1 = document.createElement('div');
    const el_node_2 = document.createTextNode(String(product.title ?? ''));
  el_node_1.appendChild(el_node_2);
el_node_0.appendChild(el_node_1);
  const el_node_3 = document.createElement('p');
  el_node_3.classList.add('style-p-node-3');
    const el_node_4 = document.createTextNode(String(true ?? ''));
  el_node_3.appendChild(el_node_4);
el_node_0.appendChild(el_node_3);
  const el_node_5 = document.createElement('div');
  el_node_5.classList.add('style-div-node-5');
    const el_node_6 = createBadges({});
  el_node_5.appendChild(el_node_6);
    // Condition simplified to a parse-safe guard (source: product.stock > 0 ? <Badges>…</Badges> : <Badges>…</Badges>)
    if (true) {
    }
el_node_0.appendChild(el_node_5);
  // Condition simplified to a parse-safe guard (source: product.stock > 0 && <button>…</button>)
  if (true) {
  }
  root.appendChild(el_node_0);
  return root;
}
