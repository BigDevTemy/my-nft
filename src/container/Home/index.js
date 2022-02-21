import Header from '../../component/header';
import HeroBanner from '../../layout/Home/Hero';
import Aboutus from '../../layout/Home/AboutUs';
import Story from '../../layout/Home/Story';
import Roadmap from '../../layout/Home/Roadmap'
import Team from '../../layout/Home/Team'
import Faq from '../../layout/Home/Faq'
import Footer from '../../component/footer'
import SecondHeader from '../../component/SecondHeader'
import '../../../src/App.css'
import {BsFileArrowUp} from 'react-icons/bs'
import Rarity  from '../../assets/images/rarity.png'
const Index=()=>{
    return(
        <div className="homeDiv">
            <div className='scroller'>
                <div className='scroll'>
                    {/* <BsFileArrowUp size={15} color="#fff" style={{cursor:'pointer'}} onClick={()=>window.scroll(0,0)}/> */}
                    {/* <a href='https://raritysniper.com' target='_blank'><img src={Rarity} className='rarity'/></a>                    */}
                    
                    <a href="https://tree-nation.com/profile/impact/squirreling-squirrels#co2" target="_blank" style="position:relative;cursor:pointer;display:block;z-index:999;">
                        <img src="https://tree-nation.com/images/tracking/label-co2-website-white-en.png" style="width:157px;height:auto;"/>
                    </a>
                    <script src="https://tree-nation.com/js/track.js"></script>
                    <script>treenation_track("61fd51cfdb789");</script>
                </div>
            </div>
            <Header/>
            <HeroBanner/>
             <SecondHeader/>
            <Aboutus/>
             <Story/> 
            <Roadmap/>
            <Team/>
            <Faq/>
            <Footer/> 
        
        </div>
    )
}

export default Index