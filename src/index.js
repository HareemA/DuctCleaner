import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BookPage from './Components/BookNow/BookPage';
import ServicesPage from './Components/Services/ServicesPage';
import ContactPage from './Components/Contact/ContactPage';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter
} from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import PricePage from './Components/Pricing/PricePage';
import AboutPage from './Components/About/AboutPage';

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Services",
    element: <ServicesPage/>,
  },
  {
    path: "/Book",
    element: <BookPage/>,
  },
  {
    path: "/Contact",
    element: <ContactPage/>,
  },
  {
    path: "/Price",
    element: <PricePage/>,
  },
  {
    path: "/About",
    element: <AboutPage/>,
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={router}/>

    
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
