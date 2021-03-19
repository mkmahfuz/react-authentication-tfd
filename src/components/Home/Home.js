import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import bgImage from '../../images/Background/bg-city-2.jpg';
import TransportAll from '../TransportAll/TransportAll';




const Home = () => {
    const homeStyle = {
        backgroundImage: 'url(' + bgImage + ')',
        backgroundRepeat: 'no-repeat',
        // backgroundSize: 'contain',
        backgroundSize: 'cover',
        // backgroundSize: '100% 100%'
    }

    return (
        <div style={homeStyle}>
            <Header></Header>

            <TransportAll></TransportAll>

            <Footer></Footer>
        </div>
    );
};

export default Home;