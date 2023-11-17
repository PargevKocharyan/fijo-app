import React from 'react';

const ButtonBlack = ({ click, text }) => {
    return (
        <button onClick={click} className="bg-background text-black font-semibold hover:border py-2 px-4 rounded">
            {text}
        </button>
    );
};

export default ButtonBlack;