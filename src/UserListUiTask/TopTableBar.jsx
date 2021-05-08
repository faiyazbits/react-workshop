import React from 'react';


function TopTableBar() {
    return (

        <div className="d-flex mb-3"><select className="form-select fmxw-150"
                                             aria-label="Message select example">
            <option selected="selected">Bulk Action</option>
            <option value="1">Send Email</option>
            <option value="2">Change Group</option>
            <option value="3">Delete User</option>
        </select>
            <button className="btn btn-sm px-3 btn-secondary ms-3">Apply</button>
        </div>


    )

}

export default TopTableBar;
