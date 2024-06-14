import { Col, Container, Image, OverlayTrigger, ProgressBar, Row, Stack, Tooltip } from "react-bootstrap";
import "../Skills/Skills.css";

const Skills = () => {
    const data = [
        {name : "Java", rate : 90,icon : "https://symbols.getvecta.com/stencil_25/40_java.bc46b9254c.svg"},
        {name : "React", rate : 80,icon:"https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png"},
        {name : "C#", rate : 90,icon:"https://static-00.iconduck.com/assets.00/c-icon-455x512-nnvx09v8.png"},
        {name : "SQL", rate : 90,icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSHGp8eKSFYl0tk-Kg0I-0xk0rZHGeKkn6Ww&s"},
        {name : "Digital Marketing", rate : 80,icon:"https://static.thenounproject.com/png/3315575-200.png"},
        {name : "Html & Css", rate : 90,icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dothDxoTRFM8XuLvaqJuZ544lsq2q9yJMg&s"}
    ]

    return(
     <>
     <Container className="skill-section">
        <Row>
            {data.map((item)=>{
                return(
                    <Col xs={12} md={4}>
                        <div className="containt">
                            <Stack>
                                <Image src={item.icon} alt="#" fluid className="logo"/>
                                <hp>{item.name}</hp>
                                <span>
                                    <OverlayTrigger placement="bottom" delay={{show:200}} overlay={<Tooltip>{item.rate+'%'}</Tooltip>}>
                                            <ProgressBar now={item.rate} variant="info" style={{height:"8px"}}/>
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