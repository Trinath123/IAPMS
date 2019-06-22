import React, { Component } from 'react'
import './styles/PreventiveIssues.css'

export default class PreventiveIssues extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="x_panel">
                    <div className="x_title" style={{ textAlign: 'center', fontWeight: 'bold', color: 'darkblue' }}>Preventive Maintenance</div>
                    <div className="x_content" style={{ marginLeft: '20px' }}>
                        <div className="row">
                            {/* start accordion */}
                            <div className="accordion" id="accordion" role="tablist">
                                <div className="panel">
                                    <a className="panel-heading" role="tab" id="headingOne" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <h4 className="panel-title"><u>Add Issue</u></h4>
                                    </a>
                                    <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                        <div className="panel-body">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <th className="text-right">
                                                            Tool ID
                                                        </th>
                                                        <td>
                                                            <select id="ddlTools" className="form-control" />
                                                        </td>
                                                        <th className="text-right">
                                                            Description
                                                        </th>
                                                        <td>
                                                            <textarea id="txtDescription" style={{ width: '100%' }} defaultValue={""} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={4} className="text-right">
                                                            <input type="button" className="btn btn-sm btn-success" defaultValue="Save Issue" onclick="SaveIssue()" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end of accordion */}
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <table className="table table-striped" style={{ width: '100%' }} id="tblPreventiveMaintenance">
                                    <thead>
                                        <tr>
                                            <th>Issues List</th>
                                            <th>
                                                <div className="form-inline">
                                                    <div className="form-group">
                                                        <input id="txtSearchIssuesList" type="text" placeholder="Search" className="form-control input-sm" style={{ width: '75%' }} autoComplete="off" />
                                                    </div>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody />
                                </table>
                                <table className="table jambo_table table-bordered" id="tblPreventiveMaintenance">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th> Description</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody />
                                </table>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12" style={{ borderLeft: '1px solid black' }}>
                                <div id="divStatus">
                                    <div className>
                                        <div className="form_wizard wizard_horizontal">
                                            <ul className="wizard_steps anchor">
                                                <li>
                                                    <a href="#step-1" className="disabled" isdone={1} rel={1}>
                                                        <span className="step_no" style={{ backgroundColor: 'green', border: '1px solid black' }}>1</span>
                                                        <span className="step_descr">Create</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#step-2" className="disabled" isdone={0} rel={2}>
                                                        <span id="step-Ack" style={{ border: '1px solid black' }} className="step_no">2</span>
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
                                    <input type="hidden" id="hdnPreventiveID" />

                                    <table style={{ marginBottom: 10 }} className="table table-bordered table-striped">
                                        <tbody>
                                            <tr>
                                                <th className="text-right" style={{ width: '25%' }}>Issue ID :</th>
                                                <td style={{ width: '75%' }} id="lblIssueID" />
                                            </tr>
                                            <tr>
                                                <th className="text-right" style={{ width: '25%' }}>Tool ID :</th>
                                                <td style={{ width: '75%' }} id="lblToolID" />
                                            </tr>
                                            <tr>
                                                <th className="text-right" style={{ width: '25%' }}>Description :</th>


                                                <td style={{ width: '75%' }} id="lblDescription"> </td>
                                            </tr>
                                            <tr>
                                                <th className="text-right" style={{ width: '25%' }}>Created Date :</th>
                                                <td style={{ width: '75%' }} id="lblCreatedDate" />
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="panel panel-warning">
                                        <div className="panel-heading">
                                            <u><a data-toggle="collapse" href="#collapse1">Actions Taken</a></u>
                                        </div>
                                        <div id="collapse1" className="panel-collapse collapse">
                                            <table style={{ marginBottom: 10 }} className="table table-bordered  table-striped" id="tblCorrectiveActionsList">
                                                <thead className="table-head">
                                                    <tr>
                                                        <th>Date</th>
                                                        <th>User</th>
                                                        <th>Duration (min:sec)</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody />
                                            </table>
                                        </div>
                                    </div>
                                    <div id="divCorrentionActions">
                                        <div id="divPreventiveMaintenanceCheckList">
                                            <div className="panel panel-success">
                                                <div className="panel-heading">
                                                    <u><a data-toggle="collapse" href="#chkListCollapse">Check List</a></u>
                                                </div>
                                                <div id="chkListCollapse" className="panel-collapse collapse">
                                                    <table id="tblPreventiveMaintenanceCheckList" className="table">
                                                        <thead>
                                                            <tr>
                                                                <th colSpan={5}>
                                                                    <button id="btnclearCheckLists" className="btn btn-sm btn-danger pull-right">Clear All</button>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th>Things To Do</th>
                                                                <th>Methods</th>
                                                                <th>Ok</th>
                                                                <th>Corrected</th>
                                                                <th>Remarks</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody />
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
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
        )
    }
}
