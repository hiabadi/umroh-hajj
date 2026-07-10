/** @type {import('tailwindcss').Config} */
import flowbitePlugin from "flowbite/plugin";
import typographyPlugin from "@tailwindcss/typography";

export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.tsx",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {},
    },
    plugins: [flowbitePlugin, typographyPlugin],
    darkMode: "class",
};
