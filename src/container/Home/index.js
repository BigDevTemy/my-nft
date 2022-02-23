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
import ReactGA from "react-ga4";
import { useEffect } from 'react';
const TRACKING_ID = process.env.REACT_APP_GOOGLE_TRACKING_ID; // YOUR_OWN_TRACKING_ID
const REACT_APP_MEASUREMENT_ID = process.env.REACT_APP_MEASUREMENT_ID

const Index=()=>{
    ReactGA.initialize(REACT_APP_MEASUREMENT_ID);
   
    useEffect(()=>{
        ///ReactGA.pageview(window.location.pathname + window.location.search);
        ReactGA.send("pageview");
    },[])

    return(
        <div className="homeDiv">
            <div className='scroller'>
                <div className='scroll'>
                    {/* <BsFileArrowUp size={15} color="#fff" style={{cursor:'pointer'}} onClick={()=>window.scroll(0,0)}/> */}
                    {/* <a href='https://raritysniper.com' target='_blank'><img src={Rarity} className='rarity'/></a>                    */}
                    
                    <a href="https://tree-nation.com/profile/impact/squirreling-squirrels#co2" target="_blank" className='treeNation'>
                        <img src="https://tree-nation.com/images/tracking/label-co2-website-white-en.png" style={{width:157,height:'auto'}}/>
                    </a>
                        
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