import React from 'react';
import {useState} from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(2);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if(count === 0){return}
        setCount(count - 1);
    }
    
    
    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
};

export default Counter;  