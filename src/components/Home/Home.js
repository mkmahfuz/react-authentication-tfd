import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import bgImage from '../../images/Background/bg-city-2.jpg';

const Home = () => {
    const homeStyle = {
        backgroundImage : 'url(' +bgImage +')',
        backgroundRepeat : 'no-repeat',
        backgroundSize : 'cover',
    }
    return (
        <div style={homeStyle}>
            <Header></Header>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <Footer></Footer>
        </div>
    );
};

export default Home;