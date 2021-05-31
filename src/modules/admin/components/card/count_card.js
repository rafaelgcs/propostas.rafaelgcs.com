import { Skeleton } from "@material-ui/lab";
import React from "react"


const CountCard = (props) => {
    const { card, loading } = props;

    return (
        <div className="card">
            <div className="card-body p-3">
                <div className="row">
                    <div className="col-8">
                        <div className="numbers">
                            <p className="text-sm mb-0 text-capitalize font-weight-bold">{card.title}</p>
                            <h5 className="font-weight-bolder mb-0">
                                {loading ? <Skeleton animation="wave" /> : card.count}
                                {
                                    card.showSufix && <span className="text-success text-sm font-weight-bolder">{card.sufix}</span>
                                }
                            </h5>
                        </div>
                    </div>
                    <div className="col-4 text-end">
                        <div className="icon icon-shape bg-gradient-dark shadow text-center border-radius-md">
                            <i className={`ni ni-${card.icon} text-lg opacity-10`} aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountCard