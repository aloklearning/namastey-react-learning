import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Renderer");

    return (
      <>
        <h1>About Page</h1>
        <h2>About Content</h2>
        <UserClass name="Alok Kumar (Class)" location="Bengaluru" />
      </>
    );
  }
}

export default About;
