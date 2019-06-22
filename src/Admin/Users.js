import React, { Component } from 'react'
import './styles/Users.css'

export default class Users extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="x_panel">
                    <div className="x_title">
                        Users List
                        <div className="form-inline pull-right">
                            <div className="form-group">
                                <select id="ddlClients" className="form-control input-sm " style={{marginRight:10,marginBottom:10}}/>
                                <a href="/Admin/EditUser/0" className="btn btn-sm btn-success" style={{marginRight:10}}>Create</a>
                            </div>
                        </div>
                        <div className="clearfix" />
                    </div>
                    <div className="x_content">
                        <table id="tblUsers" className="table">
                            <thead className="table-head">
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Login ID</th>
                                    <th>Category</th>
                                    <th>Is Active</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody />
                        </table>
                    </div>
                </div>
             </div>
        )
    }
}
