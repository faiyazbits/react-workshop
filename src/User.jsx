import React from 'react';


function User(props) {
const {name,image,email,date,verified,status} = props.userInfo;
    return (
        <table className="table user-table table-hover align-items-center">
                    <thead>
                    <tr>
                        <th className="border-bottom">
                            <div className="form-check dashboard-check">
                                <input className="form-check-input" type="checkbox"></input>
                                <label className="form-check-label"></label>
                            </div>
                        </th>
                        <th className="border-bottom">Name</th>
                        <th className="border-bottom">Date Created</th>
                        <th className="border-bottom">Verified</th>
                        <th className="border-bottom">Status</th>
                        <th className="border-bottom">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <div className="form-check dashboard-check">
                                <input className="form-check-input" type="checkbox"></input>
                                <label className="form-check-label" htmlFor="userCheck1"></label>
                            </div>
                        </td>
                        <td>
                            <a href="#" className="d-flex align-items-center">
                                <img src={image}
                                className="user-avatar rounded-circle me-3"></img>
                            <div className="display-block">
                            <span className="fw-bold">{name}</span>
                            <div className="text-gray">{email}</div>
                            </div>
                            </a>
                        </td>
                        <td><span className="fw-normal">{date}</span></td>
                        <td>
                            <span className="fas fa-check-circle text-success me-2">
                                {verified}</span>
                        </td>
                        <td><span className="fw-normal text-success">{status}</span></td>
                        <td>
                            <div className="btn-group">
                                <button className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span
                                    className="icon icon-sm pt-1"><span className="fas fa-ellipsis-h icon-dark"></span>
                                        </span>
                                    <span className="sr-only"></span></button>
                                <div className="dropdown-menu py-0">
                                    <a className="dropdown-item rounded-top"
                                                                       href="#"><span
                                    className="fas fa-user-shield me-2"></span></a> <a
                                    className="dropdown-item" href="#"><span className="fas fa-eye me-2"></span>
                                </a> <a className="dropdown-item text-danger rounded-bottom" href="#"><span
                                    className="fas fa-user-times me-2"></span></a>
                                </div>
                            </div>
                        </td>
                    </tr>

                    </tbody>
                </table>





    )
}

export default User;
