
import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { RideContext } from '../../App';
import './Transport.css'
const Transport = (props) => {
    // console.log(props)
    const { image, name } = props.transport;
    // console.log(image)

    const history = useHistory();
    const handleClick1 = (name) => {
        const url = `/destination/${name}`;
        history.push(url);
    }

    const [rideType, setRideType ] = useContext(RideContext);
    const handleClick = (name) => {
        setRideType(name);
        const url = `/destination/`;
        history.push(url);
    }

    return (
        <Card className='trSingle'>
            <Card.Img variant='top' src={image[name]} />
            <Card.Body>
                <Button variant='primary' onClick={() => handleClick(name)}>{name.toUpperCase()}</Button>
            </Card.Body>
        </Card>

        /*
        <div className='trSingle'>
            <img src={image[name]} alt="transport"/>
            <Link to={'/destination/'+name}><p>{name.toUpperCase()}</p></Link> 
            
        </div>
        */
    );
};

export default Transport;