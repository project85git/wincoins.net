import React from 'react';

const GlobalButton = ({
    height = '50px',          // Default height
    width = '150px',          // Default width
    bgColor = 'green',  // Default background color
    textColor = 'white',  // Default text color
    text = 'Click Me',
    fontWeight="bold",        // Default button text
    onClick,     
    borderRadius="8px"
                // Function for onClick event
}) => {
    return (
        <button
            style={{borderRadius:borderRadius, height, width,backgroundColor:bgColor,color:textColor,fontWeight:fontWeight}}
            className={` px-4 w-full py-3  shadow-md`}
            onClick={onClick}
            >
            {text}
        </button>
    );
};

export default GlobalButton;
