import React from 'react';
import PropTypes from 'prop-types';

const Info = ({artistas}) => {

    
    if(Object.keys(artistas).length === 0) return null;

    const {strArtistThumb, strGenre,strBiographyES,strFacebook,strTwitter,strLastFMChart}= artistas;


    return (  
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Informacion del artista o banda
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="imagen artista"/>
                <p className="card-text">Género: {strGenre}</p>
                <h2 className="card-text">Biografía:</h2>
                <p className="card-text">{strBiographyES}</p>
                <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
                </a>
                    <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                    <a href={strLastFMChart} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-lastfm"></i>
                </a>
            </div>
        </div>
    );
}

Info.prototype={
    artistas: PropTypes.object.isRequired
}
export default Info;