# Screenario – The Screen for Every Scenario

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[Screenario](https://screenar.io) is an interactive dashboard & tool collection for educators, featuring several handy tools like a timer, a whiteboard and an app for generating interesting ice-breaker questions. It’s commissioned by the [ISH Bochum](https://ish-bochum.de/) and only available in German right now.

Screenario is written in React 18 (the exception being [Digitaler Stuhlkreis](https://github.com/s-gbz/screenario/tree/main/src/components/DigitalerStuhlkreisWrapper), which is an Angular web component) and also available separately at [digitaler-stuhlkreis.de](https://digitaler-stuhlkreis.de).

## Installation

Because of a (hopefully temporary) incompatibility of some libraries with React 18, we need to install our dependencies using --force right now. Same goes for adding new dependencies or uninstalling packages.

1. Clone the repository.
2. Run `npm install --force` in the cloned folder.

## Usage

Simply run `npm start` to run the app in development mode and open [http://localhost:3000](http://localhost:3000) in your browser.

<!-- ### `npm test`

TBD

Launches the test runner in the interactive watch mode.\ -->

## Libraries used

Screenario wouldn’t be possible without these wonderful libraries:

- [React Material UI](https://github.com/mui/material-ui)
- [React Grid Layout](https://github.com/react-grid-layout/react-grid-layout)
- [Konva.js](https://github.com/konvajs/konva)

... and a bunch of others!

## Contributors ✨

If you’d like to contribute to Screenario, great! Please check out the [contributor guidelines](CONTRIBUTING.md).

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://sergej.grilborzer.de/"><img src="https://avatars.githubusercontent.com/u/23424538?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sergej Grilborzer</b></sub></a><br /><a href="#infra-s-gbz" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/s-gbz/screenario/commits?author=s-gbz" title="Code">💻</a> <a href="#design-s-gbz" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/liam-k"><img src="https://avatars.githubusercontent.com/u/34057943?v=4?s=100" width="100px;" alt=""/><br /><sub><b>liam-k</b></sub></a><br /><a href="#design-liam-k" title="Design">🎨</a> <a href="https://github.com/s-gbz/screenario/commits?author=liam-k" title="Code">💻</a> <a href="#infra-liam-k" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
