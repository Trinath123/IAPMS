import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class MasterData extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="content-wrapper">
        <div className="x_panel" style={{ margin: 20, padding: 0 }}>
          <div className="x_title" style={{ textAlign: 'center', fontSize: 'medium', fontWeight: 'bold', color: 'darkblue', marginBottom: '0.2vw' }}>Tool Maintenance Master Data</div>
          <div className="x_content">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className role="tabpanel" data-example-id="togglable-tabs">
                <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist" style={{ padding: 0, backgroundColor: 'white' ,margin:30}}>
                  <li id="dashboard-tab" role="presentation" className="active">
                    <a href="#tab_content0" role="tab" data-toggle="tab" aria-expanded="true" style={{ color: 'darkblue' }}>Preventive Maintenance</a>
                  </li>
                  <li id="MOLD-tab" role="presentation">
                    <a href="#tab_content1" role="tab" data-toggle="tab" aria-expanded="true" style={{ color: 'darkblue' }}>Breakdown Maintenance</a>
                  </li>
                  <li id="EOL-tab" role="presentation" className>
                    <a href="#tab_content2" role="tab" data-toggle="tab" aria-expanded="false" style={{ color: 'darkblue' }}>Tool Replacement</a>
                  </li>
                  <li id="Dispatch-tab" role="presentation" className>
                    <a href="#tab_content3" role="tab" data-toggle="tab" aria-expanded="false" style={{ color: 'darkblue' }}>Tool Changeover</a>
                  </li>
                </ul>
                <div id="myTabContent" className="tab-content">
                  <div role="tabpanel" className="tab-pane fade active in" id="tab_content0" aria-labelledby="home-tab">
                    <div className="row">
                      <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: 0, paddingLeft: 0 }}>
                        <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 45, marginBottom: 0 }}>
                          <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 500, fontSize: 'large', marginTop: 4 }}>Preventive Maintenance Data</label>
                        </div>
                        <div className="text-center row">
                          <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                            <label className="label-production">ID</label>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <input type="text" id="txtLineID" style={{ width: '100%' }} className="form-control input-sm" />
                          </div>
                          <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                            <label className="label-production">Question</label>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <input type="text" id="txtLineName" style={{ width: '100%' }} className="form-control input-sm" />
                          </div>
                        </div>
                        <div className="text-center row">
                          <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                            <label className="label-production">Method</label>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <input type="text" id="txtLineID" style={{ width: '100%' }} className="form-control input-sm" />
                          </div>
                          <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                            <label className="label-production">Active</label>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <input type="text" id="txtLineName" style={{ width: '100%' }} className="form-control input-sm" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <table id="tblProductionPlan" className="table table-bordered">
                      <thead className="table-head">
                        <tr>
                          <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                            ID
                    </th>
                          <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                            Question
                    </th>
                          <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                            Method
                    </th>
                          <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                            Active
                    </th>
                        </tr>
                      </thead>
                      <tbody />
                    </table>
                  </div>
                  <div role="tabpanel" className="tab-pane fade " id="tab_content1" aria-labelledby="production-tab">
                    <div className="row">
                      <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: 0, paddingLeft: 0 }}>
                        <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 45, marginBottom: 0 }}>
                          <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 500, fontSize: 'large', marginTop: 4 }}>Breakdown Maintenance Data</label>
                        </div>
                        <div className="text-center row">
                          <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                            <label className="label-production">Line ID</label>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <input type="text" id="txtLineID" style={{ width: '100%' }} className="form-control input-sm" />
                          </div>
                          <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                            <label className="label-production">Line Name</label>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <input type="text" id="txtLineName" style={{ width: '100%' }} className="form-control input-sm" />
                          </div>
                        </div>
                        <div className="text-center row">
                          <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                            <label className="label-production">Cycle Time</label>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <input type="text" id="txtLineID" style={{ width: '100%' }} className="form-control input-sm" />
                          </div>
                          <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                            <label className="label-production">Active</label>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <input type="text" id="txtLineName" style={{ width: '100%' }} className="form-control input-sm" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <table id="tblProductionPlan" className="table table-bordered">
                      <thead className="table-head">
                        <tr>
                          <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                            Line ID
                    </th>
                          <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                            Line Name
                    </th>
                          <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                            Cycle Time
                    </th>
                          <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                            Active
                    </th>
                        </tr>
                      </thead>
                      <tbody />
                    </table>
                  </div>
                  <div role="tabpanel" className="text-center tab-pane fade" id="tab_content2" aria-labelledby="profile-tab">
                    <div className="row">
                      <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: 0, paddingLeft: 0 }}>
                        <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 45, marginBottom: 0 }}>
                          <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 500, fontSize: 'large', marginTop: 4 }}>Tool Replacement Data</label>
                        </div>
                        <div className="text-center row">
                          <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                            <label className="label-production">Line ID</label>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <input type="text" id="txtLineID" style={{ width: '100%' }} className="form-control input-sm" />
                          </div>
                          <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                            <label className="label-production">Line Name</label>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <input type="text" id="txtLineName" style={{ width: '100%' }} className="form-control input-sm" />
                          </div>
                        </div>
                        <div className="text-center row">
                          <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                            <label className="label-production">Cycle Time</label>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <input type="text" id="txtLineID" style={{ width: '100%' }} className="form-control input-sm" />
                          </div>
                          <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                            <label className="label-production">Active</label>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <input type="text" id="txtLineName" style={{ width: '100%' }} className="form-control input-sm" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <table id="tblProductionPlan" className="table table-bordered">
                      <thead className="table-head">
                        <tr>
                          <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                            Line ID
                    </th>
                          <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                            Line Name
                    </th>
                          <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                            Cycle Time
                    </th>
                          <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                            Active
                    </th>
                        </tr>
                      </thead>
                      <tbody />
                    </table>
                  </div>
                  <div role="tabpanel" className="tab-pane fade" id="tab_content3" aria-labelledby="profile-tab">
                    <div className="row">
                      <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: 0, paddingLeft: 0 }}>
                        <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ height: 45, marginBottom: 0 }}>
                          <label className="text-center label-production col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 500, fontSize: 'large', marginTop: 4 }}>Tool Changeover Data</label>
                        </div>
                        <div className="text-center row">
                          <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                            <label className="label-production">Line ID</label>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <input type="text" id="txtLineID" style={{ width: '100%' }} className="form-control input-sm" />
                          </div>
                          <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                            <label className="label-production">Line Name</label>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <input type="text" id="txtLineName" style={{ width: '100%' }} className="form-control input-sm" />
                          </div>
                        </div>
                        <div className="text-center row">
                          <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                            <label className="label-production">Cycle Time</label>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <input type="text" id="txtLineID" style={{ width: '100%' }} className="form-control input-sm" />
                          </div>
                          <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                            <label className="label-production">Active</label>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <input type="text" id="txtLineName" style={{ width: '100%' }} className="form-control input-sm" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <table id="tblProductionPlan" className="table table-bordered">
                      <thead className="table-head">
                        <tr>
                          <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                            Line ID
                    </th>
                          <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                            Line Name
                    </th>
                          <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                            Cycle Time
                    </th>
                          <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                            Active
                    </th>
                        </tr>
                      </thead>
                      <tbody />
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
