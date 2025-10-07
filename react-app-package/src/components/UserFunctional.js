const UserFunctional = ({ name, location }) => {
  return (
    <div className="user-card">
      <h3>Name: {name}</h3>
      <h4>Location: {location}</h4>
      <h5>Contact: @aloklearning</h5>
    </div>
  );
};

export default UserFunctional;
