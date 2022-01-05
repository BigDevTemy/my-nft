import '../../assets/css/Header/header.css';
import logo from '../../assets/images/logo_white_new.png';
import Squirreling from '../../assets/images/logo_50.png';
import logo_new from '../../assets/images/logo_new.png'
import {GiGamepad} from 'react-icons/gi';
import {FaDiscord} from 'react-icons/fa';
import {VscTwitter} from 'react-icons/vsc';
import {GiIronHulledWarship} from 'react-icons/gi'
import {FaInstagram} from 'react-icons/fa'
import {Link} from 'react-scroll'
import { useLocation} from 'react-router';
import { useEffect, useState } from 'react';
import opensea from '../../assets/images/opensea.png'
const Index=()=>{
    const [scroll,setscrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setscrollPosition(position)
        // console.log('myScroll',scroll)
    };
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scrolls', handleScroll);
        };
    },[])
    return(
        <div className={scroll >= 583 ? 'headerScroll':'Displaynone'}>
                <div className="logo" style={{cursor:'pointer'}}><Link to='/'><img src={Squirreling} onClick={()=>{window.scroll(0,0)}}/></Link></div>
                <div className='nav-bars-scroll'>
                    
                    <Link  to="aboutus" spy={true} smooth={true}>
                        <div className="abt">   
                            About
                    </div>
                        
                    </Link>

                    <Link  to="story" spy={true} smooth={true}>
                        <div className="abt">   
                            Story
                    </div>
                        
                    </Link>
                
                    <Link  to="roadmap" spy={true} smooth={true}>
                        <div className="abt">   
                        Roadmap
                    </div>
                        
                    </Link>

                    <Link  to="team" spy={true} smooth={true}>
                        <div className="abt">   
                        Team
                        </div>
                        
                    </Link>
                    <Link  to="faq" spy={true} smooth={true}>
                        <div className="abt">   
                            Faq
                        </div>
                        
                    </Link>
                   
                  
                    
                </div>
                <div className="connect">
                    <div className="game">
                      <a href="https://discord.gg/dQr9nAeB" target="_blank">  <FaDiscord size={20} color="#FFF"/></a>
                    </div>
                    <div className="game">
                         <a href="https://twitter.com/SquirrelingSQRL" target="_blank"><VscTwitter size={20} color="#FFF"/></a>
                    </div>
                    <div className="game">
                         <a href="https://www.instagram.com/squirrelingsquirrels/" target="_blank"><FaInstagram size={20} color="#FFF"/></a>
                    </div>
                    <div className="game">
                         <a href="https://www.opensea.io/" target="_blank"><img src={opensea} style={{width:25}}/></a>
                    </div>
                    {/* <div className="gaming">
                            Connect to Wallet
                    </div> */}


                </div>
        </div>
    )
}

export default Index;