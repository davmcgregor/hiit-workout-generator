const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
};
