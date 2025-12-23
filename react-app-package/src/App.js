import { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';

import Error from './components/Error';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RestaurantMenuPage from './pages/RestaurantMenuPage';

/**
 * This is lazy loading which is also called these:
 * - On Demand Loading/Code Splitting/Dyanmic Loading/Chunking
 *
 * This helps us reduce the load on the bundler, and create chunks
 * of javascript files which are easier to load, when they are required.
 * So the main JS file doesn't have all the code in it, which makes the project faster.
 */
const GroceryPage = lazy(() => import('./pages/GroceryPage'));

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
    path: '/',
    Component: App,
    children: [
      {
        path: '/',
        Component: HomePage,
      },
      {
        path: '/about',
        Component: AboutPage,
      },
      {
        path: '/contact',
        Component: ContactPage,
      },
      {
        path: '/grocery',
        Component: GroceryPage,
      },
      {
        path: '/restaurants/:resId', // After collan (:) the route becomes dynamic in the param
        Component: RestaurantMenuPage,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
