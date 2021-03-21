import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import bgImage from '../../images/Background/bg-city-2.jpg';
import TransportAll from '../TransportAll/TransportAll';

import './Home.css';


const Home = () => {
    // const homeStyle = {
    //     backgroundImage: 'url(' + bgImage + ')',
    //     backgroundRepeat: 'no-repeat',
    //     // backgroundSize: 'contain',
    //     backgroundSize: 'cover',
        
    // }

    return (
        <div >
         

            <TransportAll></TransportAll>

           
        </div>
    );
};

export default Home;