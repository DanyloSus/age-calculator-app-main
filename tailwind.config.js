/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "hsl(259, 100%, 65%)",
        lightred: "hsl(0, 100%, 67%)",

        white: "hsl(0, 0%, 100%)",
        "off-white": "hsl(0, 0%, 94%)",
        "light-grey": "hsl(0, 0%, 86%)",
        "smokey-grey": "hsl(0, 1%, 44%)",
        "off-black": "hsl(0, 0%, 8%)",
      },
      spacing: {
        button: "calc(100% + 160px)",
      },
      screens: { md: { max: "768px" } },
    },
  },
  plugins: [],
};
