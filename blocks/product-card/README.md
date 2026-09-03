# product-card

Source component: ProductCard (react)
Source files: /var/folders/4d/vcs_9pns27q909vg49074y3c0000gp/T/eds-extract-e7c237f6-c170-4507-a717-d172c9caf87d/my-react-app/src/components/ProductCard/ProductCard.js
Migration status: **review required**

## Files

- `product-card.js` — EDS block decorator.
- `product-card.css` — scoped block styles.
- `_product-card.json` — Universal Editor definition and model.

## Authoring fields

| Field | Type | Default |
|---|---|---|
| text | text |  |
| text-1 | text |  |

## API dependencies

No API dependencies detected.

## Dependencies and review items

- Library `../Badges/Badges`: flag-for-review — Unknown library category - requires human classification
- Library `../../context/CartContext`: flag-for-review — Unknown library category - requires human classification
- Library `../../utils/formatCurrency`: flag-for-review — Unknown library category - requires human classification
- Local module `useCart` from `../../context/CartContext`: Local module implementation was not resolved into the generated EDS destination.
- Local module `formatCurrency` from `../../utils/formatCurrency`: Local module implementation was not resolved into the generated EDS destination.
- Behavior `useCart`: manual review required.

## Installation

Copy this folder to `blocks/product-card/` in the EDS repository, then run that repository's JSON build, lint, and test commands. Review every item above before enabling API or custom runtime behavior.
