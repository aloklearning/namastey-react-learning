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
    this.state = { count: 0 }; // state variable definition
  }

  render() {
    const { count } = this.state;
    const { name, location } = this.props;

    return (
      <div className="user-card">
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            // NEVER UPDATE STATE DIRECTLY
            this.setState({ count: this.state.count + 1 });
          }}>
          Increment Count
        </button>

        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h5>Contact: @aloklearning</h5>
      </div>
    );
  }
}

export default UserClass;
