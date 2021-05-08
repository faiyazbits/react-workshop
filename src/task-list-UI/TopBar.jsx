import React from 'react';
//import history from '../history';


export default function TopBar() {

    return (
        <>
            <div className="d-lg-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4 px-4">
                <div className="col-auto d-flex justify-content-between ps-0 mb-4 mb-lg-0">
                    <div className="me-lg-3">
                        <a href="#" className="btn btn-secondary text-dark task-btn">
                            <span className="fa fa-plus me-2"></span>
                            <span>New Tasks</span>
                        </a>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-dark text-white">
                            <span className="fa fa-archive"></span>
                        </button>
                        <button className="btn btn-dark text-white">
                            <span className="fa fa-exclamation-circle"></span>
                        </button>
                        <button className="btn btn-dark text-white">
                            <span className="fa fa-trash-o"></span>
                        </button>
                    </div>
                </div>
                <div className="col-12 col-lg-6 px-0">
                    <div className="mb-0">
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon3">
                                <span className="fa fa-search"></span>
                            </span>
                            <input type="text" className="form-control" id="exampleInputIconLeft" placeholder="Search Tasks Here" aria-label="Search" aria-describedby="basic-addon3" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
