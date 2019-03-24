import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import PizzaPlace from './pizzaPlace'

class PizzaPlaces extends Component {
    state = {
        pizza_place_list: [],
        lat: '',
        lng: '',
        selectPlace: [],
        randomPlace: [],
        redirect: false
    }

    componentWillReceiveProps = () => {
        let lat = this.props.lat;
        let lng = this.props.lng;
        this.setState({
            lat,
            lng
        });
        console.log("Pizza Places: ", `Lat: ${lat} Lng: ${lng}`);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        /*so we don't update on every little change, just check to see
        if lat or lon changed */
        if (this.props.lat !== prevProps.lat || this.props.lng !== prevProps.lng) {

            console.log("Pizza Places: ", `Previous Lat: ${prevProps.lat} and Prevous Lon:${prevProps.lng}`);
            console.log("Pizza Places: ", `Current Lat: ${this.props.lat} and Current Lon:${this.props.lng}`);

            //make rest call
            this.getPizzaPlacesFromHereAPI();
        }

    }

    getPizzaPlacesFromHereAPI() {

        const here_api_url = "https://places.cit.api.here.com/places/v1/autosuggest?";
        const here_api_at = `at=${this.props.lat},${this.props.lng}&`;
        const here_api_q = "q=pizza&";
        const here_api_app_id = `app_id=${process.env.REACT_APP_HERE_API_APP_ID}&`;
        const here_api_app_code = `app_code=${process.env.REACT_APP_HERE_API_APP_CODE}`;

        //the built-in fetch API will make the REST/AJAX call for us: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch    
        fetch(here_api_url + here_api_at + here_api_q + here_api_app_id + here_api_app_code)
            .then((response) => {
                //call HERE API and get returned list
                return response.json();
            }
            )
            //filter down to response that have locations (lat/lon)
            .then((responseAsJson) => {

                //use the JavaScript filter method - https://www.w3schools.com/jsref/jsref_filter.asp
                const filtered = responseAsJson.results.filter((result) => {
                    //this checks to see if this record has a position array
                    return result.position;

                });

                //return the filtered results
                return filtered;

            })
            //receive the promise response returned as a JSON object
            .then((filtered) => {

                this.setState(() => {
                    return {
                        pizza_place_list: filtered,
                    }
                }
                );

                return filtered;
            })
            .then(() => {

                const places = this.state.pizza_place_list;

                //get a random pizza place and set the parent state with it            
                if (places.length > 0) {
                    const randomPlace = this.props.sendRandomPlace(places[Math.floor(Math.random() * places.length)]);

                    this.setState({
                        randomPlace
                    });
                }

                this.state.pizza_place_list.forEach((pizza_place) => {
                    // const pizzalocation = pizza_place.title + ' ' +
                    //     pizza_place.vicinity + ' ' +
                    //     pizza_place.category;

                }
                );
            })
            .catch(error => console.error(error));
    }

    handleSelectPlace = (e) => {
        const pizzaShop = e.target.id;
        const selection = this.state.pizza_place_list;
        const randomselect = this.props.randomPlace;

        const selectedPlace = selection.find(s => s.id === pizzaShop);

        (selectedPlace === []) ? this.props.selectedPlace(randomselect) : this.props.selectedPlace(selectedPlace);

        console.log("Sel " + selectedPlace + " Rand " + randomselect);
        this.setState({
            redirect: true
        });
    }

    render() {
        const places = this.state.pizza_place_list;
        if (this.state.redirect === true) { return <Redirect to='/home' /> };
        return (
            <React.Fragment>
                <h5 className="bg-secondary p-3 text-white">Click the title of a nearby pizza shop below to deliver your pizza or<br />
                    Click <button className="btn btn-sm btn-primary" onClick={this.handleSelectPlace}>Here</button> and we'll randomly select one for you.</h5>
                <div>
                    <h1>{this.props.title}</h1>
                    <div className="card-columns">
                        {places.map((place) =>
                            <PizzaPlace key={place.id}
                                placedata={place}
                                selectPlace={this.handleSelectPlace} />
                        )}
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default PizzaPlaces;