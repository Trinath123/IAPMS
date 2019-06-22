// import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";

// import ProductionPlan from './TMPUS/ProductionPlan';
// import ProductionReport from './TMPUS/ProductionReport';

// import BreakDownIssues from './TMPUS/BreakDownIssues';
// import BreakDownIssuesReport from './TMPUS/BreakDownIssuesReport';
// import MasterData from './TMPUS/MasterData';
// import Dashboard from './TMPUS/Dashboard';
// import DispatchMonitoring from './TMPUS/DispatchMonitoring';
// import DispatchReport from './TMPUS/DispatchReport';
// import MaintenanceMasterData from './TMPUS/MaintenanceMasterData';
// import PreventiveIssues from './TMPUS/PreventiveIssues';
// import PreventiveReport from './TMPUS/PreventiveReport';
// import ToolManagement from "./TMPUS/ToolManagement";
// import ToolHistory from './TMPUS/ToolHistory';

// import EditUser from './Admin/EditUser';
// import Login from './Admin/Login';
// import Users from './Admin/Users';
// import ChangePassword from './Home/ChangePassword';
// import Layout from "./Admin/Layout";
// //import Logout from './Logout/logout';



// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Switch>
//         <Route exact path="/EditUser" component={EditUser}/>  
//         <Route exact path="/Login" component={Login}/>  
//         <Route exact path="/Users" component={Users}/>  
//         <Route exact path="/ChangePassword" component={ChangePassword}/>  
//         <Route exact path="/BreakDownIssues" component={BreakDownIssues}/>
//         <Route exact path="/BreakDownIssuesReport" component={BreakDownIssuesReport}/>
//         <Route exact path="/DispatchMonitoring" component={DispatchMonitoring}/>
//         <Route exact path="/DispatchReport" component={DispatchReport}/>
//         <Route exact path="/MaintenanceMasterData" component={MaintenanceMasterData}/>
//         <Route exact path="/PreventiveIssues" component={PreventiveIssues}/>
//         <Route exact path="/PreventiveReport" component={PreventiveReport}/>
//         <Route exact path="/ProductionReport" component={ProductionReport}/>
//         <Route exact path="/ToolManagement" component={ToolManagement}/>
//         <Route exact path="/ToolHistory" component={ToolHistory}/>
//         <Route exact path="/Layout" component={Layout}/>
//         <Route exact path="/ProductionPlan" component={ProductionPlan}/>
//         <Route exact path="/MasterData" component={MasterData}/>  
//         <Route exact path="/Dashboard" component={Dashboard}/>  
//         </Switch>
//       </div>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react'
import Header from './Layout/Header';
import Menu from './Layout/Menu';
import Footer from './Layout/Footer';
// import Content from './Content';
// import Login from './Login';
// import Dashboard from './Dashboard';
// import Layout from './Layout';
// import MasterData from './MasterData';
// import PreventiveIssue from './PreventiveIssue';
// import { PreventiveReport } from './PreventiveReport';
// import Productionplan from './Productionplan';
// import ProductionReport from './ProductionReport';

export default class App extends Component {
  render() {
    return (
      <div>
       <Header/>
       <Menu/>
       <Footer/>
      </div>
    )
  }
}
