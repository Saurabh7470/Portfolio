import { Button, Col, Container, Row, Image } from "react-bootstrap";
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown} from "@fortawesome/free-solid-svg-icons";
import Profile from "../Images/wallpaper.jpeg";
function Home(){
    return(
        <>
        <Container className="xxl">
            <Row>
                <Col md={6} xs={12}>
                    <Container>
                        <Container className="text-containt">
                        <h4>HEY! I AM</h4>
                        <h1>SAURABH SEN</h1>
                        <h3>I'm a Software Developer</h3>
                        <Button variant="outline-warning" to={"About"}><FontAwesomeIcon icon={faArrowDown}/> Learn More</Button>
                        </Container>
                    </Container>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  <Container className="Image_section">
                    <Image src={Profile} alt="#" fluid />
                  </Container>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Home;