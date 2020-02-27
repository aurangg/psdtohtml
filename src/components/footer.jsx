import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="services-section">
                            <h1>Take <span>the next</span> step</h1>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-2">
                        <p className="processP" style={{color:'#000'}}>Do you need our help to brand your product to its full potential?<br />
                            Let us know how we can help you.
                        </p>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-8 offset-md-2">
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                </div>
                                <div className="form-group col-md-8 offset-md-2">
                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                                </div>
                                <div className="form-group col-md-8 offset-md-2">
                                    <input type="tel" className="form-control" id="inputNumber" placeholder="Telephone" />
                                </div>
                                <div className="form-group col-md-8 offset-md-2">
                                    <input type="message" className="form-control" id="inputMessage" placeholder="Message" />
                                </div>
                            </div>
                            <button type="submit" style={{margin:'60px 0px'}} className="btn btn-primary">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;