import React, { Component } from 'react';
import BreweryCard from '../BreweryCard/BreweryCard';
import './BreweryContainer.scss';
import 'bootstrap/dist/css/bootstrap.css';

class BreweryContainer extends Component {
    constructor(props) { 
        super(props);
        this.state = { 
            city: "Los Angeles", 
            breweries: [], 
            error: false, 
            loading: false
        };
    }

    getCurrentLocation = () => {

    }

    componentDidMount = () => { 
        //TODO: get current city
        this.searchForBreweries();
    }

    changeCity = (event) => { 
        this.setState({ city: event.target.value });
    }

    handleSearchClick = () => {
        this.setState({ breweries: [], loading: true });
        this.searchForBreweries();
    }

    searchForBreweries = () => { 
        const uri = `https://api.openbrewerydb.org/breweries?by_city=${this.state.city}`;

        fetch(uri)   
            .then(response => response.json())
            .then(breweries => {
                this.setState({ 
                breweries, 
                loading: false
                });
            })
            .catch(error => {
                this.setState({ error: true, loading: false });
            });
    }

    showBreweryInfo = (brewery) => {
        debugger;
    }

    render () { 
        const { breweries } = this.state;

        return (
            <div>
                <div>
                    <input type="text" className="form-control" placeholder="Enter new City" value={ this.state.city } onChange={ this.changeCity } />
                    <button type="button" className="btn btn-primary btn-sm btn-block" onClick={ this.handleSearchClick }>Search</button>
                </div>
                <div>
                    { breweries.length > 0 ? 
                    <ul className="list-style-none">
                        { breweries.map((brewery, index) => {
                            return (
                                <BreweryCard key={ brewery.id } brewery={ brewery } />
                            );
                        })}
                    </ul> : null
                    }
                </div>
                <div>BreweryMap</div>
                { this.state.loading ? 
                    <div>Loading</div> : null
                }
                { this.state.error ? 
                    <div>Error</div> : null
                }
            </div>
        )
    }
}

export default BreweryContainer;