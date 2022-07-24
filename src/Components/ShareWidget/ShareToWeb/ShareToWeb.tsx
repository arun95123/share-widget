import React from 'react';
import WebShare from '../../../Images/web-share.svg';
import './share-to-web.css';

const ShareToWeb = () => {
    return(
        <div className="share-widget__web">
            <img src={WebShare} alt="decorative" className="share-widget__web__logo" />
            <div className="share-widget__web__text">
                <h6>Share to Web</h6>
                <p>Publish and share link with anyone</p>
            </div>
            <label className="toggler">
                <input type="checkbox" /> 
                <span className="slider" />
            </label>
        </div>
    )
}

export default ShareToWeb;