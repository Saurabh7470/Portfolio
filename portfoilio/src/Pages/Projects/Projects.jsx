import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Pcss from './Project.module.css';
import { useNavigate } from "react-router";

function Projects(){
    const data = [
        {   
             name: "Project Management",
             Desc : "The Project Management System is designed to efficiently manage project details and streamline the distribution of tasks within an organization. This system ensures that project managers and team members have a clear and organized way to handle project workflows, track progress, and meet deadlines.", 
             Type:"Web Project", 
             Technology : [
                "Frontend: Developed using the .Net Blazor framework, providing a robust and interactive user interface.",
                "UI Components: Utilized MudBlazor for the material design components, ensuring a modern and responsive design.",
                "Backend: Powered by a .Net Core API, ensuring high performance and scalability."
            ],
            Benifit : [
                "Increased Efficiency: Streamlines project management processes, reducing administrative overhead.",
                "Enhanced Collaboration: Improves communication and coordination among team members.",
                "Better Insights: Provides valuable insights through detailed reporting and analytics."
            ],
             imgUrl:"https://www.jotform.com/blog/wp-content/uploads/2019/09/Best-project-management-software-featured-2.png",
            Conclusion : "The Project Management System redefines how teams collaborate and manage their projects. With its intuitive interface and powerful features, it transforms the complexities of project management into a seamless experience. Built with cutting-edge technologies like .Net Blazor and MudBlazor, this system ensures reliability, scalability, and user satisfaction. By adopting this solution, organizations can achieve unprecedented levels of productivity and project success. Take your project management to the next level and witness the transformation in team efficiency and project outcomes."
        },
        {
            name: "Visitor Management",
            Desc : "The Visitor Management System is a comprehensive solution designed to streamline and manage visitor interactions within an organization. This system ensures that all visitor details are accurately maintained and that the workflow for visitor management is efficient and secure.", 
            Type:"Web & Mobile", 
            Technology : [
                "UI Components: Utilized MudBlazor for the material design components, ensuring a modern and responsive design.",
                "Frontend: Developed using the .Net Blazor framework, providing a robust and interactive user interface.",
                "Backend: Powered by a .Net Core API, ensuring high performance and scalability."
            ],
            Benifit : [
                "Improved Security: Ensures that all visitors are accounted for and tracked.",
                "Efficiency: Streamlines the check-in process, reducing administrative workload.",
                "Professionalism: Enhances the visitor experience through timely notifications and professional badge printing."
            ],
            imgUrl:"https://www.ntspl.co.in/blog/wp-content/uploads/2022/07/Visitor-Management-System.jpg",
            Conclusion : "The Visitor Management System is not just a tool but a gateway to a secure and efficient environment. By streamlining visitor interactions, it enhances security, improves operational efficiency, and delivers a professional experience for both visitors and staff. This system, built with the robust .Net Blazor framework and MudBlazor components, is a testament to modern, responsive, and scalable application development. Embrace the future of visitor management and elevate your organizational security and efficiency to new heights."
        },
        {
            name: "Live Dashboard", 
            Desc : "The Live Data Representation Dashboard is a dynamic tool that provides real-time visualization and monitoring of data. This dashboard is designed to help organizations make informed decisions by presenting data in a clear and interactive manner.", 
            Type:"Web Project",
            Technology : [
                "Frontend: Developed using the .Net Blazor framework, providing a robust and interactive user interface.",
                "Frontend: Developed using the .Net Blazor framework, providing a robust and interactive user interface.UI Components: Utilized MudBlazor for the material design components, ensuring a modern and responsive design.",
                "Backend: Powered by a .Net Core API, ensuring high performance and scalability."
            ],
            Benifit : [
                "Improved Decision-Making: Enables data-driven decisions with real-time insights.",
                "Enhanced Monitoring: Helps in monitoring key metrics and KPIs efficiently.",
                "Customization: Allows users to tailor the dashboard according to their specific needs."
            ], 
            imgUrl:"https://blog.streamlit.io/content/images/2022/11/real-time-live-dashboard.svg",
            Conclusion : "The Live Data Representation Dashboard is your ultimate solution for real-time data visualization and monitoring. Its dynamic and interactive design, powered by .Net Blazor and MudBlazor, provides immediate insights into critical metrics, enabling informed decision-making. This dashboard is not just about data; it's about clarity, precision, and actionable intelligence. By integrating this tool, organizations can stay ahead of the curve, making swift, data-driven decisions that propel growth and innovation. Unlock the power of real-time data and transform how you perceive and act on information."
        },
        {
            name: "Portfolio Website", 
            Desc : "The Portfolio Website is a personal showcase designed to highlight projects, skills, and experiences. Developed using React, this website provides a professional and interactive platform to present one's work and capabilities.", 
            Type:"Web Project",
            Technology : [
                "Frontend: Developed using React, offering a highly interactive and dynamic user experience.",
            ],
            Benifit : [
                "Professional Presentation: Provides a professional platform to showcase work and skills.",
                "User Engagement: Engages visitors with interactive elements and responsive design.",
                "Easy Communication: Facilitates easy communication with potential clients or employers."
            ], 
            imgUrl:"https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg",
            Conclusion : "Your Portfolio Website is more than just an online presence; it's your digital persona, showcasing your skills, projects, and professional journey. Developed using React, it offers a sleek, modern, and responsive design that captivates visitors and leaves a lasting impression. This portfolio is a testament to your expertise and dedication, providing a platform for potential clients and employers to explore your work in depth. By presenting your projects and skills in such a compelling way, you set yourself apart from the competition. Elevate your professional brand and make your mark with this stunning portfolio website."
        }
    ]
    const navigate = useNavigate();
    const redirect = (Dt)=>{
        navigate('detatils', { state : {Dt}});
    };
    return(
     <>
     <Container className="xxl">
        <Row>
            {data.map((item)=>{
                return(
                    <Col xs={12} md={3}>
                        <div className={`card ${Pcss.card}`}>
                            <Image src={item.imgUrl} alt="#" fluid/>
                            <div className="card-body">
                                <h4 className={Pcss.heading}>{item.name}</h4>
                                <p className={Pcss.type}>{item.Type}</p>
                                <Button className={Pcss.btn} variant="warning" onClick={()=> redirect(item)}><FontAwesomeIcon icon={faArrowCircleRight}/> Learn More.</Button>
                            </div>
                        </div>
                    </Col>
                )
            })}
        </Row>
    </Container>
     </>
    );
}
export default Projects;