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
import item5 from '../../../assets/images/roadmap/edit/5.png'
const Index = ()=>{
    
    const openTreeNation = ()=>{
        window.open('https://tree-nation.com/profile/impact/squirreling-squirrels')
    }
    return(
        <div className="roadmap" id="roadmap">
           <div className="SoleHeader">

                <div className='mylogo'>
                    <img src={logo} style={{pointerEvents:'none'}}/>
                </div>
                <div className='myTitle'>
                    <h2>OUR</h2>
                    <span>Roadmap</span>
                </div>

            </div>

            <div class="roadmapStyle mt-4">
                <div class="row">
                    <div class="col-md-12 styledRoadmap">
                        <div className='coverDiv'>
                            <div className="newtimeline">
                                <div>Q2 2022</div>
                                <ul className='me'>
                                    <li>
                               
                                        <div className='roadmapComponent'>
                                            <div className='roadmap-flex-1'>
                                            <div className='roadmapComponent-title'><h6>Sell out, Metaverse here we come!</h6></div>
                                                <div className='roadmapComponent-text'>
                                                    <p>
                                                        {/* Our goal is to build a long lasting community of Squirreling Squirrels, through creating value and trust. As an appreciation, our community will be rewarded with many upcoming surprises, giveaways and airdrops before, during and after our launch! Stay tuned and follow our Discord for the chance to experience the premiere of the Squirreling Squirrels! */}
                                                        Our goal is to build a long lasting community of Squirreling Squirrels, through creating value and trust. Our team is doxxed and our main drive is the SS community. All assets fall under the SS community wallet. As an appreciation, our community is being rewarded with many upcoming surprises, giveaways, & airdrops; before, during & after our launch! 
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='roadmap-flex-2'>
                                                <div className='overlayDiv'></div>
                                                    <img src={item1}/>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
        
                            </div>
                            <div className="newtimeline">
                                <div>Q2 2022</div>
                                <ul className='me'>
                                    <li>
                                        <div className='roadmapComponent'>
                                            <div className='roadmap-flex-1'>
                                            <div className='roadmapComponent-title'><h6>Acquire land on Sandbox!</h6></div>
                                                <div className='roadmapComponent-text'>
                                                    <p>
                                                    {/* Acquire land on Sandbox, to build our Squirreling Squirrels Park, where each holder has access to join and have fun. The land will be open to all holders for them to experience a new and beautiful adventure on the metaverse full of surprises! Key access to social & gaming events, art galleries, and more! Join our Discord for more on what's to come! */}
                                                    {/* Acquire land on Sandbox to build our Squirreling Squirrels Park, where each holder has access to join and have fun. The land is open to all holders for them to experience a new and beautiful adventure on the Metaverse full of surprises! Key access to social & gaming events, art galleries, and more! All income generated from said events is to be reimbursed in the SS community wallet, which holders decide on how to invest back into the Metaverse. */}
                                                    {/* Acquire land on Sandbox to build our Squirreling Squirrels Park. The land is open to all holders for them to experience a new and beautiful adventure on the Metaverse that is also a hub to create awareness about climate change to the Web3 world! Key access to conferences, social & gaming events, art galleries, and much more! All income generated from said events is to be reimbursed in the SS community wallet, where all assets also fall under. Holders decide on how to invest it back into the Metaverse. */}
                                                    Acquire land on Sandbox to build our Squirreling Squirrels Park. The land is open to all holders for them to experience a new and beautiful adventure on the Metaverse that is also a hub to create awareness about climate change to the Web3 world! Key access to conferences, social & gaming events, art galleries, and much more! All income generated from said events is to be reimbursed in the SS community wallet, where all assets also fall under. Holders decide on how to invest it back into the Metaverse.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='roadmap-flex-2'>
                                                <div className='overlayDiv'></div>
                                                <img src={item4}/>
                                            </div>
                                        </div>
                                     </li>
                                </ul>
        
                            </div>
                            <div className="newtimeline">
                                <div>Q3 2022</div>
                                <ul className='me'>
                                    <li>
                                        <div className='roadmapComponent'>
                                            <div className='roadmap-flex-1'>
                                            <div className='roadmapComponent-title'><h6>MAKING THE WORLD A BETTER PLACE, TREE BY TREE; HAND IN HAND WITH TREE NATION</h6></div>
                                                <div className='roadmapComponent-text'>
                                                    <p>
                                                    {/* A million starts with one, that one starts with each holder of our SS collection. As part of our commitment to help the global community, we will start by planting 100,000 trees as a first milestone, with a goal of reaching up to a million trees. And as a thank you to our community, All SS holders will get a certificate for the trees that they have contributed in planting. More glamorous details & collabs to be revealed soon, and you know where to find us! */}
                                                    {/* A million starts with one; that one starts with each holder of our SS collection. As part of our commitment to help the global community, we will start by planting 100,000 trees as a first milestone with a goal of reaching up to a million trees. And as a thank you to our community, all SS holders will get a certificate for the trees that they have contributed to planting. More glamorous details & collabs are to be revealed soon, and you know where to find us! */}
                                                    A million starts with one; that one starts with each holder of our SS collection. As part of our commitment to help the global community, we are starting by planting 100,000 trees as a first milestone with a goal of reaching up to a million trees. Therefore, we are proudly collaborating with <span><a href="https://tree-nation.com/profile/impact/squirreling-squirrels" target="_blank">Tree Nation</a></span> to help in effectively accomplishing this milestone. And as a thank you to our community, all SS holders are getting a certificate for the trees that they have contributed to planting.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='roadmap-flex-2' onClick={openTreeNation} style={{cursor:'pointer'}}>
                                            {/* <a href="https://tree-nation.com/profile/impact/squirreling-squirrels" target='_blank'> */}
                                                <div className='overlayDiv'></div>
                                                    <img src={item5} style={{borderRadius:20}}/>
                                            {/* </a> */}
                                            </div>
                                           
                                        </div>
                                    </li>
                                </ul>
        
                            </div>
                            <div className="newtimeline">
                                <div className='timeState'>Q4 2022</div>
                                <ul className='me'>
                                    <li>
                                    
                                    
                                        <div className='roadmapComponent'>
                                            <div className='roadmap-flex-1'>
                                            <div className='roadmapComponent-title'><h6>Squirreling Squirrels P2E Game</h6></div>
                                                <div className='roadmapComponent-text'>
                                                    <p>
                                                     {/* Our goal is to develop a play to earn game on our Metaverse land. Game & Token ($ACORN) development stages are ongoing, and all our SS community will be able to join in on the fun. Nevertheless, SS NFT holders will have additional benefits with their unique characters and more. The game will consist of different levels where players will progress by completing certain games, tasks and challenges to find the Acorn. */}
                                                     Our Metaverse land is also dedicated for our play-to-earn game that will also help in creating awareness against climate change and global warming. Game & Token ($ACORN) development stages are ongoing, and all our SS community can join in on the fun! Nevertheless, SS holders can access the game with their unique NFT characters and prior $ACORN tokens in hand. The game concept is aligned with our mission to create awareness against our initiative, players will be building farms, planting trees, and needed utilities such as renewable energy and recycling to help generate $ACORN. In addition to certain games, tasks, and challenges to find more $ACORN.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='roadmap-flex-2'>
                                                <div className='overlayDiv'></div>
                                                <img src={item2}/>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
        
                            </div>
                        </div>
                        

                        {/* <ul class="timeline">
                        
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
                                                A million starts with one, that one starts with each holder of our SS collection. As part of our commitment to help the global community, we will be planting 100,000 trees. And as a thank you to our community, each holder will get a certification in their name for the trees that have been planted. More details to be revealed soon.
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
                        </ul> */}
                    </div>
                </div>
            </div>
            
                 
        </div>
    )
}

export default Index;