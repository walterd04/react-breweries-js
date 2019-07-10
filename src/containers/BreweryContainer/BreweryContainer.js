import React, { Component } from 'react';
import BreweryCard from '../BreweryCard/BreweryCard';

class BreweryContainer extends Component {
    constructor(props) { 
        super(props);
        this.state = { 
            city: "", 
            breweries: [], 
            error: false, 
            loading: false
        };
    }

    componentDidMount = () => { 
        if (!this.state.city) this.setState({ city: "Baltimore", loading: true });

        fetch(`https://api.openbrewerydb.org/breweries?by_city=${this.state.city}`)      
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

    render () { 
        const { breweries } = this.state;

        return (
            <div>
                <div>

                </div>
                <div>
                    { breweries.length > 0 ? 
                    <ul>
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