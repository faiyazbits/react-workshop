import React from 'react';
import picture from '../profile-picture-1.jpg'
import TopTableBar from './TopTableBar'
import TableFooter from './TableFooter'
import TableHead from "./TableHead";


class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: 1,
                    name: "Roy Fendley",
                    image: "picture",
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
                        <table className="table user-table table-hover align-items-center">
                            <TableHead/>

                            <tbody>
                            {this.state.users.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <div className="form-check dashboard-check">
                                                <input className="form-check-input" type="checkbox"></input>
                                                <label className="form-check-label" htmlFor="userCheck1"></label>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="#" className="d-flex align-items-center">
                                                <img src={user.image}
                                                     className="user-avatar rounded-circle me-3"></img>
                                                <div className="display-block">
                                                    <span className="fw-bold">{user.name}</span>
                                                    <div className="text-gray">{user.email}</div>
                                                </div>
                                            </a>
                                        </td>
                                        <td><span className="fw-normal">{user.date}</span></td>
                                        <td>
                            <span className="fas fa-check-circle text-success me-2">
                                {user.verified}</span>
                                        </td>
                                        <td><span className="fw-normal text-success">{user.status}</span>
                                        </td>
                                        <td><span className="icon icon-sm pt-1">
                                            <span className="fas fa-ellipsis-h icon-dark"></span> ...
                                        <span className="fas fa-times-circle text-danger ms-2" title=""
                                              data-bs-toggle="tooltip" data-bs-original-title="Delete"
                                              aria-label="Delete">x</span>
                                        </span>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                        <TableFooter/>
                    </div>
                </div>
            </>
        );
    }
}

export default UserList;
