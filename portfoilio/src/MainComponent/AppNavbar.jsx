import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Offcanvas,Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import appcss from './Appnavbar.module.css';
import { useEffect, useState } from "react";

function AppNavbar(){
 const [menuOpen, setMenuOpen] = useState(false)
 const [Class, setClass] = useState(appcss.navbar)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)  
  }
  const toggelClose =(sectionId)=> {
    const element = document.getElementById(sectionId);
    if(element){
    const elementPostion = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPostion = elementPostion - 50;
      element.scrollIntoView({behavior:"smooth", top:offsetPostion});
    }
    setMenuOpen(false);
  }
  const handleClose = () => setMenuOpen(false)
  useEffect(()=> {
    window.addEventListener('scroll', ()=>{
      if(window.scrollY < 6){
       setClass(appcss.navbar);
      }
      else{
        setClass(appcss.afterscroll);
      }
    });
  });
       return(
         <>
            <Navbar expand={"sm"} className={`fluid ${Class}`} sticky="top">
              <Container className="sm">
                <Navbar.Brand href="#" className={appcss.navlink}>Portfolio.</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" onClick={toggleMenu} className={appcss.toggle}>
                  <FontAwesomeIcon icon={faBars} className={appcss.toggle}/>
                </Navbar.Toggle>
                <Navbar.Offcanvas id={`offcanvasNavbar-expand-md`} show={menuOpen} onHide={handleClose} className={appcss.sidebar} aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="start">
                  <Offcanvas.Header closeButton className={appcss.toggle}>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                       <h5 className={appcss.navlink}>Portfolio</h5>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className={appcss.offcanvas}>
                    <Nav className="justify-content-end flex-grow-1 pe-10 mt-0">
                      <Link to={'/'} className={`nav-link ${appcss.navlink}`} onClick={()=> toggelClose('Home')}>Home</Link>
                      <Link to={'/'} className={`nav-link ${appcss.navlink}`} onClick={()=> toggelClose('About')}>About</Link>
                      <Link to={'/'} className={`nav-link ${appcss.navlink}`} onClick={()=> toggelClose('Skills')}>Skills</Link>
                      <Link to={'/'} className={`nav-link ${appcss.navlink}`} onClick={()=> toggelClose('Resume')}>Resume</Link>
                      <Link to={'/'} className={`nav-link ${appcss.navlink}`} onClick={()=> toggelClose('Portfolio')}>Projects</Link>
                      <Link to={'/'} className={`nav-link ${appcss.navlink}`} onClick={()=> toggelClose('Services')}>Services</Link>
                      <Link to={'/'} className={`nav-link ${appcss.navlink}`} onClick={()=> toggelClose('Contact')}>Contact</Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
         </>
       )
}
export default AppNavbar;