import { useEffect, useState } from 'react';
import '../../../assets/css/Roadmap/roadmap.css';
import {GiSquirrel} from 'react-icons/gi';
import {RiLandscapeFill} from 'react-icons/ri';
import {SiRiotgames} from 'react-icons/si';
import {SiEventbrite} from 'react-icons/si'
import pic1 from '../../../assets/images/roadmap/pic_x.png'
import pic2 from '../../../assets/images/roadmap/pic2.png'
import pic3 from '../../../assets/images/roadmap/pic_x.png'
import pic4 from '../../../assets/images/roadmap/pic_x.png'
const Index = ()=>{
    const [picture,setpicture] = useState(pic1);
    const [soldout,setsoldout]=useState();
    const [sandbox,setsandbox]=useState();
    const [ssgame,setssgame]=useState();
    const[event,setevent]=useState();

    
     const handleMouseOver=(x)=>{
         
         if(x.contains('event')){
             setpicture(pic4)
             setevent('Our goal is to develop a game on our metaverse land. Development stages are ongoing, and all our SS community will be able to join in on the fun. Nevertheless, SS NFT holders will have more benefits with their unique characters and more.  The game will consist of different levels where players will progress by completing certain games, tasks and challenges to find the acorn. It will be a play to earn game for all holders as well!')
             setsandbox('');
             setssgame('');
             setsoldout('');
         }
         if(x.contains('soldout')){
            setpicture(pic1)
            setsandbox('');
            setssgame('');
            setevent('');
            setsoldout('After selling all 5,500NFTs, our journey on the Metaverse starts. As an appreciation to SS community, we will have many gifts during and after the sales, stay tuned!')
         }
         if(x.contains('sandbox')){
            setpicture(pic2)
            setsoldout('');
            setssgame('');
            setevent('');
            setsandbox('Acquire a Land on Sandbox, to build our Squirreling Squirrels Community, where each holder has access to join and have fun. The land will be open to all holders for them to experience a new and beautiful adventure on the metaverse full of surprises! Key access to social & gaming events, art galleries, and more! Join our Discord to know more of what is coming.')
         }
         if(x.contains('ssgame')){
            setpicture(pic3)
            setsoldout('');
            setsandbox('');
            setevent('');
            setssgame('A million starts with one, that one starts with each holder of our SS collection. As part of our commitment to help the global community, we will be planting 1 million trees. And as a thank you to our community, each holder will get a certification in their name for the trees that have been planted. More details to be revealed soon.')
         }
    
     }
    const handleMouseLeave = ()=>{
        setsoldout('');
        setsandbox('');
        setevent('');
        setssgame('');
    }
    return(
        <div classNameName="roadmap" id="roadmap">
                    <section className="timeline_area section_padding_130 bg-dark-new" >
                        <div className="contain" >
                            <div className="row justify-content-center">
                                <div className="col-12 col-sm-8 col-lg-6">
                                    
                                    <div className="section_heading text-center p-4 roadmap-title myroadmap">
                                        <h1>Roadmap</h1>
                                        <small>We’re in this for the Long Haul</small>
                                        <div className="line"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="road-flex">
                                    <div className="roadmap-pic">
                                        <img src={picture} className="moveClass" />
                                        
                                    </div>

                                    <div className="roadmap-item">
                                        <div className="row">
                                            <div className="shape-div">
                                                <div className="shape">
                                                            <div className="timeline-text soldout" onMouseOver={e=>{handleMouseOver(e.target.classList)}} onMouseLeave={e=>{handleMouseLeave()}} >
                                                                <h6 className="soldout">Q1 2022 - SOLD OUT, METAVERSE HERE WE COME!</h6>
                                                                <p className="soldout">{soldout}</p>
                                                            </div>
                                                </div>
                                                <div className="shape">
                                                    <div className="timeline-text ssgame" onMouseOver={e=>{handleMouseOver(e.target.classList)}} onMouseLeave={e=>{handleMouseLeave()}}>
                                                        <h6 className="ssgame">Q1 2022 – ACQUIRING A LAND ON SANDBOX!</h6>
                                                        <p className="ssgame">
                                                            {/* */}
                                                            {ssgame}
                                                            
                                                        </p>
                                                    </div>                 
                                                </div>
                                                <div className="shape">
                                                    <div className="timeline-text ssgame" onMouseOver={e=>{handleMouseOver(e.target.classList)}} onMouseLeave={e=>{handleMouseLeave()}}>
                                                        <h6 className="sandbox">Q2 2022 - MAKING THE WORLD A BETTER PLACE, TREE BY TREE</h6>
                                                        <p className="sandbox">
                                                            {/* */}
                                                            {sandbox}
                                                            
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="shape">
                                                <div className="timeline-text ssgame" onMouseOver={e=>{handleMouseOver(e.target.classList)}} onMouseLeave={e=>{handleMouseLeave()}}>
                                                        <h6 className="event">Q3 2022 – SQUIRRELING SQUIRRELS GAME</h6>
                                                        <p className="event">
                                                            {/* */}
                                                            {event}
                                                            
                                                        </p>
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