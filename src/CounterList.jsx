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
                    count: 0,
                    name: "c1",
                    color: "red"
                },
                {
                    id: 2,
                    count: 0,
                    name: "c2",
                    color: "blue"
                },
                {
                    id: 3,
                    count: 0,
                    name: "c3",
                    color: "green"
                }
            ],
            selectedCounter: 1
        }
    }

    onCounterSelect = (selectedCounterId) => {
        this.setState({
            selectedCounter: selectedCounterId
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
                        })
                    }
                </div>
                <CounterControl />
            </>
        );
    }
}


export default CounterList;
