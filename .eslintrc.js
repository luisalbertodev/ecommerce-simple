const RULES = {
  OFF: "off",
  WARN: "warn",
  ERROR: "error",
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": RULES.OFF,
    "react/react-in-jsx-scope": RULES.OFF,
    "import/prefer-default-export": RULES.OFF,
    "import/no-unresolved": RULES.OFF,
    "arrow-body-style": RULES.OFF,
    "no-unused-expressions": RULES.OFF,
    "react/jsx-wrap-multilines": RULES.OFF,
    "jsx-a11y/anchor-is-valid": RULES.OFF,
    "jsx-a11y/label-has-associated-control": RULES.OFF,
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
    "react/jsx-props-no-spreading": [
      1,
      { html: "ignore", exceptions: ["Component"] },
    ],
  },
};
