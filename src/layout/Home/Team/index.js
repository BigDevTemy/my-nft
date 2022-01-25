import '../../../assets/css/OurTeam/ourteam.css'

import Andrea from '../../../assets/images/team/team/Andrea.png'
import Ceekay from '../../../assets/images/team/team/Ceekay.png'
import Jade from '../../../assets/images/team/team/Jade.png'
import Karim from '../../../assets/images/team/team/Karim.png'
import KOby from '../../../assets/images/team/team/koby.png'
import Zeuxt from '../../../assets/images/team/team/advisor.png'
import team6 from '../../../assets/images/team/edit/team6.png'

import logo from '../../../assets/images/logo_100.png'
import {FiTwitter} from 'react-icons/fi'
import {FaInstagram} from 'react-icons/fa'
const Index=()=>{
    return (
        <div className="ourteam" id="team">

            <div className="SoleHeader">

                <div className='mylogo'>
                   {/* <div className='overlayDiv'></div> */}
                    <img src={logo} style={{pointerEvents:'none'}}/>
                </div>
                <div className='myTitle'>
                    <h2>OUR</h2>
                    <span>Team</span>
                </div>

            </div>

            <div className="teamAll">
                <div className="team-member">
                    <div className="teamImg">
                        <div className='overlayDiv'></div>
                        <img src={Ceekay}/>
                    </div>
                    <div className='teamInfor'>
                        <div className='mytitle'>
                            Ceekay
                        </div>
                        <div className='teamposition'>
                            {/* Co-Founder of PP. Co-Creative Director and Operations Manager. NFT Collector and Computer Science Student. */}
                            CEO  <div className='teamposition-span'>Business Owner. Harvard Certified. Crypto, Stock & NFT Investor.</div>
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
                        <div className='overlayDiv'></div>
                        <img src={Karim}/>
                    </div>
                    <div className='teamInfor'>
                        <div className='mytitle'>
                            Karim 
                        </div>
                        <div className='teamposition'>
                            {/* Co-Founder of PP. Co-Creative Director and Operations Manager. NFT Collector and Computer Science Student. */}
                           CMO   <div className='teamposition-span'> Marketing. Entrepreneur. NFT & Crypto Enthusiast. Gamer.</div>
                        </div>
                        <div className='twitterIcon'>
                            <div className='twitter' style={{border:0}}>
                                <a href="https://www.instagram.com/karim_shaaban/" target='_blank'><FaInstagram size={20} color='#fff' className='instagramIcon' /></a>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="teamImg">
                        <div className='overlayDiv'></div>
                        <img src={Jade}/>
                    </div>
                    <div className='teamInfor'>
                        <div className='mytitle'>
                            Jade
                            
                        </div>
                        <div className='teamposition'>
                            {/* Co-Founder of PP. Co-Creative Director and Operations Manager. NFT Collector and Computer Science Student. */}
                            CTO - Tech & Blockchain <div className='teamposition-span'> Computer Engineer. PMI Certified. Tech Business Owner. Crypto Investor.</div>
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
                         <div className='overlayDiv'></div>
                        <img src={KOby}/>
                    </div>
                    <div className='teamInfor'>
                        <div className='mytitle'>
                            Koby
                        </div>
                        <div className='teamposition'>
                            {/* Co-Founder of PP. Co-Creative Director and Operations Manager. NFT Collector and Computer Science Student. */}
                            Smart Contract Developer<div className='teamposition-span'>Software Engineer. Full Stack Developer. AI & Blockchain Enthusiast. </div>

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
                         <div className='overlayDiv'></div>
                        <img src={Zeuxt}/>
                    </div>
                    <div className='teamInfor'>
                        <div className='mytitle'>
                            ncg Consulting <br/>
                            Zeuxt & Rayan
                        </div>
                        <div className='teamposition'>
                            {/* Co-Founder of PP. Co-Creative Director and Operations Manager. NFT Collector and Computer Science Student. */}
                            NFT Consultants<div className='teamposition-span'>Strategic and Marketing Management. </div>

                        </div>
                        <div className='twitterIcon'>
                            <div className='twitter' style={{border:0}}>
                                <a href="https://instagram.com/zeuxt?utm_medium=copy_link" target='_blank' style={{marginRight:10}}><FaInstagram size={20} color='#fff' className='instagramIcon'  /></a>
                                <a href="https://instagram.com/rayan_sme?utm_medium=copy_link" target='_blank'><FaInstagram size={20} color='#fff' className='instagramIcon' /></a>
                            </div>
                        
                        </div>
                    </div>
                </div>

                <div className="team-member">
                <div className="teamImg">
                        <div className='overlayDiv'></div>
                        <img src={Andrea}/>
                    </div>
                    <div className='teamInfor'>
                        <div className='mytitle'>
                            Andrea
                        </div>
                        <div className='teamposition'>
                            {/* Co-Founder of PP. Co-Creative Director and Operations Manager. NFT Collector and Computer Science Student. */}
                            Artist <div className='teamposition-span'>Graphic Designer. Illustrator. Cartoonist & Animator.</div>

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