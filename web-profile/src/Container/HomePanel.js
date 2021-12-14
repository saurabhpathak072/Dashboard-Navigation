/** @format */

import React from 'react';
import Dashboard from '../Components/Dashboard/Dashboard';
import Projects from '../Components/Projects/Projects';
import User from '../Components/User/User';

const HomePanel = () => {
  return (
    <div id='home' className='home_content container-fluid'>
      <div id='dashboard'>
        <Dashboard />
      </div>
      <div id='user'>
        <User />
      </div>
      <div id='projects'>
        <Projects />
      </div>
    </div>
  );
};

export default HomePanel;
