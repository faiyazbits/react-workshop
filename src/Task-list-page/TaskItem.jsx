import React from "react";


function getStyle(status) {
    switch (status) {
        case "In progess": return { backgroundColor: "gold" }
        case "waiting": return { backgroundColor: "violet" }
        case "Done": return { backgroundColor: "green" }
    }
}

function checkTask(status) {
    if (status === 'Done') {
        return true
    }
}
function getStyled(status) {
    if (status === 'Done') {
        return { textDecoration: "line-through" }
    }
}




export default function TaskItem(props) {
    const { meetingWith, time, status, description, id } = props.taskInfo

    return (

        < main className="Task-content" >
            <div class="task-wrapper border bg-white shadow-sm rounded"  >
                <div class="card hover-state border-bottom rounded-0 rounded-top py-3">
                    <div class="card-body d-sm-flex align-items-center flex-wrap flex-lg-nowrap py-0">
                        <div class="col-1 text-left text-sm-center mb-2 mb-sm-0">
                            <div class="form-check check-lg inbox-check me-sm-2">
                                <input className="form-check-input" type="checkbox" value="" id="mailCheck1" defaultChecked={checkTask(status)} />
                                <label className="form-check-label" for="mailCheck1"></label>
                            </div>
                        </div>
                        <div className="col-11 col-lg-8 px-0 mb-4 mb-md-0">
                            <div className="mb-2">
                                <h3 className="h5 line-through meeting" style={getStyled(status)}>{meetingWith}</h3>
                                <div className="d-block d-sm-flex">
                                    <div>
                                        <h4 className="h6 fw-normal text-gray mb-3 mb-sm-0">
                                            <span className="fas fa-clock me-2"></span>{time}</h4>
                                    </div>
                                    <div className="ms-sm-3">
                                        <span className="badge super-badge badge-lg" style={getStyle(status)}>{status}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a href="./single-message.html" className="fw-bold text-dark">
                                    <span className="description" style={getStyled(status)}>{description}</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-10 col-sm-2 col-lg-2 col-xl-2 d-none d-lg-block d-xl-inline-flex align-items-center ms-lg-auto text-right justify-content-end px-md-0">
                            <div className=" rating-star star-lg d-none d-lg-inline-block fa fa-star fa-2x">
                                {/* <input type="checkbox" id="InboxStar1" name="star" /> */}
                                < label className="rating-star-label " for="InboxStar1">
                                    <span className="sr-only">Star</span>
                                </label>
                            </div>
                            <div className="btn-group ms-md-3">
                                {/* <button className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> */}
                                <span className="icon icon-sm">
                                    <span className="fas fa-ellipsis-h icon-dark fa-lg">
                                    </span>
                                </span>
                                {/* <span className="sr-only">Toggle Dropdown</span> */}
                                {/* </button> */}
                                <div className="dropdown-menu dropdown-menu-end py-0">
                                    <a className="dropdown-item rounded-top" href="#">
                                        <span className="fas fa-edit"></span>Edit</a>
                                    <a class="dropdown-item text-warning" href="#">
                                        <span className="fas fa-star"></span>Important</a>
                                    <a class="dropdown-item text-danger rounded-bottom" href="#">
                                        <span className="fas fa-trash-alt"></span>Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

//fw-normal text-gray line-through
// rating-star star-lg d-none d-lg-inline-block