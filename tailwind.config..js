const {blackA, green, mauve, slate} = require("@radix-ui/colors");
const {transitionDuration, transitionDelay} = require("./XAos");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.vue"],

  theme: {
    extend: {
      transitionDuration: transitionDuration,
      transitionDelay: transitionDelay,
      colors: {
        ...blackA,
        ...green,
        ...mauve,
        ...slate,
      },
      keyframes: {
        hide: {
          from: {opacity: 1},
          to: {opacity: 0},
        },
        slideIn: {
          from: {transform: "translateX(calc(100% + var(--viewport-padding)))"},
          to: {transform: "translateX(0)"},
        },
        swipeOut: {
          from: {transform: "translateX(var(--radix-toast-swipe-end-x))"},
          to: {transform: "translateX(calc(100% + var(--viewport-padding)))"},
        },
      },
      animation: {
        hide: "hide 100ms ease-in",
        slideIn: "slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        swipeOut: "swipeOut 100ms ease-out",
      },
    },
  },
  plugins: [],
};
