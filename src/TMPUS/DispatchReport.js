import React, { Component } from 'react'
import './styles/DispatchReport.css'

export default class DispatchReport extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="x_panel">
                    <div className="x_title" style={{ textAlign: 'center', fontSize: 'medium', fontWeight: 'bold', color: 'darkblue' }}>Dispatch Report</div>
                    <div className="x_content">
                        <div className="row">
                            <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-4">
                                <label className="label-dispatch">Start Date</label>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
                                <input type="text" id="txtFromDate" style={{ width: '100%' }} className="form-control input-sm" />
                            </div>
                            <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-4">
                                <label className="label-dispatch">End Date Time</label>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
                                <input type="text" id="txtToDate" style={{ width: '100%' }} className="form-control input-sm" />
                            </div>
                        </div>
                        <br />
                        <div className="text-center"><br />
                            <button type="button" onclick="GetDispatchReport();" style={{ marginBottom: 'auto', width: 60, backgroundColor: 'mediumslateblue', borderRadius: 6 }} title="Save" className="btn btn-sm btn-success">GET</button>
                            <button type="submit" title="Download" onclick="GetDispatchReportPDF();" className="btn btn-info btn-sm" style={{ marginBottom: 'auto', width: 40, backgroundColor: 'mediumslateblue', borderRadius: 6, marginLeft: 5 }}>
                                <i className="glyphicon glyphicon-cloud-download" />
                            </button>
                            <div className="text-center" style={{ marginTop: 4 }}>
                                <label className="label-production" id="lblDispErrorMessage" style={{ color: 'red' }} />
                            </div>
                        </div>
                        <hr />
                        <table id="tblDispatchReport" className="table table-bordered">
                            <thead className="table-head">
                                <tr>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>PO</th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>Item</th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>Part No</th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>Dispatch Date from Aptiv </th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>RBAI Production Requirement</th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>No of Pallets</th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>BOSCH Shipment Pick-up Plan</th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>APTIV Dispatch Plan</th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>Actual</th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>GAP</th>
                                </tr>
                            </thead>
                            <tbody/>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
