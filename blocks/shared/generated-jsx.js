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

export function renderHeader(container, props) {
  const el1 = document.createElement('div');
  el1.className = `sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur`;
  const el2 = document.createElement('div');
  el2.className = `mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4`;
  const el3 = document.createElement('a');
  el3.setAttribute('href', '/');
  el3.className = `flex shrink-0 items-center gap-2 text-xl font-bold text-indigo-600`;
  const el4 = document.createElement('span');
  el4.className = `grid h-9 w-9 place-items-center rounded-lg bg-indigo-600 text-white`;
  const el5 = document.createElement('svg');
  el5.setAttribute('viewBox', '0 0 24 24');
  el5.setAttribute('fill', 'none');
  el5.setAttribute('stroke', 'currentColor');
  el5.setAttribute('stroke-width', '2');
  el5.setAttribute('stroke-linecap', 'round');
  el5.setAttribute('stroke-linejoin', 'round');
  el5.className = `h-5 w-5`;
  const el6 = document.createElement('path');
  el6.setAttribute('d', 'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z');
  el5.appendChild(el6);
  const el7 = document.createElement('path');
  el7.setAttribute('d', 'M3 6h18');
  el5.appendChild(el7);
  const el8 = document.createElement('path');
  el8.setAttribute('d', 'M16 10a4 4 0 0 1-8 0');
  el5.appendChild(el8);
  el4.appendChild(el5);
  el3.appendChild(el4);
  appendText(el3, 'ShopDash');
  el2.appendChild(el3);
  const el9 = document.createElement('div');
  el9.className = `hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex`;
  const el10 = document.createElement('a');
  el10.setAttribute('href', '#home');
  el10.className = `transition hover:text-indigo-600`;
  appendText(el10, 'Home');
  el9.appendChild(el10);
  const el11 = document.createElement('a');
  el11.setAttribute('href', '#products');
  el11.className = `transition hover:text-indigo-600`;
  appendText(el11, 'Products');
  el9.appendChild(el11);
  const el12 = document.createElement('a');
  el12.setAttribute('href', '#reviews');
  el12.className = `transition hover:text-indigo-600`;
  appendText(el12, 'Reviews');
  el9.appendChild(el12);
  el2.appendChild(el9);
  const el13 = document.createElement('div');
  el13.className = `flex items-center gap-3`;
  const el14 = document.createElement('input');
  el14.setAttribute('type', 'search');
  el14.setAttribute('placeholder', 'Search products...');
  el14.className = `hidden rounded-full border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-indigo-500 lg:block`;
  el13.appendChild(el14);
  const el15 = document.createElement('button');
  el15.setAttribute('type', 'button');
  el15.className = `relative rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700`;
  appendText(el15, 'Cart');
  const el16 = document.createElement('span');
  el16.className = `ml-1 rounded-full bg-white/20 px-1.5 py-0.5 text-xs`;
  appendText(el16, '0');
  el15.appendChild(el16);
  el13.appendChild(el15);
  el2.appendChild(el13);
  el1.appendChild(el2);
  container.appendChild(el1);
}

