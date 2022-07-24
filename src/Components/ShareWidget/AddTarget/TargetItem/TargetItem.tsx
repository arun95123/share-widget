import React from 'react';
import { item } from '../../../../types';
import DropDown from '../../../DropDown/DropDown';
import './target-item.css';

const TargetItem:React.FC<item> = ({displayIcon, name, description, access}) => {
    return (
        <div className="target-item">
            {displayIcon ? 
                <img src={displayIcon} alt="decorative" className="target-item__logo" />
            :
                <div className='target-item___letter'>{name.slice(0,1).toUpperCase()}</div>
            }
            <div className="target-item__text">
                <h6>{name}</h6>
                <p>{description}</p>
            </div>
            <DropDown 
                defaultValue={access}
                options={['Full access', 'Can edit', 'Can view', 'No access']}
            />
     </div>
    );
}

export default TargetItem;