import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount]=useState(5)
    return (
        <div>
            <button onClick={()=>setCount(count*2)}>Counter</button>
        </div>
    );
};

export default Counter;