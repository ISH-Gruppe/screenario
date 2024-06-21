/** @format */

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-case": [0, "never", ["lower-case", "pascal-case", "camel-case"]],
    "body-max-line-length": [0, "always", 120],
    "subject-empty": [0, "never"],
    "body-empty": [0, "never"],
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
