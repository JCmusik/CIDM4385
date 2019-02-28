import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

class Map extends Component {
    state = {
        map: ''
    }
    componentDidMount = () => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiamNtdXNpayIsImEiOiJjanNvNWFuaWswajkzNDVwOXQyejQwbGQzIn0.xxNLUG46Y-7QspUsLShJrA';
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11'
        });
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