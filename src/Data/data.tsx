import Avatar from '../Images/Avatar.png';
import Oslash from '../Images/oslash.svg';
import { accessModifier } from '../types';

let data =  {
    "people": [
        {
            name: "Wade Cooper",
            displayIcon: Avatar,
            description: 'wade_cooper@mail.com',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
        {
            name: "Arlene Mccoy",
            displayIcon: Avatar,
            description: 'arlene_mccoy@mail.com',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
        {
            name: "Barly Samson",
            description: 'barley_samson@mail.com',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
    ],
    "category": [
        {
            name: "Product",
            description: '30 workspace members',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
        {
            name: "Engineer",
            description: '15 workspace members',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
        {
            name: "Everyone at OSlash",
            displayIcon: Oslash,
            description: '25 workspace members',
            access: accessModifier.CAN_EDIT,
            added: true,
        }
    ]
}

export default data;