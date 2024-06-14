import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Image, Row } from "react-bootstrap";
import '../Projects/Project.css';

function Projects(){
    const data = [
        {name: "Project Management System", Desc : "Project management system is all about to maintain detials and distibute the work over an organination.", Type:"Web Project", imgUrl:"https://projectsly.com/images/blog/project-management-system-overview.png?v=1670514978795773617"},
        {name: "Visitor Management", Desc : "Project management system is all about to maintain detials and distibute the work over an organination.", Type:"Web & Mobile", imgUrl:"https://www.ntspl.co.in/blog/wp-content/uploads/2022/07/Visitor-Management-System.jpg"},
        {name: "Live Dashboard", Desc : "Project management system is all about to maintain detials and distibute the work over an organination.", Type:"Web Project", imgUrl:"https://blog.streamlit.io/content/images/2022/11/real-time-live-dashboard.svg"},
        {name: "Portfolio Website", Desc : "Project management system is all about to maintain detials and distibute the work over an organination.", Type:"Web Project", imgUrl:"https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg"}
    ]
    return(
     <>
        <Row>
            {data.map((item)=>{
                return(
                    <Col xs={12} md={6}>
                        <div className="card">
                            <Image src={item.imgUrl} alt="#" style={{height:"300px"}}/>
                            <div className="card-body">
                                <h4 className="heading">{item.name}</h4>
                                <p className="type">{item.Type}</p>
                                <Button className="btn" variant="primary"><FontAwesomeIcon icon={faArrowCircleRight}/> Learn More.</Button>
                            </div>
                        </div>
                    </Col>
                )
            })}
        </Row>
     </>
    );
}
export default Projects;