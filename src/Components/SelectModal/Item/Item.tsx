import React from 'react';
import {item} from '../../../types';
import './item.css';

interface Props extends item {
    onClickHandler: React.MouseEventHandler<HTMLUListElement>;
}

const Item:React.FC<Props> = ({name, displayIcon, description, access, added, onClickHandler}) => {
    return(
        <ul className='item' tabIndex={0} onClick={onClickHandler} data-value={JSON.stringify({name, displayIcon, description, access, added})}>
            {displayIcon ? 
                <img className='item__image' src={displayIcon} alt='decoration' />
            :
                <div className='item__letter'>{name.slice(0,1).toUpperCase()}</div>
            }
            <div className='item__name'>{name}</div>
        </ul>
    );
};

export default Item;