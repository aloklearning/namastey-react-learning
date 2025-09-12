import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Header from "./components/Header";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Header />
      {/* 
        Outlet helps the react to replaces the item inside 
        the same page based upon the new path. It's like a 
        placeholder for the new pages/component to come-in
      */}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Body,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
