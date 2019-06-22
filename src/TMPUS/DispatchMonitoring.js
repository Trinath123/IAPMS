import React, { Component } from 'react'
import './styles/DispatchMonitoring.css'

export default class DispatchMonitoring extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="x_panel">
          <div className="x_title" style={{ marginTop: 15, textAlign: 'center', fontSize: 'medium', fontWeight: 'bold', color: 'darkblue' }}>Dispatch Monitoring</div>
          <div className="x_content" style={{ marginTop: 25 }}>
            <div className="row">
              <div className="text-center col-lg-2 col-md-2 col-sm-4 col-xs-4">
                <label className="label-dispatch" />
              </div>
              <div className="text-right col-lg-2 col-md-2 col-sm-4 col-xs-4">
                <label className="label-dispatch">Bar Code</label>
              </div>
              <div className="text-center col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <input type="text" id="txtBarcode" style={{ width: '100%' }} className="form-control input-sm" />
              </div>
            </div>
            <div className="row">
              <div className="text-right col-lg-2 col-md-2 col-sm-4 col-xs-4">
                <label className="label-dispatch">Advice Note (N)</label>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <label type="text" id="lblAdviceNote" style={{ width: '100%' }} className="form-control input-sm" />
              </div>
              <div className="text-right col-lg-2 col-md-2 col-sm-4 col-xs-4">
                <label className="label-dispatch">Part Number (P)</label>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <label type="text" id="lblPartNo" style={{ width: '100%' }} className="form-control input-sm" />
              </div>
            </div>
            <div className="row">
              <div className="text-right col-lg-2 col-md-2 col-sm-4 col-xs-4">
                <label className="label-dispatch">Quantity (Q)</label>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <label type="text" id="lblQuantity" style={{ width: '100%' }} className="form-control input-sm" />
              </div>
              <div className="text-right col-lg-2 col-md-2 col-sm-4 col-xs-4">
                <label className="label-dispatch">Supplier Part Number (IP)</label>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <label type="text" id="lblSupPartNo" style={{ width: '100%' }} className="form-control input-sm" />
              </div>
            </div>
            <div className="row">
              <div className="text-right col-lg-2 col-md-2 col-sm-4 col-xs-4">
                <label className="label-dispatch">Supplier Code (V)</label>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <label type="text" id="lblSupCode" style={{ width: '100%' }} className="form-control input-sm" />
              </div>
              <div className="text-right col-lg-2 col-md-2 col-sm-4 col-xs-4">
                <label className="label-dispatch">Serial Number (M)</label>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <label type="text" id="lblSerialNo" style={{ width: '100%' }} className="form-control input-sm" />
              </div>
            </div>
            <div className="row">
              <div className="text-right col-lg-2 col-md-2 col-sm-4 col-xs-4">
                <label className="label-dispatch">Batch No (H)</label>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <label type="text" id="lblBatchNo" style={{ width: '100%' }} className="form-control input-sm" />
              </div>
            </div>
            <br />
          </div>
          <div className="row">
            <div className="text-center">
              <button type="button" onclick="SaveDispatchCode();" style={{ marginBottom: 'auto', width: 60, backgroundColor: 'mediumslateblue', borderRadius: 6 }} title="Search" className="btn btn-sm btn-success">
                Save
              </button>
            </div>
            <div className="text-center" style={{ marginTop: 4 }}>
              <label className="label-production" id="lblErrorMessage" style={{ color: 'red' }} />
            </div>
          </div>
          <hr />
          <table id="tblDispatchData" className="table table-bordered">
            <thead className="table-head">
              <tr>
                <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>Variant ID</th>
                <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>Variant Name</th>
                <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>Quantity</th>
                <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>Dispatch Date</th>
                <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>Received</th>
                <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>Received By</th>
                <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>Received Date</th>
              </tr>
            </thead>
            <tbody />
          </table>
        </div>
      </div>
    )
  }
}
