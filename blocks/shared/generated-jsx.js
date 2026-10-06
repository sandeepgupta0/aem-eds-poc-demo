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

export function renderProduct_list(container, props) {
  const { loading, error, form, editingId } = props;
  function _ngRouteHelper(parts) {
    return '/' + parts.map((s) => String(s == null ? '' : s).replace(/^\/+/, '')).join('/');
  }
  const all = (Array.isArray(props.data) ? props.data : []);
  const categories = ['Electronics', 'Clothing', 'Books', 'Home & Kitchen', 'Sports', 'Toys', 'Beauty', 'Other'];
  const count = () => all.length;
  const totalValue = () => all.reduce((sum, p) => (sum) + ((p.price) * (p.stock)), 0);
  const lowStockCount = () => all.filter((p) => (p.stock) < (10)).length;
  const filtered = () => {
    const q = ((form.search) ?? ('')).trim().toLowerCase();
    const cat = (form.category) ?? ('');
    let list = all;
    if (cat) {
      list = list.filter((p) => (p.category) === (cat));
    }
    if (q) {
      list = list.filter((p) => ((p.name?.toLowerCase().includes(q)) || (p.description?.toLowerCase().includes(q))) || (p.id?.toLowerCase().includes(q)));
    }
    const sort = (form.sort) ?? ('');
    const sorted = [...list];
    if (((form.sort) ?? ('')) === ('name')) {
      sorted.sort((a, b) => a.name?.localeCompare(b.name));
    } else {
      if (((form.sort) ?? ('')) === ('price-asc')) {
        sorted.sort((a, b) => (a.price) - (b.price));
      } else {
        if (((form.sort) ?? ('')) === ('price-desc')) {
          sorted.sort((a, b) => (b.price) - (a.price));
        } else {
          if (((form.sort) ?? ('')) === ('stock')) {
            sorted.sort((a, b) => (a.stock) - (b.stock));
          } else {
            sorted.sort((a, b) => b.createdAt?.localeCompare(a.createdAt));
          }
        }
      }
    }
    return sorted;
  };
  const el1 = document.createElement('div');
  el1.className = 'page';
  const el2 = document.createElement('div');
  el2.className = 'stats';
  const el3 = document.createElement('div');
  el3.className = 'stat';
  const el4 = document.createElement('span');
  el4.className = 'stat-label';
  appendText(el4, 'Products');
  el3.appendChild(el4);
  const el5 = document.createElement('span');
  el5.className = 'stat-value';
  appendText(el5, count());
  el3.appendChild(el5);
  el2.appendChild(el3);
  const el6 = document.createElement('div');
  el6.className = 'stat';
  const el7 = document.createElement('span');
  el7.className = 'stat-label';
  appendText(el7, 'Inventory value');
  el6.appendChild(el7);
  const el8 = document.createElement('span');
  el8.className = 'stat-value';
  appendText(el8, '$');
  appendText(el8, Number(totalValue()).toFixed(2));
  el6.appendChild(el8);
  el2.appendChild(el6);
  const el9 = document.createElement('div');
  el9.className = ('stat') + (((lowStockCount()) > (0)) ? ' warn' : '');
  const el10 = document.createElement('span');
  el10.className = 'stat-label';
  appendText(el10, 'Low stock (< 10)');
  el9.appendChild(el10);
  const el11 = document.createElement('span');
  el11.className = 'stat-value';
  appendText(el11, lowStockCount());
  el9.appendChild(el11);
  el2.appendChild(el9);
  el1.appendChild(el2);
  const el12 = document.createElement('div');
  el12.className = 'toolbar';
  const el13 = document.createElement('div');
  el13.className = 'filters';
  const el14 = document.createElement('input');
  el14.className = 'input search';
  el14.setAttribute('value', (((form.search) ?? ('')) == (null)) ? '' : (form.search) ?? (''));
  el14.setAttribute('type', 'search');
  el14.setAttribute('placeholder', 'Search name, description or ID…');
  el14.addEventListener('change', (e) => {
    dispatchEvent('updateField', ['search', (e.target) ? e.target.value : e], e);
  });
  el13.appendChild(el14);
  const el15 = document.createElement('select');
  el15.className = 'input';
  el15.setAttribute('value', (((form.category) ?? ('')) == (null)) ? '' : (form.category) ?? (''));
  el15.addEventListener('change', (e) => {
    dispatchEvent('updateField', ['category', (e.target) ? e.target.value : e], e);
  });
  const el16 = document.createElement('option');
  el16.setAttribute('value', '');
  appendText(el16, 'All categories');
  el15.appendChild(el16);
  (categories || []).forEach((c) => {
    const el17 = document.createElement('option');
    el17.setAttribute('value', ((c) == (null)) ? '' : c);
    appendText(el17, c);
    el15.appendChild(el17);
  });
  el13.appendChild(el15);
  const el18 = document.createElement('select');
  el18.className = 'input';
  el18.setAttribute('value', (((form.sort) ?? ('')) == (null)) ? '' : (form.sort) ?? (''));
  el18.addEventListener('change', (e) => {
    dispatchEvent('updateField', ['sort', (e.target) ? e.target.value : e], e);
  });
  const el19 = document.createElement('option');
  el19.setAttribute('value', 'newest');
  appendText(el19, 'Newest first');
  el18.appendChild(el19);
  const el20 = document.createElement('option');
  el20.setAttribute('value', 'name');
  appendText(el20, 'Name A–Z');
  el18.appendChild(el20);
  const el21 = document.createElement('option');
  el21.setAttribute('value', 'price-asc');
  appendText(el21, 'Price low → high');
  el18.appendChild(el21);
  const el22 = document.createElement('option');
  el22.setAttribute('value', 'price-desc');
  appendText(el22, 'Price high → low');
  el18.appendChild(el22);
  const el23 = document.createElement('option');
  el23.setAttribute('value', 'stock');
  appendText(el23, 'Lowest stock');
  el18.appendChild(el23);
  el13.appendChild(el18);
  const el24 = document.createElement('button');
  el24.className = 'btn ghost';
  el24.addEventListener('click', (e) => {
    dispatchEvent('updateField', ['search', ''], e);
    dispatchEvent('updateField', ['category', ''], e);
    dispatchEvent('updateField', ['sort', 'newest'], e);
  });
  appendText(el24, 'Clear');
  el13.appendChild(el24);
  el12.appendChild(el13);
  const el25 = document.createElement('div');
  el25.className = 'actions';
  const el26 = document.createElement('button');
  el26.className = 'btn ghost';
  el26.setAttribute('title', 'Refetch from API');
  el26.addEventListener('click', (e) => {
    props.retry();
  });
  appendText(el26, '↻ Refresh');
  el25.appendChild(el26);
  const el27 = document.createElement('a');
  el27.className = 'btn primary';
  el27.setAttribute('href', '/add');
  appendText(el27, '+ Add product');
  el25.appendChild(el27);
  el12.appendChild(el25);
  el1.appendChild(el12);
  if (loading) {
    const el28 = document.createElement('div');
    el28.className = 'empty';
    const el29 = document.createElement('h2');
    appendText(el29, 'Loading products…');
    el28.appendChild(el29);
    const el30 = document.createElement('p');
    appendText(el30, 'Fetching from the API.');
    el28.appendChild(el30);
    el1.appendChild(el28);
  } else {
    if ((error) && ((filtered().length) === (0))) {
      const el31 = document.createElement('div');
      el31.className = 'empty';
      const el32 = document.createElement('h2');
      appendText(el32, 'Something went wrong');
      el31.appendChild(el32);
      const el33 = document.createElement('p');
      appendText(el33, error);
      el31.appendChild(el33);
      const el34 = document.createElement('button');
      el34.className = 'btn primary';
      el34.addEventListener('click', (e) => {
        props.retry();
      });
      appendText(el34, 'Retry');
      el31.appendChild(el34);
      el1.appendChild(el31);
    } else {
      if ((filtered().length) === (0)) {
        const el35 = document.createElement('div');
        el35.className = 'empty';
        const el36 = document.createElement('h2');
        appendText(el36, 'No products found');
        el35.appendChild(el36);
        const el37 = document.createElement('p');
        appendText(el37, 'Try a different search, or create a new product.');
        el35.appendChild(el37);
        const el38 = document.createElement('a');
        el38.className = 'btn primary';
        el38.setAttribute('href', '/add');
        appendText(el38, 'Add product');
        el35.appendChild(el38);
        el1.appendChild(el35);
      } else {
        const el39 = document.createElement('div');
        el39.className = 'grid';
        (filtered() || []).forEach((p) => {
          const el40 = document.createElement('div');
          el40.className = ('card') + (((p.stock) < (10)) ? ' low' : '');
          const el41 = document.createElement('div');
          el41.className = 'card-head';
          const el42 = document.createElement('span');
          el42.className = 'badge';
          appendText(el42, p.category);
          el41.appendChild(el42);
          if ((p.stock) < (10)) {
            const el43 = document.createElement('span');
            el43.className = 'badge danger';
            appendText(el43, 'Low:');
            appendText(el43, p.stock);
            appendText(el43, 'left');
            el41.appendChild(el43);
          } else {
            const el44 = document.createElement('span');
            el44.className = 'badge ok';
            appendText(el44, 'In stock:');
            appendText(el44, p.stock);
            el41.appendChild(el44);
          }
          el40.appendChild(el41);
          const el45 = document.createElement('h3');
          el45.className = 'card-title';
          el45.addEventListener('click', (e) => {
            window.location.href = _ngRouteHelper(['/view', p.id]);
          });
          appendText(el45, p.name);
          el40.appendChild(el45);
          const el46 = document.createElement('p');
          el46.className = 'card-desc';
          appendText(el46, p.description);
          el40.appendChild(el46);
          const el47 = document.createElement('div');
          el47.className = 'card-price';
          appendText(el47, '$');
          appendText(el47, Number(p.price).toFixed(2));
          el40.appendChild(el47);
          const el48 = document.createElement('div');
          el48.className = 'card-id';
          appendText(el48, p.id);
          el40.appendChild(el48);
          const el49 = document.createElement('div');
          el49.className = 'card-footer';
          const el50 = document.createElement('button');
          el50.className = 'btn small';
          el50.addEventListener('click', (e) => {
            window.location.href = _ngRouteHelper(['/view', p.id]);
          });
          appendText(el50, 'View');
          el49.appendChild(el50);
          const el51 = document.createElement('button');
          el51.className = 'btn small secondary';
          el51.addEventListener('click', (e) => {
            window.location.href = _ngRouteHelper(['/edit', p.id]);
          });
          appendText(el51, 'Edit');
          el49.appendChild(el51);
          if ((editingId) === (p.id)) {
            const el52 = document.createElement('span');
            el52.className = 'confirm';
            const el53 = document.createElement('span');
            appendText(el53, 'Delete?');
            el52.appendChild(el53);
            const el54 = document.createElement('button');
            el54.className = 'btn small danger';
            el54.setAttribute('disabled', (editingId) === (p.id));
            el54.addEventListener('click', (e) => {
              dispatchEvent('handleDelete', [p.id], e);
            });
            if ((editingId) === (p.id)) {
              appendText(el54, 'Deleting…');
            } else {
              appendText(el54, 'Yes');
            }
            el52.appendChild(el54);
            const el55 = document.createElement('button');
            el55.className = 'btn small ghost';
            el55.addEventListener('click', (e) => {
              dispatchEvent('cancelEdit', [], e);
            });
            appendText(el55, 'No');
            el52.appendChild(el55);
            el49.appendChild(el52);
          } else {
            const el56 = document.createElement('button');
            el56.className = 'btn small danger-outline';
            el56.addEventListener('click', (e) => {
              dispatchEvent('startEdit', [{ id: p.id }], e);
            });
            appendText(el56, 'Delete');
            el49.appendChild(el56);
          }
          el40.appendChild(el49);
          el39.appendChild(el40);
        });
        el1.appendChild(el39);
      }
    }
  }
  container.appendChild(el1);
}
