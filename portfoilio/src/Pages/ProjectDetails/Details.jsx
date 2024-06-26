import { useLocation, useNavigate } from "react-router-dom";
import Dcss from "./Details.module.css";
import { Button, Col, Container, Image, Row, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

function Details () {
    const location = useLocation();
    const navigate = useNavigate();
    const {Dt} = location.state || {};
    return(
        <>
          <Container>
            <Row className="justify-content-evenly">
                <Col xs={12} md={12}>
                    <div>
                        <Image src={Dt.imgUrl} fluid/>
                    </div>
                </Col>
                <Col xs={12} md={12}>
                  <Stack gap={3}>
                    <h1 className={Dcss.Heading}>{Dt.name}</h1>
                    <h4 className={Dcss.Heading}>Project Type - {Dt.Type}</h4>
                    <h4 className={Dcss.text}>{Dt.Desc}</h4>
                    <div>
                        <h4 className={Dcss.text}>Technology</h4>
                        {Dt.Technology.map((item)=> {
                            return(
                                <ul>
                                <li><h6 className={Dcss.text}>{item}</h6></li>
                            </ul>
                            )
                        })}
                    </div>
                    <div>
                        <h4 className={Dcss.text}>Benifit</h4>
                        {Dt.Benifit.map((item)=> {
                            return(
                                <ul>
                                <li><h6 className={Dcss.text}>{item}</h6></li>
                            </ul>
                            )
                        })}
                    </div>
                    <h4 className={Dcss.text}>{Dt.Conclusion}</h4>
                  </Stack>
                </Col>
                <Col xs={12} md={2}>
                    <Button className={Dcss.Button} variant="warning" onClick={()=> navigate(-1)}><FontAwesomeIcon icon={faBackward}/> Go Back</Button>
                </Col>
            </Row>
          </Container>
        </>
    )
}

export default Details;