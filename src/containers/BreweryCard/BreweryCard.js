import React from 'react';

const BreweryCard = ( props ) => { 
    let brewery = props.brewery;

    return (
        <li>{ brewery.name } / { brewery.type } / 
                <a href={ brewery.website_url } target="_blank" rel="noopener noreferrer">Website URL</a></li>
    );
};

export default BreweryCard;