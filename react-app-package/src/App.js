import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Header from "./components/Header";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <Error />,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/contact",
    Component: Contact,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
