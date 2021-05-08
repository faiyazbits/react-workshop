import React from 'react';
//import CounterList from './CounterList';

export default function CounterControl(props) {
    const { onIncrementClick, onDecrementClick } = props;
    return (
        <div className="col-md-12 text-center">
            <button className="btn btn-primary me-2" onClick={onIncrementClick}> Increment </button>
            <button className="btn btn-danger me2" onClick={onDecrementClick}> Decrement </button>
        </div>
    )
}
