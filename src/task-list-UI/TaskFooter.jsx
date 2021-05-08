import React from 'react';

export default function TaskFooter() {

    return (
        <div className="row p-4">
            <div className="col-7 mt-1">Showing 6 of 6</div>
            <div className="col-5">
                <div className="btn-group float-end arrow">
                    <a href="#" className="btn btn-gray-200 disabled">
                        <span className="fa fa-chevron-left"></span></a>
                    <a href="#" className="btn btn-secondary">
                        <span className="fa fa-chevron-right"></span></a>
                </div>
            </div>
        </div>
    )
}