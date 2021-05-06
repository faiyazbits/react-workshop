import React from "react";


export default function CounterControl(props) {
    const { onIcrementButtonClick, onDecrementButtonClick } = props
    return (
        <div class="control-buttons">
            <button className="btn btn-primary"
                onClick={onIcrementButtonClick}>increment</button>
            <button className="btn btn-danger mx-1"
                onClick={onDecrementButtonClick}>decrement</button>
        </div>
    );

}