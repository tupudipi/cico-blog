/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  theme: {
    extend: {
      boxShadow: {
        'blue': '0 4px 14px 0 rgba(0, 118, 255, 0.39)',
        'red': '0 4px 14px 0 rgba(255, 0, 0, 0.39)',
        'green': '0 4px 14px 0 rgba(0, 255, 0, 0.39)',
        'yellow': '0 4px 14px 0 rgba(255, 255, 0, 0.39)',
        'purple': '0 4px 14px 0 rgba(128, 0, 128, 0.39)',
        'pink': '0 4px 14px 0 rgba(255, 105, 180, 0.39)',
      }
    }
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [],
};
