# productlisting

Source component: ProductListing (react)
Source files: /var/folders/4d/vcs_9pns27q909vg49074y3c0000gp/T/eds-extract-f251f7d4-b947-4c86-a40f-b0eee1dc0dd1/my-react-app/src/components/ProductListing/ProductListing.js
Migration status: **review required**

> Note: the block folder is `productlisting` (no dash) so its JS/CSS are loaded
> for the authored `Productlisting` block. The authoring definition id remains
> `product-listing`.

## Files

- `productlisting.js` — EDS block decorator.
- `productlisting.css` — scoped block styles.
- `_productlisting.json` — Universal Editor definition and model.

## Authoring fields

| Field | Type | Default |
|---|---|---|
| text | text | Loading products... |
| text-1 | text | Error: |
| text-2 | text | Retry |
| text-3 | text | No Product Available |
| repeatable | repeatable |  |

## API dependencies

- `GET` "https://dummyjson.com/products?limit=10&skip=10": author-time; The dependency uses a standard 'fetch' operation triggered at mount time. Since it fetches public data from dummyjson.com and does not require user interaction or state changes to execute, it can be safely authored statically (pre-rendered/mounted without authentication).

## Dependencies and review items

- Library `../../hooks/useFetch`: flag-for-review — Unknown library category - requires human classification
- Library `../ProductCard/ProductCard`: flag-for-review — Unknown library category - requires human classification
- Local module `useFetch` from `../../hooks/useFetch`: Local module implementation was not resolved into the generated EDS destination.

## Child component classification (architectural review required)

- **ProductCard**: INLINE — Used inside a repeatable list or simple presentational component — folded into parent render logic.

## Composed child modules

No child component modules generated.

## Installation

Copy this folder to `blocks/productlisting/` in the EDS repository, then run that repository's JSON build, lint, and test commands. Review every item above before enabling API or custom runtime behavior.
