import React, { Component } from 'react'
import './styles/ToolManagement.css'

export default class ToolManagement extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="x_panel">
                    <div className="x_title" style={{ marginTop: 10, textAlign: 'center', fontSize: 'medium', fontWeight: 'bold', color: 'darkblue' }}>Tool Replacement</div>
                    <div className="x_content" style={{ marginTop: 25 }}>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <table className="table table-striped" style={{ width: '100%' }} id="tblToolReplacement">
                                    <thead>
                                        <tr>
                                            <th>Issues List</th>
                                            <th>
                                                <div className="form-inline">
                                                    <div className="form-group">
                                                        <input id="txtSearchTIssuesList" type="text" className="form-control input-sm" style={{ width: '100%' }} autoComplete="off" />
                                                    </div>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody />
                                </table>
                            </div>
                            <div id="divIssueDetails">
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12" style={{ borderLeft: '1px solid black' }}>
                                    <div id="divStatus">
                                        <div className>
                                            <div className="form_wizard wizard_horizontal">
                                                <ul className="wizard_steps anchor">
                                                    <li>
                                                        <a href="#step-1" className="disabled" isdone={1} rel={1}>
                                                            <span className="step_no" style={{ backgroundColor: 'green', border: '1px solid black' }}>1</span>
                                                            <span className="step_no" style={{ backgroundColor: 'green', border: '1px solid black' }}><span className="fa fa-file" /></span>
                                                            <span className="step_descr">Create</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#step-2" className="disabled" isdone={0} rel={2}>
                                                            <span id="step-Ack" style={{ border: '1px solid black' }} className="step_no">2</span>
                                                            <span id="step-Ack" style={{ border: '1px solid black' }} className="step_no"><span className="fa fa-" /></span>
                                                            <span className="step_descr">Acknowledge</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#step-3" className="disabled" isdone={0} rel={3}>
                                                            <span id="step-Resolve" style={{ border: '1px solid black' }} className="step_no">3</span>
                                                            <span className="step_descr">Resolve</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#step-4" className="disabled" isdone={0} rel={4}>
                                                            <span id="step-Verify" style={{ border: '1px solid black' }} className="step_no">4</span>
                                                            <span className="step_descr">Verify</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hdnToolManagementID" />
                                        <table style={{ marginBottom: 10 }} className="table table-bordered table-striped">
                                            <tbody>
                                                <tr>
                                                    <th className="text-right" style={{ width: '25%' }}>Issue ID :</th>
                                                    <td style={{ width: '75%' }} id="lblIssueID" />
                                                </tr>
                                                <tr>
                                                    <th className="text-right" style={{ width: '25%' }}>Description : </th>
                                                    <td style={{ width: '75%' }} id="lblDescription"> </td>
                                                </tr>
                                                <tr>
                                                    <th className="text-right" style={{ width: '25%' }}>Created Date :</th>
                                                    <td style={{ width: '75%' }} id="lblCreatedDate" />
                                                </tr><tr>
                                                    <th className="text-right">Action Taken : </th>
                                                    <td>
                                                        <textarea style={{ width: '100%' }} defaultValue={""} />
                                                    </td>
                                                </tr></tbody>
                                        </table>
                                        <table style={{ marginBottom: 10 }} className="table table-bordered jambo_table table-striped" id="tblCorrectiveActionsList">
                                            <thead>
                                                <tr>
                                                    <th>Action</th>
                                                    <th>User</th>
                                                    <th>Date</th>
                                                    <th>Duration(min)</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody />
                                        </table>
                                        <div id="divCorrentionActions">
                                            <textarea id="txtResolveCorrentionAction" style={{ width: '100%' }} defaultValue={""} />
                                            <label id="lblStatus" />
                                            <div id="divAcknowledge">
                                                <div className="text-center">
                                                    <br />
                                                    <button className="btn btn-sm btn-success" onclick="updateAckStatus();">Acknowledge</button>
                                                </div>
                                            </div>
                                            <div id="divResolve">
                                                <div className="text-center">
                                                    <br />
                                                    <button className="btn btn-sm btn-success" onclick="UpdateResolveStatus();">Resolve</button>
                                                </div>
                                            </div>
                                            <div id="divVerify">
                                                <div className="text-center">
                                                    <br />
                                                    <button className="btn btn-sm btn-warning" onclick="UpdateReOpenStatus();">ReOpen</button>&nbsp;
                                                   <button className="btn btn-sm btn-success" onclick=" CloseStatus();">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
