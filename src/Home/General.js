import React, { Component } from 'react'

export default class General extends Component {

    componentDidMount(){
        const script = document.createElement("script");
  
        script.src = `js/General.js`;
        script.async = true;
  
        document.body.appendChild(script);
        
      }

      
    render() {
        
        return (
            <div className="content-wrapper">
                <div className="x_panel" style={{ height: 585 }}>
                    <div className="x_title" style={{ textAlign: 'center', fontFamily: 'Calibri', fontSize: 'xx-large', fontWeight: 'bold', color: 'darkblue' }}>
                        Industrial Automation and Production Management System 
                     <div className="clearfix" />
                    </div>
                    <div className="x_content">
                        <div id="imageGG">
                            <img src="Content/Dashboard_ImgGG.png" style={{ width: '100%' }}  alt="User "  />
                        </div>
                        {/* <div id="imageYG">
                            <img src="Content/Dashboard_ImgYG.png" style={{ width: '100%' }}   alt="User " />
                        </div>
                        <div id="imageRG">
                            <img src="Content/Dashboard_ImgRG.png" style={{ width: '100%' }}   alt="User " />
                        </div>
                        <div id="imageBG">
                            <img src="Content/Dashboard_ImgBG.png" style={{ width: '100%' }}  alt="User "  />
                        </div>
                        <div id="imageGB">
                            <img src="Content/Dashboard_ImgGB.png" style={{ width: '100%' }}  alt="User "  />
                        </div>
                        <div id="imageYB">
                            <img src="Content/Dashboard_ImgYB.png" style={{ width: '100%' }}  alt="User " />
                        </div>
                        <div id="imageRB">
                            <img src="Content/Dashboard_ImgRB.png" style={{ width: '100%' }}  alt="User "  />
                        </div>
                        <div id="imageBB">
                            <img src="Content/Dashboard_ImgBB.png" style={{ width: '100%' }}  alt="User " />
                        </div> */}
                    </div>
                </div>
            </div>

        )
    }
}
