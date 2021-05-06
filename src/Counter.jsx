import React from 'react';

const getStyles = (color, id, selectedCounter) => ({
    width: "18rem",
    backgroundColor: `${color}`,
    border: selectedCounter === id ? "3px solid black" : "3px solid transparent",
    color: "black"
});

export default function Counter(props) {
    const { name, count, color, id } = props.counterInfo;
    const { selectedCounter, onCounterClick } = props;
    return (
        <div className="card"
            onClick={() => onCounterClick(id)}
            style={getStyles(color, id, selectedCounter)}>
            <div className="card-header">{name}</div>
            <div className="card-body">
                <h2 className="card-title">{count}</h2>
            </div>
        </div>
    );
}
