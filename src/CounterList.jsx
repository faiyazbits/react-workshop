import React, { Component } from 'react';
import CounterControl from './CounterControl';
import Counter from './Counter';


export default class CounterList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counters: [
                {
                    id: 1,
                    name: 'C1',
                    color: 'red',
                    count: 0
                },
                {
                    id: 2,
                    name: 'C2',
                    color: 'blue',
                    count: 0
                },
                {
                    id: 3,
                    name: 'C3',
                    color: 'green',
                    count: 0
                }
            ],
            selectedCounter: 1
        };
    }

    onCounterSelect = (selectedCounterId) => {
        this.setState({
            selectedCounter: selectedCounterId
        })
    }

    onIncrement = () => {
        //console.log("Incremented");
        this.setState({
            counters:
                this.state.counters.map((c) => c.id === this.state.selectedCounter ? { ...c, count: ++c.count } : c)
        })
    }

    onDecrement = () => {
        //console.log("Decremented");
        this.setState({
            counters:
                this.state.counters.map((c) => c.id === this.state.selectedCounter ? { ...c, count: --c.count } : c)
        })
    }

    render() {
        return (
            <>
                <div className="card-list-wrapper">
                    {this.state.counters.map((counter) => {
                        return <Counter key={counter.id}
                            counterInfo={counter}
                            selectedCounter={this.state.selectedCounter}
                            onCounterClick={this.onCounterSelect} />;
                    })}
                </div>
                <CounterControl onIncrementClick={this.onIncrement} onDecrementClick={this.onDecrement} />
            </>
        )
    }

}

