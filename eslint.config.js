import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["_site/**", "node_modules/**", "style 3/**"] },
  js.configs.recommended,
  {
    files: ["src/assets/js/**/*.js"],
    languageOptions: { ecmaVersion: 2022, sourceType: "module", globals: globals.browser },
    rules: {
      "no-empty": ["error", { allowEmptyCatch: true }],
      "no-unused-vars": ["error", { caughtErrors: "none" }],
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
    },
  },
  {
    files: ["*.js", "lib/**/*.js", "src/_data/**/*.js"],
    languageOptions: { ecmaVersion: 2022, sourceType: "module", globals: globals.node },
  },
];
