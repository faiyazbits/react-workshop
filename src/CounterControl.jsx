import React from 'react';
function CounterControl(props) {
    const {incrementCounterClick,decrementCounterClick}=props;
    return (
        <div className="margin">
            <button className="btn btn-primary" onClick={incrementCounterClick}>increment</button>
            <button className="btn btn-danger mx-1" onClick={decrementCounterClick}>decrement</button>
        </div>
    );
}
export default CounterControl;
