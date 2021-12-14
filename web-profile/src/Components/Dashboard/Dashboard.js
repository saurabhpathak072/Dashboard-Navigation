/** @format */
import React from 'react';
import About from '../About/About';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='row '>
        <div className='col '>
          <div className='contactDetail'>
            <div className='contactDetail__role'>Front-End Web and Software Developer</div>

            <div className='contactDetail__phone'>
              <span>Mobile No.: </span> <a href='tel:7840937715'>7840937715, 7972373760</a>
            </div>
            <div className='contactDetail__email'>
              <span>Email: </span>
              <a target='_blank' rel='noreferrer' href='mailto:saurabhspathak072@gmail.com'>
                saurabhspathak072@gmail.com
              </a>
            </div>

            <div className='contactDetail__oldprofile'>
              <a target='_blank' rel='noreferrer' href='https://saurabhpathak072-f8a1f.web.app/'>
                Old Profile
              </a>
            </div>
          </div>
        </div>
        <div className='col d-flex align-items-center justify-content-end'>
          <div className='text Home__Profile__Name'>
            <div className=' Home__Profile__Text'>Saurabh Pathak</div>
            <div className='contactDetail__linkdin'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/saurabh-pathak-35b2b0190/'>
                Linkdin
              </a>{' '}
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/saurabh-pathak-35b2b0190/'>
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* TODO : about section needs to add content */}
      <About />
    </div>
  );
};

export default Dashboard;
