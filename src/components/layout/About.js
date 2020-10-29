import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Fragment>
      <h1>It's a-me! This my app</h1>
      <Link to='/'>Back</Link>
    </Fragment>
  );
};

export default About;
