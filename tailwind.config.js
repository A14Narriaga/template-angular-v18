/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        card: "rgba(var(--card))",
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        textPrimary: "rgba(var(--text-primary))",
        textCard: "rgba(var(--text-card))",
        borderColor: "rgba(var(--border))",
        inputColor: "rgba(var(--input))",
        inputTextColor: "rgba(var(--input-text))",
        inputIconColor: "rgba(var(--input-icon))",
        errorColor: "rgba(var(--error))",
      },
    },
  },
  plugins: [],
};
