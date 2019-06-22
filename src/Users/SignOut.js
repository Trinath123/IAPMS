import React, { Component } from 'react'

export default class SignOut extends Component {
    render() {
        return (
            <div className="body" style={{background:'white'}}>
                <nav className="navbar navbar-default">
                    <div className="container-fluid" style={{background:'#f8f8f8'}}>
                        <div className="navbar-header" style={{background:'#F7F7F7'}}>
                          <br/>  <p style={{color:'#777',fontSize:'20px'}}>TMPUS</p>
                        </div>
                    </div>
                </nav>
                <div className="container" style={{marginTop:60}}>
                   <center> <form id="form1" runat="server" style={{width:'90%'}}>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="well">
                                    <div className="text-center">
                                        <h2>
                                            <label style={{color:'#333',fontSize:'30px'}}>You are successfully logged out</label>
                                        </h2>
                                        <br />
                                        <p style={{color:'#333',fontSize:'14px'}}>click on the below button to login again.</p>
                                        <a href="/Users/SignIn" className="btn btn-success" style={{background:' #5cb85c',border: '#4cae4c'}}>Sign In</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                     </center>
                </div>
            </div>

        )
    }
}
