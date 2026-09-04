# product-listing

Source component: ProductListing (react)
Source files: /var/folders/4d/vcs_9pns27q909vg49074y3c0000gp/T/eds-extract-4b2fde91-b985-411b-ac66-b7ccab84429b/my-react-app/src/components/ProductListing/ProductListing.js
Migration status: **review required**

## Files

- `product-listing.js` — EDS block decorator.
- `product-listing.css` — scoped block styles.
- `_product-listing.json` — Universal Editor definition and model.

## Authoring fields

| Field | Type | Default |
|---|---|---|
| text | text | Loading products... |
| text-1 | text | Error: |
| text-2 | text | Retry |
| repeatable | repeatable |  |

## API dependencies

- `GET` "https://dummyjson.com/products?limit=10&skip=10": author-time; The dependency uses a standard 'fetch' operation triggered at mount time. Since the URL is public and does not require authentication headers or tokens, it can be fetched statically during the build/authoring phase.

## Dependencies and review items

- Library `../../hooks/useFetch`: flag-for-review — Unknown library category - requires human classification
- Library `../ProductCard/ProductCard`: flag-for-review — Unknown library category - requires human classification
- Local module `useFetch` from `../../hooks/useFetch`: Local module implementation was not resolved into the generated EDS destination.

## Child component classification (architectural review required)

- **ProductCard**: INLINE — Used inside a repeatable list or simple presentational component — folded into parent render logic.

## Composed sub-blocks (generated separately)

No separate-block child components generated.

## Installation

Copy this folder to `blocks/product-listing/` in the EDS repository, then run that repository's JSON build, lint, and test commands. Review every item above before enabling API or custom runtime behavior.
