/**
 * Reusable child component: Badges
 * Auto-generated scaffold - REVIEW BEFORE USE
 * Source: /var/folders/4d/vcs_9pns27q909vg49074y3c0000gp/T/eds-extract-f251f7d4-b947-4c86-a40f-b0eee1dc0dd1/my-react-app/src/components/Badges/Badges.js
 *
 * Builds and returns the DOM for Badges. The parent block imports and
 * calls this function, passing the props it needs.
 */

export function createBadges({ children, variant: _variant } = {}) {
  const root = document.createElement('div');
  root.className = 'badges';
  // Runtime values referenced by this component but not available in the module.
  /* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
  let borderRadius = []; /* to be wired: runtime data source not available in this scaffold */
  let fontSize = ''; /* to be wired: runtime data source not available in this scaffold */
  let fontWeight = ''; /* to be wired: runtime data source not available in this scaffold */
  let padding = ''; /* to be wired: runtime data source not available in this scaffold */
  let styles = []; /* to be wired: runtime data source not available in this scaffold */
  /* eslint-enable no-unused-vars, @typescript-eslint/no-unused-vars */
const el_node_0 = document.createElement('span');
el_node_0.classList.add('style-span-node-0');
  const el_node_1 = document.createTextNode(String(children ?? ''));
el_node_0.appendChild(el_node_1);
  root.appendChild(el_node_0);
  return root;
}
