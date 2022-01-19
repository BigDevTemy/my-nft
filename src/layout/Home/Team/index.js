import '../../../assets/css/OurTeam/ourteam.css'
import Path from '../../../assets/images/Path-2.png'
import Andrea from '../../../assets/images/team/team/Andrea.png'
import Ceekay from '../../../assets/images/team/team/Ceekay.png'
import Jade from '../../../assets/images/team/team/Jade.png'
import Karim from '../../../assets/images/team/team/Karim.png'
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
                            CEO <br/> <span style={{fontSize:15.5}}>Business Owner. Harvard Certified. Crypto, Stock & NFT Investor.</span>
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
                           CMO  <br/> <span style={{fontSize:15.5}}> Marketing. Entrepreneur. NFT & Crypto Enthusiast. Gamer.</span>
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
                            CTO - Tech & Blockchain <br/><span style={{fontSize:15}}> Computer Engineer. PMI Certified. Tech Business Owner. Crypto Investor.</span>
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
                            Smart Contract Developer<br/> <span style={{fontSize:15}}>Software Engineer. Full Stack Developer. AI & Blockchain Enthusiast. </span>

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
                            Artist <br/><span style={{fontSize:15.5}}>Graphic Designer. Illustrator. Cartoonist & Animator.</span>

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