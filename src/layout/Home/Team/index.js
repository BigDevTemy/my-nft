import '../../../assets/css/OurTeam/ourteam.css'
import Path from '../../../assets/images/Path-2.png'
import Andrea from '../../../assets/images/team/team/Andrea.png'
import Ceekay from '../../../assets/images/team/team/ceekay.png'
import Jade from '../../../assets/images/team/team/jade.png'
import Karim from '../../../assets/images/team/team/karim.png'
import KOby from '../../../assets/images/team/team/koby.png'
import team6 from '../../../assets/images/team/edit/team6.png'
import PathDown from '../../../assets/images/Path.png'
import logo from '../../../assets/images/logo_100.png'
import {FiTwitter} from 'react-icons/fi'
const Index=()=>{
    return (
        <div className="ourteam" id="team">

            <div className="SoleHeader">

                <div className='mylogo'>
                    <img src={logo}/>
                </div>
                <div className='myTitle'>
                    <h2>OUR</h2>
                    <span>Team</span>
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
                            <img src={Ceekay}/>
                        </div>
                        <div className='teamInfor'>
                            <div className='mytitle'>
                                Ceekay
                            </div>
                            <div className='teamposition'>
                                {/* Co-Founder of PP. Co-Creative Director and Operations Manager. NFT Collector and Computer Science Student. */}
                                CEO <br/> Operations
                            </div>
                            <div className='twitterIcon'>
                                {/* <div className='twitter'>
                                    <FiTwitter size={20} color='#fff' />
                                </div> */}
                               
                            </div>
                        </div>
                    </div>
                    <div className="team-member">
                    <div className="teamImg">
                            <img src={Karim}/>
                        </div>
                        <div className='teamInfor'>
                            <div className='mytitle'>
                                Karim
                            </div>
                            <div className='teamposition'>
                                {/* Co-Founder of PP. Co-Creative Director and Operations Manager. NFT Collector and Computer Science Student. */}
                                CMO <br/> Marketing
                            </div>
                            <div className='twitterIcon'>
                                {/* <div className='twitter'>
                                    <FiTwitter size={20} color='#fff' />
                                </div> */}
                               
                            </div>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="teamImg">
                            <img src={Jade}/>
                        </div>
                        <div className='teamInfor'>
                            <div className='mytitle'>
                                Jade
                            </div>
                            <div className='teamposition'>
                                {/* Co-Founder of PP. Co-Creative Director and Operations Manager. NFT Collector and Computer Science Student. */}
                                CTO <br/>Technology & Blockchain
                            </div>
                            <div className='twitterIcon'>
                                {/* <div className='twitter'>
                                    <FiTwitter size={20} color='#fff' />
                                </div> */}
                               
                            </div>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="teamImg">
                            <img src={KOby}/>
                        </div>
                        <div className='teamInfor'>
                            <div className='mytitle'>
                                Koby
                            </div>
                            <div className='teamposition'>
                                {/* Co-Founder of PP. Co-Creative Director and Operations Manager. NFT Collector and Computer Science Student. */}
                                Software Engineer<br/>Smart Contract/Developer

                            </div>
                            <div className='twitterIcon'>
                                {/* <div className='twitter'>
                                    <FiTwitter size={20} color='#fff' />
                                </div> */}
                               
                            </div>
                        </div>
                    </div>
                    <div className="team-member">
                    <div className="teamImg">
                            <img src={Andrea}/>
                        </div>
                        <div className='teamInfor'>
                            <div className='mytitle'>
                                Andrea
                            </div>
                            <div className='teamposition'>
                                {/* Co-Founder of PP. Co-Creative Director and Operations Manager. NFT Collector and Computer Science Student. */}
                                Architect/Artist <br/>Designer

                            </div>
                            <div className='twitterIcon'>
                                {/* <div className='twitter'>
                                    <FiTwitter size={20} color='#fff' />
                                </div> */}
                               
                            </div>
                        </div>
                    </div>
                   

                </div>
                


              </div>
               
               
               

                
               
               
        
    )
}

export default Index;