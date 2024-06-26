import {Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendar,} from "@fortawesome/free-regular-svg-icons";
import Rcss from './Resume.module.css';

function Resume(){
  const Education = [
    {Name: "Graduation", Feild:"BCA", Institute:"Govt Hamidiya Arts & Commerce Collage.", Location:"Bhopal, Madhy Pradesh", from:"Aug-2020", to:"Jul-2023", Desc:"I am a univercity topper, good at education of all time and perform good at every univercity examination."},
    {Name: "Post Graducation", Feild:"MCA", Institute:"Oriental Institute of Science & Technology.", Location:"Bhopal, Madhy Pradesh", from:"Aug-2020", to:"Jul-2023", Desc:"I am a univercity topper, good at education of all time and perform good at every univercity examination."},
    {Name: "Certification", Feild:"Java Full Stack", Institute:"Govt Hamidiya Arts & Commerce Collage.", Location:"Bhopal, Madhy Pradesh", from:"Aug-2020", to:"Jul-2023", Desc:"I am a univercity topper, good at education of all time and perform good at every univercity examination."},
    {Name: "Certification", Feild:"Digital Marketing", Institute:"Govt Hamidiya Arts & Commerce Collage.", Location:"Bhopal, Madhy Pradesh", from:"Aug-2020", to:"Jul-2023", Desc:"I am a univercity topper, good at education of all time and perform good at every univercity examination."}
  ]

  const Experience = [
    {Position:".Net developer", Organization:"Aon Digicon LLP.", Location:"Korba, Chattisgarh", from:"Aug 2023", to:"Present",desc:"Here i am working as a great person and do the needfull thing for organinzation and cordinate with the others."}
  ]
    return(
      <>
      <Container>
        <Row className="justify-content-evenly">
              <h1 className={Rcss.title}>Education</h1>
                <Col xs={12} md={12}>
                    <h3 className={Rcss.sub}>My Education has been one of the most significant milestones in my life. It marks the culmination of years of hard work, dedication, and learning. 
                      I am proud to share my academic journey and the experiences that have shaped who I am today.</h3>  
                </Col>
                {Education.map((item)=> {
                  return(
                    <Col xs={12} md={3}>
                     <div className={`card ${Rcss.card}`}>
                         <div className={`card-hedar ${Rcss.heder}`}>
                             <h5 className={Rcss.head}>{item.Name} {' / '} {item.Feild}</h5>
                             <p><FontAwesomeIcon icon={faLocationDot}/> {item.Location}</p>
                         </div>
                         <div className="card-body">
                              <h5>{item.Institute}</h5> 
                          <span className={Rcss.duretion}><FontAwesomeIcon icon={faCalendar}/> {item.from} {item.to}</span>
                         </div>
                     </div>
                   </Col>
                  )
                })
              }
              <h1 className={Rcss.title}>Experience</h1>
                <Col xs={12} md={12}>
                  <h3 className={Rcss.sub}>Throughout my career, I have had the opportunity to work in diverse roles and industries,
                     gaining valuable skills and insights. Below are highlights of my professional, internship, 
                    and volunteer experiences, showcasing my journey and the impact I have made.</h3>
                </Col>
                {Experience.map((item)=> {
                  return(
                    <Col xs={12} md={4} style={{justifyContent:"center"}}>
                    <div className={`card ${Rcss.card}`}>
                         <div className={`card-hedar ${Rcss.heder}`}>
                             <h4 className={Rcss.head}>{item.Position} </h4>
                             <p><FontAwesomeIcon icon={faLocationDot}/> {item.Location}</p>
                         </div>
                         <div className="card-body">
                              <h5>{item.Organization}</h5> 
                                <p>
                                  {item.desc}
                                </p>
                          <span className={Rcss.duretion}><FontAwesomeIcon icon={faCalendar}/> {item.from} {item.to}</span>
                         </div>
                     </div>
                     </Col>
                  )
                })
              }
        </Row>
      </Container>
      </>
    );
}
export default Resume;