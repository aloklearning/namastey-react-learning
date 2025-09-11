import { useRouteError } from "react-router";

const Error = () => {
  // useRouteError is a hook that gives more details about the page error
  // which can be later shown on the UI to improve the UX
  const routePageError = useRouteError();

  return (
    <>
      <h1>Oops!!!</h1>
      <h2>Something went wrong!</h2>
      <h3>
        {routePageError.status}: {routePageError.statusText}
      </h3>
    </>
  );
};

export default Error;
