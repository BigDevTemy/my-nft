import '../../../assets/css/OurTeam/ourteam.css'
import Path from '../../../assets/images/Path-2.png'
import team1 from '../../../assets/images/team/edit/team1.png'
import team2 from '../../../assets/images/team/edit/team2.png'
import team3 from '../../../assets/images/team/edit/team3.png'
import team4 from '../../../assets/images/team/edit/team4.png'
import team5 from '../../../assets/images/team/edit/team5.png'
import team6 from '../../../assets/images/team/edit/team6.png'
import PathDown from '../../../assets/images/Path.png'
import logo from '../../../assets/images/logo_100.png'
import {FiTwitter} from 'react-icons/fi'
const Index=()=>{
    return (
        <div className="ourteam" id="team">

             <div className="title">
                <div className="logoArea">
                    <img src={logo}/>
                </div>  
                <div className="textTitle">
                    <h2>SQUIRRELLING<br/>
                        <span>
                            TEAM
                        </span>
                    </h2>
                </div>   
            </div> 

{/*              
                <div className="team-pic-div">
                
                    <div className="team-1">
                        <img src={Marilyn} className="char-img"/>
                        <div className="jobTitle">
                            <span className="official-title">CEO</span>
                            <span className="officer-name">Clark</span>
                            <span className="job-description">Design & Operation</span>
                        </div>
                    </div>
                    <div className="team-2">
                        <img src={team1} className="char-img"/>
                        <div className="jobTitle">
                                <span className="official-title">CMO</span>
                                <span className="officer-name">Kaylee</span>
                                <span className="job-description">Community & Marketing</span>
                        </div>
                    </div>
                    <div className="team-3">
                        <img src={Anthony} className="char-img"/>
                        <div className="jobTitle">
                            <span className="official-title">CTO</span>
                            <span className="officer-name">Jack</span>
                            <span className="job-description">Technology & Blockchain</span>
                        </div>

                    </div>
                   
                     

                    
                    
                    
                </div> */}
                {/* <div className="team-pic-div-2">
                <div className="team-5">
                        <img src={team1} className="char-img"/>
                        <div className="jobTitle">
                            <span className="official-title">Software Engineer</span>
                            <span className="officer-name">Marilyn</span>
                            <span className="job-description">Smart Contract/Developer</span>
                        </div>

                    </div>
                    <div className="team-5">
                        <img src={team1} className="char-img"/>
                        <div className="jobTitle">
                            <span className="official-title">Architect/Artist</span>
                            <span className="officer-name">Chris</span>
                            <span className="job-description">Designer</span>
                        </div>

                    </div>
                    <div className="team-6">
                        <img src={Anthony} className="char-img"/>
                        <div className="jobTitle">
                            <span className="official-title">Game Marker</span>
                            <span className="officer-name">Anthony</span>
                            <span className="job-description">Architect/Artist</span>
                        </div>

                    </div>
                </div> */}

                <div className="teamAll">
                    <div className="team-member">
                        <div className="teamImg">
                            <img src={team1}/>
                        </div>
                        <div className='teamInfor'>
                            <div className='mytitle'>
                                Clark
                            </div>
                            <div className='teamposition'>
                                {/* Co-Founder of PP. Co-Creative Director and Operations Manager. NFT Collector and Computer Science Student. */}
                                CEO of Squirreling Squirrels (Operations).
                            </div>
                            <div className='twitterIcon'>
                                <div className='twitter'>
                                    <FiTwitter size={20} color='#fff' />
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="team-member">
                    <div className="teamImg">
                            <img src={team2}/>
                        </div>
                        <div className='teamInfor'>
                            <div className='mytitle'>
                                Kaylee
                            </div>
                            <div className='teamposition'>
                                {/* Co-Founder of PP. Co-Creative Director and Operations Manager. NFT Collector and Computer Science Student. */}
                                CMO of Squirreling Squirrels (Marketing)
                            </div>
                            <div className='twitterIcon'>
                                <div className='twitter'>
                                    <FiTwitter size={20} color='#fff' />
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="teamImg">
                            <img src={team3}/>
                        </div>
                        <div className='teamInfor'>
                            <div className='mytitle'>
                                Jack
                            </div>
                            <div className='teamposition'>
                                {/* Co-Founder of PP. Co-Creative Director and Operations Manager. NFT Collector and Computer Science Student. */}
                                CTO of Squirreling Squirrels (Technology & Blockchain)
                            </div>
                            <div className='twitterIcon'>
                                <div className='twitter'>
                                    <FiTwitter size={20} color='#fff' />
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="teamImg">
                            <img src={team4}/>
                        </div>
                        <div className='teamInfor'>
                            <div className='mytitle'>
                                Marilyn
                            </div>
                            <div className='teamposition'>
                                {/* Co-Founder of PP. Co-Creative Director and Operations Manager. NFT Collector and Computer Science Student. */}
                                Software Engineer @ Squirreling Squirrels (Smart Contract/Developer)

                            </div>
                            <div className='twitterIcon'>
                                <div className='twitter'>
                                    <FiTwitter size={20} color='#fff' />
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="team-member">
                    <div className="teamImg">
                            <img src={team5}/>
                        </div>
                        <div className='teamInfor'>
                            <div className='mytitle'>
                                Chris
                            </div>
                            <div className='teamposition'>
                                {/* Co-Founder of PP. Co-Creative Director and Operations Manager. NFT Collector and Computer Science Student. */}
                                Architect/Artist @ Squirreling Squirrels (Designer)

                            </div>
                            <div className='twitterIcon'>
                                <div className='twitter'>
                                    <FiTwitter size={20} color='#fff' />
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="team-member">
                    <div className="teamImg">
                            <img src={team6}/>
                        </div>
                        <div className='teamInfor'>
                            <div className='mytitle'>
                                Anthony
                            </div>
                            <div className='teamposition'>
                                {/* Co-Founder of PP. Co-Creative Director and Operations Manager. NFT Collector and Computer Science Student. */}
                                Game Marker @ Squirreling Squirrels (Game Scriptwriter/Animator)

                            </div>
                            <div className='twitterIcon'>
                                <div className='twitter'>
                                    <FiTwitter size={20} color='#fff' />
                                </div>
                               
                            </div>
                        </div>  
                    </div>

                </div>
                


              </div>
               
               
               

                
               
               
        
    )
}

export default Index;