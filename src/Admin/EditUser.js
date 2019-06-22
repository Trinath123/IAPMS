import React, { Component } from 'react'
import './styles/EditUser.css'


export default class EditUser extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="x_panel">
                        <div className="x_title" style={{ textAlign: 'center', fontSize: 'medium', fontWeight: 'bold', color: 'darkblue' }}>
                            Add/Edit User
                              <div className="clearfix" />
                        </div>
                        <div className="x_content">
                            <br />
                            <form id="demo-form2" onsubmit="return Submit();" data-parsley-validate className="form-horizontal form-label-left">
                                <div className="form-group text-right">
                                    <label className="label-custom col-md-3 col-sm-3 col-xs-12">
                                        First Name
                                         </label>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <input type="text" id="txtFirstName" autoComplete="off" required="required" className="form-control col-md-7 col-xs-12" />
                                    </div>
                                </div>
                                <div className="form-group text-right">
                                    <label className="label-custom  col-md-3 col-sm-3 col-xs-12">
                                        Last Name
                                        </label>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <input type="text" id="txtLastName" name="last-name" className="form-control col-md-7 col-xs-12" />
                                    </div>
                                </div>
                                <div className="form-group text-right">
                                    <label className="label-custom  col-md-3 col-sm-3 col-xs-12">Email </label>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <input id="txtEmail" className="form-control col-md-7 col-xs-12" required="required" type="email" name="middle-name" />
                                    </div>
                                </div>
                                <div id="divIsActive">
                                    <div className="form-group">
                                        <div className="text-right">
                                            <label className="label-custom  col-md-3 col-sm-3 col-xs-12">IsActive </label>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12" style={{ paddingTop: 15 }}>
                                            <span className="col-md-7 col-xs-12">
                                                <input type="checkbox" id="chkIsActive" className="js-switch" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div id="divUsers">
                                    <div className="form-group text-right">
                                        <label htmlFor="middle-name" className="label-custom  col-md-3 col-sm-3 col-xs-12">Users <span className="required">*</span> </label>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <select id="ddlClients" className="form-control col-md-7 col-xs-12" />
                                        </div>
                                    </div>
                                </div>
                                <div id="divUserCategory">
                                    <div className="form-group text-right">
                                        <label htmlFor="middle-name" className="label-custom  col-md-3 col-sm-3 col-xs-12">Category <span className="required">*</span> </label>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <select id="ddlCategories" className="form-control col-md-7 col-xs-12" />
                                        </div>
                                    </div>
                                </div>
                                <div id="divRolesCategory">
                                    <div className="form-group text-right">
                                        <label htmlFor="middle-name" className="label-custom  col-md-3 col-sm-3 col-xs-12">Roles </label>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <select id="ddlRoles" className="form-control col-md-7 col-xs-12" />
                                        </div>
                                    </div>
                                </div>
                                <div id="divSpeciality">
                                    <div className="form-group text-right">
                                        <label htmlFor="middle-name" className="label-custom  col-md-3 col-sm-3 col-xs-12">Speciality <span className="required">*</span> </label>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <select id="ddlSpeciality" className="form-control col-md-7 col-xs-12" />
                                        </div>
                                    </div>
                                </div>
                                <div id="divEmailGroup">
                                    <div className="form-group">
                                        <div className="text-right">
                                            <label htmlFor="middle-name" className="label-custom  col-md-3 col-sm-3 col-xs-12">Email Notifications </label>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div id="divEmailGroups">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label id="lblStatus" />
                                </div>
                                <div className="form-group">
                                    <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3 text-center">
                                        <button id="btnSubmit" type="submit" className="btn btn-sm btn-success" style={{ marginBottom: 'auto', width: 60, backgroundColor: 'mediumslateblue', borderRadius: 6 }}>
                                            <span className="fa fa-save" style={{ fontSize: 20 }} />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
