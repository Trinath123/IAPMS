import React, { Component } from 'react';
import './styles/DashboardStyle.css';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="x_panel" style={{ margin: 0, padding: 0 }}>
          <div className="x_title" style={{ textAlign: 'center', fontSize: 'x-large', fontWeight: 'bold', color: 'darkblue', marginBottom: '0.2vw' }}>Dashboard</div>
          <div className="x_content">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="text-left col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <label className="label-production" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 700, fontSize: 'small', marginTop: 0, marginBottom: 0 }} id="lblLastRefresh">Last Refresh: 5/18/2019 12:00:00</label>
              </div>
              <div className="text-right col-lg-5 col-md-5 col-sm-5 col-xs-4">
                <label className="label-production" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 700, fontSize: 'small', margin: 'auto' }}>Production Plan: </label>
                <span className="fa fa-circle" id="greenPlan" style={{ lineHeight: 'inherit', fontSize: '1.2em', margin: 'auto', color: 'green' }} />
                <span className="fa fa-circle" id="yellowPlan" style={{ lineHeight: 'inherit', fontSize: '1.2em', margin: 'auto', color: 'yellow' }} />
                <span className="fa fa-circle" id="redPlan" style={{ lineHeight: 'inherit', fontSize: '1.2em', margin: 'auto', color: 'red' }} />
              </div>
              <div className="text-right col-lg-3 col-md-3 col-sm-3 col-xs-4">
                <label className="label-production" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 500, fontSize: 'small', marginTop: 0, marginBottom: 0 }} id="lblShift" />
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className role="tabpanel" data-example-id="togglable-tabs">
                <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist" style={{ padding: 0, backgroundColor: 'white' }}>
                  <li id="dashboard-tab" role="presentation" className="active">
                    <a href="#tab_content0" role="tab" data-toggle="tab" aria-expanded="true" style={{ color: 'darkblue' }}>Dashboard</a>
                  </li>
                  <li id="MOLD-tab" role="presentation">
                    <a href="#tab_content1" role="tab" data-toggle="tab" aria-expanded="true" style={{ color: 'darkblue' }}>Production Quantity - MOLD</a>
                  </li>
                  <li id="EOL-tab" role="presentation" className>
                    <a href="#tab_content2" role="tab" data-toggle="tab" aria-expanded="false" style={{ color: 'darkblue' }}>Test Quantity - EOL</a>
                  </li>
                  <li id="Dispatch-tab" role="presentation" className>
                    <a href="#tab_content3" role="tab" data-toggle="tab" aria-expanded="false" style={{ color: 'darkblue' }}>Dispatch</a>
                  </li>
                </ul>
                <div id="myTabContent" className="tab-content">
                  <div role="tabpanel" className="tab-pane fade active in" id="tab_content0" aria-labelledby="home-tab">
                    <div className="row">
                      <div className="col col-lg-8 col-md-8 col-sm-12 col-xs-12" style={{ paddingRight: 0, paddingLeft: 20 }}>
                        <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ border: '2px solid #e6e9ed', borderRadius: '0.3em' }}>
                          <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 45, marginBottom: 0 }}>
                            <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 700, fontSize: 'large', marginTop: 4 }}>Production Monitoring</label>
                          </div>
                          <div className="text-center col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{ height: 200, marginBottom: 0 }}>
                            <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: '15%', marginTop: 0, marginBottom: '0.5em' }}>
                              <label className="text-center label-production">Production Quantity (Mold)</label>
                            </div>
                            <div className="kpi-chart col-lg-12" style={{ width: '100%', border: '1px solid darkblue', borderRadius: '0.3em', height: '75%', backgroundColor: 'rgba(46, 164, 201, 1)', margin: '0 auto', position: 'relative', verticalAlign: 'middle' }}>
                              <div className="text-right col-lg-3" style={{ height: '100%', width: '40%', position: 'absolute', right: '0.2vw' }}>
                                <a href className="fa fa-gears" style={{ lineHeight: 'inherit', fontSize: '4em', marginTop: 0, color: '#2A3F54' }} > </a>
                              </div>
                              <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: '100%', width: '100%', paddingLeft: '0.1em', paddingRight: '0.1em' }}>
                                <div className="text-center col-lg-12" style={{ height: '55%', width: '100%' }} />
                                <div className="text-center col-lg-12" style={{ height: '45%', width: '100%' }}>
                                  <div id="divMold" className="text-center" style={{ height: '70%', width: '100%', border: '1px solid gray', borderRadius: '0.3em', padding: 0, backgroundColor: 'gray' }}>
                                    <label className="text-right label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 600, fontSize: 'x-large', marginBottom: 0, marginRight: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }} id="dashMoldActual">0</label>
                                    <label className="text-left label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 500, fontSize: 'small', marginBottom: 0, marginLeft: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }}>Pieces</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-center col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{ height: 200, marginBottom: 0 }}>
                            <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: '15%', marginTop: 0, marginBottom: '0.5em' }}>
                              <label className="text-center label-production">Production Quantity (EOL)</label>
                            </div>
                            <div className="kpi-chart col-lg-12" style={{ width: '100%', border: '1px solid darkblue', borderRadius: '0.3em', height: '75%', backgroundColor: 'rgba(128, 191, 118, 1)', margin: '0 auto', position: 'relative', verticalAlign: 'middle' }}>
                              <div className="text-right col-lg-3" style={{ height: '100%', width: '40%', position: 'absolute', right: '0.2vw' }}>
                                <a href className="fa fa-bullseye" style={{ lineHeight: 'inherit', fontSize: '4.5em', marginTop: '-0.1em', color: '#2A3F54' }} > </a>
                              </div>
                              <div className="text-center col-lg-12" style={{ height: '100%', width: '100%', paddingLeft: '0.1em', paddingRight: '0.1em' }}>
                                <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: '25%', width: '100%' }}>
                                  <label className="text-right label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 700, fontSize: 'medium', marginTop: '1vw', padding: 0 }} id="lblDashEOLFOR">FOR: 0</label>
                                  <label className="text-left label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 400, fontSize: 'small', marginTop: '1.3vw', paddingLeft: '0.2em' }}>PPM</label>
                                </div>
                                <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: '30%', width: '100%' }}>
                                  <label className="text-right label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 700, fontSize: 'medium', marginTop: '0.5vw', paddingLeft: '0.1em', paddingRight: '0.1em' }} id="lblDashEOLFPY">FPY: 99.99</label>
                                  <label className="text-left label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 400, fontSize: 'small', marginTop: '0.75vw', paddingLeft: '0.2em', paddingRight: '0.1em' }}>%</label>
                                </div>
                                <div className="text-center col-lg-12" style={{ height: '45%', width: '100%' }}>
                                  <div id="divEOL" className="text-center" style={{ height: '70%', width: '100%', border: '1px solid gray', borderRadius: '0.3em', padding: 0, backgroundColor: 'gray' }}>
                                    <label className="text-right label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 600, fontSize: 'x-large', marginTop: '0.1vw', marginBottom: 0, marginRight: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }} id="lblDashEOLActual">0</label>
                                    <label className="text-left label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 500, fontSize: 'small', marginTop: '0.1vw', marginBottom: 0, marginLeft: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }}>Pieces</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="kpi-chart col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{ height: 200, marginBottom: 0 }}>
                            <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: '15%', marginTop: 0, marginBottom: '0.5em' }}>
                              <label className="text-center label-production">Stocks at Aptiv</label>
                            </div>
                            <div className="kpi-chart col-lg-12" style={{ width: '100%', border: '1px solid darkblue', borderRadius: '0.3em', height: '75%', backgroundColor: 'rgba(246, 114, 57, 1)', margin: '0 auto', position: 'relative', verticalAlign: 'middle', padding: 0 }}>
                              <div className="text-right col-lg-3" style={{ height: '100%', width: '40%', position: 'absolute', right: '0.2vw' }}>
                                <a href className="fa fa-building" style={{ lineHeight: 'inherit', fontSize: '4em', marginTop: 0, color: '#2A3F54' }} > </a>
                              </div>
                              <div className="text-center col-lg-12" style={{ height: '100%', width: '100%', paddingLeft: '0.1em', paddingRight: '0.1em' }}>
                                <div className="text-center row" style={{ height: '55%', width: '100%' }}>
                                  <label className="text-right label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 500, fontSize: '120%', marginTop: '1.6vw', marginBottom: 0, marginRight: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }} id="txtActual">Current Stock: </label>
                                  <label className="text-left label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 600, fontSize: '160%', marginTop: '1.1vw', marginBottom: 0, marginRight: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }} id="lblDashStockCurrent">0</label>
                                  <label className="text-left label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 500, fontSize: '100%', marginTop: '1.75vw', marginBottom: 0, marginLeft: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }}>~ Pieces</label>
                                </div>
                                <div className="text-center col-lg-12" style={{ height: '45%', width: '100%' }}>
                                  <div id="divStock" className="text-center col-lg-12" style={{ height: '70%', width: '100%', border: '1px solid gray', borderRadius: '0.3em', margin: '0 auto', padding: 0, backgroundColor: 'gray' }}>
                                    <label className="text-right label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 500, fontSize: '120%', marginTop: '0.6vw', marginBottom: 0, marginRight: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }} id="txtActual">Customer Stock: </label>
                                    <label className="text-left label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 600, fontSize: '160%', marginTop: '0.1vw', marginBottom: 0, marginRight: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }} id="lblDashCustStock">0</label>
                                    <label className="text-left label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 500, fontSize: '100%', marginTop: '0.75vw', marginBottom: 0, marginLeft: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }}>Pieces</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-center col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{ height: 200, marginBottom: 0 }}>
                            <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: '15%', marginTop: 0, marginBottom: '0.5em' }}>
                              <label className="text-center label-production">In Transit Stocks</label>
                            </div>
                            <div className="kpi-chart col-lg-12" style={{ width: '100%', border: '1px solid darkblue', borderRadius: '0.3em', height: '75%', backgroundColor: 'rgba(38, 125, 205, 1)', margin: '0 auto', position: 'relative', verticalAlign: 'middle' }}>
                              <div className="text-right col-lg-3" style={{ height: '100%', width: '40%', position: 'absolute', right: '0.2vw' }}>
                                <a href className="fa fa-barcode" style={{ lineHeight: 'inherit', fontSize: '4em', marginTop: 0, color: '#2A3F54' }} > </a>
                              </div>
                              <div className="text-center col-lg-12" style={{ height: '100%', width: '100%', paddingLeft: '0.1em', paddingRight: '0.1em' }}>
                                <div className="text-center" style={{ height: '55%', width: '100%' }} />
                                <div className="text-center" style={{ height: '45%', width: '100%' }}>
                                  <div id="divDashIntransit" className="text-center" style={{ height: '70%', width: '100%', border: '1px solid gray', borderRadius: '0.3em', padding: 0, backgroundColor: 'gray' }}>
                                    <label className="text-right label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 600, fontSize: 'x-large', marginTop: '0.1vw', marginBottom: 0, marginRight: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }} id="lblDashIntransit">0</label>
                                    <label className="text-left label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 500, fontSize: 'small', marginTop: '0.75vw', marginBottom: 0, marginLeft: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }}>Pieces</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ paddingRight: 0, paddingLeft: 20 }}>
                        <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ border: '2px solid #e6e9ed', borderRadius: '0.3em' }}>
                          <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 45, marginBottom: 0 }}>
                            <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 700, fontSize: 'large', marginTop: 4 }}>Tool Monitoring</label>
                          </div>
                          <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 200, marginBottom: '0.15em' }}>
                            <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: '15%', marginTop: 0, marginBottom: '0.5em' }}>
                              <label className="text-center label-production">Preventive Maintenance</label>
                            </div>
                            <div className="kpi-chart col-lg-12" style={{ width: '100%', border: '1px solid darkblue', borderRadius: '0.3em', height: '75%', backgroundColor: 'rgba(53, 148, 77, 1)', margin: '0 auto', position: 'relative', verticalAlign: 'middle' }}>
                              <div className="text-right col-lg-3" style={{ height: '97%', width: '33%', position: 'absolute', right: '0.2vw' }}>
                                <a href className="fa fa-life-ring" style={{ lineHeight: 'inherit', fontSize: '4em', marginTop: 0, color: '#2A3F54' }} > </a>
                              </div>
                              <div className="text-center col-lg-12" style={{ height: '100%', width: '100%', paddingLeft: '0.1em', paddingRight: '0.1em' }}>
                                <div className="text-center col-lg-12" style={{ height: '35%', width: '100%' }}>
                                  <label className="text-right label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 600, fontSize: 'x-large', marginTop: '1.1vw', marginBottom: 0, marginRight: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }} id="lblDashActualShots">0</label>
                                  <label className="text-left label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 500, fontSize: 'small', marginTop: '1.75vw', marginBottom: 0, marginLeft: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }}>Actual Shots</label>
                                </div>
                                <div className="text-center col-lg-12" style={{ height: '33%', width: '100%' }}>
                                  <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 700, fontSize: 'medium', marginTop: '1vw', marginBottom: 0 }} id="lblPMTarget">Target: 20 +/-5K Shots</label>
                                </div>
                                <div className="text-center col-lg-12" style={{ height: '32%', width: '100%' }}>
                                  <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 700, fontSize: 'medium', marginTop: '0.5vw', marginBottom: 0 }} id="lblDashPMDue">PM due in 17 Days</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 200, marginBottom: '0.15em' }}>
                            <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: '15%', marginTop: 0, marginBottom: '0.5em' }}>
                              <label className="text-center label-production">Tool Life</label>
                              <label className="text-center label-production" id="lblDashToolID">()</label>
                            </div>
                            <div className="kpi-chart col-lg-12" style={{ width: '100%', border: '1px solid darkblue', borderRadius: '0.3em', height: '75%', backgroundColor: 'rgba(200, 125, 150, 1)', margin: '0 auto', position: 'relative', verticalAlign: 'middle' }}>
                              <div className="text-right col-lg-3" style={{ height: '97%', width: '33%', position: 'absolute', right: '0.2vw' }}>
                                <a href className="fa fa-wrench" style={{ lineHeight: 'inherit', fontSize: '4em', marginTop: 0, color: '#2A3F54' }} > </a>
                              </div>
                              <div className="text-center" style={{ height: '100%', width: '100%', paddingLeft: '0.1em', paddingRight: '0.1em' }}>
                                <div className="text-center" style={{ height: '35%', width: '95%' }}>
                                  <label className="text-right label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 600, fontSize: 'x-large', marginTop: '1.1vw', marginBottom: 0, marginRight: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }} id="lblDashTotalShots">0</label>
                                  <label className="text-left label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 500, fontSize: 'small', marginTop: '1.75vw', marginBottom: 0, marginLeft: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }}>Cummulative Shots</label>
                                </div>
                                <div className="text-center" style={{ height: '33%', width: '100%' }}>
                                  <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 700, fontSize: 'medium', marginTop: '1vw', marginBottom: 0 }} id="lblToolReplTarget">Target: 500K Shots</label>
                                </div>
                                <div className="text-center" style={{ height: '32%', width: '100%' }}>
                                  <label className="text-center label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 600, fontSize: 'medium', marginTop: '0.5em', marginBottom: 0 }} id="lblDashToolReplDue">Tool Life remaining: 340 Days</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center" style={{ height: '15%', marginTop: '0.5em' }}>
                     <label className="text-center label-production">Legend for Production Plan :</label>
                <label className="text-center label-production">Valid Plan - </label>
                      <span className="fa fa-circle" id="greenPlan" style={{ lineHeight: 'inherit', fontSize: '1.2em', margin: 'auto', color: 'green' }} />
                      <label className="text-center label-production">,  Invalid Plan - </label>
                      <span className="fa fa-circle" id="yellowPlan" style={{ lineHeight: 'inherit', fontSize: '1.2em', margin: 'auto', color: 'yellow' }} />
                      <label className="text-center label-production">,  No Plan - </label>
                      <span className="fa fa-circle" id="redPlan" style={{ lineHeight: 'inherit', fontSize: '1.2em', margin: 'auto', color: 'red' }} />
                    </div>
                  </div>
                  <div role="tabpanel" className="tab-pane fade " id="tab_content1" aria-labelledby="production-tab">
                    <div className="row">
                      <div className="text-center col-lg-4 col-md-6 col-sm-6 col-xs-12" style={{ height: 135, marginBottom: 0 }}>
                        <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: '25%', marginTop: 0, marginBottom: '0.5em' }}>
                          <label className="text-center label-production">Production Quantity (Mold)</label>
                        </div>
                        <div className="kpi-chart col-lg-12" style={{ width: '100%', border: '1px solid darkblue', borderRadius: '0.3em', height: '75%', backgroundColor: 'rgba(46, 164, 201, 1)', margin: '0 auto', position: 'relative', verticalAlign: 'middle' }}>
                          <div className="text-right col-lg-3" style={{ height: '100%', width: '40%', position: 'absolute', right: '0.2vw' }}>
                            <a href className="fa fa-gears" style={{ lineHeight: 'inherit', fontSize: '4em', marginTop: '0.2em', color: '#2A3F54' }} > </a>
                          </div>
                          <div className="text-center col-lg-12" style={{ height: '100%', width: '100%', paddingLeft: '0.1em', paddingRight: '0.1em' }}>
                            <div className="text-center col-lg-12" style={{ height: '50%', width: '100%' }}>
                              <label className="text-right label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 600, fontSize: 'x-large', marginTop: '0.75vw', marginBottom: 0, marginRight: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }} id="txtMoldActual">0</label>
                              <label className="text-left label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 500, fontSize: 'small', marginTop: '1.5vw', marginBottom: 0, marginLeft: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }}>Pieces</label>
                            </div>
                            <div className="text-center col-lg-12" style={{ height: '40%', width: '100%', marginTop: '0.75vw' }}>
                              <select id="ddlSelectMold" title="click on search" className="text-center form-control input-sm" style={{ width: '35%', margin: '0 auto', backgroundColor: 'lightgray' }}>
                                <option value="Shift">Shiftwise</option>
                                <option value="Daily">Daily</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center col-lg-4 col-md-6 col-sm-6 col-xs-12" style={{ height: 135, marginBottom: '0.15em' }}>
                        <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: '25%', marginTop: 0, marginBottom: '0.5em' }}>
                          <label className="text-center label-production">Tool Preventive Maintenance</label>
                        </div>
                        <div className="kpi-chart col-lg-12" style={{ width: '100%', border: '1px solid darkblue', borderRadius: '0.3em', height: '75%', backgroundColor: 'rgba(53, 148, 77, 1)', margin: '0 auto', position: 'relative', verticalAlign: 'middle' }}>
                          <div className="text-right col-lg-3" style={{ height: '97%', width: '33%', position: 'absolute', right: '0.2vw' }}>
                            <a href className="fa fa-life-ring" style={{ lineHeight: 'inherit', fontSize: '4em', marginTop: '0.2em', color: '#2A3F54' }} >  </a>
                          </div>
                          <div className="text-center col-lg-12" style={{ height: '100%', width: '100%', paddingLeft: '0.1em', paddingRight: '0.1em' }}>
                            <label className="text-right label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 600, fontSize: 'x-large', marginTop: '0.1vw', marginBottom: 0, marginRight: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }} id="lblActualShots">0</label>
                            <label className="text-left label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 500, fontSize: 'small', marginTop: '0.75vw', marginBottom: 0, marginLeft: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }}>Actual Shots</label>
                            <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 700, fontSize: 'medium', marginTop: 0, marginBottom: 0 }} id="lblPMTarget">Target: 20 +/-5K Shots</label>
                            <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 700, fontSize: 'medium', marginTop: '0.5em', marginBottom: 0 }} id="lblPMDue">PM due in 17 Days</label>
                          </div>
                        </div>
                      </div>
                      <div className="text-center col-lg-4 col-md-6 col-sm-6 col-xs-12" style={{ height: 135, marginBottom: '0.15em' }}>
                        <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: '25%', marginTop: 0, marginBottom: '0.5em' }}>
                          <label className="text-center label-production">Tool Life Monitoring</label>
                          <label className="text-center label-production" id="lblDashProdToolID">()</label>
                        </div>
                        <div className="kpi-chart col-lg-12" style={{ width: '100%', border: '1px solid darkblue', borderRadius: '0.3em', height: '75%', backgroundColor: 'rgba(200, 125, 150, 1)', margin: '0 auto', position: 'relative', verticalAlign: 'middle' }}>
                          <div className="text-right col-lg-3" style={{ height: '97%', width: '33%', position: 'absolute', right: '0.2vw' }}>
                            <a href className="fa fa-wrench" style={{ lineHeight: 'inherit', fontSize: '4em', marginTop: '0.2em', color: '#2A3F54' }} > </a>
                          </div>
                          <div className="text-center" style={{ height: '100%', width: '100%', paddingLeft: '0.1em', paddingRight: '0.1em' }}>
                            <label className="text-right label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 600, fontSize: 'x-large', marginTop: '0.1vw', marginBottom: 0, marginRight: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }} id="lblTotalShots">0</label>
                            <label className="text-left label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 500, fontSize: 'small', marginTop: '0.75vw', marginBottom: 0, marginLeft: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }}>Cummulative Shots</label>
                            <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 700, fontSize: 'medium', marginTop: 0, marginBottom: 0 }} id="lblToolReplTarget">Target: 500K Shots</label>
                            <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 700, fontSize: 'medium', marginTop: '0.5em', marginBottom: 0 }} id="lblToolReplDue">Tool Life remaining: 340 Days</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr style={{ backgroundColor: 'darkblue', height: 1, marginTop: '2.4vw', marginBottom: '0.5vw' }} />
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 600, fontSize: 'small', margin: 0, padding: 0 }} id="lblMouldHeader">Production Quantity, </label>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ backgroundColor: 'azure', borderRadius: '0.5vw', width: '100%' }}>
                          <div id="chart1" style={{ height: '100%', width: '100%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" className="text-center tab-pane fade" id="tab_content2" aria-labelledby="profile-tab">
                    <div className="row" style={{ alignItems: 'center' }}>
                      <div className="text-center col-lg-4 col-md-4 col-sm-3" style={{ height: 135, marginBottom: '0.15em' }} />
                      <div className="text-center col-lg-4 col-md-6 col-sm-6 col-xs-12" style={{ height: 135, marginBottom: '0.15em' }}>
                        <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: '25%', marginTop: 0, marginBottom: '0.5em' }}>
                          <label className="text-center label-production">Production Quantity (EOL)</label>
                        </div>
                        <div className="kpi-chart col-lg-12" style={{ width: '100%', border: '1px solid darkblue', borderRadius: '0.3em', height: '75%', backgroundColor: 'rgba(128, 191, 118, 1)', margin: '0 auto', position: 'relative', verticalAlign: 'middle' }}>
                          <div className="text-right col-lg-3" style={{ height: '100%', width: '40%', position: 'absolute', right: '0.15vw' }}>
                            <a href className="fa fa-bullseye" style={{ lineHeight: 'inherit', fontSize: '4em', marginTop: '0.2em', color: '#2A3F54' }} > </a>
                          </div>
                          <div className="text-center" style={{ height: '100%', width: '100%', paddingLeft: '0.1em', paddingRight: '0.5em' }}>
                            <div className="row">
                              <label className="text-right label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 600, fontSize: 'x-large', marginTop: 0, marginBottom: 0, marginRight: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }} id="lblEOLActual">0</label>
                              <label className="text-left label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 500, fontSize: 'small', marginTop: '0.5vw', marginBottom: 0, marginLeft: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }}>Pieces</label>
                            </div>
                            <div className="row">
                              <label className="text-right label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 500, fontSize: 'medium', margin: 0, padding: 0 }} id="lblEOLFOR">FOR: 0</label>
                              <label className="text-center label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 400, fontSize: 'small', marginTop: '0.2em', padding: 0 }}>PPM,</label>
                              <label className="text-left label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 500, fontSize: 'medium', margin: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }} id="lblEOLFPY">FPY: 99.99</label>
                              <label className="text-left label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 400, fontSize: 'small', marginTop: '0.2em', paddingLeft: '0.1em', paddingRight: '0.2em' }}>%</label>
                            </div>
                            <div className="row">
                              <select id="ddlSelectEOL" title="click on search" className="form-control input-sm" style={{ width: '35%', margin: '0 auto', backgroundColor: 'lightgray' }}>
                                <option value="Shift">Shiftwise</option>
                                <option value="Daily">Daily</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr style={{ backgroundColor: 'darkblue', height: 1, marginTop: '1.4vw', marginBottom: '0.5vw' }} />
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 600, fontSize: 'small', margin: 0, padding: 0 }} id="lblHeader">Test Quantity, 2019</label>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: 0, height: '24.2vw' }}>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ backgroundColor: 'azure', borderRadius: '0.5vw', width: '100%', height: '100%' }}>
                          <div id="chart2" style={{ width: '100%', height: '100%' }} />
                        </div>
                      </div>
                     <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ paddingLeft: 0, height: '24.2vw' }}>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ backgroundColor: 'azure', borderRadius: '0.5vw', width: '100%', height: '100%' }}>
                          <div id="chart3" style={{ width: '100%', height: '100%' }} />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 600, fontSize: 'small', margin: 0, padding: 0 }} id="lblRejectHeader">Test Quantity Rejects by Stage, 2019</label>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ backgroundColor: 'azure', borderRadius: '0.5vw', width: '100%' }}>
                          <div id="chart4" style={{ width: '100%', height: '100%' }} />
                        </div>
                      </div>
              </div>
                  </div>
                  <div role="tabpanel" className="tab-pane fade" id="tab_content3" aria-labelledby="profile-tab">
                    <div className="row" style={{ alignItems: 'center' }}>
                      <div className="row">
                        <div className="text-center col-lg-2 col-md-2" style={{ height: 135, marginBottom: '0.15em' }}>
                        </div>
                        <div className="text-center col-lg-4 col-md-4 col-sm-6 col-xs-12" style={{ height: 135, marginBottom: '0.15em' }}>
                          <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: '25%', marginTop: 0, marginBottom: '0.5em' }}>
                            <label className="text-center label-production">Customer Stocks</label>
                          </div>
                          <div className="kpi-chart col-lg-12" style={{ width: '100%', border: '1px solid darkblue', borderRadius: '0.3em', height: '75%', backgroundColor: 'rgba(246, 114, 57, 1)', margin: '0 auto', position: 'relative', verticalAlign: 'middle' }}>
                            <div className="text-right col-lg-3" style={{ height: '100%', width: '40%', position: 'absolute', right: '0.2vw' }}>
                              <a href className="fa fa-barcode" style={{ lineHeight: 'inherit', fontSize: '4em', marginTop: 0, color: '#2A3F54' }} > </a>
                            </div>
                            <div className="text-center col-lg-12" style={{ height: '100%', width: '100%', paddingLeft: '0.1em', paddingRight: '0.1em' }}>
                              <div className="text-center col-lg-12" style={{ height: '50%', width: '100%' }}>
                                <label className="text-right label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 500, fontSize: 'medium', marginTop: '0.6vw', marginBottom: 0, marginRight: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }} id="txtActual">Current Stock: </label>
                                <label className="text-left label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 600, fontSize: 'x-large', marginTop: '0.1vw', marginBottom: 0, marginRight: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }} id="lblStockCurrent">0</label>
                                <label className="text-left label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 500, fontSize: 'small', marginTop: '0.75vw', marginBottom: 0, marginLeft: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }}>~ Pieces</label>
                              </div>
                              <div className="text-center" style={{ width: '97%', height: '45%', marginTop: '1.5vw', marginLeft: '1vw' }}>
                                <div id="divDispStock" className="text-center col-lg-12" style={{ height: '95%', width: '80%', border: '1px solid gray', borderRadius: '0.3em', margin: '0 auto', padding: 0, backgroundColor: 'gray' }}>
                                  <label className="text-right label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 500, fontSize: 'medium', marginTop: '0.6vw', marginBottom: 0, marginRight: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }} id="txtActual">Customer Stock: </label>
                                  <label className="text-left label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 600, fontSize: 'x-large', marginTop: '0.1vw', marginBottom: 0, marginRight: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }} id="lblCustStock">0</label>
                                  <label className="text-left label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 500, fontSize: 'small', marginTop: '0.75vw', marginBottom: 0, marginLeft: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }} id="lblUnit">Pieces</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center col-lg-4 col-md-4 col-sm-6 col-xs-12" style={{ height: 135, marginBottom: '0.15em' }}>
                          <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: '25%', marginTop: 0, marginBottom: '0.5em' }}>
                            <label className="text-center label-production">In Transit Stocks</label>
                          </div>
                          <div className="kpi-chart col-lg-12" style={{ width: '100%', border: '1px solid darkblue', borderRadius: '0.3em', height: '75%', backgroundColor: 'rgba(38, 125, 205, 1)', margin: '0 auto', position: 'relative', verticalAlign: 'middle' }}>
                            <div className="text-right col-lg-3" style={{ height: '100%', width: '40%', position: 'absolute', right: '0.2vw' }}>
                              <a href className="fa fa-truck" style={{ lineHeight: 'inherit', fontSize: '4em', marginTop: '0.2em', color: '#2A3F54' }} > </a>
                            </div>
                            <div className="text-center col-lg-12" style={{ height: '100%', width: '100%', paddingLeft: '0.1em', paddingRight: '0.1em' }}>
                              <div className="text-center col-lg-12" style={{ height: '50%', width: '100%' }}>
                                <label className="text-right label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 600, fontSize: 'x-large', marginTop: '0.6vw', marginBottom: 0, marginRight: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }} id="lblIntransit">0</label>
                                <label className="text-left label-production" style={{ color: 'white', fontFamily: 'Arial', fontWeight: 500, fontSize: 'small', marginTop: '1.25vw', marginBottom: 0, marginLeft: 0, paddingLeft: '0.1em', paddingRight: '0.1em' }}>Pieces</label>
                              </div>
                              <div className="text-center col-lg-12" style={{ height: '50%', width: '100%' }}>
                                <button id="btnReceivedQty" type="button" onclick="AcceptDispatch();" style={{ marginTop: 'auto', fontSize: 'medium', fontWeight: 500 }} title="Search" className="btn btn-sm btn-success">
                                  Received Quantity
                          </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr style={{ backgroundColor: 'darkblue', height: 1, marginTop: '1.4vw', marginBottom: '0.5vw' }} />
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="text-right col-lg-1 col-md-1 col-sm-1 col-xs-1" style={{ padding: 0 }}>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" style={{ padding: 0 }}>
                            <select id="ddlSelectStock" title="click on search" className="pull-right form-control input-sm" style={{ width: '60%', margin: 0, backgroundColor: 'lightgray' }}>
                              <option value="Shift">Shiftwise</option>
                              <option value="Daily">Daily</option>
                              <option value="Monthly">Monthly</option>
                            </select>
                          </div>
                          <div className="text-center col-lg-2 col-md-2 col-sm-2 col-xs-2">
                            <select id="ddlSelectVariant" title="click on search" className="form-control input-sm" style={{ width: '100%', margin: '0 auto', backgroundColor: 'lightgray' }}>
                              <option value={1}>Bosch 56/112</option>
                              <option value={2}>Bosch 112 way</option>
                              <option value={3}>Bosch 94 way mold</option>
                              <option value={4}>Bosch 56/112/94 way grid mold</option>
                            </select>
                          </div>
                          <div className="text-left col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <label className="label-production" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 600, fontSize: 'small', margin: 0, padding: 0 }} id="lblPassHeader">Test Quantity, 2019</label>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ backgroundColor: 'azure', borderRadius: '0.5vw', height: '100%', width: '100%', float: 'left' }}>
                            <div id="chart5" style={{ height: '100%', width: '100%' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="moldModal" role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">Mold Details</h4>
              </div>
              <div className="modal-body">
                <table id="tblMoldData" className="table table-bordered">
                  <thead className="table-head">
                    <tr>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                        Variant ID
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                        Variant Name
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                        Quantity
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                        Start Date Time
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                        End Date Time
                </th>
                    </tr>
                  </thead>
                  <tbody />
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="eolDashModal" role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">EOL Details</h4>
              </div>
              <div className="modal-body">
                <table id="tblEOLDashData" className="table table-bordered">
                  <thead className="table-head">
                    <tr>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                        Variant ID
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                        Variant Name
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                        Quantity
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                        Start Date Time
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                        End Date Time
                </th>
                    </tr>
                  </thead>
                  <tbody />
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="stockModal" role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">Customer Stock</h4>
              </div>
              <div className="modal-body">
                <table id="tblStockData" className="table table-bordered">
                  <thead className="table-head">
                    <tr>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                        Variant ID
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                        Variant Name
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                        Quantity
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                        Stock Date
                </th>
                    </tr>
                  </thead>
                  <tbody />
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="intransitDashModal" role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content" style={{ width: '60vw' }}>
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">In Transit Quantity</h4>
              </div>
              <div className="modal-body">
                <table id="tblTransitDashData" className="table table-bordered">
                  <thead className="table-head">
                    <tr style={{ width: '100%' }}>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '8%' }}>
                        Advice Note
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '8%' }}>
                        Part No
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '45%' }}>
                        Variant Name
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '5%' }}>
                        Shipped Quantity
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '15%' }}>
                        Dispatch Date
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '15%' }}>
                        Dispatch Time
                </th>
                    </tr>
                  </thead>
                  <tbody />
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="intransitModal" role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content" style={{ width: '60vw' }}>
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">Acknowledge Intransit Quantity</h4>
              </div>
              <div className="modal-body">
                <table id="tblTransitData" className="table table-bordered">
                  <thead className="table-head">
                    <tr style={{ width: '100%' }}>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '8%' }}>
                        Advice Note
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '8%' }}>
                        Part No
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '45%' }}>
                        Variant Name
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '5%' }}>
                        Shipped Quantity
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '5%' }}>
                        Received Quantity
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '15%' }}>
                        Dispatch Date
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white', width: '15%' }}>
                        Dispatch Time
                </th>
                      <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                        Acknowledge
                </th>
                    </tr>
                  </thead>
                  <tbody />
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

