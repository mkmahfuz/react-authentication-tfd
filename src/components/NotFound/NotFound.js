import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <div style={{textAlign:'center',margin:'10rem'}}>
            <h1>File Not found or Invalid path.. </h1>
            <h2>Please Try again with valid data. </h2>
            <h1>Thanks</h1>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default NotFound;