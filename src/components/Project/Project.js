import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'

const Project = (props) => {
    const {id,name, image, initial, description, technology, liveSite, githubClient, githubServer} = props.project;
    return (
        <div className="col-lg-4 col-md-6 col-12">
                                <div className="item-box">
                                    <div className="project-pic mt-3">
                                        <img className="card-img-top" style={{ width: "250px", height: "200px" }} src={image} alt="" />
                                    </div>
                                    <div className="card-body g-5">
                                    <h4>{name}</h4>
                                    <h5> {initial} </h5>
                                    <Link to={`/project/${id}`}> <button className="btn btn-primary">Details</button> </Link>
                                    </div>
                                  
                                </div>
                            </div>
    );
};

export default Project;