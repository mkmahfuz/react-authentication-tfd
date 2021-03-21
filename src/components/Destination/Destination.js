import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './Destination.css';
import map from '../../images/Transport/map.png';
import Ride from '../Ride/Ride';
import rideData from '../fakeData/transport.json';
import { useParams } from 'react-router-dom';

const Destination = () => {
    const {type} = useParams();
    console.log('hhh',type)
    const [rides, setRides] = useState([]);

    useEffect(() => { setRides(rideData) }, []);


    const [location, setLocation] = useState({
        from: '',
        to: 'd',
    });


    const handleSearch = () => {
        console.log('search clicked');
    }
    return (
        <div>           
            <div className='destination-container'>

                <Container>
                    <Row>
                        <Col sm={4}>

                            <div className='desti-form-container'>
                                <p> from-to</p>
                                <form onSubmit={handleSearch} className='desti-form'>
                                    <div className='desti-form-inside'>

                                        <label >Pick From</label>
                                        <input type='text' name="origin" placeholder='from' required />
                                        <label >Pick To</label>
                                        <input type='text' name="destination" placeholder='Destination' required />
                                        <input type="submit" value='Search' style={{ marginTop: '1rem' }} />

                                    </div>
                                </form>
                                {location.to &&
                                    <div className='search-result'>
                                        <h1>Search result</h1>
                                        {
                                            rides.filter((ride) =>ride.type===type).map((ride)=><Ride key={ride.id} ride={ride}></Ride>)
                                        }
                                        
                                    </div>
                                }
                            </div>
                        </Col>
                        <Col sm={8}>
                            <div className='gmap'>
                                <p>map</p>
                                <img src={map} alt='googlemap'></img>
                            </div>

                        </Col>
                    </Row>
                </Container>


            </div>


         
        </div>
    );
};

export default Destination;