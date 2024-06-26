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
                <h3>I’d love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out. 
                  I’m always open to new opportunities and collaborations. You can contact me via email at</h3>
                <h4><Link to={"mailto:saurabhsen785@gmail.com"} className={concss.email}>saurabhsen785@gmail.com</Link></h4>
             </div>
             
             <Row className={concss.section}>
               <Col xs={12} md={4}>
                  <h4 className={concss.subhead}>Where To Find Me</h4>
                  <h6>Mata Mandir Bhopal, Madhy Pradesh(India)<br/>
                     Pin:462003
                  </h6>
               </Col>
               <Col xs={12} md={4}>
                  <h4 className={concss.subhead}>Follow Me</h4>
                  <div className={concss.lisec}>
                    <Link className={concss.links} to={"https://www.instagram.com/___sen.__sahab_?igsh=MXI3NGt5YWVsczVxYg=="} target="_blank"><FontAwesomeIcon icon={faInstagram} className={concss.icon}/></Link>
                    <Link className={concss.links} to={"https://www.linkedin.com/in/saurabh-sen-a26343259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "} target="_blank"><FontAwesomeIcon icon={faLinkedin} className={concss.icon}/></Link>
                    <Link className={concss.links} to={"https://www.facebook.com/saurabh.sen.5688476?mibextid=ZbWKwL"} target="_blank"><FontAwesomeIcon icon={faFacebook} className={concss.icon}/></Link>
                  </div>
               </Col>
               <Col xs={12} md={4}>
                  <h4 className={concss.subhead}>Contact Me</h4>
                  <Stack gap={1}>
                    <h6>+91 7470446172</h6>
                    <Link className={concss.links} to={"mailto:saurabhsen785@gmail.com"}><h6>saurabhsen785@gmail.com</h6></Link>
                  </Stack>
               </Col>
             </Row>
         </Container>
      </>
    )
}

export default Contact;