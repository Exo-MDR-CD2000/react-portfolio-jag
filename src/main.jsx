// import React from 'react'
import ReactDOM from 'react-dom/client'

// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvidor } from 'react-router-dom'

// Bootstrap for future use
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'


// Bring in the pages we want to route to
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Resume from './pages/Resume.jsx'
import Error from './pages/Error.jsx'



// Define the routes

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
      
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvidor router={router} />
);


