import { Suspense } from "react";
import Shimmer from "./Shimmer";

const Grocery = () => {
  return (
    <Suspense fallback={<Shimmer />}>
      <h1>This is a grocery page. We have a lot of offering for you.</h1>
    </Suspense>
  );
};

export default Grocery;
