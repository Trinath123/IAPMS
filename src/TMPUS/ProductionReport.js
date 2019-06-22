import React, { Component } from 'react'
import './styles/ProductionReport.css'


export default class ProductionReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: '',
            endDate: '',
            dataSource: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const { startDate, endDate } = this.state;
        console.log(startDate);
        fetch("http://localhost:3001/api/Mold/getMoldDatashift", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                startDate,
                endDate
            })
        })
            .then((response) => response.json())
            .then((res) => {
                console.log('1');
                if (res.success === true) {
                    console.log('res');
                    this.setState({
                        dataSource: res.moldShiftCount
                    });
                    console.log("data=");
                }
                else {
                    alert(res.message);
                }
            })
            .catch((error) => {
                console.error(error);
            })
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="x_panel">
                    <div className="x_title" style={{ textAlign: 'center', fontSize: 'medium', fontWeight: 'bold', color: 'darkblue' }}>Production Report</div>
                        <div className="x_content">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="row">
                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-4">
                                        <label className="label-production">Start Date</label>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
                                        <input type="text"
                                            id="txtFromDate"
                                            style={{ width: '100%' }}
                                            className="form-control input-sm"
                                            name="startDate"
                                            noValidate
                                            onChange={this.handleInputChange}
                                            value={this.state.startDate}
                                        />
                                    </div>
                                    <div className="text-right col-lg-2 col-md-2 col-sm-3 col-xs-4">
                                        <label className="label-production">End Date</label>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
                                        <input type="text"
                                            id="txtToDate"
                                            style={{ width: '100%' }}
                                            className="form-control input-sm"
                                            name="endDate"
                                            noValidate
                                            onChange={this.handleInputChange}
                                            value={this.state.endDate}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="text-center">
                                    <br />
                                    <button type="submit" style={{ marginBottom: 'auto', width: 60, backgroundColor: 'mediumslateblue', borderRadius: 6 }} className="btn btn-sm btn-success">
                                        GET
                                </button>
                                    <button type="submit" title="Download" onclick="GetProductionReportPDF();" className="btn btn-info btn-sm" style={{ marginBottom: 'auto', width: 40, backgroundColor: 'mediumslateblue', borderRadius: 6, marginLeft: 5 }}>
                                        <i className="glyphicon glyphicon-cloud-download" />
                                    </button>
                                </div>
                                <div className="text-center">
                                    <label className="label-production" id="lblProdReportError" style={{ color: 'red' }} />
                                </div>
                            </div>
                        </form>
                        <hr />
                        <table id="tblProductionReport" className="table table-bordered">
                            <thead className="table-head" style={{ padding: 4 }}>
                                <tr style={{ padding: 4 }}>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                        Line
                                    </th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                        Tool
                                     </th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                        Variant
                                     </th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                        Date
                                     </th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                        Shift
                                     </th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                        Planned Pieces
                                     </th><th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                        Preventive
                                     </th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                        Changover
                                    </th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                        Breakdown
                                    </th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                        Tool Replacement
                                    </th><th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                        Actual Quantity
                                    </th>
                                    <th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                        Downtime
                                     </th><th style={{ verticalAlign: 'middle', fontFamily: 'Arial', color: 'white' }}>
                                        Dummy Shots
                            </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.dataSource.map((item, _id) =>
                                    (
                                        <tr className="table-light" key={_id} onClick={() => this.rowClicked(item)}>
                                            <td>{item.shift}</td>
                                            <td>{item.tolid}</td>
                                            <td>{item.vrid}</td>
                                            <td>{item.moldActualCount}</td>
                                            <td>{item.moldDummyCount}</td>
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
