import ReactDOM from "react-dom/client";

/**
 * JSX is HTML Like Element and not HTML in JS.
 * For JSX to be supportive in multiple lines, we need () for enclosure
 * For example: className is not supported in HTML, but in JSX, yes
 *
 * JSX (transpiled by Babel) ⇒ React.createElement ⇒ ReactElement ⇒ JS Object ⇒ HTML Element(render)
 *
 * Babel is able to identify that () are representative of JSX element
 * and is able to compile/transpile it to React Element object
 *
 * const jsxHeading = <h1 id="heading">Header using JSX 🚀</h1>;
 */

const Title = () => <h1 id="heading">Title from title component</h1>;

const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <div className="input-container">
        <span>Logo</span>
        <input type="text" />
        <span>User Icon</span>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
