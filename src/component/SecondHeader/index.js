import '../../assets/css/Header/header.css';
import logo from '../../assets/images/logo_white_new.png';
import Squirreling from '../../assets/images/logo_50.png';
import logo_new from '../../assets/images/logo_new.png'
import {GiGamepad} from 'react-icons/gi';
import {FaDiscord} from 'react-icons/fa';
import {VscTwitter} from 'react-icons/vsc';
import {BiMenuAltRight} from 'react-icons/bi'
import {FaInstagram} from 'react-icons/fa'
import {Link} from 'react-scroll'
import { useLocation} from 'react-router';
import { useEffect, useState } from 'react';
import opensea from '../../assets/images/opensea.png'
import { Offcanvas,Button } from "react-bootstrap";
import {AiOutlineHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {BiHistory} from 'react-icons/bi'
import {RiRoadMapLine} from 'react-icons/ri'
import {MdOutlineGroups} from 'react-icons/md'
import {FcAnswers} from 'react-icons/fc'
const Index=()=>{
    const [scroll,setscrollPosition] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                <div className='' onClick={handleShow}>
                        <BiMenuAltRight  size={40} color='#fff' />
                </div>
                <Offcanvas show={show} onHide={handleClose} placement="end" style={{width:'50%',backgroundColor:'#07081d'}}>
                    <Offcanvas.Header closeButton closeVariant='white' >
                        <Offcanvas.Title></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className=''>
                        <Link  to="/" spy={true} smooth={true}  >

                            <div className='tag' onClick={()=>{window.scroll(0,0)}}>
                                    <div className='tagIcon'>
                                        <AiOutlineHome color='#fff' className='myicons' />
                                    </div>
                                    <div className='tagName'>Home</div>
                            </div>

                        </Link>
                        <Link  to="aboutus" spy={true} smooth={true} onClick={handleClose}>
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <FcAbout color='#fff' size={20} />
                                </div>
                                <div className='tagName'>About Us</div>
                            </div>
                        </Link>

                        <Link  to="story" spy={true} smooth={true} onClick={handleClose}>
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <BiHistory color='#fff' size={20} />
                                </div>
                                <div className='tagName'>Story</div>
                            </div>

                        </Link>

                        <Link  to="roadmap" spy={true} smooth={true} onClick={handleClose}>
                             <div className='tag'>
                                <div className='tagIcon'>
                                     <RiRoadMapLine color='#fff' size={20} />
                                </div>
                                <div className='tagName'>Roadmap</div>
                            </div>
                            
                        </Link>
                        
                        
                        <Link  to="team" spy={true} smooth={true} onClick={handleClose}>
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <MdOutlineGroups color='#fff' size={20} />
                                </div>
                                <div className='tagName'>Team</div>
                            </div>

                        </Link>


                        <Link to='faq' spy={true} smooth={true} onClick={handleClose}>
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <FcAnswers color='#fff' size={20} />
                                </div>
                                <div className='tagName'>Faq</div>
                            </div>
                        </Link>
                            
                            
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
        </div>
    )
}

export default Index;