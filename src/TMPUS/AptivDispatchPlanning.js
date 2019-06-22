import React, { Component } from 'react'
import './styles/AptivDispatchPlanning.css'

export default class AptivDispatchPlanning extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="x_panel">
                    <div className="x_title" style={{ textAlign: 'center', fontSize: 'medium', fontWeight: 'bold', color: 'darkblue' }}>Aptiv Dispatch Planning</div>
                    <div className="x_content">
                        <div className="row">
                            <div className="text-right col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                <label className="label-dispatch">Vendor:</label>
                            </div>
                            <div className="text-center col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                <input type="text" id="txtVendor" defaultValue="Aptiv" style={{ width: '100%' }} className="form-control input-sm" />
                            </div>
                            <div className="text-right col-lg-5 col-md-5 col-sm-5 col-xs-5">
                            </div>
                            <div className="text-right col-lg-1 col-md-1 col-sm-1 col-xs-1">
                                <label className="label-dispatch">Date</label>
                            </div>
                            <div className="text-left col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <label type="text" id="lblDate" style={{ width: '100%' }} className="form-control input-sm" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-right col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                <label className="label-dispatch">Vendor Code:</label>
                            </div>
                            <div className="text-center col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                <input type="text" id="txtVendorCode" defaultValue={97167383} style={{ width: '100%' }} className="form-control input-sm" />
                            </div>
                            <div className="text-right col-lg-1 col-md-1 col-sm-1 col-xs-1" style={{ paddingTop: 6 }}>
                                <label className="label-dispatch" style={{ marginTop: 5 }}>Variants</label>
                            </div>
                            <div className="text-center col-lg-2 col-md-2 col-sm-4 col-xs-4" style={{ paddingTop: 6 }}>
                                <select id="ddlSelectVariant" title="click on search" className="form-control input-sm" style={{ width: '100%', margin: '0 auto', backgroundColor: 'lightgray' }}>
                                    <option value={1}>Bosch 56/112</option>
                                </select>
                            </div>
                        </div>
                        <hr style={{ marginBottom: 6 }} />
                        <table id="tblDispatchPlan" className="table table-bordered">
                            <thead className="table-head">
                                <tr>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>PO </th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>Item</th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>Part No</th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>Dispatch Date from Aptiv</th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>RBAI Production Requirement</th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>No of Pallets</th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>BOSCH Shipment Pick-up Plan</th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>APTIV Dispatch Plan</th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>Actual</th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>GAP</th>
                                </tr>
                            </thead>
                            <tbody />
                        </table>
                        <div className="row">
                            <div className="text-center">
                                <button type="button" onclick="SaveDispatchPlan();" style={{ marginBottom: 'auto', width: 60, backgroundColor: 'mediumslateblue', borderRadius: 6 }} title="Save" className="btn btn-sm btn-success"> Save</button>
                                <button type="submit" title="Download" onclick="GetDispatchPlanPDF();" className="btn btn-info btn-sm" style={{ marginBottom: 'auto', width: 40, backgroundColor: 'mediumslateblue', borderRadius: 6, marginLeft: 5 }}>
                                    <i className="glyphicon glyphicon-cloud-download" />
                                </button>
                            </div>
                            <div className="text-center" style={{ marginTop: 4 }}>
                                <label className="label-production" id="lblDispatchError" style={{ color: 'red' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
