import React, { Component } from 'react';
import TopBar from './TopBar';
import TaskItem from './TaskItem';
import TaskFooter from './TaskFooter';

export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    id: 1,
                    title: 'Meeting with Ms.Bonnie from Themesberg LLC',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                    status: 'Done',
                    time: '10:00 AM'
                },
                {
                    id: 2,
                    title: 'Meeting with Ms.Bonnie from Themesberg LLC',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                    status: 'In Progress',
                    time: '11:00 AM'
                },
                {
                    id: 3,
                    title: 'Meeting with Ms.Bonnie from Themesberg LLC',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                    status: 'In Progress',
                    time: '10:30 AM'
                },
                {
                    id: 4,
                    title: 'Meeting with Ms.Bonnie from Themesberg LLC',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                    status: 'Done',
                    time: '11:30 AM'
                },
                {
                    id: 5,
                    title: 'Meeting with Ms.Bonnie from Themesberg LLC',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                    status: 'Waiting',
                    time: '12:00 PM'
                },
                {
                    id: 6,
                    title: 'Meeting with Ms.Bonnie from Themesberg LLC',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                    status: 'Waiting',
                    time: '02:00 PM'
                }

            ]
        };
    }

    render() {
        return (
            <>
                <TopBar />
                <div className="task-wrapper border bg-white shadow-sm rounded mx-4">
                    {this.state.tasks.map((task) => {
                        return <TaskItem key={task.id}
                            taskInfo={task} />;
                    })}
                    <TaskFooter />
                </div>

            </>
        )
    }
}