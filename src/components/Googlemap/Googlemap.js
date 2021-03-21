import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Googlemap = () => {

    return (
        <div style={{ height: '100%', width: '100%' }}>

            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBH0FO46BeeiNereHzqTeDE4WKonmJKLkY' /* YOUR KEY HERE */ }}
                defaultCenter={{ lat: 47.444, lng: -122.176}}
                defaultZoom={8}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>


        </div>
    );
};

export default Googlemap;