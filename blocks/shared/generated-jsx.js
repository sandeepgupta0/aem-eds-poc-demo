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

export function renderProductCard(container, props) {
  const { product } = props;
  const el1 = document.createElement('a');
  el1.setAttribute('href', `/products/${product.id}`);
  el1.className = 'group flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white transition hover:shadow-lg dark:border-white/10 dark:bg-zinc-900';
  const el2 = document.createElement('div');
  el2.className = 'relative aspect-square w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800';
  const el3 = document.createElement('img');
  el3.setAttribute('src', product.thumbnail);
  el3.setAttribute('alt', product.title);
  el3.setAttribute('sizes', '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw');
  el3.className = 'object-cover transition group-hover:scale-105';
  el2.appendChild(el3);
  const el4 = document.createElement('span');
  el4.className = 'absolute left-2 top-2 rounded-full bg-black/70 px-2 py-0.5 text-xs font-medium text-white';
  appendText(el4, product.category);
  el2.appendChild(el4);
  el1.appendChild(el2);
  const el5 = document.createElement('div');
  el5.className = 'flex flex-1 flex-col gap-2 p-4';
  const el6 = document.createElement('div');
  el6.className = 'flex items-start justify-between gap-2';
  const el7 = document.createElement('h3');
  el7.className = 'line-clamp-1 font-semibold text-zinc-900 dark:text-zinc-50';
  appendText(el7, product.title);
  el6.appendChild(el7);
  const el8 = document.createElement('span');
  el8.className = 'shrink-0 rounded bg-yellow-100 px-1.5 py-0.5 text-xs font-semibold text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
  appendText(el8, '★');
  appendText(el8, product.rating.toFixed(1));
  el6.appendChild(el8);
  el5.appendChild(el6);
  const el9 = document.createElement('p');
  el9.className = 'line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400';
  appendText(el9, product.description);
  el5.appendChild(el9);
  const el10 = document.createElement('div');
  el10.className = 'mt-auto flex items-center justify-between pt-2';
  const el11 = document.createElement('span');
  el11.className = 'text-lg font-bold text-zinc-900 dark:text-white';
  appendText(el11, '$');
  appendText(el11, product.price);
  el10.appendChild(el11);
  const el12 = document.createElement('span');
  el12.className = 'text-xs text-zinc-500 dark:text-zinc-400';
  appendText(el12, product.stock);
  appendText(el12, 'in stock');
  el10.appendChild(el12);
  el5.appendChild(el10);
  el1.appendChild(el5);
  container.appendChild(el1);
}

export function renderHome(container, props) {
  const { error } = props;
  function renderGridSkeleton(gridContainer) {
    const el1 = document.createElement('div');
    el1.className = 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3';
    (Array.from({ length: 6 }) || []).forEach(() => {
      const el2 = document.createElement('div');
      el2.className = 'h-80 animate-pulse rounded-xl bg-zinc-200 dark:bg-zinc-800';
      el1.appendChild(el2);
    });
    gridContainer.appendChild(el1);
  }
  const products = (Array.isArray(props.data) ? props.data : props.data?.products)
    ?? props.products ?? null;
  const el1 = document.createElement('div');
  el1.className = 'mx-auto w-full max-w-6xl flex-1 px-6 py-10';
  const el2 = document.createElement('div');
  el2.className = 'mb-8';
  const el3 = document.createElement('p');
  el3.className = 'text-sm font-medium uppercase tracking-widest text-zinc-500';
  appendText(el3, 'CSR · Shared API call');
  el2.appendChild(el3);
  const el4 = document.createElement('h1');
  el4.className = 'mt-1 text-3xl font-bold tracking-tight';
  appendText(el4, 'Product Listing');
  el2.appendChild(el4);
  const el5 = document.createElement('p');
  el5.className = 'mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400';
  appendText(el5, 'This listing is client-side rendered: the browser fetches');
  appendText(el5, ' ');
  const el6 = document.createElement('code');
  appendText(el6, '/api/products');
  el5.appendChild(el6);
  appendText(el5, ', which reuses the same');
  appendText(el5, ' ');
  const el7 = document.createElement('code');
  appendText(el7, 'getProducts()');
  el5.appendChild(el7);
  appendText(el5, 'API layer as the SSR detail page.');
  el2.appendChild(el5);
  el1.appendChild(el2);
  if (error) {
    const el8 = document.createElement('p');
    el8.className = 'rounded-lg bg-red-50 p-4 text-sm text-red-600 dark:bg-red-950 dark:text-red-300';
    appendText(el8, 'Failed to load products:');
    appendText(el8, error);
    el1.appendChild(el8);
  } else if (products === null) {
    renderGridSkeleton(el1, { ...props });
  } else {
    const el9 = document.createElement('div');
    el9.className = 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3';
    (products || []).forEach((product) => {
      renderProductCard(el9, { ...props, product });
    });
    el1.appendChild(el9);
  }
  container.appendChild(el1);
}
