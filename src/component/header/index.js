import '../../assets/css/Header/header.css';
import logo from '../../assets/images/logo_white_new.png';
import Squirreling from '../../assets/images/logo_50.png';
import logo_newest from '../../assets/images/logo_3.png'
import {GiGamepad} from 'react-icons/gi';
import {FaDiscord} from 'react-icons/fa';
import {VscTwitter} from 'react-icons/vsc';
import {BiMenuAltRight} from 'react-icons/bi'
import {FaInstagram} from 'react-icons/fa'
import {Link} from 'react-scroll'
import { useLocation} from 'react-router';
import { useEffect, useState } from 'react';
import opensea from '../../assets/images/opensea.png'
import Drawer from './drawer.js';
import { Offcanvas,Button } from "react-bootstrap";
import {AiOutlineHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {BiHistory} from 'react-icons/bi'
import {RiRoadMapLine} from 'react-icons/ri'
import {MdOutlineGroups} from 'react-icons/md'
import {FcAnswers} from 'react-icons/fc'
const Index=()=>{
    const [scroll,setscrollPosition] = useState(0);
    const [showDrawer,setShowDrawer] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setscrollPosition(position)
        
        console.log(position)
    };
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])
    const _handleDrawer = ()=>{
        
        setShowDrawer(true)
    }
    return(
        <div className='header'>
              {/* <Drawer sendState={showDrawer}/> */}
                <div className="logo" style={{cursor:'pointer'}}><Link to='/'><img src={logo_newest}/></Link></div>
                <div className='nav-bars'>
                    
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
                <div className='hamburger' onClick={handleShow}>
                        <BiMenuAltRight  size={40} color='#fff' />
                </div>
                <Offcanvas show={show} onHide={handleClose} placement="end" style={{width:'50%',backgroundColor:'#07081d'}}>
                    <Offcanvas.Header closeButton closeVariant='white' >
                        <Offcanvas.Title></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className=''>
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <AiOutlineHome color='#fff' className='myicons' />
                                </div>
                                <div className='tagName'>Home</div>
                            </div>
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <FcAbout color='#fff' size={20} />
                                </div>
                                <div className='tagName'>About Us</div>
                            </div>
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <BiHistory color='#fff' size={20} />
                                </div>
                                <div className='tagName'>Story</div>
                            </div>
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <RiRoadMapLine color='#fff' size={20} />
                                </div>
                                <div className='tagName'>Roadmap</div>
                            </div>
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <MdOutlineGroups color='#fff' size={20} />
                                </div>
                                <div className='tagName'>Team</div>
                            </div>
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <FcAnswers color='#fff' size={20} />
                                </div>
                                <div className='tagName'>Faq</div>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
        </div>
    )
}

export default Index;