export function renderFooter(container, props) {
  const year = new Date().getFullYear();
  const el1 = document.createElement('div');
  el1.className = `bg-gray-900 text-gray-300`;
  const el2 = document.createElement('div');
  el2.className = `mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3`;
  const el3 = document.createElement('div');
  const el4 = document.createElement('h3');
  el4.className = `mb-3 text-lg font-semibold text-white`;
  appendText(el4, 'ShopDash');
  el3.appendChild(el4);
  const el5 = document.createElement('p');
  el5.className = `text-sm leading-relaxed text-gray-400`;
  appendText(el5, 'Your one-stop destination for the latest products across every category. Quality products, great prices, and reviews you can trust.');
  el3.appendChild(el5);
  el2.appendChild(el3);
  const el6 = document.createElement('div');
  const el7 = document.createElement('h3');
  el7.className = `mb-3 text-lg font-semibold text-white`;
  appendText(el7, 'Quick Links');
  el6.appendChild(el7);
  const el8 = document.createElement('ul');
  el8.className = `space-y-2 text-sm`;
  const el9 = document.createElement('li');
  const el10 = document.createElement('a');
  el10.setAttribute('href', '#home');
  el10.className = `transition hover:text-white`;
  appendText(el10, 'Home');
  el9.appendChild(el10);
  el8.appendChild(el9);
  const el11 = document.createElement('li');
  const el12 = document.createElement('a');
  el12.setAttribute('href', '#products');
  el12.className = `transition hover:text-white`;
  appendText(el12, 'Products');
  el11.appendChild(el12);
  el8.appendChild(el11);
  const el13 = document.createElement('li');
  const el14 = document.createElement('a');
  el14.setAttribute('href', '#reviews');
  el14.className = `transition hover:text-white`;
  appendText(el14, 'Reviews');
  el13.appendChild(el14);
  el8.appendChild(el13);
  el6.appendChild(el8);
  el2.appendChild(el6);
  const el15 = document.createElement('div');
  const el16 = document.createElement('h3');
  el16.className = `mb-3 text-lg font-semibold text-white`;
  appendText(el16, 'Stay in touch');
  el15.appendChild(el16);
  const el17 = document.createElement('p');
  el17.className = `mb-3 text-sm text-gray-400`;
  appendText(el17, 'Subscribe for the latest drops and offers.');
  el15.appendChild(el17);
  const el18 = document.createElement('form');
  el18.addEventListener('submit', (e) => {
    e.preventDefault();
  });
  el18.className = `flex gap-2`;
  const el19 = document.createElement('input');
  el19.setAttribute('type', 'email');
  el19.setAttribute('required', 'required');
  el19.setAttribute('placeholder', 'Your email');
  el19.className = `w-full rounded-full border border-gray-600 bg-gray-800 px-4 py-2 text-sm text-white outline-none transition focus:border-indigo-400`;
  el18.appendChild(el19);
  const el20 = document.createElement('button');
  el20.setAttribute('type', 'submit');
  el20.className = `shrink-0 rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500`;
  appendText(el20, 'Subscribe');
  el18.appendChild(el20);
  el15.appendChild(el18);
  el2.appendChild(el15);
  el1.appendChild(el2);
  const el21 = document.createElement('div');
  el21.className = `border-t border-gray-800 py-5 text-center text-xs text-gray-500`;
  appendText(el21, '©');
  appendText(el21, year);
  appendText(el21, 'ShopDash. All rights reserved. Data from DummyJSON.');
  el1.appendChild(el21);
  container.appendChild(el1);
}

export function renderHeroBanner(container, props) {
  const { heroImage } = props;
  const el1 = document.createElement('div');
  el1.setAttribute('id', 'home');
  el1.className = `relative overflow-hidden`;
  const el2 = document.createElement('img');
  el2.setAttribute('src', heroImage);
  el2.setAttribute('alt', 'Featured product banner');
  el2.className = `absolute inset-0 h-full w-full object-cover`;
  el1.appendChild(el2);
  const el3 = document.createElement('div');
  el3.className = `absolute inset-0 bg-gradient-to-r from-indigo-950/90 via-indigo-900/70 to-indigo-900/20`;
  el1.appendChild(el3);
  const el4 = document.createElement('div');
  el4.className = `relative mx-auto flex max-w-7xl flex-col items-start justify-center px-6 py-24 md:py-36`;
  const el5 = document.createElement('span');
  el5.className = `mb-4 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white backdrop-blur`;
  appendText(el5, 'New Season, New Drops');
  el4.appendChild(el5);
  const el6 = document.createElement('h1');
  el6.className = `max-w-xl text-4xl font-extrabold leading-tight text-white md:text-6xl`;
  appendText(el6, 'Shop the latest trends at unbeatable prices');
  el4.appendChild(el6);
  const el7 = document.createElement('p');
  el7.className = `mt-4 max-w-lg text-base text-gray-200`;
  appendText(el7, 'Discover premium products loved by thousands of customers, with real reviews you can rely on.');
  el4.appendChild(el7);
  const el8 = document.createElement('div');
  el8.className = `mt-8 flex flex-wrap gap-4`;
  const el9 = document.createElement('a');
  el9.setAttribute('href', '#products');
  el9.className = `rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-900 transition hover:bg-indigo-50`;
  appendText(el9, 'Shop Now');
  el8.appendChild(el9);
  const el10 = document.createElement('a');
  el10.setAttribute('href', '#reviews');
  el10.className = `rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10`;
  appendText(el10, 'Read Reviews');
  el8.appendChild(el10);
  el4.appendChild(el8);
  el1.appendChild(el4);
  container.appendChild(el1);
}

export function renderStars(container, props) {
  const { rating } = props;
  const full = Math.round(rating);
  const el1 = document.createElement('div');
  el1.setAttribute('aria-label', `${rating.toFixed(1)} out of 5 stars`);
  el1.className = `flex text-sm text-amber-400`;
  (([0, 1, 2, 3, 4]) || ([]) || []).forEach((i) => {
    const el2 = document.createElement('span');
    el2.className = ((i) < (full)) ? 'text-amber-400' : 'text-gray-300';
    appendText(el2, '★');
    el1.appendChild(el2);
  });
  container.appendChild(el1);
}

