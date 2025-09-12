import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Navbar from './components/Navbar.jsx';
import "remixicon/fonts/remixicon.css";
import Footer from './components/Footer.jsx';
import PreLoader from './components/PreLoaderTyping.jsx';


import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreLoader />
    <div className='container mx-auto p-4'>
      <Navbar />
      <App />
      <Footer />
    
    </div>

  </StrictMode>,
);


/*import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Navbar from './components/Navbar.jsx';

/*import 'remixicon/fonts/remixicon.css'
import Footer from './components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container mx-auto px-4">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>,
); 

*/