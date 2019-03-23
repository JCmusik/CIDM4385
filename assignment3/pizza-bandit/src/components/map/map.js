import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import PizzaPlaces from './pizzaPlaces';

const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN
});

class Mapbox extends Component {
    state = {
        mapstyle: 'light',
        geolocerror: ''
    }

    componentDidMount() {
        this.setCurrentLocation();
    }

    setCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                let lat = position.coords.latitude;
                let lng = position.coords.longitude;
                this.props.setCoords(lat, lng);
            });
        } else {
            const geolocerror = '[blocked] Access to geolocation was blocked over insecure connection to http://localhost:3000';
            this.setState({ geolocerror });
        }
    }
    render() {
        const { geolocerror, mapstyle } = this.state;
        const { lat, lng, sendRandomPlace, selectedPlace } = this.props;
        return (
            <div className="container map" >
                <p className="bg-danger">{geolocerror}</p>
                <Map
                    style={`mapbox://styles/mapbox/${mapstyle}-v9`}
                    center={[lng, lat]}
                    containerStyle={{
                        height: "200px",
                        width: "100%"
                    }}>
                    <Layer type="symbol"
                        id="marker"
                        layout={{ "icon-image": "marker-15" }}
                    >
                        <Feature coordinates={[lng, lat]} />
                    </Layer>
                </Map>
                <PizzaPlaces
                    lat={lat}
                    lng={lng}
                    sendRandomPlace={sendRandomPlace}
                    selectedPlace={selectedPlace} />
            </div >
        )
    }
}

export default Mapbox;