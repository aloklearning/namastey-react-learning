import { Component } from "react";

class UserClass extends Component {
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

    this.state = {
      userInfo: {
        name: this.props.name,
        location: "Dummy Location",
        avatar_url: this.props.location,
      },
    }; // state variable definition

    console.log("Child Constructor");
  }

  // MOUNTING
  async componentDidMount() {
    console.log("Child Component Did Mount");

    // Limit reaches for free tier. So you see 403
    const data = await fetch("https://api.github.com/users/aloklearning");
    const userData = await data.json();

    this.setState({
      userInfo: userData,
    });
  }

  // UPDATING
  componentDidUpdate() {
    console.log("Child Component Did Update");
  }

  // UNMOUNTING
  componentWillUnmount() {
    console.log("Child Component Unmounted");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    console.log("Child Renderer");

    return (
      <div className="user-card">
        <img width={50} height={50} src={avatar_url} />
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h5>Contact: @aloklearning</h5>
      </div>
    );
  }
}

export default UserClass;
