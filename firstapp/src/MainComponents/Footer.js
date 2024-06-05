import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import img from '../Images/navlogo.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faWebAwesome } from "@fortawesome/free-brands-svg-icons/faWebAwesome";
import { Link } from "react-router-dom";
import {faAddressBook, faAt, faBriefcase, faCameraRetro, faFootballBall, faHome, faInfoCircle, faMobileAlt } from "@fortawesome/fontawesome-free-solid";
function Footer(){
    return(
        <>
          <Container className="bg-dark" style={{color:"white"}}>
             <Row className="justifiy-center">
               <Col xs={12} md={4}>
                  <Stack gap={3} className="m-4">
                      <h5 style={{fontWeight:"bold", fontFamily:"monospace"}}>
                        <img src={img} alt="Logo" style={{height:"80px", width:"80px"}} />
                        {' '} Khabardaar News
                      </h5>
                        <div className="justify-end Sidebar-icon nav-link mt-5">
                          <FontAwesomeIcon icon={faFacebook} className="m-2" style={{color:"blue",fontSize:"25px"}}/>
                          <FontAwesomeIcon icon={faInstagram} className="m-2" style={{color:"white", fontSize:"25px"}}/>
                          <FontAwesomeIcon icon={faYoutube} className="m-2" style={{color:"red", fontSize:"25px"}}/>
                          <FontAwesomeIcon icon={faWebAwesome} className="m-2" style={{color:"grey", fontSize:"25px"}}/>
                        </div>
                  </Stack>
               </Col>
               <Col xs={12} md={4}>
                  <Stack gap={3} className="m-4">
                     <h5 style={{fontWeight:"bold", fontFamily:"monospace"}}>Useful Links</h5>
                     <Link className="nav-link" to="/"><FontAwesomeIcon icon={faHome} height={15} width={15}/> {' '} Home</Link>
                     <Link className="nav-link" to="Entairtement"><FontAwesomeIcon icon={faCameraRetro} height={15} width={15}/>{' '} Entairtainment</Link>
                     <Link className="nav-link" to="Sports"><FontAwesomeIcon icon={faFootballBall}/>{' '} Sports</Link>
                     <Link className="nav-link" to="About"><FontAwesomeIcon icon={faInfoCircle}/>{' '} About</Link>
                  </Stack>
               </Col>
               <Col xs={12} md={4}>
                  <Stack gap={3} className="m-4 mt-10">
                     <h5 style={{fontWeight:"bold", fontFamily:"monospace"}}>Company</h5>
                      <h6><FontAwesomeIcon icon={faBriefcase} height={15} width={15}/> Head Office : Bhopal</h6>
                      <Container>
                          <p>
                              <FontAwesomeIcon icon={faAddressBook} height={15} width={15}/> Address : 
                              <small className="text-body-primary"> ABCD ke pass idhar se udhar</small>
                          </p>
                          <p>
                            <FontAwesomeIcon icon={faMobileAlt} height={15} width={15}/> Contact : 
                                <small className="text-body-primary">+91 78545215221</small>
                          </p>
                          <p>
                            <FontAwesomeIcon icon={faAt} height={15} width={15}/> Email : 
                                <small className="text-body-primary">Example@gmail.com</small>
                          </p>
                      </Container>
                  </Stack>
               </Col>
               <Col xs={12} md={12}>
                 <Container className="container-xs" style={{maxWidth:"450px", justifyContent:"center"}}>
                    <h3 style={{fontWeight:"bold", fontFamily:"monospace", textAlign:"center"}}>Contact</h3>
                      <Form.Group>
                        <Form.Control className="mb-3" placeholder="Name" type="text" />
                        <Form.Control className="mb-3" placeholder="Comment" as="textarea" rows={5}/>
                      </Form.Group>
                      <center>
                        <Button variant="primary" className="m-2" style={{alignSelf:"center"}}>Submit</Button>
                      </center>
                 </Container>
               </Col>
               <Col xs={12} md={12}>
                
               </Col>
             </Row>
          </Container>
          <Container style={{backgroundColor:"white", color:"grey"}}>
                   <h5 className="m-4" style={{fontWeight:"bolder", fontSize:"small", fontFamily:"serif", textAlign:"center"}}>
                      Copyright &#169; 2024 Saurabh Sen
                   </h5>
                </Container>
        </>
    )
}

export default Footer;