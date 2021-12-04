import React from 'react';
import { HashLink } from 'react-router-hash-link';



const About = () => {
    return (
      <div className="container" id="about" >

      <div className="row d-flex align-items-center py-5">
                      
                      <div >
                          
                              <h2 className="fw-bold text-uppercase">About Me</h2>
                          
                              <div className="">
                    <p className="text-secondary hero-section">
                        Hi there! I'm S.M. Rakibuzzaman, a MERN Stack Web Application Developer. I have completed my Bachelor of Laws (LLB) from the University of London. I have experience of few web <HashLink to='/home#projects' className="cool-link fw-bold">projects</HashLink> by using JavaScript, React.js, Node.js, MongoDB and other technologies. I have also solid knowledge of CSS framework like bootstrap, tailwind, material-ui. Outside of front-end development, I'm enhancing my back-end skill to be a full stack developer in future.
                    </p>
                </div>
      
                      </div>
                  </div>
    
                  
              </div>
          );
      };

export default About;