export function renderProductSlider(container, props) {
  const { products } = props;
  const track = null;
  function scrollByAmount(dir) {
    track?.scrollBy({
      left: dir * 340,
      behavior: 'smooth'
    });
  }
  function formatPrice(price) {
    return `$${price.toFixed(2)}`;
  }
  const el1 = document.createElement('div');
  el1.setAttribute('id', 'products');
  el1.className = `bg-gray-50 py-16`;
  const el2 = document.createElement('div');
  el2.className = `mx-auto max-w-7xl px-6`;
  const el3 = document.createElement('div');
  el3.className = `mb-8 flex items-end justify-between gap-4`;
  const el4 = document.createElement('div');
  const el5 = document.createElement('span');
  el5.className = `text-xs font-semibold uppercase tracking-wider text-indigo-600`;
  appendText(el5, 'Featured');
  el4.appendChild(el5);
  const el6 = document.createElement('h2');
  el6.className = `mt-1 text-3xl font-bold text-gray-900`;
  appendText(el6, 'Trending Products');
  el4.appendChild(el6);
  el3.appendChild(el4);
  const el7 = document.createElement('div');
  el7.className = `flex gap-2`;
  const el8 = document.createElement('button');
  el8.setAttribute('type', 'button');
  el8.addEventListener('click', (e) => dispatchEvent('scrollByAmount', [-1], e));
  el8.setAttribute('aria-label', 'Scroll products left');
  el8.className = `rounded-full border border-gray-300 bg-white px-3.5 py-2 text-gray-600 transition hover:border-indigo-500 hover:text-indigo-600`;
  appendText(el8, '‹');
  el7.appendChild(el8);
  const el9 = document.createElement('button');
  el9.setAttribute('type', 'button');
  el9.addEventListener('click', (e) => dispatchEvent('scrollByAmount', [1], e));
  el9.setAttribute('aria-label', 'Scroll products right');
  el9.className = `rounded-full border border-gray-300 bg-white px-3.5 py-2 text-gray-600 transition hover:border-indigo-500 hover:text-indigo-600`;
  appendText(el9, '›');
  el7.appendChild(el9);
  el3.appendChild(el7);
  el2.appendChild(el3);
  const el10 = document.createElement('div');
  el10.className = `flex gap-6 overflow-x-auto scroll-smooth pb-4`;
  applyInlineStyle(el10, 'scrollbar-width: none;');
  ((products) || ([]) || []).forEach((product) => {
    const el11 = document.createElement('div');
    el11.className = `w-64 shrink-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg`;
    const el12 = document.createElement('div');
    el12.className = `relative h-48 overflow-hidden bg-gray-100`;
    const el13 = document.createElement('img');
    el13.setAttribute('src', product.thumbnail);
    el13.setAttribute('alt', product.title);
    el13.className = `h-full w-full object-cover`;
    el12.appendChild(el13);
    if ((product.discountPercentage) > (0)) {
      const el14 = document.createElement('span');
      el14.className = `absolute left-3 top-3 rounded-full bg-rose-600 px-2.5 py-1 text-xs font-semibold text-white`;
      appendText(el14, '-');
      appendText(el14, Math.round(product.discountPercentage));
      appendText(el14, '%');
      el12.appendChild(el14);
    } else {
      appendText(el12, null);
    }
    el11.appendChild(el12);
    const el15 = document.createElement('div');
    el15.className = `p-4`;
    const el16 = document.createElement('p');
    el16.className = `text-xs font-medium uppercase tracking-wide text-gray-400`;
    appendText(el16, product.category);
    el15.appendChild(el16);
    const el17 = document.createElement('h3');
    el17.setAttribute('title', product.title);
    el17.className = `mt-1 truncate font-semibold text-gray-900`;
    appendText(el17, product.title);
    el15.appendChild(el17);
    const el18 = document.createElement('div');
    el18.className = `mt-2 flex items-center gap-2`;
    renderStars(el18, { ...props, rating: product.rating });
    const el19 = document.createElement('span');
    el19.className = `text-xs text-gray-500`;
    appendText(el19, '(');
    appendText(el19, product.rating.toFixed(1));
    appendText(el19, ')');
    el18.appendChild(el19);
    el15.appendChild(el18);
    const el20 = document.createElement('div');
    el20.className = `mt-3 flex items-center justify-between`;
    const el21 = document.createElement('span');
    el21.className = `text-lg font-bold text-indigo-600`;
    appendText(el21, formatPrice(product.price));
    el20.appendChild(el21);
    const el22 = document.createElement('button');
    el22.setAttribute('type', 'button');
    el22.className = `rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-indigo-700`;
    appendText(el22, 'Add to Cart');
    el20.appendChild(el22);
    el15.appendChild(el20);
    el11.appendChild(el15);
    el10.appendChild(el11);
  });
  el2.appendChild(el10);
  el1.appendChild(el2);
  container.appendChild(el1);
}

