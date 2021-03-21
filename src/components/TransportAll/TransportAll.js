import React from 'react';
import Transport from '../Transport/Transport';

import bike from '../../images/Transport/bike.png';
import car from '../../images/Transport/car.png';
import bus from '../../images/Transport/bus.png';
import train from '../../images/Transport/train.png';
import { CardDeck, Col, Container, Row } from 'react-bootstrap';

const TransportAll = () => {
    const transports = [
        { image: { bike }, name: 'bike' },
        { image: { car }, name: 'car' },
        { image: { bus }, name: 'bus' },
        { image: { train }, name: 'train' },
      

        // { bike, name: 'bike' },
        // { car, name: 'car' },
        // { bus, name: 'bus' },
        // { train, name: 'train' },
        //style={{columnCount:'4'}}
    ]
    return (
        <Container>
            <Row>
                <Col>
                    <CardDeck>
                        {
                            transports.map((transport, idx) => <Transport transport={transport} key={idx}></Transport>)
                        }
                    </CardDeck>
                </Col>
            </Row>

        </Container>
        /*
        <div className='trAll'>
            {
                transport.map((transport, idx) => <Transport transport={transport} key={idx}></Transport>)
            }
        </div>
        */
    );
};

export default TransportAll;