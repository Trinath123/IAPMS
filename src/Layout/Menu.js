import React, { Component } from 'react'
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import UsersMasterdata from '../Users/UsersMasterdata';
import ProductionMasterData from '../TMPUS/ProductionMasterData';
import MaintenanceMasterData from '../TMPUS/MaintenanceMasterData';

import General from '../Home/General';


import ProductionPlan from '../TMPUS/ProductionPlan';
import ProductionReport from '../TMPUS/ProductionReport';

import Dashboard from '../TMPUS/Dashboard';

 import BreakDownIssues from '../TMPUS/BreakDownIssues';
 import BreakDownIssuesReport from '../TMPUS/BreakDownIssuesReport';

 import MasterData from '../TMPUS/MasterData';

 import AptivDispatchPlanning from '../TMPUS/AptivDispatchPlanning'
import DispatchMonitoring from '../TMPUS/DispatchMonitoring';
import DispatchReport from '../TMPUS/DispatchReport';

import PreventiveIssues from '../TMPUS/PreventiveIssues';
import PreventiveReport from '../TMPUS/PreventiveReport';

import ToolManagement from "../TMPUS/ToolManagement";
import ToolReplacementReport from '../TMPUS/ToolReplacementReport'
import ToolHistory from '../TMPUS/ToolHistory';

import ToolChangeOver from '../TMPUS/ToolChangeOver'
import ToolChangeOverReport from '../TMPUS/ToolChangeOverReport'

// import EditUser from './Admin/EditUser';
//  import Login from '../Admin/Login';
import Users from '../Admin/Users';
import Users1 from '../Admin/Users1';







