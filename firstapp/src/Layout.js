import './Layout.css'
import Footer from './MainComponents/Footer';
import { Outlet } from 'react-router-dom';
import AppBar from './MainComponents/AppBar';

function Layout() {
  return(
    <div className='App'>
      <header className='Navbar'>
        <AppBar/>
      </header>
      <div className='MainContaint'>
           <Outlet/>
      </div>
      <footer className='Footer'>
        <Footer/>   
      </footer>
    </div>
  );
}

export default Layout;