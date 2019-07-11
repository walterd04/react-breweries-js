import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './BreweryInfo.scss';
import 'bootstrap/dist/css/bootstrap.css';

class BreweryInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brewery: this.props.brewery
        };
    }

    handleApiLoaded = (map, maps, defaultCenter) => {
        return new maps.Marker({
            position: defaultCenter, 
            map: map, 
            label: { 
                text: this.state.brewery.name
            }
        });
    }

    render() {
        let defaultCenter = { lat: parseFloat(this.state.brewery.latitude), lng: parseFloat(this.state.brewery.longitude) };

        return (
            <div style={{ height: '20rem', width: '100%' }}>
                <GoogleMapReact
                // bootstrapURLKeys={{ key: "" }} ENTER KEY HERE
                defaultCenter={ defaultCenter }
                defaultZoom={13}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps, defaultCenter)}
                />
            </div>
        );
    }
}

export default BreweryInfo;