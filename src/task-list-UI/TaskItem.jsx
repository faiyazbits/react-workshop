import React from 'react';

export default function TaskItem(props) {
    const { title, description, time, status } = props.taskInfo;

    function getBadgeColor(status) {
        switch (status) {
            case 'Done':
                return 'bg-success';
            case 'In Progress':
                return 'bg-warning';
            case 'Waiting':
                return 'bg-purple';
            default:
                return 'bg-success';
        }
    }

    function strikeCompletedTask(status) {
        if (status === 'Done') {
            return 'line-through';
        }
    }

    function getCheckBoxChecked(status) {
        if (status === 'Done') {
            return true;
        }
    }

    return (
        <>
            <div className="card hover-state border-bottom rounded-0 py-3">
                <div className="card-body d-sm-flex align-items-center flex-wrap flex-lg-nowrap py-0">
                    <div className="col-1 text-left text-sm-center mb-2 mb-sm-0">
                        <div className="form-check check-lg inbox-check me-sm-2">
                            <input className="form-check-input" type="checkbox" value="" id="mailCheck1" defaultChecked={getCheckBoxChecked(status)} />
                            <label className="form-check-label" htmlFor="mailCheck1"></label>
                        </div>
                    </div>
                    <div className="col-11 col-lg-8 px-0 mb-4 mb-md-0">
                        <div className="mb-2">
                            <h3 className={`h5 ${strikeCompletedTask(status)} `}>{title}</h3>
                            <div className="d-block d-sm-flex">
                                <div><h4 className="h6 fw-normal text-gray mb-3 mb-sm-0">
                                    <span className="fa fa-clock-o me-2"></span>
                                    {time}</h4>
                                </div>
                                <div className="ms-sm-3">
                                    <span className={`badge super-badge badge-lg ${getBadgeColor(status)}`}>{status}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href="./single-message.html" className="fw-bold text-dark">
                                <span className={`fw-normal text-gray ${strikeCompletedTask(status)}`}>
                                    {description}</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-10 col-sm-2 col-lg-2 col-xl-2 d-none d-lg-block d-xl-inline-flex align-items-center ms-lg-auto text-right justify-content-end px-md-0">
                        <div className="rating-star star-lg d-none d-lg-inline-block">
                            <span className="fa fa-star"></span>
                        </div>
                        <div className="btn-group ms-md-3">
                            <button className="btn btn-link text-dark" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="icon icon-sm">
                                    <span className="fa fa-ellipsis-h icon-dark"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

