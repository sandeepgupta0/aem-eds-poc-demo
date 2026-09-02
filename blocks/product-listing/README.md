# product-listing

Source component: ProductListing (react)
Source files: /var/folders/4d/vcs_9pns27q909vg49074y3c0000gp/T/eds-extract-ee36055e-c68c-491f-9047-2d17ef4bee1e/my-react-app/src/components/ProductListing/ProductListing.js
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

- `GET` "https://dummyjson.com/products?limit=10&skip=10": author-time; The dependency uses a simple 'fetch (mount)' operation with a public, non-authenticated endpoint ('https://dummyjson.com/products?limit=10&skip=10'). Data fetched at mount time is suitable for static authoring and does not require user interaction or authentication.

## Dependencies and review items

- Library `../../hooks/useFetch`: flag-for-review — Unknown library category - requires human classification
- Library `../ProductCard/ProductCard`: flag-for-review — Unknown library category - requires human classification
- Local module `useFetch` from `../../hooks/useFetch`: Local module implementation was not resolved into the generated EDS destination.

## Installation

Copy this folder to `blocks/product-listing/` in the EDS repository, then run that repository's JSON build, lint, and test commands. Review every item above before enabling API or custom runtime behavior.
