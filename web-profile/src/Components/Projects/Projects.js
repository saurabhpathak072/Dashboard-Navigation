/** @format */

import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className='projects'>
      <div className='text d-flex justify-content-center'>
        <div>
          Projects
          <hr className='custom_hr' />
        </div>
      </div>
      <div>
        <div className='row'>
          {/* <div className='col-md-6 col-sm-12 text-center'>
            <div className='m-4'>
              <b>Eduversity</b>
            </div>
            <div>
              <p>
                Create a WhatsApp web application in react. used to share the message across the
                room Technology used React,MongoDB,Firebase
              </p>
            </div>
          </div>
          <div className='col-md-6 col-sm-12 d-flex justify-content-center mb-3'>
            <iframe
              src='https://eduversity.ai/#/'
              title='W3Schools Free Online Web Tutorials'></iframe>
          </div> */}
          <div className='col-md-6 col-sm-12 text-center'>
            <div className='m-4'>
              <b>whats App Web clone</b>
            </div>
            <div>
              <p>
                Create a WhatsApp web application in react. used to share the message across the
                room Technology used React,MongoDB,Firebase
              </p>
            </div>
          </div>
          <div className='col-md-6 col-sm-12 d-flex justify-content-center mb-3'>
            <iframe
              src='https://build-whatsapp-clone.web.app/'
              title='W3Schools Free Online Web Tutorials'></iframe>
          </div>
          <div className='col-md-6 col-sm-12 text-center'>
            <div className='m-4'>
              <b>Burger Project</b>
            </div>
            <div>
              <p>
                Create a custom burger builder application in React JS. You can order and save your
                order and see previous order.
              </p>
            </div>
          </div>
          <div className='col-md-6 col-sm-12 d-flex justify-content-center mb-3'>
            <iframe
              src='https://fullstack-burger-builder.web.app/'
              title='W3Schools Free Online Web Tutorials'></iframe>
          </div>
          <div className='col-md-6 col-sm-12 text-center'>
            <div className='m-4'>
              <b>Airbnb Clone</b>
            </div>
            <div>
              <p>Create an clone webpage of populate website Airbnb using ReactJS.</p>
            </div>
          </div>
          <div className='col-md-6 col-sm-12 d-flex justify-content-center mb-3'>
            <iframe
              src='https://airbnb-clone-cb063.web.app/'
              title='W3Schools Free Online Web Tutorials'></iframe>
          </div>
          <div className='col-md-6 col-sm-12 text-center'>
            <div className='m-4'>
              <b>Beach Resort Webpage</b>
            </div>
            <div>
              <p>
                Create an website for Beach Resort where customer can view various rooms and
                services. Customer can filter room according to their choice. GitHub repo:
                https://github.com/saurabhpathak072/beach-resort
              </p>
            </div>
          </div>
          <div className='col-md-6 col-sm-12 d-flex justify-content-center mb-3'>
            <iframe
              src='https://react-beach-resort-ytl.netlify.app/'
              title='W3Schools Free Online Web Tutorials'></iframe>
          </div>
          <div className='col-md-6 col-sm-12 text-center mb-3'>
            <div className='m-4'>
              <b>Financial Portfolio tracker</b>
            </div>
            <div>
              <p>
                This Application is used to track the stocks prices, Buy stocks and calculate
                Profit/Loss Future scope for this application is adding chart/graph to show previous
                prices of that stocks Technology used: React JS, Axios, Bootstrap, Firebase GitHub
                Code Link:https://github.com/saurabhpathak072/financial-portfolio
              </p>
            </div>
          </div>
          <div className='col-md-6 col-sm-12 d-flex justify-content-center mb-3'>
            <iframe
              src='https://finanial-portfolio.web.app/'
              title='W3Schools Free Online Web Tutorials'></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
