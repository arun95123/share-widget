import React, {useState, useRef} from 'react';
import Arrow from '../../Images/dropdown.svg';
import './drop-down.css';

interface Props {
    defaultValue: string;
    options: string[];
    onChangeHandler?: Function;
};

const DropDown:React.FC<Props> = ({defaultValue, options, onChangeHandler}) => {
    const [displayValue, setValue] = useState(defaultValue);
    const [showCustomDropDown, toggleCustomDropDown] = useState(false);
    const [showDropDown, displayDropDown] = useState(true);
    const selectRef = useRef<HTMLSelectElement>(null);


    const onCustomClick = (value: string) => {
        setValue(value);
        if(onChangeHandler){
            onSelectChange(value);
        }
        displayDropDown(true);
        toggleCustomDropDown(false);
    };

    const onSelectChange = (val: string) => {
        setValue(val);
        if(onChangeHandler){
            onChangeHandler(val);
        }
    }

    const mouseClick = (e:React.MouseEvent<HTMLSelectElement> | React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault();
        displayDropDown(false);
        toggleCustomDropDown(true);
    }

    return (
        <div className="drop-down">
                {showDropDown ? 
                    <div className="native-drop-down">
                        <select
                            ref={selectRef}
                            onChange={(e) => onSelectChange(e.target.value)}
                            value={displayValue}
                            onClick={mouseClick}
                            onMouseDown={(e) =>  e.preventDefault()}
                        >
                            {options.map((value) => (
                                <option key={value}>{value}</option>
                            ))}
                        </select>
                        <img src={Arrow} alt='dropdown' onClick={mouseClick}/>
                    </div>

                    :
                    <div className="custom-drop-down" onClick={() => toggleCustomDropDown(!showCustomDropDown)}>
                        <span>{displayValue}</span>
                        <img src={Arrow} alt='dropdown' />
                        {showCustomDropDown ? 
                            <div className="custom-drop-down__options">
                                {options.map((value) => (
                                    <ul key={value} onClick={() => onCustomClick(value)} >{value}</ul>
                                ))}
                            </div>
                            :
                            <></>
                        }
                    </div>
                }
        </div>
    );
}

export default DropDown;