import React from 'react';
import Learn from '../Learn/Learn';
import ShareToWeb from './ShareToWeb/ShareToWeb';
import AddTarget from './AddTarget/AddTarget';

import './share-widget.css';

const ShareWidget = () => {
    return(
        <div className="share-widget">
            <ShareToWeb />
            <AddTarget />
            <Learn showCopy/>
        </div>
    )
}

export default ShareWidget; 