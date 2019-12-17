import React from 'react'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

export class GoogleMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            houses: [
                {latitude: 52.258501, longitude: 21.087279},
                {latitude: 52.237558, longitude: 21.001527},
                {latitude: 52.266543, longitude: 21.025201},
                {latitude: 52.201123, longitude: 21.051761}]
        }
    }

    displayMarkers = () => {
        return this.state.houses.map((house, index) => {
            return <Marker key={index} id={index} position={{
                lat: house.latitude,
                lng: house.longitude
            }} onClick={() => console.log("You clicked me!")}/>
        })
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={12}
                initialCenter={{lat: 52.2297, lng: 21.0252}}
            >
                {this.displayMarkers()}
            </Map>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDzcLMN59thR2eSJOkYZ5LDBEapfyI-Oe4'
})(GoogleMap);