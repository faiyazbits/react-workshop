import React from 'react';
import Counter from './Counter';
import CounterControl from "./CounterControl";

class CounterList extends React.Component {
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
    OnIncrementCounter = () => {
        this.setState({
            counters: this.state.counters.filter((counter) => counter.id === this.state.selectedCounter ? {
                ...counter,
                count: ++counter.count
            } : counter)
        })
    }
    OnDecrementCounter = () => {
        this.setState({
            counters: this.state.counters.filter((counter) => counter.id === this.state.selectedCounter ? {
                ...counter,
                count: --counter.count
            } : counter)
        })

    }


    render() {
        return (
            <>
                <div className="card-list-wrapper">
                    {
                        this.state.counters.map((counter) => {
                            return <Counter key={counter.id}
                                            counterInfo={counter}
                                            selectedCounter={this.state.selectedCounter}
                                            onCounterClick={this.onCounterSelect}/>;
                        })}
                </div>
                <CounterControl incrementCounterClick={this.OnIncrementCounter}
                                decrementCounterClick={this.OnDecrementCounter}/>;
            </>
        );
    }
}


export default CounterList;
