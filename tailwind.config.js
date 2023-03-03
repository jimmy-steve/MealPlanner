const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
];

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    //Because we made a dynamic class with the label we need to add those clases
    // to the safe list so the purge does not remove that
    safelist: [
      'navbar', 'navbar-brand', 'navbar-nav', 'nav-link', 'nav-item', 'nav--title', 'navbar-collapse', 'collapse', 'navbar-toggler', 'navbar-toggler-icon', 'd-flex', 'align-items-center', 'hidden-arrow', 'rounded-circle', 'dropdown', 'dropdown-toggle', 'dropdown-menu', 'dropdown-menu-end', 'dropdown-item', 'btn', 'btn-danger', 'text-reset', 'me-3', 'text-light', 'bg-indigo-500', 'bg-indigo-200', 'text-indigo-400', 'bg-gray-500', 'bg-gray-200', 'text-gray-400', 'bg-green-500', 'bg-green-200', 'text-green-400', 'bg-blue-500', 'bg-blue-200', 'text-blue-400', 'bg-red-500', 'bg-red-200', 'text-red-400', 'bg-purple-500', 'bg-purple-200', 'text-purple-400', 'bg-indigo-500', 'bg-indigo-200', 'text-indigo-400', 'bg-gray-500', 'bg-gray-200', 'text-gray-400', 'bg-green-500', 'bg-green-200', 'text-green-400', 'bg-blue-500', 'bg-blue-200', 'text-blue-400', 'bg-red-500', 'bg-red-200', 'text-red-400', 'bg-purple-500', 'bg-purple-200', 'text-purple-400', 'bg-indigo-500', 'bg-indigo-200', 'text-indigo-400', 'bg-gray-500', 'bg-gray-200', 'text-gray-400', 'bg-green-500', 'bg-green-200', 'text-green-400', 'bg-blue-500', 'bg-blue-200', 'text-blue-400', 'bg-red-500', 'bg-red-200', 'text-red-400', 'bg-purple-500', 'bg-purple-200', 'text-purple-400', 'bg-indigo-500', 'bg-indigo-200', 'text-indigo-400', 'bg-gray-500', 'bg-gray-200', 'text-gray-400', 'bg-green-500', 'bg-green-200', 'text-green-400', 'bg-blue-500', 'bg-blue-200', 'text-blue-400', 
      ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
      ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
      ...labelsClasses.map((lbl) => `text-${lbl}-400`)
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"]
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
