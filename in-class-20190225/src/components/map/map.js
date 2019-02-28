import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

class Map extends Component {
    componentDidMount = () => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiamNtdXNpayIsImEiOiJjanNvNWFuaWswajkzNDVwOXQyejQwbGQzIn0.xxNLUG46Y-7QspUsLShJrA';
        this.map = new mapboxgl.Map({
            container: 'map',
            center: [-101.917170, 35.183781],
            style: 'mapbox://styles/mapbox/navigation-preview-night-v2',
            zoom: 10,
        });
        this.map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        }));

    }

    componentWillUnmount = () => {
        this.map.remove();
    }

    render() {
        const style = {
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '100%'
        }


        return <div style={style} ref={el => this.mapContainer = el} />
    }
}

export default Map;