import { Col, Container, Image, OverlayTrigger, ProgressBar, Row, Stack, Tooltip } from "react-bootstrap";
import "../Skills/Skills.css";

const Skills = () => {
    const data = [
        {name : "Java", rate : 90,icon : "https://symbols.getvecta.com/stencil_25/40_java.bc46b9254c.svg"},
        {name : "React", rate : 80,icon:"https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png"},
        {name : "C#", rate : 90,icon:"https://static-00.iconduck.com/assets.00/c-icon-455x512-nnvx09v8.png"},
        {name : "SQL", rate : 90,icon:"https://media.istockphoto.com/id/1491692414/vector/an-icon-design-of-database-network-in-trendy-style-easy-to-us-icon.jpg?s=612x612&w=0&k=20&c=u7g8MKbz9NPaIDEzp_7eaqZOmMtd3JZfaa-J9wBgldc="},
        {name : "Digital Marketing", rate : 80,icon:"https://www.creativefabrica.com/wp-content/uploads/2021/02/16/Icon-Marketing-Material-Outline-Style-Graphics-8671320-2-580x387.jpg"},
        {name : "Html & Css", rate : 90,icon:"https://cdn.pixabay.com/photo/2017/03/30/13/33/html-2188441_1280.png"}
    ]

    return(
     <>
     <div className="heading">
         <h3>Skills</h3>
     </div>
     <Container className="skill-section">
        <Row>
            {data.map((item)=>{
                return(
                    <Col xs={12} md={4}>
                        <div className="containt">
                            <Stack>
                                <Image src={item.icon} alt="#" fluid className="logo"/>
                                <h3>{item.name}</h3>
                                <span>
                                    <OverlayTrigger placement="bottom" delay={{show:200, hide:300}} overlay={<Tooltip>{item.rate+'%'}</Tooltip>}>
                                            <ProgressBar now={item.rate} variant="info"/>
                                    </OverlayTrigger>
                                </span>
                            </Stack>
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

export default Skills;