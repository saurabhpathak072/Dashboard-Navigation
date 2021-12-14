/** @format */

import React, { useEffect } from 'react';
import profilePhoto from '../images/Saurabh.jpg';

const Sidebar = () => {
  useEffect(() => {
    let btn = document.getElementById('btn');
    let sidebar = document.querySelector('.sidebar');
    let searchBtn = document.querySelector('.bx-search');
    btn.onclick = () => {
      sidebar.classList.toggle('active');
    };
    searchBtn.onclick = () => {
      sidebar.classList.toggle('active');
    };
  }, []);

  return (
    <div className='sidebar'>
      <div className='logo_content'>
        <div className='logo'>
          <i className='bx bxs-user-detail'></i>
          <div className='logo_name'>Profile</div>
        </div>
        <i className='bx bx-menu' id='btn'></i>
      </div>
      <ul className='nav_list'>
        <li>
          <i className='bx bx-search'></i>
          <input type='text' placeholder='Search...' />
          <span className='tooltip'>Search</span>
        </li>
        <li>
          <a href='#dashboard'>
            <i className='bx bxs-grid'></i>
            <span className='links_name'>Dashboard</span>
          </a>
          <span className='tooltip'>Dashboard</span>
        </li>
        <li>
          <a href='#user'>
            <i className='bx bx-user'></i>
            <span className='links_name'>User</span>
          </a>
          <span className='tooltip'>User</span>
        </li>
        <li>
          <a href='#projects'>
            <i className='bx bx-folder'></i>
            <span className='links_name'>Projects</span>
          </a>
          <span className='tooltip'>Projects</span>
        </li>
        <li>
          <a href='#'>
            <i className='bx bx-chat'></i>
            <span className='links_name'>Message</span>
          </a>
          <span className='tooltip'>Message</span>
        </li>
        <li>
          <a href='#'>
            <i className='bx bx-pie-chart-alt'></i>
            <span className='links_name'>Analytics</span>
          </a>
          <span className='tooltip'>Analytics</span>
        </li>

        <li>
          <a href='#'>
            <i className='bx bx-cart'></i>
            <span className='links_name'>Order</span>
          </a>
          <span className='tooltip'>Order</span>
        </li>
        <li>
          <a href='#'>
            <i className='bx bx-heart'></i>
            <span className='links_name'>Saved</span>
          </a>
          <span className='tooltip'>Saved</span>
        </li>
        <li>
          <a href='#'>
            <i className='bx bx-cog'></i>
            <span className='links_name'>Setting</span>
          </a>
          <span className='tooltip'>Setting</span>
        </li>
      </ul>
      <div className='profile_content'>
        <div className='profile'>
          <div className='profile_details'>
            <img src={profilePhoto} alt='Saurabh Pathak ' />
            <div className='name_job'>
              <div className='name'>Saurabh Pathak</div>
              <div className='job'>Web Developer</div>
            </div>
          </div>
          <i className='bx bx-log-out' id='log_out'></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
