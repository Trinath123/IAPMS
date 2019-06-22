import React, { Component } from 'react'
import './styles/ToolChangeOverReport.css'

export default class ToolChangeOverReport extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="x_panel">
                    <div className="x_title" style={{ textAlign: 'center', fontWeight: 'bold', color: 'darkblue', marginTop: 20 }}>Tool ChangeOver Report</div>
                    <div className="x_content" style={{ marginLeft: 20, marginTop: 25 }}>
                        <div className="form-inline">
                            <div className="form-group">
                                <label>From Date : </label> <input id="txtFromDate" type="text" defaultValue="01/01/2018" autoComplete="off" className="form-control input-sm" />
                                <label>To Date : </label> <input id="txtToDate" type="text" defaultValue="04/26/2019" autoComplete="off" className="form-control input-sm" />
                                <button type="button" onclick="GetReport();" style={{ marginBottom: '-10px', marginLeft: 10 }} title="Search" className="btn btn-sm btn-success">
                                    <i className="fa fa-search" />
                                </button>
                                <form id="frmDownload" onsubmit="return DownloadValidate()" method="post" className="pull-right" action="\TMPUS\DownloadPreventivePDF">
                                    <input type="hidden" id="hdnToken" name="token" />
                                    <input type="hidden" id="hdnFromDate" name="FromDate" />
                                    <input type="hidden" id="hdnToDate" name="ToDate" />
                                    <button type="submit" title="Download" className="btn btn-info btn-sm" style={{ marginBottom: '-32px', marginLeft: 10 }}>
                                        <i className="glyphicon glyphicon-cloud-download" />
                                    </button>
                                </form>
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
                                    <th>Created Date</th>
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
