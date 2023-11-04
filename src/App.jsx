import { Outlet } from "react-router-dom";

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'



function App() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
  }
  
  export default App;
  

  // if this is done correctly, the outlet component will render the correct page based on the route