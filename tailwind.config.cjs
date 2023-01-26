/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
        },
        extend: {
            colors: {
                purple: {
                    1000: "rgba(39, 26, 69, 1)",
                },
                white: {
                    10: "#E1E1E6",
                },
            },
        },
    },
    plugins: [],
};
