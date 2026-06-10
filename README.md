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

# Usage Example

```ts
import type { paths } from 'wynn-api-types';

// Run a global search for "Imperial"
const response = await fetch('https://api.wynncraft.com/v3/search/Imperial');

if (response.ok) {
    // Cast to the correct response type for the request path to enable type-aware autocomplete
    const searchResults = await response.json() as paths['/search/{query}']['get']['responses']['200']['content']['application/json'];
    // List the matching guilds
    console.log(JSON.stringify(searchResults.guilds, null, 2));
}
```