import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './Destination.css';
import map from '../../images/Transport/map.png';
import Ride from '../Ride/Ride';
import rideData from '../fakeData/transport.json';
import { RideContext } from '../../App';

const Destination = (props) => {

    const [rideType] = useContext(RideContext);

    let type = rideType || 'car';
    console.log('ridetypefromDestination:', rideType)

    const [location, setLocation] = useState({
        from: '',
        to: '',
    });

    const [rides, setRides] = useState([]);
    useEffect(() => { setRides(rideData) }, []);

    const searchAgain = () => {
        setLocation('');
    }


    const handleBlur = (evnt) => {
        console.log(evnt.target.name, evnt.target.value)
        const newLocation = { ...location }; //copy object
        newLocation[evnt.target.name] = evnt.target.value; //set object property
        setLocation(newLocation)
    }
    console.log(location)

    const handleSearch = (e) => {
        //todo for google maps
        e.preventDefault();
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
                                {!location.to &&
                                    <form onSubmit={handleSearch} className='desti-form'>
                                        <div className='desti-form-inside'>

                                            <label >Pick From</label>
                                            <input type='text' name="from" placeholder='from' required onBlur={handleBlur} />
                                            <label >Pick To</label>
                                            <input type='text' name="to" placeholder='Destination' required onBlur={handleBlur} />
                                            <input type="submit" value='Search' style={{ marginTop: '1rem' }} />

                                        </div>
                                    </form>
                                }
                                {location.to &&
                                    <div className='search-result'>
                                        <div className='search-location'>
                                            <p id='search-again' onClick={searchAgain}>Search Again</p>
                                            <div id='search-from-to'>
                                                <p>From: {location.from}</p>
                                                <p>To: {location.to}</p>
                                            </div>


                                        </div>
                                        <div className='search-ride'>
                                            {
                                                rides.filter((ride) => ride.type === type).map((ride) => <Ride key={ride.id} ride={ride}></Ride>)
                                            }
                                        </div>


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