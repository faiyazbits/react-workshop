import React from 'react';


function TableHead() {
    return (
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
    )
}

export default TableHead;
