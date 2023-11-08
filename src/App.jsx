import { Outlet } from "react-router-dom";

import Nav from "./components/NavTabs.jsx";
import Footer from "./components/Footer.jsx";
// import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="app-container">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

// if this is done correctly, the outlet component will render the correct page based on the route
