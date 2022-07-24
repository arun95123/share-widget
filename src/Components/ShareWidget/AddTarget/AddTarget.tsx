import React, {useState, useEffect} from 'react';
import TargetItem from './TargetItem/TargetItem';
import SelectModal from '../../SelectModal/SelectModal';
import { item } from '../../../types';
import data from '../../../Data/data';
import './add-target.css';

const AddTarget = () => {
    const [showModal, setShowModal] = useState(false);
    let [sortedPeople, setSortedPeople] = useState([] as item[]);
    let [sortedCategory, setSortedCategory] = useState([] as item[]);

    let [invitedPeople, addInvitedPeople] = useState([] as item[]);

    useEffect(() => {
        let sortedPep = data.people.sort((a, b ) => a.name.localeCompare(b.name));
        let selectedPep = sortedPep.filter((a) => a.added === true);
        let sortedCat = data.category.sort((a, b ) => a.name.localeCompare(b.name));
        let selectedCat = sortedCat.filter((a) => a.added === true);
        setSortedPeople(sortedPep);
        setSortedCategory(sortedCat);
        addInvitedPeople([...selectedPep, ...selectedCat]);
    },[]);

    return(
        <div className="share-widget__add">
            <div className='share-widget__add-input' onClick={() => setShowModal(true)}>
                <div className='share-widget__add-input__text'>
                    People, emails, groups
                </div>
                <button>Invite</button>
            </div>
            {
                invitedPeople.map((invited) =>
                    <TargetItem
                        key={invited.name}
                        displayIcon={invited.displayIcon}
                        name={invited.name}
                        description={invited.description}
                        access={invited.access}
                        added={invited.added}
                    />
                )
            }
            {
                showModal ? 
                    <SelectModal 
                        closeModal={() => setShowModal(false)}
                        sortedPeople={sortedPeople}
                        sortedCategory={sortedCategory}
                        setSortedPeople={setSortedPeople}
                        setSortedCategory={setSortedCategory}
                        addInvitedPeople={(newList: item[]) => addInvitedPeople([...invitedPeople, ...newList])}
                    /> 
                : 
                    <></>
            }
        </div>
    );
};

export default AddTarget;