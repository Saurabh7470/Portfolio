import { faNewspaper, faBars, faHome, faFootballBall, faMusic, faInfo } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Container,Offcanvas, Nav } from "react-bootstrap";
import { useState} from "react";
import { Link } from "react-router-dom";
import './Appbar.css'
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

function AppBar(){
  const [Show, setShow] = useState(false);
  const Open = () => setShow(true);
  const Close = () => {
    setShow(false);
  };
    return(
      <>
        <Navbar className="bg-body-tertiary" fixed="top">
          <Container>
            <Navbar.Brand style={{fontFamily:"sans-serif"}}>
            <FontAwesomeIcon icon={faBars} onClick={Open} style={{paddingRight:"15px", height:"25px", width:"25px"}}/>
               KhabarDaar
            </Navbar.Brand>
            <div className="justify-end Sidebar-icon nav-link">
            <FontAwesomeIcon icon={faFacebook} className="m-2" style={{color:"blue"}}/>
            <FontAwesomeIcon icon={faInstagram} className="m-2" style={{color:"pink", font:"icon"}}/>
            <FontAwesomeIcon icon={faYoutube} className="m-2" style={{color:"red"}}/>
            </div>
          </Container>
       </Navbar>
        
       <Offcanvas show={Show} onHide={Close} className="Sidebar" style={{width:"250px"}}>
              <Offcanvas.Header closeButton className="bg-primary">
                <Offcanvas.Title style={{color:"white"}}>Khabardaar{' '}
                   <FontAwesomeIcon icon={faNewspaper}/>
                </Offcanvas.Title>
              </Offcanvas.Header>
            <Offcanvas.Body>
              <Container className="NavContaint">
                  <Nav className="flex-column">
                    <Link to="/" className="nav-link" onClick={Close}><FontAwesomeIcon icon={faHome}/> Home</Link>
                    <Link to="Sports" className="nav-link" onClick={Close}><FontAwesomeIcon icon={faFootballBall}/> Sports</Link>
                    <Link to="Entairtement" className="nav-link" onClick={Close}><FontAwesomeIcon icon={faMusic}/> Entairtainment</Link>
                    <Link to="About" className="nav-link" onClick={Close}><FontAwesomeIcon icon={faInfo}/> About</Link>
                   </Nav>
                </Container>
              </Offcanvas.Body>
            </Offcanvas>
      </>
    );
}

export default AppBar;