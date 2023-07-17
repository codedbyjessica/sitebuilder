const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
	screens: {
		sm: "375px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
	},
	fontSize: {
		xs: "12px",
		sm: "14px",
		base: "16px",
		lg: "20px",
		xl: "24px",
		"2xl": "26px",
		"3xl": "40px",
	},
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [

  ],
}


// /** @type {import('tailwindcss').Config} */
// module.exports = {
// 	content: [
// 		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
// 		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
// 		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
// 	],
// 	theme: {
// 		screens: {
// 			sm: "375px",
// 			md: "768px",
// 			lg: "1024px",
// 			xl: "1280px",
// 		},
// 		fontSize: {
// 			xs: "12px",
// 			sm: "14px",
// 			base: "16px",
// 			lg: "20px",
// 			xl: "24px",
// 			"2xl": "26px",
// 			"3xl": "40px",
// 		},
// 		extend: {
// 		backgroundImage: {
// 			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
// 			'gradient-conic':
// 			'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
// 		},
// 		},
// 	},
// 	plugins: [
// 		plugin(function({ addBase }) {
// 			addBase({
// 				h1: {
// 					fontSize: theme("fontSize.3xl"),
// 					"@media (min-width: 768px)": {
// 						fontSize: theme("fontSize.xl"),
// 					},
// 				},
// 			})
// 		}),
// 	]

// }
