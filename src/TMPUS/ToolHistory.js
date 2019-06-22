import React, { Component } from 'react'
import './styles/ToolHistory.css'

export default class ToolHistory extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="x_panel">
                    <div className="x_title" style={{ textAlign: 'center', fontSize: 'medium', fontWeight: 'bold', color: 'darkblue' }}>Tool History</div>
                    <div className="x_content">
                        <select id="ddlTools" />
                        <button onclick="DownloadToolHistory();" className="btn btn-sm btn-info">Downlaod</button>
                        <table id="tblToolHistory" className="table">
                            <thead>
                                <tr className="table-head">
                                    <th rowSpan={2}>SlNo</th>
                                    <th colSpan={2}>Date</th>
                                    <th colSpan={2}>No. Of Shots</th>
                                    <th colSpan={2}>Issue noticed if any</th>
                                    <th colSpan={3}>Corrective Action</th>
                                </tr>
                                <tr>
                                    <th>Load</th>
                                    <th>Unload</th>
                                    <th>Present</th>
                                    <th>Cumulative</th>
                                    <th>Details</th>
                                    <th>Reported By</th>
                                    <th>Details Of Work Done</th>
                                    <th>Hrs Of Work</th>
                                    <th>Sign/Date</th>
                                </tr>
                            </thead>
                            <tbody />
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
