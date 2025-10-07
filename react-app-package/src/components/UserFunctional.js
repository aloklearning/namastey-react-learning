import { useState } from "react";

const UserFunctional = ({ name, location }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>

      <h3>Name: {name}</h3>
      <h4>Location: {location}</h4>
      <h5>Contact: @aloklearning</h5>
    </div>
  );
};

export default UserFunctional;
