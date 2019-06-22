import React, { Component } from 'react'
import './styles/prod.css'
export default class ProductionPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workno: "",
      line: "",
      mat: "",
      vart: "",
      toolsid: "",
      cavityno: "",
      starttm: "",
      endtm: "",
      qnt: "",
      dateplan: "",
      dataSource: [],
      toolId: [],
      materialNo: [],
      variantName: [],
      lineName: [],
      cavno: ['1', '2', '3', '4', '5'],
      workOderNumber: '',
      lineNm: "",
      material: "",
      variant: "",
      tool: "",
      cavity: "",
      start: "",
      end: "",
      qut: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/Production")
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          dataSource: res.productionplan,
          toolId: res.tools,
          materialNo: res.materialNo,
          variantName: res.variants,
          lineName: res.lines,
        });
      })
      .catch((error) => {
        console.error(error);
      })
  }


  handleSubmit(e) {
    e.preventDefault();
    const { workno, line, mat, vart, toolsid, cavityno, starttm, endtm, qnt, dateplan } = this.state;
    fetch("http://localhost:3001/api/Production/report", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        workno,
        line,
        mat,
        vart,
        toolsid,
        cavityno,
        starttm,
        endtm,
        qnt,
        dateplan
      })
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.success === true) {
          this.setState({
            dataSource: res.productionplan
          });
          console.log("data=" + res.productionplan);
        }
        else {
          alert(res.message);
        }
      })
      .catch((error) => {
        console.error(error);
      })
  }


  rowClicked(item) {
    this.setState({ workOderNumber: item.workOderNumber.toString() });
    this.setState({ lineNm: item.lineName });
    this.setState({ material: item.materialNo });
    this.setState({ variant: item.variantName });
    this.setState({ tool: item.toolId });
    this.setState({ cavity: item.cavity });
    this.setState({ start: item.startTime });
    this.setState({ end: item.endTime });
    this.setState({ qut: item.qtyPlanned });
    console.log(item.cavity);
  }

  // handleChange(e) {
  //   let { lineNm, value } = e.target;
  //   let { material, value1 } = e.target;
  //   let { variant, value2 } = e.target;
  //   let { tool, value3 } = e.target;
  //   let { cavity, value4 } = e.target;
  //   this.setState({
  //     [lineNm]: value,
  //     [material]: value1,
  //     [variant]: value2,
  //     [tool]: value3,
  //     [cavity]: value4,
  //   });
  // }

  updateInputValue(evt) {
    this.setState({
      workOderNumber: evt.target.value
    });
  }

  updateInputValue1(evt) {
    this.setState({
      start: evt.target.value
    });
  }

  updateInputValue3(evt) {
    this.setState({
      start: evt.target.value
    });
  }
  // componentDidMount(){
  //   const script = document.createElement("script");

  //   script.src = `js/prod.js`;
  //   script.async = true;

  //   document.body.appendChild(script);

  // }
  render() {
    return (
      <div className="content-wrapper">
        <div className="x_panel">
          <div className="x_title" style={{ textAlign: 'center', fontSize: 'medium', fontWeight: 'bold', color: 'darkblue' }}>Production Plan</div>
          <div className="x_content">
            <div className="row">
              <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                <label className="label-production">Work Order No *</label>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <input
                  type="text"
                  name="won"
                  value={this.state.workOderNumber}
                  onChange={evt => this.updateInputValue(evt)}
                  id="txtWorkOrder"
                  style={{ width: '100%' }}
                  className="form-control input-sm" />
              </div>
              <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                <label className="label-production">Line Name *</label>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <select
                  id="ddlLines"
                  title="click on search"
                  name="ln"
                  onChange={this._handleChange}
                  className="form-control input-sm">
                  <option>select</option>
                  {this.state.lineName.map(function (item, _id) {
                    return (
                      <option key={_id}>{item.lineName}</option>
                    )
                  })}
                  <option value={this.state.lineNm}>{this.state.lineNm}</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                <label className="label-production">Material Number *</label>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <select id="ddlVariantID"
                  onChange={this._handleChange}
                  title="click on search" className="form-control input-sm">
                  <option>select</option>
                  {this.state.materialNo.map(function (item, _id) {
                    return (
                      <option key={_id}>{item.materialNo}</option>
                    )
                  })}
                  <option value={this.state.material}>{this.state.material}</option>
                </select>
              </div>
              <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                <label className="label-production">Variant Name *</label>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <select id="ddlVariantName"
                  onChange={this._handleChange}
                  title="click on search"
                  className="form-control input-sm">
                  <option>select</option>
                  {this.state.variantName.map((item, _id) => (
                    <option key={_id}>{item.variantName}</option>
                  )
                  )}
                  <option value={this.state.variant}>{this.state.variant}</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                <label className="label-production">Tool ID *</label>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <select id="ddlTools"
                  onChange={this._handleChange}
                  title="click on search" className="form-control input-sm">
                  <option>select</option>
                  {this.state.toolId.map(function (item, _id) {
                    return (
                      <option key={_id}>{item.toolId}</option>
                    )
                  })}
                  <option value={this.state.tool}>{this.state.tool}</option>
                </select>
              </div>
              <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                <label className="label-production">Number of Cavities</label>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">

                <select id="ddlCavities"
                  onChange={this._handleChange}
                  title="click on search" className="form-control input-sm">
                  <option>select</option>
                  {this.state.cavno.map(function (item) {
                    return (
                      <option key={item}>{item}</option>
                    )
                  })}
                  <option value={this.state.cavity}>{this.state.cavity}</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                <label className="label-production">Production Start Time *</label>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <input id="txtStartTime" type="text" value={this.state.start}
                  onChange={evt => this.updateInputValue1(evt)} autoComplete="off" className="form-control input-sm" />
              </div>
              <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                <label className="label-production">Production End Time *</label>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <input id="txtStartTime" type="text" value={this.state.end}
                  onChange={evt3 => this.updateInputValue1(evt3)} autoComplete="off" className="form-control input-sm" />
              </div>
            </div>
            <div className="row">
              <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                <label className="label-production">Quantity *</label>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <input type="text" id="txtQuantity" value={this.state.qut}
                  onChange={evt4 => this.updateInputValue(evt4)} className="form-control input-sm" />
              </div>
              <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-6">
                <label className="label-production">Line Cycle Time (Sec)</label>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <label id="ddlLineCycleTime" type="text" value={20.0} autoComplete="off" className="form-control input-sm" />
              </div>
            </div>
            <div className="row">
              <div className="text-center">
                <br />
                <button type="button" onclick="SaveProductionPlan();" style={{ marginBottom: 'auto', width: 60, backgroundColor: 'mediumslateblue', borderRadius: 6 }} title="Search" className="btn btn-sm btn-success">
                  Save
                </button>
              </div>
              <div className="text-center">
                <label className="label-production" id="lblWorkorderError" style={{ color: 'red' }} />
              </div>
            </div>
            <hr />
            <table id="tblProductionPlan" className="table table-bordered">
              <thead className="table-head">
                <tr>
                  <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                    Work Order No
                                     </th>
                  <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                    Line Name
                                    </th>
                  <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                    Material No
                                     </th>
                  <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                    Variant
                                      </th>
                  <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                    Tool
                                     </th>
                  <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                    Date Planned
                                     </th>
                  <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                    Start Time
                                     </th>
                  <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                    End Time
                                      </th>
                  <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                    Quantity
                                     </th>
                </tr>
              </thead>
              <tbody >
                {this.state.dataSource.map((item, _id) =>
                  (
                    <tr className="table-light" key={_id} onClick={() => this.rowClicked(item)}>
                      <td>{item.workOderNumber}</td>
                      <td>{item.lineName}</td>
                      <td>{item.materialNo}</td>
                      <td>{item.variantName}</td>
                      <td>{item.toolId}</td>
                      <td>{item.datePlanned}</td>
                      <td>{item.startTime}</td>
                      <td>{item.endTime}</td>
                      <td>{item.qtyPlanned}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    )
  }
}
