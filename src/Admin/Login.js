import React, { Component } from 'react'
import './styles/custom.min.css';
import {
    Route,
    NavLink,
    BrowserRouter
} from "react-router-dom";
import App from '../App'
export default class Login extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <div className="loader" />
                <div className="container">
                    <div className="login_wrapper">
                        <div className="form login_form">
                            <div className="panel panel-primary">
                                <div className="panel-heading" />
                                <div className="panel-body">
                                    <section className="login_content">
                                        <form onsubmit="return Submit()">
                                            <h1>Login</h1>
                                            <div className="row">
                                                <div className="col-md-3 col-sm-3">
                                                    <div className="text-right" style={{ marginTop: 8 }}>
                                                        Email
                                                    </div>
                                                </div>
                                                <div className="col-md-8 col-sm-8">
                                                    <input type="email" required id="txtEmail" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 col-sm-3">
                                                    <div className="text-right" style={{ marginTop: 8 }}>
                                                        Password
                                                    </div>
                                                </div>
                                                <div className="col-md-8 col-sm-8">
                                                    <input type="password" required id="txtPassword" className="form-control" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-danger" id="lblStatus" />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-5 col-sm-5">
                                                <a href className="reset_pass pull-right"><NavLink exact to="/App">Forgot password?</NavLink></a>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <input type="submit" Value="Login" className="btn btn-success submit pull-right" />
                                                </div>
                                            </div>
                                        </form>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Route path="/App" component={App} />
             </BrowserRouter>
            </div>
        )
    }
}
