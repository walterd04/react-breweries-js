import React, { Component } from 'react';
import BreweryInfo from '../BreweryInfo/BreweryInfo';
import 'bootstrap/dist/css/bootstrap.css';

class BreweryCard extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            brewery: this.props.brewery, 
            showBreweryInfo: false
        }
    }

    showBreweryInfo = (brewery) => { 
        this.setState({ showBreweryInfo: true });
    }

    render() {
        let brewery = this.state.brewery;

        let address = `${ brewery.street} ${ brewery.city}, ${ brewery.state } ${ brewery.postal_code } ${brewery.country }`;
        return (  
            this.state.showBreweryInfo ? 
            <div>
                <BreweryInfo brewery={ brewery } />
            </div>
            :
            <li className="text-center">
                <div className="row">
                    <div className="col-xs-3">
                        <div className="row">
                            { brewery.name }
                        </div>
                        <div className="row">
                            { brewery.type }
                        </div>
                        <div className="row">
                            { address }
                        </div>
                        <div className="row">
                            <a className="btn btn-primary btn-sm" href={ brewery.website_url } target="_blank" rel="noopener noreferrer">View Website</a>
                            <button className="btn btn-default btn-sm" onClick={() => { this.showBreweryInfo(brewery) }}>Show More Info</button>
                        </div>
                    </div>
                </div>            
            </li>
        );
    }
};

export default BreweryCard;