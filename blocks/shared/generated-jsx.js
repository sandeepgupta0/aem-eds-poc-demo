/**
 * Generated EDS vanilla-JS shared module: generic DOM helpers +
 * JSX-transformed render functions for every migrated component.
 * Reused by parent and child blocks so behaviour stays identical.
 */

const UNITLESS = new Set(["animationIterationCount", "aspectRatio", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridRow", "gridRowEnd", "gridRowSpan", "gridRowStart", "gridColumn", "gridColumnEnd", "gridColumnSpan", "gridColumnStart", "fontWeight", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fillOpacity", "floodOpacity", "stopOpacity", "strokeDasharray", "strokeDashoffset", "strokeMiterlimit", "strokeOpacity", "strokeWidth"]);

let _defaultCurrency = null;

export function setDefaultCurrency(currency) {
  _defaultCurrency = currency || null;
}

export function formatPrice(value, currency) {
  if (value == null) return '';
  const n = Number(value);
  if (!Number.isFinite(n)) return String(value);
  return (currency || _defaultCurrency || '') + n.toFixed(2);
}

export function applyInlineStyle(el, styles) {
  if (!styles || typeof styles !== 'object') return;
  for (const [k, v] of Object.entries(styles)) {
    if (v == null) continue;
    if (typeof v === 'number') el.style[k] = UNITLESS.has(k) ? v : v + 'px';
    else el.style[k] = v;
  }
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

export function renderProductListing(container, props) {
  const { data, loading, error, retry, empty, currency, onProductClick } = props;

    if (loading) {
    const el1 = document.createElement("div");
    applyInlineStyle(el1, { padding: "40px", textAlign: "center", width: "70%" });
    const el2 = document.createElement("div");
    el2.className = "spinner";
    el1.appendChild(el2);
    const el3 = document.createElement("p");
    appendText(el3, "Loading products...");
    el1.appendChild(el3);
    container.appendChild(el1);
    return container;
    }
    if (error) {
    const el4 = document.createElement("div");
    applyInlineStyle(el4, { padding: "40px", textAlign: "center", width: "70%" });
    const el5 = document.createElement("p");
    applyInlineStyle(el5, { color: "red" });
    appendText(el5, "Error:");
    appendText(el5, error);
    el4.appendChild(el5);
    const el6 = document.createElement("button");
    el6.addEventListener("click", (e) => { if (typeof retry === 'function') retry(e); });
    applyInlineStyle(el6, { padding: "8px 16px", borderRadius: "6px", border: "1px solid #ccc", cursor: "pointer", marginTop: "8px" });
    appendText(el6, "Retry");
    el4.appendChild(el6);
    container.appendChild(el4);
    return container;
    }
    const products = (Array.isArray(data) ? data : data?.products) || ([]);
    if (!products.length) {
    appendText(container, "No Product Available");
    return container;
    }
    const el7 = document.createElement("div");
    applyInlineStyle(el7, { display: "flex", flexWrap: "wrap", gap: "16px", padding: "20px", flex: 1 });
    for (const product of (products || [])) {
    renderProductCard(el7, { product: product, onClick: (e) => dispatchEvent("onProductClick", [product.id]) });
    }
    container.appendChild(el7);
}

export function renderProductCard(container, props) {
  const { data, loading, error, retry, empty, currency, product, onClick } = props;

    const el1 = document.createElement("div");
    el1.addEventListener("click", (e) => { if (typeof onClick === 'function') onClick(e); });
    applyInlineStyle(el1, { padding: "10px", border: "1px solid #E2E2E2", borderRadius: "10px", cursor: "pointer", flex: "1 1 200px", maxWidth: "300px" });
    const el2 = document.createElement("div");
    appendText(el2, product.title);
    el1.appendChild(el2);
    const el3 = document.createElement("p");
    applyInlineStyle(el3, { margin: "0 0 10px", fontSize: "18px", fontWeight: 700 });
    appendText(el3, formatPrice(product.price));
    el1.appendChild(el3);
    const el4 = document.createElement("div");
    applyInlineStyle(el4, { display: "flex", gap: "6px", flexWrap: "wrap" });
    renderBadges(el4, { children: product.category });
    if ((product.stock) > (0)) {
    renderBadges(el4, { variant: "success", children: "In Stock" });
    } else {
    renderBadges(el4, { variant: "danger", children: "Out of Stock" });
    }
    el1.appendChild(el4);
    if ((product.stock) > (0)) {
    const el5 = document.createElement("button");
    el5.addEventListener("click", (e) => {
        e.stopPropagation();
        dispatchEvent("addToCart", [product], e);
      });
    applyInlineStyle(el5, { marginTop: "10px", padding: "6px 14px", borderRadius: "6px", border: "1px solid #1E2761", background: "#1E2761", color: "#fff", cursor: "pointer", fontSize: "13px", fontWeight: 600 });
    appendText(el5, "Add to Cart");
    el1.appendChild(el5);
    }
    container.appendChild(el1);
}

export function renderBadges(container, props) {
  const { data, loading, error, retry, empty, currency, children, variant = "default" } = props;

    console.log(children);
    const styles = { default: { background: "#EEF0F8", color: "#1E2761" }, success: { background: "#E1F5EE", color: "#085041" }, danger: { background: "#FAECE7", color: "#712B13" } };
    const el1 = document.createElement("span");
    applyInlineStyle(el1, { ...styles[variant], padding: "2px 8px", borderRadius: "6px", fontSize: "12px", fontWeight: 600 });
    appendText(el1, children);
    container.appendChild(el1);
}