export function renderReviews(container, props) {
  const { reviews } = props;
  const shown = reviews.slice(0, 9);
  const avatarColors = ['bg-indigo-500', 'bg-emerald-500', 'bg-amber-500', 'bg-rose-500', 'bg-sky-500', 'bg-violet-500'];
  function initials(name) {
    return name.split(' ').map(part => part[0]).join('').toUpperCase().slice(0, 2);
  }
  function avatarColor(name) {
    let hash = 0;
    for (const char of name) hash = (hash * 31 + char.charCodeAt(0)) % 997;
    return avatarColors[hash % avatarColors.length];
  }
  function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }
  const el1 = document.createElement('div');
  el1.setAttribute('id', 'reviews');
  el1.className = `bg-white py-16`;
  const el2 = document.createElement('div');
  el2.className = `mx-auto max-w-7xl px-6`;
  const el3 = document.createElement('div');
  el3.className = `mb-10 text-center`;
  const el4 = document.createElement('span');
  el4.className = `text-xs font-semibold uppercase tracking-wider text-indigo-600`;
  appendText(el4, 'Customer Voices');
  el3.appendChild(el4);
  const el5 = document.createElement('h2');
  el5.className = `mt-1 text-3xl font-bold text-gray-900`;
  appendText(el5, 'What our users say');
  el3.appendChild(el5);
  el2.appendChild(el3);
  if ((shown.length) === (0)) {
    const el6 = document.createElement('p');
    el6.className = `text-center text-gray-500`;
    appendText(el6, 'No reviews yet. Check back soon.');
    el2.appendChild(el6);
  } else {
    const el7 = document.createElement('div');
    el7.className = `grid gap-6 md:grid-cols-2 lg:grid-cols-3`;
    ((shown) || ([]) || []).forEach((review) => {
      const el8 = document.createElement('figure');
      el8.className = `flex flex-col gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-5`;
      renderStars(el8, { ...props, rating: review.rating });
      const el9 = document.createElement('blockquote');
      el9.className = `text-sm leading-relaxed text-gray-700`;
      appendText(el9, '“');
      appendText(el9, review.comment);
      appendText(el9, '”');
      el8.appendChild(el9);
      const el10 = document.createElement('figcaption');
      el10.className = `mt-auto flex items-center gap-3 pt-2`;
      const el11 = document.createElement('span');
      el11.className = `grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold text-white ${avatarColor(review.reviewerName)}`;
      appendText(el11, initials(review.reviewerName));
      el10.appendChild(el11);
      const el12 = document.createElement('div');
      const el13 = document.createElement('p');
      el13.className = `text-sm font-semibold text-gray-900`;
      appendText(el13, review.reviewerName);
      el12.appendChild(el13);
      const el14 = document.createElement('p');
      el14.className = `text-xs text-gray-500`;
      appendText(el14, formatDate(review.date));
      el12.appendChild(el14);
      el10.appendChild(el12);
      el8.appendChild(el10);
      el7.appendChild(el8);
    });
    el2.appendChild(el7);
  }
  el1.appendChild(el2);
  container.appendChild(el1);
}

export function renderHome(container, props) {
  const { data, loading, error } = props;
  const reviews = [];
  renderHeader(container, { ...props });
  const el1 = document.createElement('div');
  if (loading) {
    const el2 = document.createElement('div');
    el2.className = `flex flex-col items-center gap-4 py-32`;
    const el3 = document.createElement('div');
    el3.className = `h-10 w-10 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600`;
    el2.appendChild(el3);
    const el4 = document.createElement('p');
    el4.className = `text-sm text-gray-500`;
    appendText(el4, 'Loading dashboard...');
    el2.appendChild(el4);
    el1.appendChild(el2);
  } else {
    if (error) {
      const el5 = document.createElement('div');
      el5.className = `mx-auto max-w-7xl px-6 py-16`;
      const el6 = document.createElement('p');
      el6.className = `rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600`;
      appendText(el6, error);
      el5.appendChild(el6);
      el1.appendChild(el5);
    } else {
      renderHeroBanner(el1, { ...props, heroImage: (data[0]?.images?.[0]) ?? ('https://picsum.photos/seed/shopdash/1600/800') });
        renderProductSlider(el1, { ...props, products: data });
        renderReviews(el1, { ...props, reviews: reviews });
      }
    }
    container.appendChild(el1);
    renderFooter(container, { ...props });
}
