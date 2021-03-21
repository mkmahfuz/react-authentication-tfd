import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Googlemap = () => {

    return (
        <div style={{ height: '100%', width: '100%' }}>

            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAsRRIM_Jw-tU0-i83WrCI5VtEVVhCqZfo'}}
                defaultCenter={{ lat: 23.8103, lng: 90.4125}}
                defaultZoom={8}
            >
                <AnyReactComponent
                    lat={23.8103}
                    lng={90.4125}
                    text="My Marker"
                />
            </GoogleMapReact>


        </div>
    );
};

export default Googlemap;