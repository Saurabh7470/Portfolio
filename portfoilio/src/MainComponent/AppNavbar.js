import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Offcanvas,Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
function AppNavbar(){
       return(
         <>
            <Container fluid>
              <h6 className="primary">I am Software Developer</h6>
              <h3 className="primary">I'Am Saurabh Sen</h3>
              <caption>
                <Button variant="outline-success" className="align-item-center">HireMe</Button>
              </caption>
            </Container>
            <Navbar expand={"sm"} bg="dark" data-bs-theme="dark" className="fluid" sticky="top">
              <Container className="sm">
                <Navbar.Brand href="#" style={{fontFamily:"monospace", fontWeight:"bolder"}}>Portfolio.</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`}>
                  <FontAwesomeIcon icon={faBars}/>
                </Navbar.Toggle>
                <Navbar.Offcanvas id={`offcanvasNavbar-expand-md`} aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="start">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                      Portfolio
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 pe-10 mt-0" color="">
                      <Link to={'Home'} className="nav-link">Home</Link>
                      <Link to={'Home'} className="nav-link">About</Link>
                      <Link to={'Home'} className="nav-link">Portfolio</Link>
                      <Link to={'Home'} className="nav-link">Resume</Link>
                    </Nav>
                    <Nav className="justify-content-end">
                      <Link to={'Contact'}><Button variant="outline-light" style={{borderRadius:"0px",}}>
                        <FontAwesomeIcon icon={faPhone}/>  Contact</Button></Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
         </>
       )
}
export default AppNavbar;