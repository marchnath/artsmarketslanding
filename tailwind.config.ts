import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		colors: {
			customHeaderFont: "#0C1227",
			customBlackOne: "#272828",
			customBlackThree: "#434650",
			customBlackFour: "#030A0B",
			customBlackFive: "#2B334E",
			customBlackSix: "#191C30",
			customGrey: "#E8E8E9",
			customGreyTwo: "#F6F6F6",
			customGreyThree: "#939393",
			customGreyFour: "#FAFAFB",
			customGreyFive: "#F6F6F6",
			customGreySix: "#E7E7E7",
			customGreySeven: "#707070",
			customGreyEight: "#373737",
			customGreyNine: "#A3A3A3",
			customBlue: "#182654",
			customBlueTwo: "#001240",
			customBlueThree: "#060C22",
			customBlueFon: "#0F2777",
			customBlueFour: "#041652",
			customBlueFive: "#23293F",
			customRedText: "#851000",
			customOrange: "#DC4016",
			customOrangeTwo: "#FF5E24",
			customOrangeThree: "#AF2600",
			customOrangeFour: "#FFCEBD",
			customOrangeFive: "#851000",
			customOrangeSix: "#F15C27",
			customOrangeSeven: "#F36A36",
			customOrangeEight: "#F36934",
			customOrangeNine:  "#EF8A66",
			customGreyOne: "#F3F5FC",
			customWhiteOne: "#FDFDFF",
			customGreyTen: "#F4F4F4",
			customGreyEleven: "#524D49",
			customGreyTwelve: "#E0E0E0",
			customGreyThirteen: "#EBEBEB",
			customGreyFourteen: "#1B1F3B",
			customGreyFifteen: "#C1C1C1",
			customBlueSix: "#2F4DAE",
			customBlueSeven: "#F5F8FF",
			customGreenOne: "#05A528",
			customGreenTwo: "#E3FEE9",
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
