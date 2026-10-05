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

export function renderApp(container) {
  const el1 = document.createElement('div');
  el1.className = 'ng-root';
  const el2 = document.createElement('div');
  el2.className = 'navbar';
  const el3 = document.createElement('div');
  el3.className = 'nav-inner';
  const el4 = document.createElement('a');
  el4.className = 'brand';
  el4.setAttribute('href', '/');
  const el5 = document.createElement('span');
  el5.className = 'logo';
  appendText(el5, '📦');
  el4.appendChild(el5);
  const el6 = document.createElement('span');
  appendText(el6, 'Product Manager');
  el4.appendChild(el6);
  const el7 = document.createElement('span');
  el7.className = 'tag';
  appendText(el7, 'Angular CRUD');
  el4.appendChild(el7);
  el3.appendChild(el4);
  const el8 = document.createElement('div');
  el8.className = 'links';
  const el9 = document.createElement('a');
  el9.setAttribute('href', '/');
  el9.setAttribute('routerLinkActive', 'active');
  el9.setAttribute('routerLinkActiveOptions', { exact: true });
  appendText(el9, 'Products');
  el8.appendChild(el9);
  const el10 = document.createElement('a');
  el10.setAttribute('href', '/add');
  el10.setAttribute('routerLinkActive', 'active');
  appendText(el10, 'Add Product');
  el8.appendChild(el10);
  el3.appendChild(el8);
  el2.appendChild(el3);
  el1.appendChild(el2);
  const el11 = document.createElement('div');
  el11.className = 'container';
  el1.appendChild(el11);
  const el12 = document.createElement('div');
  el12.className = 'footer';
  appendText(el12, 'Angular 20 Standalone CRUD · HttpClient + Reactive Forms + REST API (json-server)');
  el1.appendChild(el12);
  container.appendChild(el1);
}
