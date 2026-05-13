// @ts-check

import stylistic from '@stylistic/eslint-plugin';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    stylistic.configs.customize({
        braceStyle: '1tbs',
        indent: 4,
        semi: true,
    }),
    eslint.configs.recommended,
    tseslint.configs.recommended,
    {
        rules: {
            // Disabled due to some un-exported library types and untyped API responses
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
);
