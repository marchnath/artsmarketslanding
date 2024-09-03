import type { Config } from "tailwindcss";

const config: Config = {
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
      colors: {
        customBlueFon: "#0F2777",
        customGreyOne: "#F3F5FC",
        customWhiteOne: "#FDFDFF",
        customBlackFour: "#030A0B",
        customRedText: "#851000",
        customBlue: "#182654",
        customBlueTwo: "#001240",
        customOrangeFour: "#FFCEBD",
        customBlackOne: "#272828",
        customBlueFour: "#041652",
      }
    },
  },
  plugins: [],
};
export default config;
