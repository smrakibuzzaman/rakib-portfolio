import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
  const resumeUrl = 'https://drive.google.com/file/d/1KMpTe8mELdisHnKWtFN03TZ5xtVGgo5R/view?usp=sharing'
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
                <div className="container text-uppercase">
                    <HashLink to="/home#home" className="navbar-brand fw-bold cool-link">S.M. RAKIBUZZAMAN</HashLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  ms-auto">

                            <li className="nav-item">
                                <HashLink to="/home#about" className="nav-link cool-link">
                                    About Me

                                </HashLink>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link cool-link" rel="noreferrer" href={resumeUrl} target="_blank">Resume</a>
                            </li>

                            <li className="nav-item">
                                <HashLink to="/home#projects" className="nav-link cool-link" aria-current="page">
                                    Projects
                                </HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink to="/home#contact" className="nav-link cool-link" aria-current="page">
                                    Contact
                                </HashLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
             {/* <Navbar  bg="dark" variant="dark" sticky="top" expand="md">
            
            <Container>
            
            <Navbar.Brand href="#home" style={{ color: 'goldenRod',fontWeight: 'bold',fontSize: '25px' }}>S.M. RAKIBUZZAMAN</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
              <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
              <Nav.Link as={HashLink} to="/home#projects">Projects</Nav.Link>
              <Nav.Link as={HashLink} to="/home#resume">Resume</Nav.Link>
              <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
            </Nav>
            </Container>
          </Navbar> */}
        </div>
    );
};

export default Navigation;