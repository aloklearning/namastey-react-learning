## React Lifecycle

- React lifecycle especially in Stateful (Class Component) involves Constructor → Render → ComponentDidMount
- `ComponentDidMount` is nothing but a lifecycle method which gets called when the react application is done rendering. Great place to perform operations like `fetch()`.
- If you call multiple child in the rendering phase, this is how lifecycle works:

```JavaScript
class Parent extends React.Component {
    constructor() {}
    componentDidMount() {}
    render() {
        return(
            <>
                <FirsChildComponent />
                <SecondChildComponent />
                ...
            </>
        );
    }
}

// OUTPUT -> Parent Constructor → Parent Renderer → FirstChild Constructor → FirstChild Renderer → SecondChild Constructor → SecondChild Renderer → FirstChild ComponentDidMount → SecondChild ComponentDidMount → Parent ComponentDidMount
```

- The rendering will be done in two phase, 1st is **Rendering** and **Commit**.
  - Rendering batches all the rendering phases of the component being rendered for performance reasons.
  - Commiting phases involves, DOM manipulation, which is an expensive operation, hence, the `componentDidMount()` is called at the end. Rendering is less expensive, hence, React makes sure that all the renderings are done, and then we move to DOM manipulations aka Commit phase.

## Links

- [React Life Cycle Methods Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
