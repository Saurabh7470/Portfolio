import { Col, Container, Image, Row, Table } from "react-bootstrap";
import AbImage from "../../Images/About.jpeg";
import abcss from './About.module.css';
function About(){
    return(
       <>
         <Container className="xxxl">
            <Row className={abcss.AboutContaint}>
               <Col xs={12} md={6}>
                  <Container className={abcss.imgcol}>
                     <Image src={AbImage} className={abcss.image_logo} alt="#" fluid/>
                  </Container>
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
                  <br/>
                  <Table className={abcss.Details} style={{backgroundColor:"grey"}}>
                     <tbody>
                        <tr>
                           <td>Name :</td>
                           <td>XYZ</td>
                        </tr>
                        <tr>
                           <td>Date of Birth :</td>
                           <td>11:06:2023</td>
                        </tr>
                        <tr>
                           <td>Contact :</td>
                           <td>+91 7884545454</td>
                        </tr>
                        <tr>
                           <td>Email :</td>
                           <td>Demo@gmail.com</td>
                        </tr>
                     </tbody>
                  </Table>
               </div>
               </Col>
            </Row>
         </Container>
       </>
    );
}

export default About;