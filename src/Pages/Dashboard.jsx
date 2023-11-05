import React from 'react'
import "../responsive/Dashboard.css"


const Dashboard = () => {
    return (
        <>
            <div className="container-fluid stat-parent">
                <div className="dashboard-wrapper">
                    <div className="row">
                        <div className="col-sm-5 col-md-2 stat">
                            <p>Balance</p>
                            <h2>0.00</h2>
                        </div>
                        <div className="col-sm-5 col-md-2 stat">
                            <p>Exposure</p>
                            <h2>0.00</h2>
                        </div>
                        <div className="col-sm-5 col-md-2 stat">
                            <p>Credit pts</p>
                            <h2>0</h2>
                        </div>
                        <div className="col-sm-5 col-md-2 stat">
                            <p>All pts</p>
                            <h2>0</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-5 col-md-2 stat">
                            <p>Sattlement pts</p>
                            <h2>0</h2>
                        </div>
                        <div className="col-sm-5 col-md-2 stat">
                            <p>Upper pts</p>
                            <h2>0</h2>
                        </div>
                        <div className="col-sm-5 col-md-2 stat">
                            <p>Down pts</p>
                            <h2>0</h2>
                        </div>
                        <div className="col-sm-5 col-md-2 stat" style={{background:"none",boxShadow:"none"}}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard