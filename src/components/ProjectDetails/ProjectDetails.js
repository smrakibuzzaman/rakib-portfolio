import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const ProjectDetails = () => {
    const {projectId} = useParams();
  

   const [projectDetail, setProjectDetail] = useState([]);
   

   useEffect( ()=>{
    fetch("/projects.json")
    .then(res=>res.json())
    .then(data=>setProjectDetail(data));
},[])

const details = projectDetail.find(detail=>detail.id == projectId );


    return (
       
    
        <div className="container m-5">
           <div className="mb-5">
           <img src={details?.image} style={{width: '80%', height: '100%', border: '1px solid'}} alt="" srcset="" />
           </div>
            <h1 className="text-secondary fw-bold"> {details?.name} {details?.initial}</h1>

            <p> <span className="fw-bold"> Project Details: </span> {details?.description}</p>
            <p> <span className="fw-bold"> Technology Used: </span> {details?.technology}</p>
            <a href={details?.liveSite} target="blank"> <button  type="submit" className="btn btn-primary"> Live Site</button> </a> 
            <a href={details?.githubClient} target="blank"> <button type="submit"className="btn btn-primary" > GitHub Client</button> </a> 
            <a href={details?.githubServer} target="blank"> <button type="submit" className="btn btn-primary"> GitHub Server</button> </a> 
            
        </div>
  
         
    );
};

export default ProjectDetails;