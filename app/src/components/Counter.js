import React, { useState } from 'react';

const Counter = () => {
    
    const [clicks, setClicks] = useState(0);

    function handleButtonClick() {
        setClicks(clicks + 1);
    }

    return (
        <div>
        <span>You clicked {clicks} times</span>
        <br />
        <button onClick={handleButtonClick}>Click me!</button>
        </div>
    );
};

export default Counter;