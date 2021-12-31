import { useEffect, useState } from 'react';
import '../../../assets/css/Roadmap/roadmap.css';
import {GiSquirrel} from 'react-icons/gi';
import {RiLandscapeFill} from 'react-icons/ri';
import {SiRiotgames} from 'react-icons/si';
import {SiEventbrite} from 'react-icons/si'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaNetworkWired} from 'react-icons/fa'
import {FaSchool} from 'react-icons/fa'
import {FaStar} from 'react-icons/fa'
import logo from '../../../assets/images/logo_100.png'
import roadmap from '../../../assets/images/roadmap.png'
const Index = ()=>{
    
    return(
        <div className="roadmap" id="roadmap">
           <div className="title">
                <div className="logoArea">
                    <img src={logo}/>
                </div>  
                <div className="textTitle">
                    <h2>OUR<br/>
                        <span>
                            ROADMAP
                        </span>
                    </h2>
                </div>   
            </div>

            <section className="timeline_area section_padding_130">
                <div class="containero">
                    <div className="row">
                        <div className="col-12">
                        
                            <div className="apland-timeline-area">
                                
                                <div className="single-timeline-area">
                                    <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                                        <p className='leadTitle'  style={{color:'#fff'}}>Q1 2022 </p>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-12 col-lg-12 space-down">
                                            {/* <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft'}}>
                                                <div className="timeline-icon"><i className="fa fa-address-card" aria-hidden="true"></i></div>
                                                <div className="timeline-text">
                                                    <h6>Sold out, Metaverse here we come!</h6>
                                                    <p>
                                                    After selling all 5,500NFTs, our journey on the Metaverse starts. As an appreciation to SS community, we will have many gifts during and after the sales, stay tuned!
                                                    </p>
                                                </div>
                                            </div> */}
                                            <div className='roadmapComponent'>
                                               <div className='roadmap-flex-1'>
                                                <div className='roadmapComponent-title'><h6>Sold out, Metaverse here we come!</h6></div>
                                                    <div className='roadmapComponent-text'>
                                                        <p>
                                                            After selling all 5,500NFTs, our journey on the Metaverse starts. As an appreciation to SS community, we will have many gifts during and after the sales, stay tuned!
                                                        </p>
                                                    </div>
                                               </div>
                                               <div className='roadmap-flex-2'>
                                                    <img src={roadmap}/>
                                               </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                                <div className="single-timeline-area">
                                    <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                                        <p className='leadTitle' style={{color:'#fff'}}>Q1 2022</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-12 col-lg-12 space-down">
                                            {/* <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft'}}>
                                                <div className="timeline-icon"><i className="fa fa-address-card" aria-hidden="true"></i></div>
                                                <div className="timeline-text">
                                                    <h6>Updated 5.0</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div> */}
                                             <div className='roadmapComponent'>
                                               <div className='roadmap-flex-1'>
                                                <div className='roadmapComponent-title'><h6>Acquiring a land on Sandbox!</h6></div>
                                                    <div className='roadmapComponent-text'>
                                                        <p>
                                                        Acquire a Land on Sandbox, to build our Squirreling Squirrels Community, where each holder has access to join and have fun. The land will be open to all holders for them to experience a new and beautiful adventure on the metaverse full of surprises! Key access to social & gaming events, art galleries, and more! Join our Discord to know more of what is coming
                                                        </p>
                                                    </div>
                                               </div>
                                               <div className='roadmap-flex-2'>
                                                    <img src={roadmap}/>
                                               </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>


                                <div className="single-timeline-area">
                                    <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                                        <p className='leadTitle' style={{color:'#fff'}}>Q2 2022</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-12 col-lg-12 space-down">
                                            {/* <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft'}}>
                                                <div className="timeline-icon"><i className="fa fa-address-card" aria-hidden="true"></i></div>
                                                <div className="timeline-text">
                                                    <h6>Updated 5.0</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div> */}
                                             <div className='roadmapComponent'>
                                               <div className='roadmap-flex-1'>
                                                <div className='roadmapComponent-title'><h6>Making the world a better place, tree by tree</h6></div>
                                                    <div className='roadmapComponent-text'>
                                                        <p>
                                                        A million starts with one, that one starts with each holder of our SS collection. As part of our commitment to help the global community, we will be planting 1 million trees. And as a thank you to our community, each holder will get a certification in their name for the trees that have been planted. More details to be revealed soon.
                                                        </p>
                                                    </div>
                                               </div>
                                               <div className='roadmap-flex-2'>
                                                    <img src={roadmap}/>
                                               </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>


                                <div className="single-timeline-area">
                                    <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                                        <p className='leadTitle' style={{color:'#fff'}}>Q3 2022</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-12 col-lg-12 space-down">
                                            {/* <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft'}}>
                                                <div className="timeline-icon"><i className="fa fa-address-card" aria-hidden="true"></i></div>
                                                <div className="timeline-text">
                                                    <h6>Updated 5.0</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div> */}
                                             <div className='roadmapComponent'>
                                               <div className='roadmap-flex-1'>
                                                <div className='roadmapComponent-title'><h6>Squirreling Squirrels Game</h6></div>
                                                    <div className='roadmapComponent-text'>
                                                        <p>
                                                        Our goal is to develop a game on our metaverse land. Development stages are ongoing, and all our SS community will be able to join in on the fun. Nevertheless, SS NFT holders will have more benefits with their unique characters and more.  The game will consist of different levels where players will progress by completing certain games, tasks and challenges to find the acorn. It will be a play to earn game for all holders as well!
                                                        </p>
                                                    </div>
                                               </div>
                                               <div className='roadmap-flex-2'>
                                                    <img src={roadmap}/>
                                               </div>
                                            </div>
                                        </div>
                                    
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