# T&S Travel Blog

A Hugo-powered travel blog using the Blowfish theme.

## Requirements

- [Node.js](https://nodejs.org/) v14+
- [nvm](https://github.com/nvm-sh/nvm)
- [git](https://git-scm.com/)
- [hugo](https://gohugo.io/getting-started/installing/)
- [blowfish-tools](https://blowfish.page/docs/cli/) (install after `nvm use`)

## Quickstart

Clone the repository and set up dependencies:

```shell
git clone --recurse-submodules https://github.com/tristanbatchler/travel-blog
cd travel-blog
nvm use
npm install
npm run install:zoom
npm run build:zoom
npm install -g blowfish-tools
blowfish-tools run
```

## Development

To start the Hugo development server:

```shell
hugo server
```

Visit [http://localhost:1313](http://localhost:1313) in your browser.

## Updating Blowfish Theme

To update the Blowfish theme submodule:

```shell
git submodule update --remote themes/blowfish
```

## Notes

- Make sure you have [nvm](https://github.com/nvm-sh/nvm) installed and run `nvm use` before installing Node dependencies.
- If you encounter issues with image zoom, re-run `npm run install:zoom` and `npm run build:zoom`.
- For more info on Blowfish, see [Blowfish Docs](https://blowfish.page/docs/).

---

Happy travels! ✈️

[![Netlify Status](https://api.netlify.com/api/v1/badges/97f77cc1-9b67-44a5-8953-652d82c8c8d9/deploy-status)](https://app.netlify.com/projects/tns-travels/deploys)