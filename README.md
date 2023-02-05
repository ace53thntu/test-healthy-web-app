# Healthy web app

This is a Healthy web app used with ReactJS + TailwindCSS + Vite.

## What is inside?

This project uses many tools like:

- [Vite](https://vitejs.dev) with [React](https://reactjs.org), [TypeScript](https://www.typescriptlang.org).
- [Tailwind CSS v3](https://tailwindcss.com) and a [Prettier plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) that automatically sorts classes.
- Use [ESLint](https://eslint.org), and [Prettier](https://prettier.io) on VSCode and before you commit with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).
- [React Router V6](https://reactrouter.com/en/main) for client side routing
- [React Query](https://tanstack.com/query/latest/docs/react/overview) and [axios](https://axios-http.com/) for communication with the API

## Prerequirements

To run this project, you will need to install [NodeJs](https://nodejs.org/en/) ^14.18.1 and npm ^6.14.15

## Getting started

#### Install dependencies

```bash
cd path-to-project
npm install
```

#### Development

```bash
npm run dev
```

And then open http://localhost:3000 to view it in the browser.

- [Top page](http://localhost:3000)
- [My Record](http://localhost:3000/my-records)
- [Column Page](http://localhost:3000/columns)

#### Production

```bash
npm run build
```

## Folder Structure

```
test-healthy-web-app
├── node_modules
├── public
└── src
    ├── assets # images, css
    ├── components
        ├── base # components: button, typography
        ├── common # common components
        ├── icons # all svg icons
    ├── configs # all configuration
    ├── data # test data
    ├── layouts # route layouts
    ├── pages # all pages base on route
    ├── utils # utility functions
    ├── App.tsx
    ├── index.css
    ├── main.tsx
├── .browserslistrc
├── .editorconfig
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.eslint.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
```

## TODO

- [ ] Responsive UI
- [ ] Make Record Button component has blend mode like design
- [ ] Typography components
