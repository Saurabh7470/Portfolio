import { Button, Card, CardBody, CardFooter, CardHeader, CardImg, Col, Row } from "react-bootstrap";
import Imgicon from '/project/firstapp/src/Images/Assest/NullIcon.png';

function NewsCard({newsitem}){
    return(
            <>
                <Row>
                        {
                            newsitem.slice(0, 16).map((item) => (
                                <Col xs={12} md={3} lg={3}>
                                    <Card className="m-2" style={{border: "2px solid green"}}>
                                        <CardImg src={item.urlToImage != null ? item.urlToImage : Imgicon} style={{maxHeight: "150px"}}/>
                                        <CardHeader className="bg-secondery" style={{color:"black"}}>
                                            <h5>{item.title.substring(0, 10, ' ')}</h5>
                                        </CardHeader>
                                        <CardBody>
                                           <p>{item.description.substring(0, 40) + "..." }</p>
                                        </CardBody>
                                        <CardFooter>
                                            <caption>
                                                {/* {item.author} <br/> */}
                                                {/* {item.publishedAt} */}
                                            </caption>
                                            <Button variant="primary" href={item.url} target="_blank">View More</Button>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            ))
                        }
                </Row>
            </>
        );
}

export default NewsCard;