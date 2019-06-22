import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Layout extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
<div className="container body">
  <div className="main_container">
    <div className="col-md-3 left_col">
      <div className="left_col scroll-view">
        <div className="navbar nav_title" style={{border: 0, backgroundColor: 'white'}}>
          <a href className="site_title"><img id="imgLogo" src="~/Images/Bosch-LifeClip-EN-4C-Left1.jpg" style={{width: 140}} /></a>
        </div>
        <div className="clearfix" />
        {/* menu profile quick info */}
        <div className="profile clearfix">
          <div className="profile_pic">
          </div>
          <div className="profile_info">
            <span>Welcome,</span>
            <h2><span id="lblUserNameWelcome" /></h2>
          </div>
        </div>
        {/* /menu profile quick info */}
        <br />
        {/* sidebar menu */}
        <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
          <div className="menu_section">
            <h3>General</h3>
            <ul className="nav side-menu">
              <li>
                <a><i className="fa fa-users" />User Management<span className="fa fa-chevron-down" /></a>
                <ul className="nav child_menu">
                  <li><a href="/Admin/Users">Add/Edit User</a></li>
                </ul>
              </li>
              <li>
                <a><i className="fa fa-database" />Master Data Management<span className="fa fa-chevron-down" /></a>
                <ul className="nav child_menu">
                  <li><a href="/TMPUS/ProductionMasterData">Production Data</a></li>
                  <li><a href="/TMPUS/MaintenanceMasterData">Maintenance Data</a></li>
                </ul>
              </li>
              <li style={{backgroundColor: '#fff'}}>
                <a href="/Home/General">
                  <img src="~/Images/Aptiv Logo Color RGB JPG.JPG" style={{width: '50%'}} />
                </a>
              </li>
              <li><a href="/Home/General"><i className="fa fa-home" />Home</a></li>
              <li><a href="/TMPUS/Dashboard"><i className="fa fa-dashboard" />Dashboard</a></li>
              <li>
                <a><i className="fa fa-cogs" />Production<span className="fa fa-chevron-down" /></a>
                <ul className="nav child_menu">
                  <li><a href="/TMPUS/ProductionPlan">Production Plan</a></li>
                  <li><a href="/TMPUS/ProductionReport">Report</a></li>
                </ul>
              </li>
              <li>
                <a><i className="fa fa-truck" />Dispatch<span className="fa fa-chevron-down" /></a>
                <ul className="nav child_menu">
                  <li><a href="/TMPUS/DispatchMonitoring">Dispatch Monitoring</a></li>
                  <li><a href="/TMPUS/DispatchReport">Dispatch Report</a></li>
                </ul>
              </li>
              <li>
                <a><i className="fa fa-thumbs-up" />Maintenance<span className="fa fa-chevron-down" /></a>
                <ul className="nav child_menu">
                  <li>
                    <a><i />Preventive<span className="fa fa-chevron-down" /></a>
                    <ul className="nav child_menu">
                      <li>   <a href="/TMPUS/PreventiveIssues">Manage Issues</a></li>
                      <li><a href="/TMPUS/PreventiveReport">Report</a></li>
                    </ul>
                  </li>
                  <li>
                    <a><i />Breakdown<span className="fa fa-chevron-down" /></a>
                    <ul className="nav child_menu">
                      <li><a href="/TMPUS/BreakDownIssues">Manage Isues</a></li>
                      <li><a href="/TMPUS/BreakDownIssuesReport">Report</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a><i className="fa fa-wrench" />Tool<span className="fa fa-chevron-down" /></a>
                <ul className="nav child_menu">
                  <li><a href="/TMPUS/ToolManagement">Tool Replacement</a></li>
                  <li><a href="/TMPUS/ToolHistory">Tool History</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* top navigation */}
    <div className="top_nav">
      <div className="nav_menu">
        <nav>
          <div className="nav toggle">
            <a id="menu_toggle" onclick="ChangeLogo();"><i className="fa fa-bars" /></a>
          </div>
          <ul className="nav n
						avbar-nav navbar-right">
            <li className>
              <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                @*<img src="#" alt />*@ <span id="lblUserNameWelcome1" />
                <span className=" fa fa-angle-down" />
              </a>
              <ul className="dropdown-menu dropdown-usermenu pull-right">
                <li><a href="javascript:;">Profile</a></li>
                <li><a href="/Home/ChangePassword">Change Password</a></li>
                <li><a href="javascript:;">Help</a></li>
                <li><a href="/Users/SignOut"><i className="fa fa-sign-out pull-right" />Log Out</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    {/* /top navigation */}
    {/* page content */}
    <div className="right_col" role="main">
      @RenderBody()
    </div>
    {/* /page content */}
    {/* footer content */}
    <footer>
      <div className="clearfix" />
    </footer>
    {/* /footer content */}
  </div>
</div>
    )
  }
}
