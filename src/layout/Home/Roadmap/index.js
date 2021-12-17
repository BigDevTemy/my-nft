import { useEffect, useState } from 'react';
import '../../../assets/css/Roadmap/roadmap.css';
import {GiSquirrel} from 'react-icons/gi';
import {RiLandscapeFill} from 'react-icons/ri';
import {SiRiotgames} from 'react-icons/si';
import {SiEventbrite} from 'react-icons/si'
const Index = ()=>{
     
    return(
        <div classNameName="roadmap" id="roadmap">
               

                    <section className="timeline_area section_padding_130">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-sm-8 col-lg-6">
                                    
                                    <div className="section_heading text-center p-4 roadmap-title myroadmap">
                                        <h1>Roadmap</h1>
                                        <small>We’re in this for the Long Haul</small>
                                        <div className="line"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    
                                    <div className="apland-timeline-area">
                                       
                                        <div className="single-timeline-area">
                                            <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                                               
                                                <GiSquirrel size={35} color="#000"/>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-md-6 col-lg-12">
                                                    <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft'}}>
                                                        <div className="timeline-icon"><i className="fa fa-address-card" aria-hidden="true"></i></div>
                                                        <div className="timeline-text">
                                                            <h6>SOLD OUT, METAVERSE HERE WE COME!</h6>
                                                            <p>After selling all 5,500NFTs, our journey on Metaverse starts. As an appreciation to SS community we will release many gifts during the sales and after, stay tuned!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="col-12 col-md-6 col-lg-4">
                                                    <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInLeft'}}>
                                                        <div className="timeline-icon"><i className="fa fa-archive" aria-hidden="true"></i></div>
                                                        <div className="timeline-text">
                                                            <h6>Fixed bug</h6>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                {/* <div className="col-12 col-md-6 col-lg-4">
                                                    <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.7s" style={{visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeInLeft'}}>
                                                        <div className="timeline-icon"><i className="fa fa-address-book" aria-hidden="true"></i></div>
                                                        <div className="timeline-text">
                                                            <h6>Reach 1k Users</h6>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                       
                                        <div className="single-timeline-area">
                                            <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                                               
                                                <RiLandscapeFill size={35}/>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-md-6 col-lg-12">
                                                    <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft'}}>
                                                        <div className="timeline-icon"><i className="fa fa-briefcase" aria-hidden="true"></i></div>
                                                        <div className="timeline-text">
                                                            <h6>SANDBOX LAND</h6>
                                                            <p>Acquire a Land on Sandbox, to build Squirrels Community, where everyone has access to join and have fun. The Land will be fully owned by SS community. Many events will be scheduled like parties, shops, art galleries…</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="col-12 col-md-6 col-lg-4">
                                                    <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInLeft'}}>
                                                        <div className="timeline-icon"><i className="fa fa-desktop" aria-hidden="true"></i></div>
                                                        <div className="timeline-text">
                                                            <h6>Fixed bug</h6>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                        
                                        <div className="single-timeline-area">
                                            <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                                                <SiRiotgames size={30}/>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-md-6 col-lg-12">
                                                    <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft'}}>
                                                        <div className="timeline-icon"><i className="fa fa-id-card" aria-hidden="true"></i></div>
                                                        <div className="timeline-text">
                                                            <h6>SS GAME</h6>
                                                            <p>Build SS 3D-Game on Metaverse. SS holders will use their wallets to join the fun, they have to completed many mission after mission, using maps, keys & other tools. It is fun and earn!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="col-12 col-md-6 col-lg-4">
                                                    <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInLeft'}}>
                                                        <div className="timeline-icon"><i className="fa fa-desktop" aria-hidden="true"></i></div>
                                                        <div className="timeline-text">
                                                            <h6>Fixed bug</h6>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                {/* <div className="col-12 col-md-6 col-lg-4">
                                                    <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.7s" style={{visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeInLeft'}}>
                                                        <div className="timeline-icon"><i className="fa fa-picture-o" aria-hidden="true"></i></div>
                                                        <div className="timeline-text">
                                                            <h6>Reach 500 Users</h6>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>

                                        <div className="single-timeline-area">
                                            <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                                            <SiEventbrite size={35} color="#000"/>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-md-6 col-lg-12">
                                                    <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft'}}>
                                                        <div className="timeline-icon"><i className="fa fa-id-card" aria-hidden="true"></i></div>
                                                        <div className="timeline-text">
                                                            <h6>EVENTS ON METAVERSE</h6>
                                                            <p>Key access to special Parties, Shopping with special discounts, Gaming events, art galleries, and many other surprises!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="col-12 col-md-6 col-lg-4">
                                                    <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInLeft'}}>
                                                        <div className="timeline-icon"><i className="fa fa-desktop" aria-hidden="true"></i></div>
                                                        <div className="timeline-text">
                                                            <h6>Fixed bug</h6>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                {/* <div className="col-12 col-md-6 col-lg-4">
                                                    <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.7s" style={{visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeInLeft'}}>
                                                        <div className="timeline-icon"><i className="fa fa-picture-o" aria-hidden="true"></i></div>
                                                        <div className="timeline-text">
                                                            <h6>Reach 500 Users</h6>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
        </div>
    )
}

export default Index;