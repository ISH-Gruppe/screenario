/** @format */

Configuration = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-case": [2, "always", "sentence-case"],
    "scope-case": [2, "always", "lower-case"],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "devops",
        "docs",
        "style",
        "refactor",
        "test",
        "revert",
        "chore",
      ],
    ],
  },
};

module.exports = Configuration;
