import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const continents = ["Africa", "America", "Asia", "Europe", "Ocenia"]

const DropDown = ({ text, setText}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  }

  const selectDropDown = (i) => {
    setText(continents[i])
    toggleDropDown();
  }

  return (
    <div>
        <div 
            onClick={toggleDropDown}
            className="flex justify-between items-center cursor-pointer rounded-md shadow-xl px-6 py-3 bg-bgLight dark:bg-bgDarkHeader w-[15rem]"
        >
            <p className='text-[1rem]'>{text}</p>
            <FontAwesomeIcon icon={faChevronDown} />
        </div>
        {
            isOpen && (
                <div className="absolute mt-[0.4em] flex flex-col gap-3 transition-all ease-in-out duration-75 rounded-md shadow-xl px-6 py-3 bg-bgLight dark:bg-bgDarkHeader w-[15rem]">
                    {
                        continents.map((item, i) => (
                            <span key={i} onClick={() => selectDropDown(i)} className="cursor-pointer">{item}</span>
                        ))
                    }
                </div>
            )
        }
    </div>
  )
}

export default DropDown