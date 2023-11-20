import React from 'react';

const Button = ({ click, text, size, variant }) => {

    let buttonStyles = '';
    function buttonType() {
        if(variant === 'black') {
            buttonStyles = "bg-black text-white font-semibold py-2 px-4 rounded";
        } else if(variant === 'bordered') {
            buttonStyles = "bg-white hover:bg-[#c5c5c5] text-black font-semibold py-2 px-4 border border-black rounded";
        } else if(variant === "disabled") {
            buttonStyles = "bg-background text-black font-semibold hover:border py-2 px-4 rounded";
        }
    }
buttonType();

    return (
        <button onClick={click} className={buttonStyles}>
            {text}
        </button>
    );
};

export default Button;