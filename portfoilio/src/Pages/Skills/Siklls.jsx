import { Col, Container, Image, OverlayTrigger, ProgressBar, Row, Stack, Tooltip } from "react-bootstrap";
import skcss from "./Skills.module.css";

const Skills = () => {
    const data = [
        {name : "Java", rate : 90,icon : "https://symbols.getvecta.com/stencil_25/40_java.bc46b9254c.svg"},
        {name : "React", rate : 80,icon:"https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png"},
        {name : ".Net", rate : 90,icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/456px-Microsoft_.NET_logo.svg.png"},
        {name : "SQL", rate : 90,icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSHGp8eKSFYl0tk-Kg0I-0xk0rZHGeKkn6Ww&s"},
        {name : "Digital Marketing", rate : 80,icon:"https://w7.pngwing.com/pngs/142/184/png-transparent-social-media-marketing-digital-marketing-social-media-text-service-logo.png"},
        {name : "Html & Css", rate : 90,icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dothDxoTRFM8XuLvaqJuZ544lsq2q9yJMg&s"}
    ]

    return(
     <>
     <Container className={skcss.skillsection}>
        <Row>
            {data.map((item)=>{
                return(
                    <Col xs={12} md={4}>
                        <div className={skcss.containt}>
                            <Stack gap={2}>
                                <Image src={item.icon} alt="#" fluid className={skcss.logo}/>
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