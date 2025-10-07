import React from "react";

class UserClass extends React.Component {
  /**
   * 1. When the class is initialised the constructor is called
   * super(props) helps the class component to initialise the
   * super or parent class properly.
   *
   * 2. User of props in super() is required to make the props
   * accessible in the class and the constructor
   */
  constructor(props) {
    super(props);
  }

  render() {
    const { name, location } = this.props;

    return (
      <div className="user-card">
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h5>Contact: @aloklearning</h5>
      </div>
    );
  }
}

export default UserClass;
