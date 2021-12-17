import '../../assets/css/Header/header.css';
import logo from '../../assets/images/logo_white_new.png';
import {GiGamepad} from 'react-icons/gi';
import {VscTwitter} from 'react-icons/vsc';
import {GiIronHulledWarship} from 'react-icons/gi'
import {Link} from 'react-scroll'
import { useLocation} from 'react-router';
const Index=()=>{
    
    return(
        <div className="header">
                <div className="logo" style={{cursor:'pointer'}}><Link to='/'><img src={logo}/></Link></div>
                <div className="nav-bars">
                    <div>
                        <Link  to="aboutus" spy={true} smooth={true}>About</Link>
                    </div>
                    <div>
                    <Link  to="story" spy={true} smooth={true}> Story</Link>
                       
                    </div>
                    <div>
                    <Link  to="roadmap" spy={true} smooth={true}> Roadmap</Link>
                        
                    </div>
                    <div>
                        
                        <Link  to="team" spy={true} smooth={true}> Team</Link>
                    </div>
                    <div>
                    <Link  to="faq" spy={true} smooth={true}> Faq</Link>
                    
                    </div>
                </div>
                <div className="connect">
                    <div className="game">
                        <GiGamepad size={20} color="#FFF"/>
                    </div>
                    <div className="game">
                         <VscTwitter size={20} color="#FFF"/>
                    </div>
                    <div className="game">
                         <GiIronHulledWarship size={20} color="#FFF"/>
                    </div>
                    <div className="gaming">
                            Connect to Wallet
                    </div>


                </div>
        </div>
    )
}

export default Index;