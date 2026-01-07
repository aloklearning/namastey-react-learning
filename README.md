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

## Server Side Routing

This type of routing happens when the client requests server for every page of the specified route. The server responds with the HTML page, and then it gets reflected on the client (browser).

# Client Side Routing

This type of routing happens when the page/project is already loaded, and it is being replaced by the page/route asked on the client itself, making it faster, smooth UX and better routing. This is the reason why we call this process as **Single Page Application (SPA)**.

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
