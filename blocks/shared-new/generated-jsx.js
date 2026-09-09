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

export function renderApp(container, props) {
  const { data, loading, error, retry, empty, currency, editingId, editForm, createForm } = props;

    const app = ((props.app) == (null)) ? null : props.app;
    const handleCreate = ((props.handleCreate) == (null)) ? null : props.handleCreate;
    const loader = ((props.loader) == (null)) ? null : props.loader;
    const text = ((props.text) == (null)) ? null : props.text;
    const handleUpdate = ((props.handleUpdate) == (null)) ? null : props.handleUpdate;
    const handleDelete = ((props.handleDelete) == (null)) ? null : props.handleDelete;
    const el1 = document.createElement("div");
    el1.className = "app";
    renderHeader(el1, { onCreate: handleCreate, form: createForm });
    if (error) {
    const el2 = document.createElement("p");
    el2.className = "error";
    appendText(el2, error);
    el1.appendChild(el2);
    } else {
    appendText(el1, null);
    }
    if (loading) {
    const el3 = document.createElement("div");
    el3.className = "loader-container";
    const el4 = document.createElement("div");
    el4.className = "loader";
    el3.appendChild(el4);
    const el5 = document.createElement("p");
    el5.className = "loading-text";
    appendText(el5, "Loading users...");
    el3.appendChild(el5);
    el1.appendChild(el3);
    } else {
    appendText(el1, null);
    }
    if (!loading) {
    renderUserTable(el1, { users: data, onUpdate: handleUpdate, onDelete: handleDelete, editingId, editForm });
    } else {
    appendText(el1, null);
    }
    container.appendChild(el1);
}

export function renderHeader(container, props) {
  const { data, loading, error, retry, empty, currency, updateField } = props;

    const header = ((props.header) == (null)) ? null : props.header;
    const create = ((props.create) == (null)) ? null : props.create;
    const form = ((props.form) == (null)) ? {  } : props.form;
    const handleSubmit = ((props.handleSubmit) == (null)) ? null : props.handleSubmit;
    const row = ((props.row) == (null)) ? null : props.row;
    const username = ((props.username) == (null)) ? {  } : props.username;
    const text = ((props.text) == (null)) ? null : props.text;
    const Username = ((props.Username) == (null)) ? {  } : props.Username;
    const email = ((props.email) == (null)) ? null : props.email;
    const Email = ((props.Email) == (null)) ? null : props.Email;
    const password = ((props.password) == (null)) ? null : props.password;
    const Password = ((props.Password) == (null)) ? null : props.Password;
    const submit = ((props.submit) == (null)) ? null : props.submit;
    const btn = ((props.btn) == (null)) ? null : props.btn;
    const primary = ((props.primary) == (null)) ? null : props.primary;
    const el1 = document.createElement("header");
    el1.className = "header";
    const el2 = document.createElement("h1");
    appendText(el2, "User Management");
    el1.appendChild(el2);
    const el3 = document.createElement("form");
    el3.className = "create-form";
    el3.addEventListener("submit", (e) => {
        e.preventDefault();
        dispatchEvent("handleSubmit", [], e);
      });
    const el4 = document.createElement("div");
    el4.className = "form-row";
    const el5 = document.createElement("input");
    el5.setAttribute("value", ((form.username) == (null)) ? '' : form.username);
    el5.addEventListener("input", (e) => {
        dispatchEvent("updateField", ["username", (e.target) && (e.target.value)], e);
      });
    el5.setAttribute("type", "text");
    el5.setAttribute("placeholder", "Username");
    el5.setAttribute("required", "required");
    el4.appendChild(el5);
    const el6 = document.createElement("input");
    el6.setAttribute("value", ((form.email) == (null)) ? '' : form.email);
    el6.addEventListener("input", (e) => {
        dispatchEvent("updateField", ["email", (e.target) && (e.target.value)], e);
      });
    el6.setAttribute("type", "email");
    el6.setAttribute("placeholder", "Email");
    el6.setAttribute("required", "required");
    el4.appendChild(el6);
    const el7 = document.createElement("input");
    el7.setAttribute("value", ((form.password) == (null)) ? '' : form.password);
    el7.addEventListener("input", (e) => {
        dispatchEvent("updateField", ["password", (e.target) && (e.target.value)], e);
      });
    el7.setAttribute("type", "password");
    el7.setAttribute("placeholder", "Password");
    el7.setAttribute("required", "required");
    el4.appendChild(el7);
    const el8 = document.createElement("button");
    el8.setAttribute("type", "submit");
    el8.className = "btn btn-primary";
    appendText(el8, "Add User");
    el4.appendChild(el8);
    el3.appendChild(el4);
    el1.appendChild(el3);
    container.appendChild(el1);
}

