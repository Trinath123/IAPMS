import React, { Component } from 'react'
import './styles/UserMasterdata.css'
export default class UsersMasterdata extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="x_panel" style={{ margin: 0, padding: 0 }}>
                    <div className="x_title" style={{ textAlign: 'center', fontSize: 'medium', fontWeight: 'bold', color: 'darkblue', marginBottom: '0.2vw' }}>Users Master Data</div>
                    <div className="x_content">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className role="tabpanel" data-example-id="togglable-tabs">
                                <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist" style={{ padding: 0, backgroundColor: 'white' }}>
                                    <li id="dashboard-tab" role="presentation" className="active">
                                        <a href="#tab_content0" role="tab" data-toggle="tab" aria-expanded="true" style={{ color: 'darkblue' }}>User Category</a>
                                    </li>
                                    <li id="Roles-tab" role="presentation">
                                        <a href="#tab_content1" role="tab" data-toggle="tab" aria-expanded="true" style={{ color: 'darkblue' }}>User Roles</a>
                                    </li>
                                    <li id="Email-tab" role="presentation" className>
                                        <a href="#tab_content2" role="tab" data-toggle="tab" aria-expanded="false" style={{ color: 'darkblue' }}>Email Notification Group</a>
                                    </li>
                                    <li id="Feature-tab" role="presentation" className>
                                        <a href="#tab_content3" role="tab" data-toggle="tab" aria-expanded="false" style={{ color: 'darkblue' }}>Features Group</a>
                                    </li>
                                    <li id="Page-tab" role="presentation" className>
                                        <a href="#tab_content4" role="tab" data-toggle="tab" aria-expanded="false" style={{ color: 'darkblue' }}>Page Access</a>
                                    </li>
                                    <li id="Control-tab" role="presentation" className>
                                        <a href="#tab_content5" role="tab" data-toggle="tab" aria-expanded="false" style={{ color: 'darkblue' }}>Control Elements</a>
                                    </li>
                                </ul>
                                <div id="myTabContent" className="tab-content">
                                    <div role="tabpanel" className="tab-pane fade active in" id="tab_content0" aria-labelledby="line-tab" style={{ width: '50%', margin: 'auto' }}>
                                        <div className="row">
                                            <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: 0, paddingLeft: 0 }}>
                                                <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 45, marginBottom: 0 }}>
                                                    <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 500, fontSize: 'large', marginTop: 4 }}>User Category Data</label>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Sl. No</label>
                                                    </div>
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                                                        <input type="text" id="txtCategoryID" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                                        <label className="label-production">Category Name</label>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                                        <input type="text" id="txtCategoryName" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                </div>
                                                <br />
                                            </div>
                                            <div className="row">
                                                <div className="text-center">
                                                    <button type="button" onclick="SaveUsersCategory();" style={{ marginBottom: 'auto', width: 60, backgroundColor: 'mediumslateblue', borderRadius: 6 }} title="Search" className="btn btn-sm btn-success">
                                                        Save
                                                    </button>
                                                </div>
                                                <div className="text-center" style={{ marginTop: 4 }}>
                                                    <label className="label-production" id="lblCategoryError" style={{ color: 'red' }} />
                                                </div>
                                            </div>
                                        </div>
                                        <input type="hidden" id="txtCategoryID" />
                                       <hr />
                                        <table id="tblCatogory" className="table table-bordered">
                                            <thead className="table-head">
                                                <tr>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '15%' }}>
                                                        Sl. No
                                                     </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Category Name
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
                                                    <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 500, fontSize: 'large', marginTop: 4 }}>User Roles</label>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">ID</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtUserRoleID" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">User Role</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtUserRole" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="text-center">
                                                    <button type="button" onclick="SaveUserRole();" style={{ marginBottom: 'auto', width: 60, backgroundColor: 'mediumslateblue', borderRadius: 6 }} title="Search" className="btn btn-sm btn-success">
                                                        Save
                                                     </button>
                                                </div>
                                                <div className="text-center" style={{ marginTop: 4 }}>
                                                    <label className="label-production" id="lblRolesError" style={{ color: 'red' }} />
                                                </div>
                                            </div>
                                        </div>
                                       <hr />
                                         <table id="tblUserRoles" className="table table-bordered">
                                            <thead className="table-head">
                                                <tr>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '35%' }}>
                                                        Sl
                                                     </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        User Role
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody />
                                        </table>
                                    </div>
                                    <div role="tabpanel" className="text-center tab-pane fade" id="tab_content2" aria-labelledby="profile-tab" style={{ width: '50%', margin: 'auto' }}>
                                        <div className="row">
                                            <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: 0, paddingLeft: 0 }}>
                                                <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 45, marginBottom: 0 }}>
                                                    <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 500, fontSize: 'large', marginTop: 4 }}>Notification Group</label>
                                                </div>
                                               <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">ID</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtEmailGroupID" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Email Group</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtEmailGroupName" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="text-center">
                                                    <button type="button" onclick="SaveEmailGroup();" style={{ marginBottom: 'auto', width: 60, backgroundColor: 'mediumslateblue', borderRadius: 6 }} title="Search" className="btn btn-sm btn-success">
                                                        Save
                                                    </button>
                                                </div>
                                                <div className="text-center" style={{ marginTop: 4 }}>
                                                    <label className="label-production" id="lblEmailGroupError" style={{ color: 'red' }} />
                                                </div>
                                        </div>
                                        </div>
                                       <hr />
                                         <table id="tblEmailGroups" className="table table-bordered text-left">
                                            <thead className="table-head">
                                                <tr>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '35%' }}>
                                                        Sl
                                                </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Email Group
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody />
                                        </table>
                                    </div>
                                    <div role="tabpanel" className="tab-pane fade" id="tab_content3" aria-labelledby="profile-tab" style={{ width: '60%', margin: 'auto' }}>
                                        <div className="row">
                                            <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: 0, paddingLeft: 0 }}>
                                                <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 45, marginBottom: 0 }}>
                                                    <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 500, fontSize: 'large', marginTop: 4 }}>Features</label>
                                                </div>
                                               <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">ID</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtFeatureGroupID" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Features Group</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtFeaturesGroup" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                                        <label className="label-production">Features Description</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <input type="text" id="txtFeatureDescription" style={{ width: '100%' }} className="form-control input-sm" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="text-center">
                                                    <button type="button" onclick="SaveFeatureGroup();" style={{ marginBottom: 'auto', width: 60, backgroundColor: 'mediumslateblue', borderRadius: 6 }} title="Search" className="btn btn-sm btn-success">
                                                        Save
                                                    </button>
                                                </div>
                                                <div className="text-center" style={{ marginTop: 4 }}>
                                                    <label className="label-production" id="lblFeatureGroupError" style={{ color: 'red' }} />
                                                </div>
                                        </div>
                                        </div>
                                       <hr />
                                         <table id="tblFeatureGroup" className="text-left table table-bordered">
                                            <thead className="table-head">
                                                <tr>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '35%' }}>
                                                        Sl. No
                                                     </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Features Group
                                                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Features Description
                                                     </th>
                                                </tr>
                                            </thead>
                                            <tbody />
                                        </table>
                                    </div>
                                    <div role="tabpanel" className="tab-pane fade" id="tab_content4" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: 0, paddingLeft: 0 }}>
                                                <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 45, marginBottom: 0 }}>
                                                    <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 500, fontSize: 'large', marginTop: 4 }}>User Page Access by Role</label>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-5 col-md-5 col-sm-5 col-xs-6">
                                                        <label className="label-production" style={{ marginTop: 5 }}>Feature</label>
                                                    </div>
                                                    <div className="text-left col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <select id="ddlSelectFeature" title="click on search" className="form-control input-sm" style={{ width: '100%', margin: '0 auto', backgroundColor: 'lightgray' }}>
                                                            <option value={1} />
                                                        </select>
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-5 col-md-5 col-sm-5 col-xs-6">
                                                        <label className="label-production" style={{ marginTop: 5 }}>User Category</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <select id="ddlSelectCategory" title="click on search" className="form-control input-sm" style={{ width: '100%', margin: '0 auto', backgroundColor: 'lightgray' }}>
                                                            <option value={2}>BoschUser</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-5 col-md-5 col-sm-5 col-xs-6">
                                                        <label className="label-production" style={{ marginTop: 5 }}>User Roles</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <select id="ddlSelectRoles" title="click on search" className="form-control input-sm" style={{ width: '100%', margin: '0 auto', backgroundColor: 'lightgray' }}>
                                                            <option value={0}>None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="text-center row col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <table id="tblSections" className="newtable text-left table table-bordered">
                                                    <thead className="table-head" style={{ backgroundColor: 'white' }}>
                                                        <tr style={{ marginTop: 0 }}>
                                                            <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'darkblue', width: '15%' }}>
                                                                Sl
                                                             </th>
                                                            <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'darkblue' }}>
                                                                Sections
                                                             </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody />
                                                </table>
                                            </div>
                                            <div className="text-center row col-lg-5 col-md-5 col-sm-6 col-xs-12">
                                                <table id="tblScreenNames" className="text-left table table-bordered">
                                                    <thead className="table-head" style={{ backgroundColor: 'white' }}>
                                                        <tr style={{ marginTop: 0 }}>
                                                            <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'darkblue', width: '85%' }}>
                                                                Screen Name
                                                             </th>
                                                            <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'darkblue' }}>
                                                                Access
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody />
                                                </table>
                                            </div>
                                            <div className="text-center row col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                <table id="tblControls" className="text-left table table-bordered">
                                                    <thead className="table-head" style={{ backgroundColor: 'white' }}>
                                                        <tr style={{ marginTop: 0 }}>
                                                            <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'darkblue', width: '45%' }}>
                                                                Control Element
                                                            </th>
                                                            <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'darkblue', width: '30%' }}>
                                                                Control Type
                                                            </th>
                                                            <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'darkblue' }}>
                                                                Access
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody />
                                                </table>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="text-center">
                                                <button type="button" onclick="SaveScreenAccess();" style={{ marginBottom: 'auto', width: 60, backgroundColor: 'mediumslateblue', borderRadius: 6 }} title="Search" className="btn btn-sm btn-success">
                                                    Save
                                                </button>
                                            </div>
                                            <div className="text-center" style={{ marginTop: 4 }}>
                                                <label className="label-production" id="lblScreenAccessError" style={{ color: 'red' }} />
                                            </div>
                                        </div>
                                       <hr style={{ marginTop: 5, marginBottom: 5 }} />
                                        <table id="tblScreenAccess" className="text-left table table-bordered">
                                            <colgroup>
                                                <col span={1} style={{ width: '5%' }} />
                                                <col span={1} style={{ width: '30%' }} />
                                                <col span={1} style={{ width: '30%' }} />
                                                <col span={1} style={{ width: '25%' }} />
                                                <col span={1} style={{ width: '10%' }} />
                                            </colgroup>
                                            <thead className="table-head">
                                                <tr>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '6%' }}>
                                                        ID
                                                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Feature
                                                    </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        User Category
                                                     </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Screen Name
                                                     </th>
                                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                                        Access
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
                                                    <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 500, fontSize: 'large', marginTop: 4 }}>Page wise Control Elements</label>
                                                </div>
                                                <div className="text-center row">
                                                    <div className="text-right col-lg-5 col-md-5 col-sm-5 col-xs-6">
                                                        <label className="label-production" style={{ marginTop: 5 }}>Feature</label>
                                                    </div>
                                                    <div className="text-left col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <select id="ddlControlFeature" title="click on search" className="form-control input-sm" style={{ width: '100%', margin: '0 auto', backgroundColor: 'lightgray' }}>
                                                            <option value={1} />
                                                        </select>
                                                    </div>
                                                </div>
                                                <br />
                                               <div className="text-center row">
                                                    <div className="text-right col-lg-5 col-md-5 col-sm-5 col-xs-6">
                                                        <label className="label-production" style={{ marginTop: 5 }}>Users</label>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <select id="ddlClients" title="click on search" className="form-control input-sm" style={{ width: '100%', margin: '0 auto', backgroundColor: 'lightgray' }}>
                                                            <option value={1} />
                                                        </select>
                                                    </div>
                                                </div>
                                                <br />
                                                 <div className="text-center row">
                                                    <div className="text-right col-lg-5 col-md-5 col-sm-5 col-xs-6">
                                                        <label className="label-production" style={{ marginTop: 5 }}>Screen Name</label>
                                                    </div>
                                                    <div className="text-left col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                        <select id="ddlControlScreens" title="click on search" className="form-control input-sm" style={{ width: '100%', margin: '0 auto', backgroundColor: 'lightgray' }}>
                                                            <option value={16} />
                                                        </select>
                                                    </div>
                                                </div>
                                                <br />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="row col-lg-3 col-md-3 col-sm-2 col-xs-2" />
                                            <div className="text-center row col-lg-7 col-md-7 col-sm-7 col-xs-12">
                                                <table id="tblControlEmenets" className="text-left table table-bordered">
                                                    <thead className="table-head" style={{ backgroundColor: 'white' }}>
                                                        <tr style={{ marginTop: 0 }}>
                                                            <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'darkblue', width: '10%' }}>
                                                                Sl
                                                            </th>
                                                            <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'darkblue', width: '30%' }}>
                                                                Control Element
                                                            </th>
                                                            <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'darkblue', width: '20%' }}>
                                                                Control Type
                                                             </th>
                                                            <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'darkblue', width: '40%' }}>
                                                                Active
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody />
                                                </table>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="text-center">
                                                <button type="button" onclick="SaveControlElements();" style={{ marginBottom: 'auto', width: 60, backgroundColor: 'mediumslateblue', borderRadius: 6 }} title="Search" className="btn btn-sm btn-success">
                                                    Save
                                                </button>
                                            </div>
                                            <div className="text-center" style={{ marginTop: 4 }}>
                                                <label className="label-production" id="lblControlElementsError" style={{ color: 'red' }} />
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
