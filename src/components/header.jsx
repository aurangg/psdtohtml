import React from 'react';
import './first.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return(
        
        <div className="first">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="topleft">
                            {/* <img src="assets/logo.png" alt=""/> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="topright">
                            {/* <img src="assets/menu_text.png" alt=""/> */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3" style={{marginTop:'250px', marginBottom:'220px'}}>
                        <h2 id="white">research and analysis</h2>
                        <h2 id="red">driving results</h2>
                        <p>Anveshan is research and analysis consultants <br /> that helps you to make solid decisions and drive results</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div id="frame">
                            <span className="center"></span>
                            <img src="assets/scroll_icon.png" alt="icon"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Header;