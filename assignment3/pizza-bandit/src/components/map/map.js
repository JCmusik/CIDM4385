import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN
});

class Mapbox extends Component {
    state = {
        lat: '',
        lng: '',
        mapstyle: 'light',
        geolocerror: ''

    }

    componentDidMount() {
        this.setCurrentLocation();
    }

    setCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState(() => {
                    return {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                }
                );
            });
        } else {
            const geolocerror = '[blocked] Access to geolocation was blocked over insecure connection to http://localhost:3000';
            this.setState({ geolocerror });
        }
    }
    render() {
        const { geolocerror, lat, lng, mapstyle } = this.state;
        return (
            <div className="container map" >
                <p className="bg-danger">{geolocerror}</p>
                <Map
                    style={`mapbox://styles/mapbox/${mapstyle}-v9`}
                    center={[lng, lat]}
                    containerStyle={{
                        height: "400px",
                        width: "100%"
                    }}>
                    <Layer type="symbol"
                        id="marker"
                        layout={{ "icon-image": "marker-15" }}
                    >
                        <Feature coordinates={[lng, lat]} />
                    </Layer>
                </Map>
            </div >
        )
    }
}

export default Mapbox;