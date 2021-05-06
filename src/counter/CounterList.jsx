import React from "react";
import CounterItem from './CounterItem'
import CounterControl from './CounterControl'


export class CounterList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counters: [{
                id: 1,
                count: 0,
                name: "counter -one",
                color: "blue"

            },
            {
                id: 2,
                count: 0,
                name: "counter -two",
                color: "gray"

            },
            {
                id: 3,
                count: 0,
                name: "counter -three",
                color: "yellow"

            }],
            selectedCounter: 1
        }
    }
    onCounterSelect = (selectedCounterId) => {
        this.setState({
            selectedCounter: selectedCounterId
        })
    }
    incrementCount = () => {

        this.setState({
            counters:
                this.state.counters.map((c) => c.id === this.state.selectedCounter ? { ...c, count: ++c.count } : c)
        })
    }

    decrementCount = () => {
        this.setState({
            counters:
                this.state.counters.map((c) => c.id === this.state.selectedCounter ? { ...c, count: --c.count } : c)
        })
    }



    render() {
        return (
            <>
                <div className='card-list-wrapper'>
                    {this.state.counters.map((counter) => {
                        return <CounterItem
                            key={counter.id}
                            counterInfo={counter}
                            selectedCounter={this.state.selectedCounter}
                            onCounterClick={this.onCounterSelect} />
                    })}
                </div>
                <CounterControl
                    onIcrementButtonClick={this.incrementCount}
                    onDecrementButtonClick={this.decrementCount}

                />
            </>
        )
    }
}


// export default CounterList