import React, { Component } from 'react'
import './styles/custom.min.css'

export default class ForgetPassword extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="login_wrapper">
                        <div className="form login_form">
                            <div className="panel panel-primary">
                                <div className="panel-heading" />
                                <div className="panel-body">
                                    <section className="login_content">
                                        <form onsubmit="return Submit()">
                                            <h1>Forgot Password</h1>
                                            <div className="row">
                                                <div className="col-md-4 col-sm-4">
                                                    <div className="text-right" style={{ marginTop: 8 }}>
                                                        Email
                                                    </div>
                                                </div>
                                                <div className="col-md-8 col-sm-8">
                                                    <input type="email" required id="txtEmail" className="form-control" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-danger" id="lblStatus" />
                                            </div>
                                            <div>
                                                <input type="submit" defaultValue="Submit" className="btn btn-success submit pull-right" />
                                            </div>
                                            <div>
                                                <a href="/Users/SignIn" className="reset_pass pull-left">Go to signin</a>
                                            </div>
                                        </form>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
