import React from 'react';
import './second.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Second(){
    return(
        <div className="second">
            <div className="container" style={{marginRight:'0px', marginLeft:'0px',paddingRight:'0px', paddingLeft:'0px', maxWidth:'100%' }}>
                <div className="row" style={{marginRight:'0px', marginLeft:'0px'}}>
                    <div className="col-lg-6" style={{paddingRight:'0px', paddingLeft:'0px'}}>
                        <img id="graph" src="/assets/graph.png" alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <div className="secondtext">
                            <h1>QUISQUE <span style={{color:'red'}}>&</span> <br />SITER AMET</h1>
                            <div className="bar"></div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto sunt voluptas atque eos explicabo, necessitatibus deserunt in quam non modi. Esse est enim ipsam earum sed, fuga cupiditate temporibus voluptas.</p>
                        </div>
                        <div className="video">
                            <div className="row">
                                <div className="col-sm-3">
                                    <img className="videoimg" src="assets/video.png" alt="true"/>
                                </div>
                                <div className="col-sm-9">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sunt voluptas atque eos explicabo, necessitatibus deserunt in quam non modi.</p>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Second;