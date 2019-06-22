import React, { Component } from 'react'
import './styles/BreakDownIssuesReport.css'

export default class BreakDownIssuesReport extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="x_panel" >
                    <div className="x_title" style={{ marginTop: 20, textAlign: 'center', fontWeight: 'bold', color: 'darkblue' }}>Breakdown Maintenance Report</div>
                    <div className="x_content" style={{ marginTop: 25, marginLeft: 10 }}>
                        <div className="form-inline">
                            <div className="form-group">
                                <label>From Date : </label> <input id="txtFromDate" style={{ marginTop: 0 }} type="text" autoComplete="off" className="form-control input-sm" />
                                <label>To Date : </label> <input id="txtToDate" style={{ marginTop: 0 }} type="text" autoComplete="off" className="form-control input-sm" />
                                <button type="button" onclick="GetReport();" style={{ marginBottom: 'auto' }} title="Search" className="btn btn-sm btn-success">
                                    <i className="fa fa-search" />
                                </button>
                                <label id="lblStatus" />
                            </div>
                        </div>
                        <hr />
                        <div className="form-inline">
                            <div className="form-group">
                                <label>Year : </label>
                                <select id="ddlYear" title="click on search" className="form-control input-sm">
                                    <option>None</option>
                                </select>
                                <label>Month : </label>
                                <select id="ddlMonth" title="click on search" className="form-control input-sm">
                                    <option>None</option>
                                </select>
                            </div>
                        </div>
                        <div id="chart1" />
                        <table id="tblPreventiveReport" className="table table-bordered">
                            <thead className="table-head">
                                <tr>
                                    <th>ID</th>
                                    <th>Line</th>
                                    <th>Station</th>
                                    <th>Tool Name</th>
                                    <th>Error Description</th>
                                    <th>Breakdown Date</th>
                                    <th>Closed Date</th>
                                    <th>More Info</th>
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
