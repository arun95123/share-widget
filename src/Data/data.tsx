import Avatar from '../Images/Avatar.png';
import AvatarS from '../Images/Avatar.svg';
import AvatarL from '../Images/LadyAvatar.png';
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
        {
            name: "Carloine Walker",
            description: 'caroline_walker@mail.com',
            access: accessModifier.FULL_ACCESS,
            displayIcon: AvatarL,
            added: false,
        },
        {
            name: "Carl Sam",
            description: 'carl_sam@mail.com',
            access: accessModifier.FULL_ACCESS,
            displayIcon: AvatarS,
            added: false,
        },
        {
            name: "Devon Dudly",
            description: 'devon_dudly@mail.com',
            access: accessModifier.FULL_ACCESS,
            displayIcon: AvatarS,
            added: false,
        },
        {
            name: "Zack Stud",
            description: 'zack_stud@mail.com',
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
        },
        {
            name: "Operations",
            description: '20 workspace members',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
        {
            name: "Support",
            description: '35 workspace members',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
        {
            name: "Incidents",
            description: '2 workspace members',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
    ]
}

export default data;