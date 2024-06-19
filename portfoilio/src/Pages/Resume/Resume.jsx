import {Col, Container, Image, Row} from "react-bootstrap";
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
        <Row>
              <h2 className={Rcss.title}>Education</h2>
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
                                <p>
                                  {item.Desc}
                                </p>
                          <span className={Rcss.duretion}><FontAwesomeIcon icon={faCalendar}/> {item.from} {item.to}</span>
                         </div>
                     </div>
                   </Col>
                  )
                })
              }
              <h2 className={Rcss.title}>Experience</h2>
                <Col xs={12} md={6}>
                  <Image src="https://res.cloudinary.com/practicaldev/image/fetch/s--LZgnTB5p--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/http://empirical-software.engineering/assets/images/developer.png" alt="#" fluid style={{height:"400px"}}/>
                </Col>
                {Experience.map((item)=> {
                  return(
                    <Col xs={12} md={6}>
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