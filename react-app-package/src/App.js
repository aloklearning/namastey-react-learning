import { lazy } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';

import Error from './components/Error';
import appStore from './redux/appStore';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import UserContextProvider from './contexts/userContext';
import RestaurantMenuPage from './pages/RestaurantMenuPage';

/**
 * This is lazy loading which is also called these:
 * - On Demand Loading/Code Splitting/Dyanmic Loading/Chunking
 *
 * This helps us reduce the load on the bundler, and create chunks
 * of javascript files which are easier to load, when they are required.
 * So the main JS file doesn't have all the code in it, which makes the project faster.
 */
const CartPage = lazy(() => import('./pages/CartPage'));

const App = () => {
  return (
    // Providing the store to be accessible to the wrapped children
    <Provider store={appStore}>
      <UserContextProvider>
        <Header />
        {/* 
        Outlet helps the react to replaces the item inside 
        the same page based upon the new path. It's like a 
        placeholder for the new pages/component to come-in
      */}
        <Outlet />
      </UserContextProvider>
    </Provider>
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
        path: '/cart',
        Component: CartPage,
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
