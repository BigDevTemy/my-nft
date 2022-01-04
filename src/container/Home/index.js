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
const Index=()=>{
    return(
        <div className="homeDiv">
            
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