import React from 'react';
import Banner from './Banner';
import logo from '../assets/logo-inx.png';
import Pannel from './Pannel';
import Calculate from './Calculate';
import '../styles/App.css';
import '../styles/index.css';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation()

	return (
    <div className="inx-eco-index">
        <Banner>
          <a href="https://inxserv.fr">
            <img src={logo} alt='INX Economy' link="" className='inx-eco-logo' />
          </a>
        </Banner>       
          <div className="inx-eco-body">
            <Pannel />
            <Calculate />
          </div>
          <Footer />
    </div>
	);
}

export default App