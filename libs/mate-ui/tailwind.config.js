const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { workspaceRoot } = require('nx/src/devkit-exports');
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
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
