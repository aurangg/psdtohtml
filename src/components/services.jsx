import React from 'react';
import './services.css';
import UpperBody from './upperbody.jsx';
import MiddleBody from './middlebody.jsx';
import LowerBody from './lowerbody.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function Services(){
    return(
        <div className="backgroundImg">
            {/* <img id="logofooter" src="assets/logofooter.png" alt=""/> */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="services-section">
                            <h1 className="services-heading">Services <span style={{color:'red'}}>&</span> Terms</h1>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-2">
                        <p className="servicesP">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, facere dolores. Soluta iusto delectus commodi facilis vero pariatur exercitationem corrupti, placeat fugit aliquam ipsam quisquam, sunt ea esse deserunt nihil.</p>
                    </div>
                    <div className="row" style={{marginLeft:'0', marginRight:'0'}}>
                        {Array.apply(null, Array(3)).map(function(item, i){                                        
                            return (
                                <div className="col-sm-4" style={{paddingRight:'0', paddingLeft:'0'}}>
                                    <UpperBody></UpperBody>
                                </div>
                            );                
                        }, this)}   
                    </div>
                    <div className="row" style={{marginLeft:'0', marginRight:'0'}}>
                        {Array.apply(null, Array(3)).map(function(item, i){                                        
                            return (
                                <div className="col-sm-4" style={{paddingRight:'0', paddingLeft:'0'}}>
                                    <MiddleBody></MiddleBody>
                                </div>
                            );                
                        }, this)}   
                    </div>
                    <div className="row" style={{marginLeft:'0', marginRight:'0'}}>
                        {Array.apply(null, Array(3)).map(function(item, i){                                        
                            return (
                                <div className="col-sm-4" style={{paddingRight:'0', paddingLeft:'0'}}>
                                    <LowerBody></LowerBody>
                                </div>
                            );                
                        }, this)}   
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services;