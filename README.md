# wynn-api-types
TypeScript types for the Wynncraft API.
<br>
These types were generated using [OpenAPI TypeScript](https://openapi-ts.dev) from the
[Wynncraft API OpenAPI Schema](https://docs.wynncraft.com/openapi.json).

# Building
Note: Steps 1 and 2 are needed only during initial setup and when the Wynncraft API changes.

1. Run `npm download-spec` to download the OpenAPI spec from the Wynncraft API. It will be saved to `./schemas/original.json`.
2. Run `npm merge` to merge the overrides in `./schema/overrides.json` into the original spec.
3. Run `npm build` to generate the TypeScript type definitions.