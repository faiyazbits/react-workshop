import React from 'react';

export default function UserItem(props) {
    const { name, username, email } = props.userInfo;
    return (

        <ul className="user-item">
            <li> <span>Name:</span> {name} </li>
            <li> <span>UserName:</span> {username} </li>
            <li> <span>Email:</span> {email} </li>
        </ul>

    )
}