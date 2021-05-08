import React from 'react';
import User from './User';
import TopTableBar from './TopTableBar'
import TableFooter from './TableFooter'


class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: 1,
                    name: "Roy Fendley",
                    image: "src/profile-picture-1.jpg",
                    email: "info@example.com",
                    date: '10 Feb 2020',
                    verified: "Email",
                    status: "Active"

                },
                {
                    id: 2,
                    name: "Ronnie Buchanan",
                    image: "react-workshop/src/profile-picture-2.jpg",
                    email: "info@example.com",
                    date: '10 Feb 2020',
                    verified: "Email",
                    status: "pending"

                },
                {
                    id: 3,
                    name: "Scott Anderson",
                    image: "react-workshop/src/profile-picture-3.jpg",
                    email: "info@example.com",
                    date: '10 Feb 2020',
                    verified: "Email",
                    status: "Active"

                },
                {
                    id: 4,
                    name: "George Driskell",
                    image: "react-workshop/src/profile-picture-3.jpg",
                    email: "info@example.com",
                    date: '10 Feb 2020',
                    verified: "Email",
                    status: "Active"

                },
                {
                    id: 5,
                    name: "Bonnie Green",
                    image: "react-workshop/src/profile-picture-4.jpg",
                    email: "info@example.com",
                    date: '10 Feb 2020',
                    verified: "Email",
                    status: "Active"

                }
            ]
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="card card-body shadow-sm table-wrapper table-responsive">
                        <TopTableBar/>

                        {this.state.users.map((user) => {
                            return <User key={user.id}
                                         userInfo={user}
                            />;
                        })}
                        <TableFooter/>
                    </div>
                </div>
            </>
        );
    }
}

export default UserList;
