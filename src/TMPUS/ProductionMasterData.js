import React, { Component } from 'react'
import './styles/ProductionMasterData.css'

export default class ProductionMasterData extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="x_panel" style={{ margin: 0, padding: 0 }}>
                    <div className="x_title" style={{ textAlign: 'center', fontSize: 'medium', fontWeight: 'bold', color: 'darkblue', marginBottom: '0.2vw' }}>Production Master Data</div>
                    <div className="x_content">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className role="tabpanel" data-example-id="togglable-tabs">
                                <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist" style={{ padding: 0, backgroundColor: 'white' }}>
                                    <li id="Line-tab" role="presentation" className="active">
                                        <a href="#tab_content0" role="tab" data-toggle="tab" aria-expanded="true" style={{ color: 'darkblue' }}>Line</a>
                                    </li>
                                    <li id="Tool-tab" role="presentation">
                                        <a href="#tab_content1" role="tab" data-toggle="tab" aria-expanded="true" style={{ color: 'darkblue' }}>Tool</a>
                                    </li>
                                    <li id="Variant-tab" role="presentation" className>
                                        <a href="#tab_content2" role="tab" data-toggle="tab" aria-expanded="false" style={{ color: 'darkblue' }}>Variant</a>
                                    </li>
                                </ul>
                                <div id="myTabContent" className="tab-content">
                                    <div role="tabpanel" className="tab-pane fade active in" id="tab_content0" aria-labelledby="line-tab">
                                        <div className="row">
                                            <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: 0, paddingLeft: 0 }}>
                                                <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 45, marginBottom: 0 }}>
                                                    <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 500, fontSize: 'large', marginTop: 4 }}>Line Data</label>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Line ID *</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtLineID" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Line Name *</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtLineName" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Cycle Time *</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtLineCycleTime" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Active</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 text-left" style={{ marginTop: 15 }}>
                                                        <input id="chkLineIsOk" name="ok-A" defaultChecked="checked" type="checkbox" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="text-center">
                                                    <button type="button" onclick="SaveLines();" style={{ marginBottom: 'auto', width: 60, backgroundColor: 'mediumslateblue', borderRadius: 6 }} title="Search" className="btn btn-sm btn-success">
                                                        Save
                    </button>
                                                </div>
                                                <div className="text-center" style={{ marginTop: 4 }}>
                                                    <label className="label-production" id="lblLineErrorMessage" style={{ color: 'red' }} />
                                                </div>
                                            </div>
                                        </div>
                                        <input type="hidden" id="txtLineID" />
                                        <hr />
                                        <table id="tblLines" className="table table-bordered">
                                            <thead className="table-head">
                                                <tr>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '10%' }}>
                                                        Sl. No
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '10%' }}>
                                                        Line ID
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '65%' }}>
                                                        Line Name
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '10%' }}>
                                                        Cycle Time
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Active
                    </th>
                                                </tr>
                                            </thead>
                                            <tbody />
                                        </table>
                                    </div>
                                    <div role="tabpanel" className="tab-pane fade " id="tab_content1" aria-labelledby="production-tab">
                                        <div className="row">
                                            <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: 0, paddingLeft: 0 }}>
                                                <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 45, marginBottom: 0 }}>
                                                    <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 500, fontSize: 'large', marginTop: 4 }}>Tool Data</label>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Tool ID *</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtToolID" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Tool Name *</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtToolName" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Start Date *</label>
                                                    </div>
                                                    <div className="input col-lg-2 col-md-2 col-sm-2 col-xs-4">
                                                        <input type="text" id="txtStartDate" placeholder="01/01/2019" style={{ width: '100%' }} className="form-control input-sm" />
                                                        <span className="tooltip">Date Format MM/dd/yyyy</span>
                                                    </div>
                                                    <div className="input col-lg-1 col-md-1 col-sm-1 col-xs-2">
                                                        <input type="text" id="txtStartTime" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Lifespan Warning *</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtLifeWarning" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Lifespan Threshold *</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtLifeThreshold" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Lifespan Blocking *</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtLifeBlocking" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Preventive Warning *</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtPrevWarning" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Preventive Threshold *</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtPrevThreshold" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Preventive Blocking *</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtPrevBlocking" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Cavities *</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtCavities" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Active</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 text-left" style={{ marginTop: 15 }}>
                                                        <input id="chkToolIsOk" name="ok-A" defaultChecked="checked" type="checkbox" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Cavity Numbering *</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtCavityNum" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="text-center">
                                                    <button type="button" onclick="SaveTools();" style={{ marginBottom: 'auto', marginTop: 16, width: 60, backgroundColor: 'mediumslateblue', borderRadius: 6 }} title="Search" className="btn btn-sm btn-success">
                                                        Save
                    </button>
                                                </div>
                                                <div className="text-center" style={{ marginTop: 4 }}>
                                                    <label className="label-production" id="lblToolErrorMessage" style={{ color: 'red' }} />
                                                </div>
                                            </div>
                                        </div>
                                        <input type="hidden" id="txtToolID" />
                                        <hr />
                                        <table id="tblTools" className="table table-bordered">
                                            <thead className="table-head">
                                                <tr>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '10%' }}>
                                                        Sl. No
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Tool ID
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Tool Name
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Start Date
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Lifespan Warning
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Lifespan Threshold
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Lifespan Blocking
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Preventive Warning
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Preventive Threshold
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Preventive Blocking
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Cavities
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Cavity Numbering
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '5%' }}>
                                                        Active
                    </th>
                                                </tr>
                                            </thead>
                                            <tbody />
                                        </table>
                                    </div>
                                    <div role="tabpanel" className="text-center tab-pane fade" id="tab_content2" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: 0, paddingLeft: 0 }}>
                                                <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 45, marginBottom: 0 }}>
                                                    <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 500, fontSize: 'large', marginTop: 4 }}>Variant Data</label>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Variant ID *</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtVariantID" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Variant Name *</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtVariantName" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Cycle Time</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtVariantCycleTime" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Active</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 text-left" style={{ marginTop: 15 }}>
                                                        <input id="chkVariantIsOk" name="ok-A" defaultChecked="checked" type="checkbox" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="text-center">
                                                    <button type="button" onclick="SaveVariants();" style={{ marginBottom: 'auto', width: 60, backgroundColor: 'mediumslateblue', borderRadius: 6 }} title="Search" className="btn btn-sm btn-success">
                                                        Save
                    </button>
                                                </div>
                                                <div className="text-center" style={{ marginTop: 4 }}>
                                                    <label className="label-production" id="lblVariantMessage" style={{ color: 'red' }} />
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <table id="tblVariants" className="text-left table table-bordered">
                                            <thead className="table-head">
                                                <tr>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '5%' }}>
                                                        Sl #
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '35%' }}>
                                                        Variant ID
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '55%' }}>
                                                        Variant Name
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Cycle Time
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Active
                    </th>
                                                </tr>
                                            </thead>
                                            <tbody />
                                        </table>
                                    </div>
                                    <div role="tabpanel" className="tab-pane fade" id="tab_content3" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: 0, paddingLeft: 0 }}>
                                                <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 45, marginBottom: 0 }}>
                                                    <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 500, fontSize: 'large', marginTop: 4 }}>Dispatch Data</label>
                                                </div>
                                                <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 200, marginBottom: 0 }}>
                                                </div>
                                                <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 200, marginBottom: '0.15em' }}>
                                                </div>
                                                <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 200, marginBottom: '0.15em' }}>
                                                </div>
                                                <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 200, marginBottom: '0.15em' }}>
                                                </div>
                                            </div>
                                            <hr style={{ backgroundColor: 'darkblue', height: 1, marginTop: '0.4vw', marginBottom: '0.5vw' }} />
                                        </div>
                                    </div>
                                    <div role="tabpanel" className="tab-pane fade" id="tab_content4" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: 0, paddingLeft: 0 }}>
                                                <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 45, marginBottom: 0 }}>
                                                    <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 500, fontSize: 'large', marginTop: 4 }}>Tags Data</label>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Line ID</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtTagsLineID" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Sation ID</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtTagsStationID" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Tag ID</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtTagID" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Tag Display Name</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtTagDispName" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">OPC Display Name</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtOPCDispName" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Retrieve Type</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtRetrieveType" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="text-center">
                                                <button type="button" onclick="SaveTags();" style={{ marginBottom: 'auto', width: 60, backgroundColor: 'mediumslateblue', borderRadius: 6 }} title="Search" className="btn btn-sm btn-success">
                                                    Save
                  </button>
                                            </div>
                                            <div className="text-center" style={{ marginTop: 4 }}>
                                                <label className="label-production" id="lblTagsError" style={{ color: 'red' }} />
                                            </div>
                                        </div>
                                        <hr />
                                        <table id="tblTags" className="text-left table table-bordered">
                                            <thead className="table-head">
                                                <tr>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        ID
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Line ID
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Sation ID
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Tag ID
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Tag Display Name
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        OPC Display Name
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Retrieve Type
                    </th>
                                                </tr>
                                            </thead>
                                            <tbody />
                                        </table>
                                    </div>
                                    <div role="tabpanel" className="tab-pane fade" id="tab_content5" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: 0, paddingLeft: 0 }}>
                                                <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 45, marginBottom: 0 }}>
                                                    <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 500, fontSize: 'large', marginTop: 4 }}>Shift Data</label>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Shift ID</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtShiftID" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Shift Name</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtShiftName" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Start Time</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtShiftStart" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">End Time</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtShiftEnd" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="text-center">
                                                <button type="button" onclick="SaveShifts();" style={{ marginBottom: 'auto', width: 60, backgroundColor: 'mediumslateblue', borderRadius: 6 }} title="Search" className="btn btn-sm btn-success">
                                                    Save
                  </button>
                                            </div>
                                            <div className="text-center">
                                                <label className="label-production" id="lblShiftsError" style={{ color: 'red' }} />
                                            </div>
                                        </div>
                                        <hr />
                                        <table id="tblShifts" className="table table-bordered">
                                            <thead className="table-head">
                                                <tr>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Shift ID
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Shift Name
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Start Time
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        End Time
                    </th>
                                                </tr>
                                            </thead>
                                            <tbody />
                                        </table>
                                    </div>
                                    <div role="tabpanel" className="tab-pane fade" id="tab_content6" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: 0, paddingLeft: 0 }}>
                                                <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 45, marginBottom: 0 }}>
                                                    <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 500, fontSize: 'large', marginTop: 4 }}>Shift wise Break Data</label>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Shift ID</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtShiftBreakID" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Break Type</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtLineName" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Start Time</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtShiftBreakStartTime" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">End Time</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtLineName" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="text-center">
                                                <button type="button" onclick="SaveLine();" style={{ marginBottom: 'auto', width: 60, backgroundColor: 'mediumslateblue', borderRadius: 6 }} title="Search" className="btn btn-sm btn-success">
                                                    Save
                  </button>
                                            </div>
                                            <div className="text-center">
                                                <label className="label-production" id="lblWorkorderError" style={{ color: 'red' }} />
                                            </div>
                                        </div>
                                        <hr />
                                        <table id="tblProductionPlan" className="table table-bordered">
                                            <thead className="table-head">
                                                <tr>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Shift ID
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Break Type
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Start Time
                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        End Time
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
