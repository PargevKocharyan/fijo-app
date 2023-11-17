import React from 'react';

const ButtonBlack = ({ click, text }) => {
    return (
        <button onClick={click} className="bg-black text-white font-semibold py-2 px-4 rounded">
            {text}
        </button>
    );
};

export default ButtonBlack;