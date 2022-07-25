import React, {useState} from 'react';
import ShareWidget from '../ShareWidget/ShareWidget';
import shareImage from '../../Images/share.svg';
import './notion.css';
import { inputData } from '../../types';

const Notion:React.FC<{data: inputData}> = ({data}) => {
    const [showShareWidget, toggleShareWidget] = useState(false);
    return(
        <div className="notion">
            <button className="share-button" onClick={() => toggleShareWidget(!showShareWidget)}>
                <span className="share-button__text">Share</span>
                <img className="share-button__image" alt="share" src={shareImage} />
            </button>
            <div>
                {showShareWidget ? <ShareWidget data={data}/> : <></>}
            </div>
        </div>
    );
};

export default Notion;