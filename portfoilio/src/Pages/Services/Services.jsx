import { Card, Col, Container, Image, Row, Stack } from "react-bootstrap";
import Scss from "./Services.module.css";

function Services(){
    const services = [
        {name:"Web Development", icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBBOk2ba7RczJ2ralV_MgtYdtpUoRvBF1u7Q&s", desc:"Building responsive, high-performance web applications using the latest technologies, Prioritizing user experience with intuitive and engaging interfaces."},
        {name:"Custom Software Development", icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPD2NQHKkVamg2ury29aQWJ751FrN02jm2lA&s", desc:"Ensuring your software can grow with your business, Crafting software that perfectly fits your specific requirements."},
        {name:"Mobile App Development", icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Pz2lCCZpaWsx2LqfMIa9c-opAEZhQiF_GQ&s", desc:"Creating mobile apps for both iOS and Android,Ensuring apps are fast, reliable, and visually appealing."},
    ]
    return(
       <>
        <Container className={Scss.section}>
            <Row>
            {services.map((item)=> {
                return(
                    <Col xs={12} md={4}>
                        <Card className={Scss.card}>
                            <Card.Body>
                                <Stack gap={2}>
                                    <div className={Scss.logo}>
                                        <Image src={item.icon} alt="#" fluid className={Scss.logoimg}/>
                                    </div>
                                    <h4>{item.name}</h4>
                                    <p>{item.desc}</p>
                                </Stack>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })
        }
            </Row>
        </Container>
       </>
    )
}

export default Services;