# Namastey React Learning

A project created to learn in-depth of React fundamentals while creating a production ready app from the course [Namastey React](https://namastedev.com/learn/namaste-react) 🚀, created by Akshay Saini.

# Why React is Fast?

- React has a capability of updating the changes quickly to the UI.
- It does this by keeping a constant sync between the **Data Layer** and the **UI Layer**.
- The responsible algorithm is called, **reconcilliation** or **diffing** algorithm. What it does
  is, creating a `virtual dom (old)` and keep comparing it to the newly created one `virtual dom (new)`.
  Once it identifies what to change exactly, it then applies that only change while re-rendering the UI.
- **React Fibre** a new and enhanced feature of React helps behind the background. It uses **Reconcilliation**
  only, but also use a incremental rendering, which means, it can split the rendering to different windows, and
  render, on demand. This helps it do prioritisation and implementation smooth, making it faster then the other
  libraries and frameworks.

# Types of Routing

## 1. Server Side Routing

This type of routing happens when the client requests server for every page of the specified route. The server responds with the HTML page, and then it gets reflected on the client (browser).

## 2. Client Side Routing

This type of routing happens when the page/project is already loaded, and it is being replaced by the page/route asked on the client itself, making it faster, smooth UX and better routing. This is the reason why we call this process as **Single Page Application (SPA)**.

# Setting Up Testing Environment

To set up the testing environment we must be mindful of the following things to be included in our project (No `create-react-app` | App from scratch)

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/): A library built on top of **DOM Testing Library**, which is being used via DOM APIs to be able to test the React Component(s).
- [Jest](https://jestjs.io/docs/getting-started): It is a JavaScript Testing Framework with a focus on simplicity. RTL (React Testing Library) uses this behind the scenes. Additionally, **Babel-Jest** is required with the setup along with the configurations `babel.config.js` mentioned here in the link [using babel](https://jestjs.io/docs/getting-started#using-babel), if we are using Babel in the project (Parcel uses Babel behing the scenes) for transpilation.\
- **Jest Config** is the next step which needs a setup `npm init jest@latest` (`npx jest --init` has been deprecated). More details can be found here [React Testing Library Setup](https://testing-library.com/docs/react-testing-library/setup/). For specifics of Jest 28, read more info here [Jest >=28 Setup](https://testing-library.com/docs/react-testing-library/setup/#jest-28), which needs JSDOM library to be installed in the project.
- **@babel/preset-react** is a package required to help transpile the JSX into HTML so that the RTL can run the test smoothly, else, the test will fail, as RTL alone doesn't support JSX in their file. This has to be mentioned in the presets of `babel.config.js` -> `['@babel/preset-react', { runtime: 'automatic' }]`.
- [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom) is an important package which helps you to access DOM assertive methods like `.toBeInTheDocument()`, `.toHaveTextContent()` etc, without them, the test will continue to throw error, that it could not find these methods. For global setup, please see this [jest-setup.js](https://github.com/aloklearning/namastey-react-learning/blob/master/react-app-package/jest-setup.js)

### ⚙️ Parcel Conflicting with Jest Babel

This is a known thing, where the Babel-Jest config conflicts with the Parcel in-built Babel's config. In order to work with this, this [documentation](https://parceljs.org/languages/javascript/#babel) is a must read. And in short, to fix that, you need to disable Parcel's own Babel config and let Jest Babel take it over by doing the `.parcelrc` work mentioned here [usage with other tools](https://parceljs.org/languages/javascript/#usage-with-other-tools).

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Links

- [Babel](https://babeljs.io/)
  - [Babel Playground](https://babeljs.io/repl#)
- [Browsers List](https://browserslist.dev/)
- [Redux Toolkit Query](https://redux-toolkit.js.org/tutorials/rtk-query)
- [Parcel Documentation](https://parceljs.org/getting-started/webapp/)
- [React without JSX (Old)](https://legacy.reactjs.org/docs/react-without-jsx.html)
- [React without JSX (New)](https://react.dev/reference/react/createElement#creating-an-element-without-jsx)
- [Parcel Production Documentation](https://parceljs.org/features/production/)
- [React Fibre Architecture (GitHub)](https://github.com/acdlite/react-fiber-architecture)
- [Resolving CORS Issue in Dev Mode](https://nordicapis.com/10-free-to-use-cors-proxies/)
