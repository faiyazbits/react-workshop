import React, { Component } from "react";
import Counter from "./Counter";

class CounterList1 extends Component {
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
            ]
        }
    }

    render() {
        return (
            <>
                <div className="card-list-wrapper">
                    {
                        this.state.counters.map((counter) => {
                            return < Counter key={counter.id}
                                counterInfo={counter} />
                        })
                    }
                </div>
            </>
        )
    }
}


export default CounterList1;