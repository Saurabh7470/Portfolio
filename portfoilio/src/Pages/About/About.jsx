import { Button, Col, Container, Image, Row} from "react-bootstrap";
import AbImage from "../../Images/About.jpeg";
import abcss from './About.module.css';
import resume from '../../data/Updated Resume.pdf';
function About(){
    return(
       <>
         <Container >
            <Row>
               <Col xs={12} md={6}>
                  <Image src={AbImage} className={abcss.image_logo} alt="#" fluid/>
               </Col>
               <Col xs={12} md={6}>
               <div className={abcss.infoAbout}>
                  <h1>About Me</h1>
                  <h3>Software Developer</h3>
                  <h6>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Optio asperiores quidem eius. Cupiditate sunt sapiente aut eos nulla impedit aliquam, dolorem voluptates beatae similique,
                     atque facere doloribus magnam hic perferendis.
                  </h6>
                   <table className={abcss.Details}>
                     <tbody>
                        <tr>
                           <td> <h6>Name: </h6></td>
                           <td><h6>Saurabh</h6></td>
                        </tr>
                        <tr>
                           <td> <h6>D-O-B: </h6></td>
                           <td><h6>13-06-2001</h6></td>
                        </tr>
                        <tr>
                           <td> <h6>Address:</h6></td>
                           <td><h6>Bhopal Madhy Pradesh</h6></td>
                        </tr>
                        <tr>
                           <td> <h6>Contact: </h6></td>
                           <td><h6>+91 7470446172</h6></td>
                        </tr>
                        <tr>
                           <td> <h6>Email: </h6></td>
                           <td><h6>Saurabhsen785@gmail.com</h6></td>
                        </tr>
                     </tbody>
                   </table>

                   <Button variant="outline-warning" href={resume} target="_blank" className={abcss.btn}>Download CV</Button>
               </div>
               </Col>
            </Row>
         </Container>
       </>
    );
}

export default About;