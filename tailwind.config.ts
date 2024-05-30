import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['var(--satoshi-font)'],
        intagral_cf: ['var(--integral-cf-font)'],
      },
      colors: {
        judge_gray: '#4F4631',
        stromboli: '#314F4A',
        martinique: '#31344F',
      },
      backgroundImage: {
        'hero-background': 'url(/images/rectangle_hero_image.png)',
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        layout_one: '407px 684px',
      },
      gridAutoColumns: {
        custom_auto_cols: 'minmax(350px, 1fr);',
        custom_auto_cols_xl: 'minmax(407px, 1fr);',
      },
    },
  },
  plugins: [
    plugin(function ({
      matchVariant,
      theme,
    }: {
      matchVariant: any;
      theme: any;
    }) {
      matchVariant(
        'nth',
        (value: any) => {
          return `&:nth-child(${value})`;
        },
        {
          values: {
            DEFAULT: 'n', // Default value for `nth:`
            '2n': '2n', // `nth-2n:utility` will generate `:nth-child(2n)` CSS selector
            '3n': '3n',
            '4n': '4n',
            '5n': '5n',
            //... so on if you need
          },
        }
      );
    }),
  ],
};
export default config;