export function renderUserTable(container, props) {
  const { data, loading, error, retry, empty, currency, updateField } = props;

    const table = ((props.table) == (null)) ? null : props.table;
    const users = ((props.users) == (null)) ? [] : props.users;
    const length = ((props.length) == (null)) ? null : props.length;
    const id = ((props.id) == (null)) ? null : props.id;
    const editingId = ((props.editingId) == (null)) ? null : props.editingId;
    const editForm = ((props.editForm) == (null)) ? {  } : props.editForm;
    const username = ((props.username) == (null)) ? {  } : props.username;
    const text = ((props.text) == (null)) ? null : props.text;
    const inline = ((props.inline) == (null)) ? null : props.inline;
    const input = ((props.input) == (null)) ? null : props.input;
    const email = ((props.email) == (null)) ? null : props.email;
    const password = ((props.password) == (null)) ? null : props.password;
    const actions = ((props.actions) == (null)) ? null : props.actions;
    const btn = ((props.btn) == (null)) ? null : props.btn;
    const save = ((props.save) == (null)) ? null : props.save;
    const saveEdit = ((props.saveEdit) == (null)) ? null : props.saveEdit;
    const cancel = ((props.cancel) == (null)) ? null : props.cancel;
    const cancelEdit = ((props.cancelEdit) == (null)) ? null : props.cancelEdit;
    const edit = ((props.edit) == (null)) ? null : props.edit;
    const startEdit = ((props.startEdit) == (null)) ? null : props.startEdit;
    const danger = ((props.danger) == (null)) ? null : props.danger;
    const handleDelete = ((props.handleDelete) == (null)) ? null : props.handleDelete;
    const el1 = document.createElement("div");
    el1.className = "user-table-container";
    if ((users.length) === (0)) {
    const el2 = document.createElement("div");
    el2.className = "empty-state";
    const el3 = document.createElement("p");
    appendText(el3, "No users found. Add a user above.");
    el2.appendChild(el3);
    el1.appendChild(el2);
    } else {
    appendText(el1, null);
    }
    if (!((users.length) === (0))) {
    const el4 = document.createElement("table");
    el4.className = "user-table";
    const el5 = document.createElement("thead");
    const el6 = document.createElement("tr");
    const el7 = document.createElement("th");
    appendText(el7, "ID");
    el6.appendChild(el7);
    const el8 = document.createElement("th");
    appendText(el8, "Username");
    el6.appendChild(el8);
    const el9 = document.createElement("th");
    appendText(el9, "Email");
    el6.appendChild(el9);
    const el10 = document.createElement("th");
    appendText(el10, "Password");
    el6.appendChild(el10);
    const el11 = document.createElement("th");
    appendText(el11, "Actions");
    el6.appendChild(el11);
    el5.appendChild(el6);
    el4.appendChild(el5);
    const el12 = document.createElement("tbody");
    for (const user of ((users) || ([]) || [])) {
    const el13 = document.createElement("tr");
    const el14 = document.createElement("td");
    appendText(el14, user.id);
    el13.appendChild(el14);
    const el15 = document.createElement("td");
    if ((editingId) === (user.id)) {
    const el16 = document.createElement("input");
    el16.setAttribute("value", ((editForm.username) == (null)) ? '' : editForm.username);
    el16.addEventListener("input", (e) => {
        dispatchEvent("updateField", ["username", (e.target) && (e.target.value)], e);
      });
    el16.setAttribute("type", "text");
    el16.className = "inline-input";
    el15.appendChild(el16);
    } else {
    appendText(el15, null);
    }
    if (!((editingId) === (user.id))) {
    const el17 = document.createElement("span");
    appendText(el17, user.username);
    el15.appendChild(el17);
    } else {
    appendText(el15, null);
    }
    el13.appendChild(el15);
    const el18 = document.createElement("td");
    if ((editingId) === (user.id)) {
    const el19 = document.createElement("input");
    el19.setAttribute("value", ((editForm.email) == (null)) ? '' : editForm.email);
    el19.addEventListener("input", (e) => {
        dispatchEvent("updateField", ["email", (e.target) && (e.target.value)], e);
      });
    el19.setAttribute("type", "email");
    el19.className = "inline-input";
    el18.appendChild(el19);
    } else {
    appendText(el18, null);
    }
    if (!((editingId) === (user.id))) {
    const el20 = document.createElement("span");
    appendText(el20, user.email);
    el18.appendChild(el20);
    } else {
    appendText(el18, null);
    }
    el13.appendChild(el18);
    const el21 = document.createElement("td");
    if ((editingId) === (user.id)) {
    const el22 = document.createElement("input");
    el22.setAttribute("value", ((editForm.password) == (null)) ? '' : editForm.password);
    el22.addEventListener("input", (e) => {
        dispatchEvent("updateField", ["password", (e.target) && (e.target.value)], e);
      });
    el22.setAttribute("type", "password");
    el22.className = "inline-input";
    el21.appendChild(el22);
    } else {
    appendText(el21, null);
    }
    if (!((editingId) === (user.id))) {
    const el23 = document.createElement("span");
    appendText(el23, user.password);
    el21.appendChild(el23);
    } else {
    appendText(el21, null);
    }
    el13.appendChild(el21);
    const el24 = document.createElement("td");
    el24.className = "actions";
    if ((editingId) === (user.id)) {
    const el25 = document.createElement("button");
    el25.className = "btn btn-save";
    el25.addEventListener("click", (e) => dispatchEvent("saveEdit", [user.id], e));
    appendText(el25, "Save");
    el24.appendChild(el25);
    const el26 = document.createElement("button");
    el26.className = "btn btn-cancel";
    el26.addEventListener("click", (e) => dispatchEvent("cancelEdit", [], e));
    appendText(el26, "Cancel");
    el24.appendChild(el26);
    } else {
    appendText(el24, null);
    }
    if (!((editingId) === (user.id))) {
    const el27 = document.createElement("button");
    el27.className = "btn btn-edit";
    el27.addEventListener("click", (e) => dispatchEvent("startEdit", [user], e));
    appendText(el27, "Edit");
    el24.appendChild(el27);
    const el28 = document.createElement("button");
    el28.className = "btn btn-danger";
    el28.addEventListener("click", (e) => dispatchEvent("handleDelete", [user.id], e));
    appendText(el28, "Delete");
    el24.appendChild(el28);
    } else {
    appendText(el24, null);
    }
    el13.appendChild(el24);
    el12.appendChild(el13);
    }
    el4.appendChild(el12);
    el1.appendChild(el4);
    } else {
    appendText(el1, null);
    }
    container.appendChild(el1);
}
