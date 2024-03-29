/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            black: "#151515",
            white: "#FFFFFF",
            gray: "#555555",
            lightGray: "#393F45",
            darkGrey: "#1F1F1F",
        },
        fontFamily: {
            inter: ["Inter", "sans-serif"],
        },
        borderRadius: {
            large: "1.3rem",
        },
    },
    plugins: [],
};
