import { Button, Col, Container, Row, Image } from "react-bootstrap";
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown} from "@fortawesome/free-solid-svg-icons";
import Profile from "../../Images/wallpaper.jpeg";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Siklls";
import Projects from "../Projects/Projects";

function Home(){
  const ScrolltoBottom = (sectionid) => {
    const element = document.getElementById(sectionid);
    if(element){
      element.scrollIntoView({behavior:"smooth", top:"0"});
    }
  }
    return(
        <>
        <Container className="Home">
        <section className="xl" id="Home">
            <Row>
                <Col md={6} xs={12}>
                    <Container>
                        <Container className="text-containt">
                        <h4>HEY! I AM</h4>
                        <h1>SAURABH SEN</h1>
                        <h3>I'm a Software Developer</h3>
                        <Button variant="outline-warning" onClick={()=> ScrolltoBottom('About')}><FontAwesomeIcon icon={faArrowDown} /> Learn More</Button>
                        </Container>
                    </Container>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  <Container className="Image_section">
                    <Image src={Profile} alt="#" fluid />
                  </Container>
                </Col>
            </Row>
        </section>
        <section id="About">
          <div className="Heading">
              <h3>About</h3>
          </div>
           <About/>
        </section>
        <section id="Skills" className="skills">
        <div className="Heading">
               <h3>Skills</h3>
            </div>
          <Skills/>
        </section>
        <section id="Portfolio" style={{width:"100%"}}>
            <div className="Heading">
               <h3>Projects</h3>
            </div>
            <Projects/>
        </section>
        <section id="Resume">
            <div className="Heading">
               <h3>Resume</h3>
            </div>
            <Resume/>
        </section>
        </Container>
        </>
    )
}
export default Home;