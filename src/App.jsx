import { Outlet } from "react-router-dom";

import Nav from "./components/NavTabs.jsx";
// import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;

// if this is done correctly, the outlet component will render the correct page based on the route
