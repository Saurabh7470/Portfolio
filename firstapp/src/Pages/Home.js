import { Carousel, Col, Container, Row } from "react-bootstrap";
import item3 from '../Images/Homepack/Corsoler3.jpeg';
import { useEffect, useState } from "react";
import NewsCard from './Components/NewsCard';

function Home(){

    const [LatestNews, setLatestNews] = useState([]);
    // const [auther, title, description, url, urlToImage, publishedAt] = LatestNews;
     async function GetLatestnews(){
        const requestedUrl = "https://newsapi.org/v2/everything?q=in&apiKey=e780c437a3f6462d9234ff6cb17aeb34";
        const response = await fetch(requestedUrl);
        const jsonResponse = await response.json();
        setLatestNews(jsonResponse.articles);
     }

     useEffect(()=>{
          GetLatestnews();
     },[]);
    return(
        <>
          <Container className="mt-10">
                <Row>
                    <Col xs={12} md={12}>
                        <Carousel>
                            <Carousel.Item interval={1000}>
                            <img src={item3} className="fluid" alt="3"/>
                                <Carousel.Caption>
                                <h5 style={{color:"black", fontFamily:"fantasy"}}>We Belive that everyone should know the truth.</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                            <img src={item3} className="fluid" alt="3"/>
                                <Carousel.Caption>
                                    <h5 style={{color:"black", fontFamily:"fantasy"}}>Number 1 Choice since 25 years.</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                              <img src={item3} className="fluid" alt="3"/>
                                <Carousel.Caption>
                                <h5 style={{color:"black", fontFamily:"fantasy"}}>Always avaliable to get Uptodate.</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col xs={12} md={12}>
                         <Container className="mt-3 sm">
                                <h5 style={{fontFamily:"sans-serif", textAlign:"center", fontWeight:"bolder", padding:"5px"}}>Letest News</h5>
                           {/* {
                               LatestNews.map((newsitem , index) => { */}
                                <NewsCard newsitem={LatestNews}/>
                               {/* })
                           } */}
                         </Container>
                    </Col>
                </Row>
          </Container>
        </>
    );
}

export default Home;