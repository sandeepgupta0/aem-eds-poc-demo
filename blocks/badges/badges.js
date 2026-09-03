/**
 * EDS Block: badges
 * Auto-generated scaffold - REVIEW BEFORE USE
 * Source: /var/folders/4d/vcs_9pns27q909vg49074y3c0000gp/T/eds-extract-e7c237f6-c170-4507-a717-d172c9caf87d/my-react-app/src/components/Badges/Badges.js
 */



export default async function decorate(block) {
    // Authoring field extraction
  const field_text = block.querySelector('[data-field="text"]')?.textContent?.trim() || '';

  

    // Render logic - scaffold only
  const root = document.createElement('div');
  root.className = 'badges';
  const el_node_0 = document.createElement('span');
  el_node_0.classList.add('style-span-node-0');
  // TODO: dynamic attribute 'style' - wire to EDS field or event handler
    const el_node_1 = document.createTextNode(field_text);
  el_node_0.appendChild(el_node_1);
  root.appendChild(el_node_0);
  block.replaceChildren(root);

  
}


