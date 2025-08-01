import React from "react";
import ReactDOM from "react-dom/client";

/**
 * JSX is HTML Like Element and not HTML in JS.
 * For JSX to be supportive in multiple lines, we need () for enclosure
 * For example: className is not supported in HTML, but in JSX, yes
 *
 * JSX -> Babel transpiles/compiles -> React.createElement() -> React.render(React Element - JS Object) -> HTML DOM
 *
 * Babel is able to identify that () are representative of JSX element
 * and is able to compile/transpile it to React Element object
 */
const jsxHeading = <h1 id="heading">Header using JSX 🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
