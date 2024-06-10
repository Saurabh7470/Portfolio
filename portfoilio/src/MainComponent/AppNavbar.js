import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Offcanvas,Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import './Appnavbar.css';
import { useEffect, useState } from "react";
function AppNavbar(){
  const [menuOpen, setMenuOpen] = useState(false)
  const [Class, setClass] = useState("navbar")

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  const handleClose = () => setMenuOpen(false)
  useEffect(()=> {
    window.addEventListener('scroll', ()=>{
      if(window.scrollY < 6){
       setClass("Navbar");
      }
      else{
        setClass("afterscroll");
      }
    });
  });
       return(
         <>
            <Navbar expand={"sm"} className={`fluid ${Class}`} sticky="top">
              <Container className="sm">
                <Navbar.Brand href="#" style={{fontFamily:"monospace", fontWeight:"bolder"}}>Portfolio.</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" onClick={toggleMenu} className="text">
                  <FontAwesomeIcon icon={faBars}/>
                </Navbar.Toggle>
                <Navbar.Offcanvas id={`offcanvasNavbar-expand-md`} show={menuOpen} onHide={handleClose} className="sidebar" aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="start">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                      Portfolio
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 pe-10 mt-0">
                      <Link to={'/'} className={'nav-link'} onClick={toggleMenu}>Home</Link>
                      <Link to={'Home'} className="nav-link" onClick={toggleMenu}>About</Link>
                      <Link to={'Home'} className="nav-link" onClick={toggleMenu}>Portfolio</Link>
                      <Link to={'Home'} className="nav-link" onClick={toggleMenu}>Resume</Link>
                    </Nav>
                    <Nav className="justify-content-end">
                      <Link to={'Contact'}><Button variant="success" style={{borderRadius:"0px",}}>
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