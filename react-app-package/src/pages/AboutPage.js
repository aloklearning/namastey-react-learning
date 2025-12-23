import React from 'react';
import UserClass from '../components/UserClass';

class AboutPage extends React.Component {
  // No props required, if we are not accepting any
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <h1>About Page</h1>
        <h2>About Content</h2>
        <UserClass name='Alok Kumar (Class)' location='Bengaluru' />
      </>
    );
  }
}

export default AboutPage;
