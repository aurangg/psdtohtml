import React from 'react';
import './process.css';
import'bootstrap/dist/css/bootstrap.min.css';

function Process(){
    return(
        <div className="container">
            <div className="row">
                <div className="margins">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-heading">
                            <h1>OUR PROCESS</h1>
                        </div>
                        <div className="progress-bar-container">
                            <div className="process-bar"></div>
                        </div>
                        <p className="processP">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda ea quidem placeat quasi, quod nam cupiditate illo reprehenderit expedita, vel provident iste ratione deserunt alias officia sequi repudiandae delectus?</p>
                        <div className="row">
                            <div className="col-12">
                                <img className="process_circles" src="/assets/process_circles.png" alt="circles"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="headings_text">
                                    <h6>Meetings</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quasi quidem non totam ad maxime ab quisquam voluptatum dolorum inventore nam quo accusantium, ex illo natus. Distinctio porro voluptatibus illo?</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="headings_text">
                                    <h6>Planning and Organization</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quasi quidem non totam ad maxime ab quisquam voluptatum dolorum inventore nam quo accusantium, ex illo natus. Distinctio porro voluptatibus illo?</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="headings_text">
                                    <h6>Execute</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quasi quidem non totam ad maxime ab quisquam voluptatum dolorum inventore nam quo accusantium, ex illo natus. Distinctio porro voluptatibus illo?</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="headings_text">
                                    <h6>Deliver</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quasi quidem non totam ad maxime ab quisquam voluptatum dolorum inventore nam quo accusantium, ex illo natus. Distinctio porro voluptatibus illo?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process;