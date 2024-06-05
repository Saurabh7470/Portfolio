import { Container } from 'react-bootstrap';
import './App.css';
import { Outlet } from 'react-router';
import Footer from './MainComponent/Footer';
import AppNavbar from './MainComponent/AppNavbar';

function App() {
  return (
    <>
      <AppNavbar/>
      <Container fluid>
        <Container className='MainContaint'>
           <Outlet/>
        </Container>
          <Footer/>
      </Container>
    </>
  );
}
export default App;
