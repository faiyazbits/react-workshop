import React from 'react';
//import CounterList from './CounterList';

export default function CounterControl(props) {
    const { onIncrementClick, onDecrementClick } = props;
    return (
        <div>
            <button className="btn btn-primary mx-1" onClick={onIncrementClick}> Increment </button>
            <button className="btn btn-danger" onClick={onDecrementClick}> Decrement </button>
        </div>
    )
}
