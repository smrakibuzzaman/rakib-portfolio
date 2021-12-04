import React from 'react';
import me from './../../images/rakib-main.png'



const Introduction = () => {
    return (
        <div className="container" id="introduction" >

<div className="row d-flex align-items-center py-5">
                <div className="col-md-3 col-12">
                    <div>
                        <img className=" img-fluid" src={me} alt=""  style={{height:'50%', width:'150%'}}/>
                    </div>
                </div>
                <div className="col-md-9 col-12">
                    
                        <h2 className="fw-bold text-uppercase">S.M. RAKIBUZZAMAN</h2>
                    

                    <p> Front-End Web Developer</p>


                    <p className="lh-lg">
                        <span className="rounded language border border-rounded bg-secondary text-light p-1">JavaScript</span> <span className="rounded language border border-rounded bg-secondary text-light p-1">React JS</span> <span className="rounded language border border-rounded bg-secondary text-light p-1">MongoDB</span> <span className="rounded  border border-rounded bg-secondary text-light p-1">Node JS</span>
                    </p>

                    
                </div>
            </div>

           
        
            
        </div>
    );
};

export default Introduction;