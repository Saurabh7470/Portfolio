import { Button, Container} from "react-bootstrap";
import hocss from './Home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown} from "@fortawesome/free-solid-svg-icons";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Siklls";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";

function Home(){
  const ScrolltoBottom = (sectionid) => {
    const element = document.getElementById(sectionid);
    if(element){
      element.scrollIntoView({behavior:"smooth", top:"0"});
    }
  }
    return(
        <>
        <section className={hocss.Home} id="Home">
          <Container>
              <Container className={hocss.textcontaint}>
              <h4>HEY! I AM</h4>
              <h1>SAURABH SEN</h1>
              <h3>I'm a Software Developer</h3>
              <Button variant="outline-warning" onClick={()=> ScrolltoBottom('About')}><FontAwesomeIcon icon={faArrowDown} /> Learn More</Button>
              </Container>
          </Container>
        </section>
        <section id="About" className={hocss.allsection}>
          <div className={hocss.Heading}>
              <h3>About</h3>
          </div>
           <About/>
        </section>
        <section id="Skills" className={hocss.allsection}>
        <div className={hocss.Heading}>
               <h3>Skills</h3>
            </div>
          <Skills/>
        </section>
        <section id="Resume" className={hocss.allsection}>
            <Resume/>
        </section>
        <section id="Services" className={hocss.allsection}>
            <div className={hocss.Heading}>
               <h3>Services</h3>
            </div>
            <Services/>
        </section>
        <section id="Portfolio" className={hocss.allsection}>
            <div className={hocss.Heading}>
               <h3>Projects</h3>
            </div>
            <Projects/>
        </section>
        <section id="Contact" className={hocss.allsection}>
            <div className={hocss.Heading}>
               <h3>Get In Touch</h3>
            </div>
            <Contact/>
        </section>
        </>
    )
}
export default Home;