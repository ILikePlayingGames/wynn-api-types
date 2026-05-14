import { writeFile } from 'node:fs/promises';

(async () => {
    const response = await fetch('https://docs.wynncraft.com/openapi.json');

    if (!response.ok) {
        throw Error(`Unexpected response code ${response.status}`);
    }

    const body = await response.json();
    await writeFile('schemas/original.json', JSON.stringify(body, null, 4), 'utf8');
})();
