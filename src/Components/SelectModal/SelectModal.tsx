import React, {useEffect, useState} from 'react';
import DropDown from '../DropDown/DropDown';
import Learn from '../Learn/Learn';
import Category from './Category/Category';
import { debounce } from '../../Utils';
import './select-modal.css';
import SelectedItem from './SelectedItem/SelectedItem';
import { accessModifier, item } from '../../types';

interface Props {
    closeModal: Function;
    addInvitedPeople: Function;
    sortedPeople: item[];
    sortedCategory: item[];
    setSortedPeople: Function;
    setSortedCategory: Function;
}

interface selected {
    [key: string]: item
}

const SelectModal:React.FC<Props> = ({closeModal, addInvitedPeople, sortedPeople, sortedCategory, setSortedPeople, setSortedCategory}) => {
    let access = accessModifier.FULL_ACCESS;

    const [suggestedNames, setSuggestedNames] = useState([] as item[]);
    const [suggestedCategories, setSuggestedCategories] = useState([] as item[]);
    const [selectedValues, setSelectedValues] = useState({} as selected);

    useEffect(() => {
        let notAddedPep = sortedPeople.filter((a) => a.added === false);
        let notAddedCat = sortedCategory.filter((a) => a.added === false);
        if(notAddedPep.length > 1){
            setSuggestedNames([notAddedPep[0], notAddedPep[1]]);
        }else if(notAddedPep.length === 1){
            setSuggestedNames([notAddedPep[0]]);
        }else {
            setSuggestedNames([]);
        }

        if(notAddedCat.length > 1){
            setSuggestedCategories([notAddedCat[0], notAddedCat[1]]);
        }else if(notAddedCat.length === 1){
            setSuggestedCategories([notAddedCat[0]]);
        }else {
            setSuggestedCategories([]);
        }
    },[sortedPeople, sortedCategory]);

    useEffect(() => {
        document.getElementById('select-modal-input')?.focus();
    },[])

    const overlayClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        if((e.target as HTMLDivElement).id === "overlay"){
            Object.keys(selectedValues).filter((a) => {
                let categoryIndex = sortedCategory.findIndex((b) => b.name === a);
                if(categoryIndex !== -1){
                    sortedCategory[categoryIndex].added = false;
                    setSortedCategory([...sortedCategory]);
                }
                let personIndex = sortedPeople.findIndex((b) => b.name === a);
                if(personIndex !== -1){
                    sortedPeople[personIndex].added = false;
                    setSortedPeople([...sortedPeople]);
                }
            });
            closeModal();
        }
    };

    const peopleItemOnClick = (e: React.MouseEvent<HTMLUListElement>) => {
        let data = JSON.parse(e.currentTarget.dataset.value || '');
        setSelectedValues({...selectedValues, [data.name]: data});
        let personIndex = sortedPeople.findIndex((a) => a.name === data.name);
        if(personIndex !== -1){
            sortedPeople[personIndex].added = true;
            setSortedPeople([...sortedPeople]);
        }
        document.getElementById('select-modal-input')?.focus();
    }

    const categoryItemOnClick = (e: React.MouseEvent<HTMLUListElement>) => {
        let data = JSON.parse(e.currentTarget.dataset.value || '');
        setSelectedValues({...selectedValues, [data.name]: data});
        let categoryIndex = sortedCategory.findIndex((a) => a.name === data.name);
        if(categoryIndex !== -1){
            sortedCategory[categoryIndex].added = true;
            setSortedCategory([...sortedCategory]);
        }
        document.getElementById('select-modal-input')?.focus();
    }

    const removeSelected = (name: string) => {
        delete selectedValues[name];
        setSelectedValues({...selectedValues});
        let categoryIndex = sortedCategory.findIndex((a) => a.name === name);
        if(categoryIndex !== -1){
            sortedCategory[categoryIndex].added = false;
            setSortedCategory([...sortedCategory]);
        }
        let personIndex = sortedPeople.findIndex((a) => a.name === name);
        if(personIndex !== -1){
            sortedPeople[personIndex].added = false;
            setSortedPeople([...sortedPeople]);
        }
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === ''){
            let notAddedPep = sortedPeople.filter((a) => a.added === false);
            let notAddedCat = sortedCategory.filter((a) => a.added === false);
            if(notAddedPep.length > 1){
                setSuggestedNames([notAddedPep[0], notAddedPep[1]]);
            }else if(notAddedPep.length === 1){
                setSuggestedNames([notAddedPep[0]]);
            }else {
                setSuggestedNames([]);
            }
    
            if(notAddedCat.length > 1){
                setSuggestedCategories([notAddedCat[0], notAddedCat[1]]);
            }else if(notAddedCat.length === 1){
                setSuggestedCategories([notAddedCat[0]]);
            }else {
                setSuggestedCategories([]);
            }
        }else {
            const regex = new RegExp(`^${e.target.value}`, 'i');
            setSuggestedNames(sortedPeople.filter(people => people.added === false).filter(people => regex.test(people.name)));
            setSuggestedCategories(sortedCategory.filter(category => category.added === false).filter(category => regex.test(category.name)));
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
    
    const inputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Tab'){
            if(e.shiftKey){
                (document.getElementsByClassName('share-widget__learn__text')[0] as HTMLElement).focus()
            }
        }
    }

    const learnKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
        if(e.key === 'Tab'){
            document.getElementById('select-modal-input')?.focus();
        }
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
                            onKeyDown={inputKeyDown}
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
                            itemClickHandler={peopleItemOnClick}
                        />
                    :
                        <></>
                    }
                    {suggestedCategories.length > 0 ?
                        <Category 
                            categoryName='Select a group'
                            items={suggestedCategories}
                            itemClickHandler={categoryItemOnClick}
                        />
                    :
                        <></>
                    }
                </div>
                <Learn onKeyDownHander={learnKeyDown}/>
            </div>
        </div>
    )
}

export default SelectModal;