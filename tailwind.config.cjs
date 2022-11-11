module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./public/**/*.html"],
};
