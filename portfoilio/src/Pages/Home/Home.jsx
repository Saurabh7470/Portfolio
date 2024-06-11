import { Button, Col, Container, Row, Image } from "react-bootstrap";
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown} from "@fortawesome/free-solid-svg-icons";
import Profile from "/project/portfoilio/src/Images/wallpaper.jpeg";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";

function Home(){

  const ScrolltoBottom = (sectionid) => {
    const element = document.getElementById(sectionid);
    if(element){
      element.scrollIntoView({behavior:"smooth", top:"0"});
    }
  }
    return(
        <>
        <section className="xxl" id="Home">
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
           <About/>
        </section>
        <section id="Portfolio">
            <Portfolio/>
        </section>
        <section id="Resume">
            <Resume/>
        </section>
        </>
    )
}
export default Home;