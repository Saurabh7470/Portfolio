import './App.css';
import { Outlet } from 'react-router';
import Footer from './MainComponent/Footer';
import AppNavbar from './MainComponent/AppNavbar';

function App() {
  return (
    <>
      <AppNavbar/>
        <Outlet/>
      <Footer/>
    </>
  );
}
export default App;
