import '../../assets/css/Header/header.css';
import logo from '../../assets/images/logo_white_new.png';
import {GiGamepad} from 'react-icons/gi';
import {VscTwitter} from 'react-icons/vsc';
import {GiIronHulledWarship} from 'react-icons/gi'
const Index=()=>{
    return(
        <div className="header">
                <div className="logo"><img src={logo}/></div>
                <div className="nav-bars">
                    <div>
                        About
                    </div>
                    <div>
                        Story
                    </div>
                    <div>
                        Roadmap
                    </div>
                    <div>
                        Team
                    </div>
                    <div>
                        Next Projects
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