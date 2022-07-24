import React, {useState} from 'react';
import TargetItem from './TargetItem/TargetItem';
import SelectModal from '../../SelectModal/SelectModal';
import { item } from '../../../types';
import data from '../../../Data/data';
import './add-target.css';

const AddTarget = () => {
    const [showModal, setShowModal] = useState(false);
    let sortedPeople = data.people.sort((a, b ) => a.name.localeCompare(b.name));
    let selectedPeople = sortedPeople.filter((a) => a.added === true);
    let sortedCategory = data.category.sort((a, b ) => a.name.localeCompare(b.name));
    let selectedCategory = sortedCategory.filter((a) => a.added === true);
    // let [sortedPeople, setSortedPeople] = useState([] as item[]);
    // let [sortedCategory, setSortedCategory] = useState([] as item[]);

    let [invitedPeople, addInvitedPeople] = useState([...selectedPeople, ...selectedCategory] as item[]);

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
                        addInvitedPeople={(newList: item[]) => addInvitedPeople([...invitedPeople, ...newList])}
                    /> 
                : 
                    <></>
            }
        </div>
    );
};

export default AddTarget;