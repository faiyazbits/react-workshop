import React from "react";
import '../App.css';


const getStyle = (color, id, selectedCounter) => ({
    backgroundColor: `${color}`,
    width: '18rem',
    color: "black",
    border: selectedCounter === id ? "3px solid black" : "3px solid transparent"
})

function CounterItem(props) {
    const { name, count, color, id } = props.counterInfo
    const { selectedCounter, onCounterClick } = props
    return (
        <div className="card"
            style={getStyle(color, id, selectedCounter)}
            onClick={() => onCounterClick(id)} >
            <div className="card-header">{name}</div>
            <div className="card-body">
                <h2 className="card-title">{count}</h2>
            </div>
        </div>
    )
}
export default CounterItem