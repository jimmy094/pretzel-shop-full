import js from '@eslint/js';
import globals from 'globals';

export default [
  { ignores: ['node_modules'] },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: { ...globals.node },
    },
    rules: {
      ...js.configs.recommended.rules,
      // Express error handlers need 4 args (err, req, res, next) even if `next`
      // is unused, so don't flag unused function arguments.
      'no-unused-vars': ['error', { args: 'none', caughtErrors: 'none' }],
      // Error-cause chaining is a nice-to-have, not required for this course.
      'preserve-caught-error': 'off',
    },
  },
];
