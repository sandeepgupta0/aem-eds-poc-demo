/**
 * Generated EDS vanilla-JS shared module: generic DOM helpers +
 * JSX-transformed render functions for every migrated component.
 * Reused by parent and child blocks so behaviour stays identical.
 */

const UNITLESS = new Set(['animationIterationCount', 'aspectRatio', 'borderImageOutset', 'borderImageSlice', 'borderImageWidth', 'boxFlex', 'boxFlexGroup', 'boxOrdinalGroup', 'columnCount', 'columns', 'flex', 'flexGrow', 'flexPositive', 'flexShrink', 'flexNegative', 'flexOrder', 'gridArea', 'gridRow', 'gridRowEnd', 'gridRowSpan', 'gridRowStart', 'gridColumn', 'gridColumnEnd', 'gridColumnSpan', 'gridColumnStart', 'fontWeight', 'lineClamp', 'lineHeight', 'opacity', 'order', 'orphans', 'tabSize', 'widows', 'zIndex', 'zoom', 'fillOpacity', 'floodOpacity', 'stopOpacity', 'strokeDasharray', 'strokeDashoffset', 'strokeMiterlimit', 'strokeOpacity', 'strokeWidth']);

let defaultCurrency = null;

export function setDefaultCurrency(currency) {
  defaultCurrency = currency || null;
}

export function formatPrice(value, currency) {
  if (value == null) return '';
  const n = Number(value);
  if (!Number.isFinite(n)) return String(value);
  return (currency || defaultCurrency || '') + n.toFixed(2);
}

export function applyInlineStyle(el, styles) {
  if (!styles || typeof styles !== 'object') return;
  Object.entries(styles).forEach(([k, v]) => {
    if (v == null) return;
    if (typeof v === 'number') el.style[k] = UNITLESS.has(k) ? v : `${v}px`;
    else el.style[k] = v;
  });
}

export function appendText(el, value) {
  if (value == null) return;
  el.appendChild(document.createTextNode(String(value)));
}

export function dispatchEvent(name, args, event) {
  document.dispatchEvent(new CustomEvent('eds:component-event', {
    detail: { name, args: args || [], event },
    bubbles: true,
  }));
}

