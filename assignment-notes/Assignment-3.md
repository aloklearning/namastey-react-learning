## JSX

- JSX is a HTML or XML like syntax which enables us to write UI elements in a React component.
  It is an syntax extension for JavaScript. JSX stands for **JavaScript XML**.
- Behind the scene, JSX is being transpiled by Babel to convert it to `React.createElement()`,
  which is making it to React element object, and the `ReactDOM.render()` renders the converted
  HTML element from React element object.
- JS engine cannot understand JSX, hence, we use parcel, which helps in tranpiling it into an
  ECMAScript or ES6+ syntax, which is understood by JavaScript engine in the browser.

## Superpowers of JSX

- JSX was originally built to make the code look cleaner, readable, and remove the pain of
  creating UI elements using `React.createElement()`.
- JSX allows us to include other React components in it. Addtionally it also allows
  any valid JavaSCript variable, constants, functions to be added/called inside it using `{}`.
- JSX sanitizes the data automatically, so there is no worrying of malicious data being injected
  into the project. It escapes the malicious javascript code/content. Eventually preventing **code injections (attacks)**.

```Javascript
// Example of power of JSX
const randomVariable = 1234;
const Title = () => <h1>Something</h1>;
const HeaderTitle = () => {
    return (
        <div>
            {randomVariable}
            {Title()}
            <Title />
            <Title></Title>
        </div>
    );
}
```

## Composition

- Composition is nothing but a way of composing multiple React components/elements inside one.
- Another definition could be, calling a component inside another component is **Composition**.
