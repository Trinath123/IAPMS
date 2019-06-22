import React, { Component } from 'react'

import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import ChangePassword from '../Home/ChangePassword';
import SignOut from '../Users/SignOut';
 
export default class Header extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <header className="main-header">
          <a href className="logo">
            <span className="logo-mini"><b>IAPMS</b></span>
            <span className="logo-lg"><b>IAPMS</b></span>
          </a>
          <nav className="navbar navbar-static-top">
            <a href="fake_url" className="sidebar-toggle" data-toggle="push-menu" role="button">
              <span className="sr-only">Toggle navigation</span>
            </a>
            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
                <li className="dropdown user user-menu">
                  <a href="fake_url" className="dropdown-toggle" data-toggle="dropdown">
                    <img src="dist/img/pradeep.jpg" className="user-image" alt="User " />
                    <span className="hidden-xs">Trinath Kumar</span>
                  </a>
                  <ul className="dropdown-menu dropdown-usermenu pull-right">
                <li><NavLink exact to=""><i className="fa fa-sign-out pull-right" />Profile </NavLink></li>
                <li><NavLink exact to="/ChangePassword">Change Password </NavLink></li>
                <li><NavLink exact to="">Help </NavLink></li>
                <li><NavLink exact to="/SignOut"><i className="fa fa-sign-out pull-right" />Log Out </NavLink></li>
              </ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <Route exact path="/ChangePassword" component={ChangePassword}/> 
        <Route exact path="/SignOut" component={SignOut}/>
        </BrowserRouter>
      </div>

    )
  }
}
