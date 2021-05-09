import React from "react";
import TaskItem from './TaskItem'

export default class TaskList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [
                {
                    id: 1,
                    meetingWith: 'Meeting with Ms.Bonnie from Themesberg LLC',
                    time: '10.00 AM',
                    status: 'Done',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.'

                },
                {
                    id: 2,
                    meetingWith: 'Meeting with Ms.Bonnie from Themesberg LLC',
                    time: '10.00 AM',
                    status: 'In progess',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.'

                },
                {
                    id: 3,
                    meetingWith: 'Meeting with Ms.Bonnie from Themesberg LLC',
                    time: '10.00 AM',
                    status: 'In progess',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.'

                },
                {
                    id: 4,
                    meetingWith: 'Meeting with Ms.Bonnie from Themesberg LLC',
                    time: '10.00 AM',
                    status: 'In progess',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.'

                },
                {
                    id: 5,
                    meetingWith: 'Meeting with Ms.Bonnie from Themesberg LLC',
                    time: '10.00 AM',
                    status: 'In progess',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.'

                },
                {
                    id: 6,
                    meetingWith: 'Meeting with Ms.Bonnie from Themesberg LLC',
                    time: '10.00 AM',
                    status: 'waiting',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.'

                },
                {
                    id: 7,
                    meetingWith: 'Meeting with Ms.Bonnie from Themesberg LLC',
                    time: 'waiting',
                    status: 'Done',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.'

                },
                {
                    id: 8,
                    meetingWith: 'Meeting with Ms.Bonnie from Themesberg LLC',
                    time: '10.00 AM',
                    status: 'waiting',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.'

                }

            ]

        }

    }




    render() {
        return (
            <>
                <div className="Task-content">
                    {this.state.tasks.map((task) => {
                        return <TaskItem
                            key={task.id}
                            taskInfo={task}
                        />
                    })
                    }
                </div>
            </>

        )
    }
}
