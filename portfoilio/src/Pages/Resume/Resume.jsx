import {Col, Row, Stack} from "react-bootstrap";
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
    {Position:".Net developer", Organization:"Aon Digicon LLP.", Location:"Korba, Chattisgarh", from:"Aug 2023", to:"Present",desc:"Here i am working as a great person and do the needfull thing for organinzation and cordinate with the others."},
    {Position:"Social Media Marketing Executive", Organization:"Tranning", Location:"Bhopal Madhy Pradesh", from:"Jan 2023", to:"Jun 2023", desc:"Here i am working as a great person and do the needfull thing for organinzation and cordinate with the others."},
    {Position:"Photographer", Organization:"Own Studio", Location:"Bhopal Madhy Pradesh", from:"Jan 2020", to:"Dec 2021", desc:"Here i am working as a great person and do the needfull thing for organinzation and cordinate with the others."}
  ]
    return(
      <>
        <Row>
           <Col xs={12} md={6}>
              <Stack>
                <h2>Education</h2>
                {Education.map((item)=> {
                  return(
                     <div className={`card ${Rcss.card}`}>
                         <div className={`card-hedar ${Rcss.heder}`}>
                             <h4>{item.Name} {' / '} {item.Feild}</h4>
                             <p><FontAwesomeIcon icon={faLocationDot}/> {item.Location}</p>
                         </div>
                         <div className="card-body">
                          <span>
                              <h5>{item.Institute}</h5> 
                                <p>
                                  {item.Desc}
                                </p>
                                  <FontAwesomeIcon icon={faCalendar}/> {item.from} {item.to}</span>
                         </div>
                     </div>
                  )
                })
                }
              </Stack>
           </Col>

           <Col xs={12} md={6}>
           <Stack>
            <h2>Experience</h2>
                {Experience.map((item)=> {
                  return(
                     <div className={`card ${Rcss.card}`}>
                         <div className={`card-hedar ${Rcss.heder}`}>
                             <h4>{item.Position} </h4>
                             <p><FontAwesomeIcon icon={faLocationDot}/> {item.Location}</p>
                         </div>
                         <div className="card-body">
                          <span>
                              <h5>{item.Organization}</h5> 
                                <p>
                                  {item.desc}
                                </p>
                                  <FontAwesomeIcon icon={faCalendar}/> {item.from} {item.to}</span>
                         </div>
                     </div>
                  )
                })
                }
              </Stack>
           </Col>
        </Row>
      </>
    );
}
export default Resume;