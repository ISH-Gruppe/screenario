Hey there, potential contributor! Thanks for being interested in our repo. We set up some rules for coding & committing below.

Also, as a general rule, if you’d like to contribute, it never hurts to contact us or create an issue for what you want to fix first.

# Clean Code

Obviously, we’d like to keep everything organized and clean. Here’s what we agreed to for this codebase:

We...

- use [Prettier](https://prettier.io/) & configure it to use our [.prettierrc](.prettierrc) file.
- prefer readability over brevity
  - LongButClearFunctionNames(OrVariableNames) are better than shrtFns(orVrbls) tbh iykwim
  - a few more lines of code are often better than "elegantly" nesting and chaining as if your life depended on it
  - a simple, blank line does wonders for readability
- use PascalCase for component names & camelCase for both variable and function names
- give each component its own folder & put related CSS in a respective file of the same name
- prefer functional React components over class-based ones – but class components aren’t evil, use them if they make your life easier
- discuss build changes and new libraries before adding them to our local branches
- have fun :)

# Committing

- use `git rebase` instead of `merge` if you want to incorporate new changes in `main` into your branch.
- PRs are merged via merge commits though.
- prefix branch names like this:

- feat/
- fix/
- style/
- build/
- docs/
- refactor/
- adhere to the [ConventionalCommit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines.
  - Proper commit style will be enforced via [commitlint](https://commitlint.js.org/#/./guides-local-setup?id=guides-local-setup). [Rule reference here](https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md).

# Versioning

- adhere to [Semantic Versioning](https://semver.org)
