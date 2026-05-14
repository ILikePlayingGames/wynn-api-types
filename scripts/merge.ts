import { readFile, writeFile } from 'node:fs/promises';
import { deepmerge } from '@fastify/deepmerge';

(async () => {
    const original = JSON.parse(await readFile('schemas/original.json', 'utf8'));
    const overrides = JSON.parse(await readFile('schemas/overrides.json', 'utf8'));
    const mergeFunction = deepmerge();
    const unified = mergeFunction(original, overrides);

    await writeFile('schemas/unified.json', JSON.stringify(unified, null, 4), 'utf8');
})();
