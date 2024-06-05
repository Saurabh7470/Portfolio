import { Container, Image } from "react-bootstrap";
import ProImg from '../Images/wallpaper.jpeg';
function Home(){
    return(
        <>
          <Container fluid>
              <Image src={ProImg} alt="#" rounded fluid/>
          </Container>
        </>
    )
}

export default Home;