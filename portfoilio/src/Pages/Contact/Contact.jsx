import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import concss from "./Contact.module.css";

function Contact(){
    return(
      <>
         <Container>
             <div className={concss.heading}>
                <h3>Have an idea or an epic project in mind? Talk to me. Let's work together and make something great. Drop me a line at,</h3>
                <h4><Link to={"mailto:saurabhsen785@gmail.com"} className={concss.email}>saurabhsen785@gmail.com</Link></h4>
             </div>
             
             <Row className={concss.section}>
               <Col xs={12} md={4}>
                  <h4 className={concss.subhead}>Where To Find Me</h4>
                  <h6>idhar udhar jaane kaha nahi pata bus ye dekho</h6>
               </Col>
               <Col xs={12} md={4}>
                  <h4 className={concss.subhead}>Follow Me</h4>
                  <Stack gap={2}>
                    <Link className={concss.links} to={"https://www.instagram.com/__sen._sahab?igsh=MXI3NGt5YWVsczVxYg=="} target="_blank"><FontAwesomeIcon icon={faInstagram} className={concss.icon}/> Instagram</Link>
                    <Link className={concss.links} to={"https://www.linkedin.com/in/saurabh-sen-a26343259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "} target="_blank"><FontAwesomeIcon icon={faLinkedin} className={concss.icon}/> Linkedin</Link>
                    <Link className={concss.links} to={"https://www.instagram.com/__sen._sahab?igsh=MXI3NGt5YWVsczVxYg=="} target="_blank"><FontAwesomeIcon icon={faFacebook} className={concss.icon}/> Facebook</Link>
                  </Stack>
               </Col>
               <Col xs={12} md={4}>
                  <h4 className={concss.subhead}>Contact Me</h4>
                  <Stack gap={1}>
                    <h6>+91 78412225222</h6>
                    <Link className={concss.links} to={"mailto:saurabhsen785@gmail.com"}><h6>saurabhsen785@gmail.com</h6></Link>
                  </Stack>
               </Col>
             </Row>
         </Container>
      </>
    )
}

export default Contact;