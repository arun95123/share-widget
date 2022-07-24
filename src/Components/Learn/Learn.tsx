import React from 'react';
import Question from '../../Images/learn.png';
import Link from '../../Images/link.svg';

import './learn.css';

interface Props {
    showCopy?: boolean;
}

const Learn:React.FC<Props> = ({showCopy}) => {
    return(
        <div className="share-widget__learn">
            <div className="share-widget__container">
                <img src={Question} alt="decorative" className="share-widget__learn__image"/>
                <span className="share-widget__learn__text">learn about sharing</span>
            </div>
            {showCopy ? 
                <div className="share-widget__container">
                    <img src={Link} alt="decorative" className="share-widget__learn__image"/>
                    <span className="share-widget__learn__copy">Copy link</span>
                </div>
            :
                <></>
            }
        </div>
    )
}

export default Learn; 