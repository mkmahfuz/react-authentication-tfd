import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Ride.css';
const Ride = (props) => {
    const { type, capacity, imgUrl, price } = props.ride;
    //console.log(props.ride)
    return (
        <div className='ride'>

            <Container>
                <Row>
                    <Col xs={8} >
                        <div className='ride-left'>
                        <p><img src={imgUrl} alt="transport" /></p>
                        <p style={{fontWeight:800}}>{type}</p>
                        <p><FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon><span style={{marginLeft:'.5rem'}}>{capacity}</span></p>                            
                        <p></p>
                        </div>
                        
                    </Col>
                    <Col xs={4}>
                        <p id='price'>${price}</p>
                    </Col>
                </Row>
            </Container>



        </div>
    );
};

export default Ride;