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
                    <BiMenuAltRight  size={40} color='#ffff' className='hamburgerIcon' />
                </div>
                <Offcanvas show={show} onHide={handleClose} placement="end" style={{width:'40%'}}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                </Offcanvas>
        </div>
    )
}

export default Index;