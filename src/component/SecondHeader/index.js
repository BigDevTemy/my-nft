import '../../assets/css/Header/header.css';

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
import {GiOpenBook} from 'react-icons/gi'
import {RiRoadMapLine} from 'react-icons/ri'
import {MdOutlineGroups} from 'react-icons/md'

import {FcFaq} from 'react-icons/fc'
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
    const handleHome = ()=>{
       
        window.scroll(0,0);
        handleClose();
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scrolls', handleScroll);
        };
    },[])
    return(
        <div className={scroll >= 583 ? 'headerScroll':'Displaynone'}>
                <div className="logoII" style={{cursor:'pointer'}}><Link to='/'><img src={Squirreling} onClick={()=>{window.scroll(0,0)}} style={{pointerEvents:'none'}}/></Link></div>
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
                      <a href="https://discord.com/invite/squirrelingsquirrels" target="_blank">  <FaDiscord size={20} color="#FFF"/></a>
                    </div>
                    <div className="game">
                         <a href="https://twitter.com/SquirrelingSQRL" target="_blank"><VscTwitter size={20} color="#FFF"/></a>
                    </div>
                    <div className="game">
                         <a href="https://www.instagram.com/squirrelingsquirrels/" target="_blank"><FaInstagram size={20} color="#FFF"/></a>
                    </div>
                    {/* <div className="game">
                         <a href="https://www.opensea.io/" target="_blank"><img src={opensea} style={{width:25}}/></a>
                    </div> */}
                    {/* <div className="gaming">
                            Connect to Wallet
                    </div> */}

                    
                </div>
                <div className='hamburgerII' onClick={handleShow}>
                        <BiMenuAltRight  size={40} color='#fff' />
                </div>
                <Offcanvas show={show} onHide={handleClose} placement="end" style={{width:'50%',backgroundColor:'#07081d'}}>
                    <Offcanvas.Header closeButton closeVariant='white' >
                        <Offcanvas.Title></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className=''>
                        <Link  to="/" spy={true} smooth={true}  >

                            <div className='tag' onClick={handleHome}>
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
                                     <GiOpenBook color='#fff' size={20} />
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
                                     <FcFaq color='#fff' size={20} />
                                </div>
                                <div className='tagName'>Faq</div>
                            </div>
                        </Link>
                        <a href="https://discord.gg/5JgjnY6mUa" style={{ textDecoration: 'none'}}>
                            <div className='tag'>
                                    <div className='tagIcon'>
                                        
                                        <FaDiscord size={20} color="#5865F2"/>
                                    </div>
                                    <div className='tagName'>Discord</div>
                            </div>
                        </a>
                        
                        <a href="https://twitter.com/SquirrelingSQRL" style={{ textDecoration: 'none'}} >
                            <div className='tag'>
                                    <div className='tagIcon'>
                                        
                                        <VscTwitter size={20} color="#1DA1F2"/>
                                    </div>
                                    <div className='tagName'>Twitter</div>
                            </div>
                        </a>
                       
                        <a href="https://www.instagram.com/squirrelingsquirrels/" style={{ textDecoration: 'none'}}>
                            <div className='tag'>
                                    <div className='tagIcon'>
                                        
                                    <FaInstagram size={20} color="#fbad50"/>
                                    </div>
                                    <div className='tagName'>Instagram</div>
                            </div>
                        </a>
                        
                        {/* <a href="https://opensea.io/collection/squirrelingsquirrels" style={{ textDecoration: 'none'}}>
                            <div className='tag'>
                                    <div className='tagIcon'>
                                        
                                    <img src={opensea} style={{width:25}}/>
                                    </div>
                                    <div className='tagName'>Opensea</div>
                            </div>
                        </a>     */}
                          
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
        </div>
    )
}

export default Index;