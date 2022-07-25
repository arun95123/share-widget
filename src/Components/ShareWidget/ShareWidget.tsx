import React from 'react';
import Learn from '../Learn/Learn';
import ShareToWeb from './ShareToWeb/ShareToWeb';
import AddTarget from './AddTarget/AddTarget';

import './share-widget.css';
import { inputData } from '../../types';

const ShareWidget:React.FC<{data: inputData}> = ({data}) => {
    return(
        <div className="share-widget">
            <ShareToWeb />
            <AddTarget data={data}/>
            <Learn showCopy/>
        </div>
    )
}

export default ShareWidget; 