export default class Menu extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <aside className="main-sidebar">
            <section className="sidebar">
              <ul className="sidebar-menu" data-widget="tree">
                <br />
                <li className="header">Welcome</li>
                <li>
                  <a href><span>Trinath Kumar</span></a>
                </li>
                <li>
                  <a href><span>General</span></a>
                </li>
                <li className="treeview">
                  <a href="fake_url">
                    <i className="fa fa-users" />
                    <span>User Management</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><NavLink exact to="/Users1"><i className="fa fa-circle-o" /> Add/Edit User</NavLink></li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="fake_url">
                    <i className="fa fa-database" />
                    <span>Master Data</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><NavLink exact to="/UsersMasterdata"><i className="fa fa-circle-o" />Users Data </NavLink></li>
                    <li><NavLink exact to="/ProductionMasterData"><i className="fa fa-circle-o" /> Production Data </NavLink></li>
                    <li><NavLink exact to="/MaintenanceMasterData"><i className="fa fa-circle-o" /> Maintenance Data </NavLink></li>

                  </ul>
                </li>
                <li>
                  <NavLink exact to="/General"><i className="fa fa-home" /><span>Home</span></NavLink>
                </li>
                <li>
                  <NavLink exact to="/Dashboard">
                    <i className="fa fa-dashboard" />
                    <span>Dashboard</span>
                  </NavLink>
                </li>
                <li className="treeview">
                  <a href="fake_url">
                    <i className="fa fa-bar-chart" />
                    <span>Production</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><NavLink exact to="/ProductionPlan"><i className="fa fa-circle-o" /> Production Plan </NavLink></li>
                    <li><NavLink exact to="ProductionReport"><i className="fa fa-circle-o" /> Production Report </NavLink></li>

                  </ul>
                </li>
                <li className="treeview">
                  <a href="fake_url">
                    <i className="fa fa-cogs" />
                    <span>Tool Maintenance</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li className="treeview">
                      <a href="fake_url">
                        <i className="fa fa-arrow-circle-right" />
                        <span>Preventive</span>
                        <span className="pull-right-container">
                          <i className="fa fa-angle-left pull-right" />
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li><NavLink exact to="/PreventiveIssues"><i className="fa fa-circle-o" /> Manage Tickets </NavLink></li>
                        <li><NavLink exact to="/PreventiveReport"><i className="fa fa-circle-o" /> Report </NavLink> </li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="fake_url">
                        <i className="fa fa-arrow-circle-right" />
                        <span>Change Over</span>
                        <span className="pull-right-container">
                          <i className="fa fa-angle-left pull-right" />
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li><NavLink exact to="/ToolChangeOver"><i className="fa fa-circle-o" /> Manage Tickets  </NavLink> </li>
                        <li><NavLink exact to="/ToolChangeOverReport"><i className="fa fa-circle-o" /> Report </NavLink></li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="fake_url">
                        <i className="fa fa-arrow-circle-right" />
                        <span>Breakdown</span>
                        <span className="pull-right-container">
                          <i className="fa fa-angle-left pull-right" />
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li><NavLink exact to="/BreakDownIssues"><i className="fa fa-circle-o" /> Manage Tickets  </NavLink></li>
                        <li><NavLink exact to="/BreakDownIssuesReport"><i className="fa fa-circle-o" /> Report  </NavLink></li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="fake_url">
                        <i className="fa fa-arrow-circle-right" />
                        <span>Tool Replacement</span>
                        <span className="pull-right-container">
                          <i className="fa fa-angle-left pull-right" />
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li><NavLink exact to="/ToolManagement"><i className="fa fa-circle-o" /> Manage Tickets   </NavLink></li>
                        <li><NavLink exact to="/ToolReplacementReport"><i className="fa fa-circle-o" /> Report</NavLink></li>
                      </ul>
                    </li>
                    <li><NavLink exact to="/ToolHistory"><i className="fa fa-circle-o" /> Tool History </NavLink></li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="fake_url">
                    <i className="fa fa-truck" />
                    <span>Dispatch</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><NavLink exact to="/AptivDispatchPlanning"><i className="fa fa-circle-o" /> Aptiv Dispatch Planning  </NavLink></li>
                    <li><NavLink exact to="/DispatchMonitoring"><i className="fa fa-circle-o" /> Dispatch Monitoring  </NavLink></li>
                    <li><NavLink exact to="/DispatchReport"><i className="fa fa-circle-o" /> Dispatch Report  </NavLink></li>
                  </ul>
                </li>
              </ul>
            </section>
          </aside>

         <Route exact path="/MasterData" component={MasterData}/>  

         <Route exact path="/UsersMasterdata" component={UsersMasterdata}/>
         <Route exact path="/ProductionMasterData" component={ProductionMasterData}/>  
         <Route exact path="/MaintenanceMasterData" component={MaintenanceMasterData}/> 

         <Route path="/General" component={General} />

         <Route path="/Dashboard" component={Dashboard} />

          <Route path="/ProductionPlan" component={ProductionPlan} />
          <Route exact path="/ProductionReport" component={ProductionReport}/>

          <Route exact path="/PreventiveIssues" component={PreventiveIssues}/>
          <Route exact path="/PreventiveReport" component={PreventiveReport}/>

         <Route exact path="/BreakDownIssues" component={BreakDownIssues}/>
         <Route exact path="/BreakDownIssuesReport" component={BreakDownIssuesReport}/>

         <Route exact path="/ToolManagement" component={ToolManagement}/>
         <Route exact path="/ToolReplacementReport" component={ToolReplacementReport}/>
         <Route exact path="/ToolHistory" component={ToolHistory}/>

         <Route exact path="/AptivDispatchPlanning" component={AptivDispatchPlanning}/>         
         <Route exact path="/DispatchMonitoring" component={DispatchMonitoring}/>
         <Route exact path="/DispatchReport" component={DispatchReport}/>
         
         <Route exact path="/Users" component={Users}/>  
         <Route exact path="/Users1" component={Users1}/> 
 
         <Route exact path="/ToolChangeOver" component={ToolChangeOver}/>
         <Route exact path="/ToolChangeOverReport" component={ToolChangeOverReport}/>
         
          {/* <Route exact path="/EditUser" component={EditUser}/>   */}
        {/* <Route exact path="/Login" component={Login}/>  
       */}

        </BrowserRouter>

      </div>

    )
  }
}
