import React, { Component } from 'react'
import './styles/ChangePassword.css'


export default class ChangePassword extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="x_panel">
                            <div className="x_title" style={{ textAlign: 'center', fontSize: 'medium', fontWeight: 'bold', color: 'darkblue' }}>
                                Change Password
                            <div className="clearfix" />
                            </div>
                            <div className="x_content">
                                <br />
                                <form id="demo-form2" onsubmit="return Submit();" data-parsley-validate className="form-horizontal form-label-left">
                                    <div className="form-group">
                                        <label className="label-custom col-md-3 col-sm-3 col-xs-12 text-right" htmlFor="first-name">
                                            Current Password
                                         </label>
                                        <div className="col-md-3 col-sm-3 col-xs-12">
                                            <input type="password" id="txtCurrentPassword" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="label-custom col-md-3 col-sm-3 col-xs-12 text-right" htmlFor="first-name">
                                            New Password
                                        </label>
                                        <div className="col-md-3 col-sm-3 col-xs-12">
                                            <input type="password" id="txtNewPassword" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="label-custom col-md-3 col-sm-3 col-xs-12 text-right" htmlFor="first-name">
                                            Confirm Password
                                        </label>
                                        <div className="col-md-3 col-sm-3 col-xs-12">
                                            <input type="password" id="txtConfirmPassword" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group text-center">
                                        <label className="control-label text-danger" id="lblStatus" />
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
            </div>

        )
    }
}
