import React from 'react';
import Item from '../Item/Item';
import {item} from '../../../types';
import './category.css';

interface Props {
    categoryName: string;
    items: item[];
    itemClickHandler: React.MouseEventHandler<HTMLUListElement>;
}

const Category:React.FC<Props> = ({categoryName, items, itemClickHandler}) => {
    return(
        <div className='category'>
            <h4>{categoryName}</h4>
            {items.map((item) => 
                <Item
                    key={item.name}
                    name={item.name}
                    displayIcon={item.displayIcon}
                    description={item.description}
                    access={item.access}
                    added={item.added}
                    onClickHandler={itemClickHandler}
                />
            )}
        </div>
    );
};

export default Category;