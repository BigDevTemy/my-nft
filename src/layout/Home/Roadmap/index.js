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
import item1 from '../../../assets/images/roadmap/edit/1.png'
import item2 from '../../../assets/images/roadmap/edit/2.png'
import item3 from '../../../assets/images/roadmap/edit/3.png'
import item4 from '../../../assets/images/roadmap/edit/4.png'
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

            <div class="container mt-4">
                <div class="row">
                    <div class="col-md-12">
                        
                        <ul class="timeline">
                           
                            <li>
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
                                            <img src={item1}/>
                                        </div>
                                    </div>
                            </li>
                            <li>
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
                                            <img src={item4}/>
                                        </div>
                                    </div>
                            </li>
                            <li>
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
                                            <img src={item3}/>
                                        </div>
                                    </div>
                            </li>
                            
                            
                            <li>
                                
                                
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
                                            <img src={item2}/>
                                        </div>
                                    </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
                 
        </div>
    )
}

export default Index;