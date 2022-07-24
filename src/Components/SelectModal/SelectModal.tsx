import React, {useState} from 'react';
import DropDown from '../DropDown/DropDown';
import Learn from '../Learn/Learn';
import Category from './Category/Category';
import data from '../../Data/data';
import { debounce } from '../../Utils';
import './select-modal.css';
import SelectedItem from './SelectedItem/SelectedItem';
import { accessModifier, item } from '../../types';

interface Props {
    closeModal: Function;
    addInvitedPeople: Function;
}

interface selected {
    [key: string]: item
}

const SelectModal:React.FC<Props> = ({closeModal, addInvitedPeople}) => {
    let access = accessModifier.FULL_ACCESS;
    const sortedPeople = data.people.sort((a, b ) => a.name.localeCompare(b.name)).filter((a) => a.added === false);
    const sortedCategory = data.category.sort((a, b ) => a.name.localeCompare(b.name)).filter((a) => a.added === false);
    console.log(sortedPeople);

    const [suggestedNames, setSuggestedNames] = useState([sortedPeople[0], sortedPeople[1]]);
    const [suggestedCategories, setSuggestedCategories] = useState([sortedCategory[0], sortedCategory[1]]);
    const [selectedValues, setSelectedValues] = useState({} as selected);


    const overlayClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        if((e.target as HTMLDivElement).id === "overlay"){
            closeModal();
        }
    };

    const itemOnClick = (e: React.MouseEvent<HTMLUListElement>) => {
        let data = JSON.parse(e.currentTarget.dataset.value || '');
        setSelectedValues({...selectedValues, [data.name]: data});
        document.getElementById('select-modal-input')?.focus();
    }

    const removeSelected = (name: string) => {
        delete selectedValues[name];
        setSelectedValues({...selectedValues});
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === ''){
            setSuggestedNames([sortedPeople[0], sortedPeople[1]]);
            setSuggestedCategories([sortedCategory[0], sortedCategory[1]]);
        }else {
            const regex = new RegExp(`^${e.target.value}`, 'i');
            setSuggestedNames(sortedPeople.filter(people => regex.test(people.name)));
            setSuggestedCategories(sortedCategory.filter(category => regex.test(category.name)));
        }
    };

    const accessChangeHandler = (val: string) => access = val as accessModifier;

    const onInviteClick = () => {
        let invitedPeople = Object.values(selectedValues).map((selectedVal) => ({
            displayIcon: selectedVal.displayIcon,
            name: selectedVal.name,
            description: selectedVal.description,
            added: true,
            access: access
        }));
        addInvitedPeople(invitedPeople);
        closeModal();
    }

    return (
        <div id="overlay" className="overlay" onClick={(e) => overlayClickHandler(e)}>
            <div className="select-modal">
                <div className="select-modal__header">
                    <div className="select-modal__header__input">
                        {
                            Object.keys(selectedValues).map(
                                (val) => <SelectedItem name={val} key={val} removeSelected={removeSelected}/>
                            )
                        }
                        <input
                            id='select-modal-input'
                            className="select-modal__header__text" 
                            placeholder={Object.keys(selectedValues).length > 0 ? '' : 'Search emails, names or groups'}
                            onChange={(e) => debounce(onChangeHandler, 500)(e)}
                        />
                    </div>
                    <DropDown 
                        defaultValue={access}
                        options={['Full access', 'Can edit', 'Can view', 'No access']}
                        onChangeHandler={accessChangeHandler}
                    />
                    <button onClick={onInviteClick}>Invite</button>
                </div>
                <div className="select-modal__options">
                    {suggestedNames.length > 0 ?
                        <Category 
                            categoryName='Select a person'
                            items={suggestedNames}
                            itemClickHandler={itemOnClick}
                        />
                    :
                        <></>
                    }
                    {suggestedCategories.length > 0 ?
                        <Category 
                            categoryName='Select a group'
                            items={suggestedCategories}
                            itemClickHandler={itemOnClick}
                        />
                    :
                        <></>
                    }
                </div>
                <Learn />
            </div>
        </div>
    )
}

export default SelectModal;