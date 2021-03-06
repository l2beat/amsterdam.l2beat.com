/** @type import("tailwindcss/tailwind-config").TailwindConfig */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-25%)' },
        },
      },
      backgroundImage: {
        rural: "url('/images/bg-rural.png')",
        canal: "url('/images/bg-canal.png')",
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      mono: ['monospace', 'monospace'],
    },
    colors: {
      brand: '#132170',
      accent: '#EDAA28',
      white: '#F8FCFF',
      pure: '#FFFFFF',
      red: '#c41313',
    },
  },
  plugins: [],
}
