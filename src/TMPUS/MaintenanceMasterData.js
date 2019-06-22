import React, { Component } from 'react'
import './styles/MaintenanceMasterData.css'

export default class MaintenanceMasterData extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="x_panel" style={{ margin: 0, padding: 0 }}>
                    <div className="x_title" style={{ textAlign: 'center', fontSize: 'medium', fontWeight: 'bold', color: 'darkblue', marginBottom: '0.2vw' }}>Tool Maintenance Master Data</div>
                    <div className="x_content">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className role="tabpanel" data-example-id="togglable-tabs">
                                <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist" style={{ padding: 0, backgroundColor: 'white' }}>
                                    <li id="Prev-tab" role="presentation" className="active">
                                        <a href="#tab_content0" role="tab" data-toggle="tab" aria-expanded="true" style={{ color: 'darkblue' }}>Preventive Maintenance</a>
                                    </li>
                                    <li id="Break-tab" role="presentation">
                                        <a href="#tab_content1" role="tab" data-toggle="tab" aria-expanded="true" style={{ color: 'darkblue' }}>Breakdown Maintenance</a>
                                    </li>
                                    <li id="Tool-tab" role="presentation" className>
                                        <a href="#tab_content2" role="tab" data-toggle="tab" aria-expanded="false" style={{ color: 'darkblue' }}>Tool Replacement</a>
                                    </li>
                                </ul>
                                <div id="myTabContent" className="tab-content">
                                    <div role="tabpanel" className="tab-pane fade active in" id="tab_content0" aria-labelledby="home-tab" style={{ width: '70%', margin: 'auto' }}>
                                        <div className="row">
                                            <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: 0, paddingLeft: 0 }}>
                                                <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 45, marginBottom: 0 }}>
                                                    <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 500, fontSize: 'large', marginTop: 4 }}>Preventive Maintenance Data</label>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Question *</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtQuestion" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Method *</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtMethod" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Required</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 text-left" style={{ marginTop: 15 }}>
                                                        <input id="chkPrevMIsOk" name="ok-A" defaultChecked="checked" type="checkbox" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="text-center">
                                                <button type="button" onclick="SaveChecklists();" style={{ marginBottom: 'auto', width: 60, backgroundColor: 'mediumslateblue', borderRadius: 6 }} title="Search" className="btn btn-sm btn-success">
                                                    Save
                  </button>
                                            </div>
                                            <div className="text-center" style={{ marginTop: 4 }}>
                                                <label className="label-production" id="lblPreventiveError" style={{ color: 'red' }} />
                                            </div>
                                        </div>
                                        <hr />
                                        <input type="hidden" id="txtChecklistID" />
                                        <table id="tblPreventiveChecklist" className="table table-bordered">
                                            <thead className="table-head">
                                                <tr>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '5%' }}>
                                                        Sl. No
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '75%' }}>
                                                        Question
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '12%' }}>
                                                        Method
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Required
                    </th>
                                                </tr>
                                            </thead>
                                            <tbody />
                                        </table>
                                    </div>
                                    <div role="tabpanel" className="tab-pane fade " id="tab_content1" aria-labelledby="production-tab" style={{ width: '50%', margin: 'auto' }}>
                                        <div className="row">
                                            <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: 0, paddingLeft: 0 }}>
                                                <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 45, marginBottom: 0 }}>
                                                    <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 500, fontSize: 'large', marginTop: 4 }}>Failure Reasons</label>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Failure Reason *</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtFailureReason" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Required</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 text-left" style={{ marginTop: 15 }}>
                                                        <input id="chkFailReasonsActive" name="ok-A" defaultChecked="checked" type="checkbox" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="text-center">
                                                <button type="button" onclick="SaveFailureReasons();" style={{ marginBottom: 'auto', width: 60, backgroundColor: 'mediumslateblue', borderRadius: 6 }} title="Search" className="btn btn-sm btn-success">
                                                    Save
                  </button>
                                            </div>
                                            <div className="text-center" style={{ marginTop: 4 }}>
                                                <label className="label-production" id="lblFailureReasonsError" style={{ color: 'red' }} />
                                            </div>
                                        </div>
                                        <hr />
                                        <input type="hidden" id="txtFailureID" />
                                        <table id="tblFailureReasons" className="table table-bordered">
                                            <thead className="table-head">
                                                <tr>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '5%' }}>
                                                        Sl. No
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '85%' }}>
                                                        Failure Reasons
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Required
                    </th>
                                                </tr>
                                            </thead>
                                            <tbody />
                                        </table>
                                    </div>
                                    <div role="tabpanel" className="tab-pane fade" id="tab_content2" aria-labelledby="profile-tab" style={{ width: '80%', margin: 'auto' }}>
                                        <div className="row">
                                            <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: 0, paddingLeft: 0 }}>
                                                <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 45, marginBottom: 0 }}>
                                                    <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 500, fontSize: 'large', marginTop: 4 }}>Tool Replacement Checklist</label>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Inspection Item *</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtTRInspect" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Requirement *</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtTRReq" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Required</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 text-left" style={{ marginTop: 15 }}>
                                                        <input id="chkTRIsOk" name="ok-A" defaultChecked="checked" type="checkbox" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="text-center">
                                                <button type="button" onclick="SaveToolReplChecklists();" style={{ marginBottom: 'auto', width: 60, backgroundColor: 'mediumslateblue', borderRadius: 6 }} title="Search" className="btn btn-sm btn-success">
                                                    Save
                  </button>
                                            </div>
                                            <div className="text-center" style={{ marginTop: 4 }}>
                                                <label className="label-production" id="lblToolReplError" style={{ color: 'red' }} />
                                            </div>
                                        </div>
                                        <hr />
                                        <input type="hidden" id="txtTRChkID" />
                                        <table id="tblToolReplacementChecklist" className="table table-bordered text-left">
                                            <thead className="table-head">
                                                <tr>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '5%' }}>
                                                        Sl #
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '40%' }}>
                                                        Inspection Item
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '45%' }}>
                                                        Requirement
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Required
                    </th>
                                                </tr>
                                            </thead>
                                            <tbody />
                                        </table>
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