export function renderProductDetail(container, props) {
  const { loading, error } = props;
  function ngRouteHelper(parts) {
    return `/${parts.map((s) => String(s == null ? '' : s).replace(/^\/+/, '')).join('/')}`;
  }
  const dataId = (new URLSearchParams(window.location.search).get('id') || '');
  const product = (Array.isArray(props.data)
    ? props.data.find((__p) => String(__p && __p.id) === String(dataId)) : null) ?? null;
  if (loading) {
    const el1 = document.createElement('div');
    el1.className = 'wrap center';
    const el2 = document.createElement('h2');
    appendText(el2, 'Loading…');
    el1.appendChild(el2);
    const el3 = document.createElement('p');
    appendText(el3, 'Fetching product from the API.');
    el1.appendChild(el3);
    container.appendChild(el1);
  } else if (product) {
    const el4 = document.createElement('div');
    el4.className = 'wrap';
    const el5 = document.createElement('a');
    el5.className = 'back';
    el5.setAttribute('href', '/');
    appendText(el5, '← Back to products');
    el4.appendChild(el5);
    const el6 = document.createElement('div');
    el6.className = 'head';
    const el7 = document.createElement('span');
    el7.className = 'badge';
    appendText(el7, product.category);
    el6.appendChild(el7);
    if ((product.stock) < (10)) {
      const el8 = document.createElement('span');
      el8.className = 'badge danger';
      appendText(el8, 'Low stock:');
      appendText(el8, product.stock);
      el6.appendChild(el8);
    } else {
      const el9 = document.createElement('span');
      el9.className = 'badge ok';
      appendText(el9, 'In stock:');
      appendText(el9, product.stock);
      el6.appendChild(el9);
    }
    el4.appendChild(el6);
    const el10 = document.createElement('h1');
    appendText(el10, product.name);
    el4.appendChild(el10);
    const el11 = document.createElement('div');
    el11.className = 'price';
    appendText(el11, '$');
    appendText(el11, Number(product.price).toFixed(2));
    el4.appendChild(el11);
    const el12 = document.createElement('p');
    el12.className = 'desc';
    appendText(el12, product.description);
    el4.appendChild(el12);
    if (product.imageUrl) {
      const el13 = document.createElement('img');
      el13.className = 'img';
      el13.setAttribute('src', product.imageUrl);
      el13.setAttribute('alt', product.name);
      el4.appendChild(el13);
    } else {
      appendText(el4, null);
    }
    const el14 = document.createElement('dl');
    el14.className = 'meta';
    const el15 = document.createElement('div');
    const el16 = document.createElement('dt');
    appendText(el16, 'ID');
    el15.appendChild(el16);
    const el17 = document.createElement('dd');
    el17.className = 'mono';
    appendText(el17, product.id);
    el15.appendChild(el17);
    el14.appendChild(el15);
    const el18 = document.createElement('div');
    const el19 = document.createElement('dt');
    appendText(el19, 'Created');
    el18.appendChild(el19);
    const el20 = document.createElement('dd');
    appendText(el20, (new Date(product.createdAt)).toLocaleString());
    el18.appendChild(el20);
    el14.appendChild(el18);
    const el21 = document.createElement('div');
    const el22 = document.createElement('dt');
    appendText(el22, 'Updated');
    el21.appendChild(el22);
    const el23 = document.createElement('dd');
    appendText(el23, (new Date(product.updatedAt)).toLocaleString());
    el21.appendChild(el23);
    el14.appendChild(el21);
    const el24 = document.createElement('div');
    const el25 = document.createElement('dt');
    appendText(el25, 'Total value');
    el24.appendChild(el25);
    const el26 = document.createElement('dd');
    appendText(el26, '$');
    appendText(el26, Number((product.price) * (product.stock)).toFixed(2));
    el24.appendChild(el26);
    el14.appendChild(el24);
    el4.appendChild(el14);
    if (error) {
      const el27 = document.createElement('div');
      el27.className = 'alert';
      appendText(el27, error);
      el4.appendChild(el27);
    } else {
      appendText(el4, null);
    }
    const el28 = document.createElement('div');
    el28.className = 'actions';
    const el29 = document.createElement('button');
    el29.className = 'btn secondary';
    el29.addEventListener('click', () => {
      const p = product;
      if (p) {
        window.location.href = ngRouteHelper(['/edit', p.id]);
      }
    });
    appendText(el29, 'Edit');
    el28.appendChild(el29);
    const el30 = document.createElement('button');
    el30.className = 'btn danger';
    el30.addEventListener('click', () => {
      const p = product;
      // eslint-disable-next-line no-alert, no-restricted-globals -- mirrors source app
      if (confirm(`Delete "${p.name}"?`)) {
        fetch(`http://localhost:3001/products/${p.id}`, {
          method: 'DELETE',
        }).then((__r) => {
          if (!__r.ok) {
            throw new Error(`HTTP ${__r.status}`);
          }
          return __r.json();
        }).then(() => {
          window.location.href = '/';
        }).catch(() => {});
      }
    });
    appendText(el30, 'Delete');
    el28.appendChild(el30);
    el4.appendChild(el28);
    container.appendChild(el4);
  } else {
    const el31 = document.createElement('div');
    el31.className = 'wrap center';
    const el32 = document.createElement('h2');
    appendText(el32, 'Product not found');
    el31.appendChild(el32);
    const el33 = document.createElement('p');
    if (error) appendText(el33, 'It may have been deleted.');
    el31.appendChild(el33);
    const el34 = document.createElement('a');
    el34.className = 'btn primary';
    el34.setAttribute('href', '/');
    appendText(el34, 'Go back');
    el31.appendChild(el34);
    container.appendChild(el31);
  }
}
