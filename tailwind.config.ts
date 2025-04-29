
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Neon color scheme
				neon: {
					pink: '#ff00ff',
					blue: '#00ffff',
					green: '#39ff14',
					purple: '#bf00ff',
					yellow: '#ffff00',
				},
				cyber: {
					dark: '#0D0E18',
					darker: '#060714',
					black: '#000000',
					navy: '#0c1021',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'neon-pulse': {
					'0%, 100%': { 
						textShadow: '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #ff00ff, 0 0 80px #ff00ff, 0 0 90px #ff00ff, 0 0 100px #ff00ff, 0 0 150px #ff00ff',
					},
					'50%': {
						textShadow: '0 0 4px #fff, 0 0 10px #fff, 0 0 18px #fff, 0 0 38px #ff00ff, 0 0 73px #ff00ff, 0 0 80px #ff00ff, 0 0 94px #ff00ff, 0 0 140px #ff00ff',
					}
				},
				'blue-pulse': {
					'0%, 100%': { 
						textShadow: '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #00ffff, 0 0 80px #00ffff, 0 0 90px #00ffff, 0 0 100px #00ffff, 0 0 150px #00ffff',
					},
					'50%': {
						textShadow: '0 0 4px #fff, 0 0 10px #fff, 0 0 18px #fff, 0 0 38px #00ffff, 0 0 73px #00ffff, 0 0 80px #00ffff, 0 0 94px #00ffff, 0 0 140px #00ffff',
					}
				},
				'green-pulse': {
					'0%, 100%': { 
						textShadow: '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #39ff14, 0 0 80px #39ff14, 0 0 90px #39ff14, 0 0 100px #39ff14, 0 0 150px #39ff14',
					},
					'50%': {
						textShadow: '0 0 4px #fff, 0 0 10px #fff, 0 0 18px #fff, 0 0 38px #39ff14, 0 0 73px #39ff14, 0 0 80px #39ff14, 0 0 94px #39ff14, 0 0 140px #39ff14',
					}
				},
				'border-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff00ff, 0 0 20px #ff00ff, 0 0 25px #ff00ff, 0 0 30px #ff00ff'
					},
					'50%': { 
						boxShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00ffff, 0 0 20px #00ffff, 0 0 25px #00ffff, 0 0 30px #00ffff'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)',
					},
					'50%': {
						transform: 'translateY(-10px)',
					},
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'neon-pulse': 'neon-pulse 2.5s ease-in-out infinite alternate',
				'blue-pulse': 'blue-pulse 2.5s ease-in-out infinite alternate',
				'green-pulse': 'green-pulse 2.5s ease-in-out infinite alternate',
				'border-glow': 'border-glow 2s ease-in-out infinite alternate',
				'float': 'float 6s ease-in-out infinite',
			},
			fontFamily: {
				'cyber': ['"Orbitron"', 'sans-serif'],
				'pixel': ['"Press Start 2P"', 'cursive'],
			},
			backgroundImage: {
				'cyber-grid': "linear-gradient(rgba(16, 15, 30, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 15, 30, 0.8) 1px, transparent 1px)",
				'radial-glow': "radial-gradient(circle, rgba(35, 18, 61, 0.8) 0%, rgba(13, 14, 24, 1) 70%)",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
