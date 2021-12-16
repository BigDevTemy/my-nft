import Header from '../../component/header';
import HeroBanner from '../../layout/Home/Hero';
import Aboutus from '../../layout/Home/AboutUs';
import Story from '../../layout/Home/Story';
const Index=()=>{
    return(
        <div className="homeDiv">
            
            <Header/>
            <HeroBanner/>
            <Aboutus/>
            <Story/>
        
        </div>
    )
}

export default Index