/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			colors: {
				card: "rgba(var(--card))",
				loginCard: "rgba(var(--login-card))",
				primary: "rgba(var(--primary))",
				secondary: "rgba(var(--secondary))",
				textPrimary: "rgba(var(--text-primary))",
				textCard: "rgba(var(--text-card))",
				textCardSecondary: "rgba(var(--text-card-secondary))",
				borderColor: "rgba(var(--border))",
				inputColor: "rgba(var(--input))",
				inputTextColor: "rgba(var(--input-text))",
				inputIconColor: "rgba(var(--input-icon))",
				errorColor: "rgba(var(--error))"
			}
		}
	},
	plugins: []
}
