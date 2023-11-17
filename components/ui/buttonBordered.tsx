import React from 'react';

const ButtonBlack = ({ click, text }) => {
    return (
        <button onClick={click} className="bg-white hover:bg-[#c5c5c5] text-black font-semibold py-2 px-4 border border-black  rounded">
            {text}
        </button>
    );
};

export default ButtonBlack;