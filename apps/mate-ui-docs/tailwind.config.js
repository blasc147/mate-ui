const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { workspaceRoot } = require('@nrwl/devkit');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require(join(workspaceRoot, 'tailwind-preset.js'))],
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
