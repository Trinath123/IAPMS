import React, { Component } from 'react'
import './styles/ToolChangeOver.css'

export default class ToolChangeOver extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div id="sound" />
                <div className="x_panel">
                    <div className="x_title" style={{ textAlign: 'center', fontSize: 'medium', fontWeight: 'bold', color: 'darkblue' }}>Tool ChangeOver
                        <a href className="fa fa-minus pull-right" style={{ fontSize: 17 }} id="aShowCreationScreen" name="CreateTicket" title="Create a Tickete" onclick="ShowCreationScreen();"> </a>
                        <div className="clearfix" />
                    </div>
                    <div className="x_content">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <table className="table table-striped" style={{ width: '100%' }} id="tblToolChangeOver">
                                    <thead>
                                        <tr>
                                            <th>Tickets List </th>                                       
                                            <th>
                                                <div className="form-inline">
                                                    <div className="form-group">
                                                        <input id="txtSearchIssuesList" type="text" className="form-control input-sm" style={{ width: '75%' }} autoComplete="off" />
                                                    </div>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody />
                                </table>
                            </div>
                            <div id="divIssueCreation">
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12" style={{ borderLeft: '1px solid black' }}>
                                    <div className="form-horizontal form-label-left">
                                        <div className="form-group">
                                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Tool ID :</label>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <select id="ddlTools" className="form-control" />
                                            </div>
                                        </div>                                     
                                        <label className="control-label col-md-3 col-sm-3 col-xs-12"> Error Description : </label>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <textarea id="txtDescription" className="form-control" defaultValue={""} />
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-md-6 col-sm-6 col-xs-12" />
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <label id="lblStatusCreation" style={{ color: 'red' }} />
                                                <input type="button" className="btn btn-sm btn-success pull-right" defaultValue="Create Ticket" onclick="SaveIssue()" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                                            <span id="stateCreate" className="step_descr">Create</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#step-2" className="disabled" isdone={0} rel={2}>
                                                            <span id="step-Ack" style={{ border: '1px solid black' }} className="step_no">2</span>
                                                            <span id="step-Ack" style={{ border: '1px solid black' }} className="step_no"><span className="fa fa-" /></span>
                                                            <span id="stateAck" className="step_descr">Acknowledge</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#step-3" className="disabled" isdone={0} rel={3}>
                                                            <span id="step-Resolve" style={{ border: '1px solid black' }} className="step_no">3</span>
                                                            <span id="stateResolve" className="step_descr">Resolve</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#step-4" className="disabled" isdone={0} rel={4}>
                                                            <span id="step-Verify" style={{ border: '1px solid black' }} className="step_no">4</span>
                                                            <span id="stateVerify" className="step_descr">Verify</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hdnToolChangeOverID" />
                                        <table style={{ marginBottom: 10 }} className="table table-bordered table-striped">
                                            <tbody>
                                                <tr>
                                                    <th className="text-right label-custom" style={{ width: '25%' }}>Ticket ID : </th>
                                                    <td style={{ width: '75%' }} id="lblIssueID" />
                                                </tr>
                                                <tr>
                                                    <th className="text-right label-custom" style={{ width: '25%' }}>Tool ID :</th>
                                                    <td style={{ width: '75%' }} id="lblToolID"> </td>
                                                </tr>
                                                <tr>
                                                    <th className="text-right label-custom" style={{ width: '25%' }}>Description :</th>
                                                    <td style={{ width: '75%' }} id="lblDescription"> </td>
                                                </tr>
                                                <tr>
                                                    <th className="text-right label-custom" style={{ width: '25%' }}>Created Date : </th>
                                                    <td style={{ width: '75%' }} id="lblCreatedDate" />
                                                </tr>
                                                <tr>
                                                    <th className="text-right label-custom" style={{ width: '25%' }}>Present Shot : </th>
                                                    <td style={{ width: '75%' }} id="lblActualShotReached" />
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="panel panel-success">
                                            <div className="panel-heading">
                                                <u><a data-toggle="collapse" href="#collapse1">Action Taken</a></u>
                                            </div>
                                            <div id="collapse1" className="panel-collapse collapse">
                                                <table style={{ marginBottom: 10 }} className="table table-bordered table-striped" id="tblCorrectiveActionsList">
                                                    <thead className="table-head">
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
                                            </div>
                                        </div>
                                        <div id="divCorrentionActions">
                                            <div id="divAssignUsers" style={{ display: 'none' }} className="col-lg-12">
                                                {/* start accordion */}
                                                <div className="accordion" id="accordion" role="tablist" aria-multiselectable="true">
                                                    <div className="panel panel-success">
                                                        <a className="panel-heading" role="tab" id="headingOne" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <h4 className="panel-title">Assign Users</h4>
                                                        </a>
                                                        <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                                            <div className="panel-body">
                                                                <div className="form-horizontal form-label-left">
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Users</label>
                                                                        <div className="col-md-7 col-sm-7 col-xs-12">
                                                                            <select id="ddlAssignUsers" className="form-control" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Target Time</label>
                                                                        <div className="form-inline col-md-8 col-sm-8 col-xs-12">
                                                                            <div className="form-group">
                                                                                <input type="text" id="txtTargetDateUserAssign" className="form-control" />
                                                                                <select id="ddlAssignUserHrs" className="form-control" />
                                                                                <select id="ddlAssignUserMins" className="form-control" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Duration(in mins)</label>
                                                                        <div className="col-md-7 col-sm-7 col-xs-12">
                                                                            <input id="txtDuration" type="text" className="form-control" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3 col-sm-3 col-xs-12">
                                                                        </label>
                                                                        <div className="col-md-7 col-sm-7 col-xs-12">
                                                                            <input type="button" className="pull-right btn btn-sm btn-info" style={{ marginBottom: 0 }} onclick="AssignUser()" defaultValue="Assign" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end of accordion */}
                                            </div>
                                            <div id="divToolDetails">
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <th>Current Variant : </th>
                                                            <td>
                                                                <input type="text" disabled="disabled" id="lblCurrentVariant" className="form-control input-sm" style={{ width: '75%', marginTop: 0 }} />
                                                            </td>
                                                            <th><label>Changing Variant :</label></th>
                                                            <td><select id="ddlVariant" className="form-control input-sm" style={{ marginTop: 0 }} /></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <label id="lblResolveCorrentionAction">Remarks</label>
                                            <textarea id="txtResolveCorrentionAction" placeholder="Enter Description" style={{ width: '100%' }} defaultValue={""} />
                                            <label id="lblStatus" style={{ color: 'red' }} />
                                            <div id="divAcknowledge">
                                                <div className="text-center">
                                                    <button className="btn btn-sm btn-success" id="btnAcknowledge" onclick="updateAckStatus();">Acknowledge</button>
                                                </div>
                                            </div>
                                            <div id="divResolve">
                                                <div className="text-center">
                                                    <br />
                                                    <button className="btn btn-sm btn-success" id="btnResolve" onclick="UpdateResolveStatus();">Resolve</button>
                                                </div>
                                            </div>
                                            <div id="divVerify">
                                                <div className="text-center">
                                                    <br />
                                                    <button className="btn btn-sm btn-warning" id="btnReOpen" onclick="UpdateReOpenStatus();">ReOpen</button>
                                                    <button className="btn btn-sm btn-success" id="btnClose" onclick=" CloseStatus();">Close</button>
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
