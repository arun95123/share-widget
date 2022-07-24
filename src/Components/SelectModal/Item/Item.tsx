import React, {useRef} from 'react';
import {item} from '../../../types';
import './item.css';

interface Props extends item {
    onClickHandler: React.MouseEventHandler<HTMLUListElement>;
}

const Item:React.FC<Props> = ({name, displayIcon, description, access, added, onClickHandler}) => {
    const ref = useRef(null);

    const onKeyDownListener = (e: React.KeyboardEvent<HTMLUListElement>) => {
        if((e.key === ' ' || e.key === 'Enter') && ref.current){
            console.log((ref.current as HTMLElement).click());
        }
    }

    return(
        <ul
            ref={ref}
            className='item'
            tabIndex={0}
            onClick={onClickHandler}
            data-value={JSON.stringify({name, displayIcon, description, access, added})}
            onKeyDown={onKeyDownListener}
        >
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