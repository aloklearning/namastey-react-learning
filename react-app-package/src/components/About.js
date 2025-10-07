import UserClass from "./UserClass";
import UserFunctional from "./UserFunctional";

const About = () => {
  return (
    <>
      <h1>About Page</h1>
      <h2>About Content</h2>

      <UserFunctional name="Alok Kumar (Functional)" location="Bengaluru" />
      <UserClass name="Alok Kumar (Class)" location="Bengaluru" />
    </>
  );
};

export default About;
