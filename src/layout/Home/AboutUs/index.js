import '../../../assets/css/About/about.css';
import nft1 from '../../../assets/images/slider/1.png'
import nft2 from '../../../assets/images/slider/2.png'
import nft3 from '../../../assets/images/slider/3.png'
import nft4 from '../../../assets/images/slider/4.png'
import nft5 from '../../../assets/images/slider/5.png'
import nft6 from '../../../assets/images/slider/6.png'
import nft7 from '../../../assets/images/slider/7.png'
import nft8 from '../../../assets/images/slider/8.png'
import nft9 from '../../../assets/images/slider/9.png'
import nft10 from '../../../assets/images/slider/10.png'
import nft11 from '../../../assets/images/slider/11.png'
import nft12 from '../../../assets/images/slider/12.png'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import logo from '../../../assets/images/logo_100.png'
const Index = ()=>{
    return(
        <div className="aboutus" id="aboutus">
            <div className="title">
                <div className="logoArea">
                    <img src={logo}/>
                </div>  
                <div className="textTitle">
                    <h2>Our<br/>
                        <span>
                            ABOUT US
                        </span>
                    </h2>
                </div>   
            </div>
            <div className="aboutusContainer">
                <div className="carousel-images">
                    <img src={nft1}/>
                    <img src={nft2}/>
                </div>
                <div className="aboutus-Text">
                <p>
                    Squirreling Squirrels "SS" is a 5,500 collection of 100% completely HAND DRAWN SQUIRRELS. <span>Two species of squirrels:</span> 1000 ice age squirrels and 4500 current age Squirrels, the ice age squirrels are scarce and rare. Rarity can be found in 200 plus hand drawn traits, like robot, gold & diamond Squirrels and others; All Squirreling on the Ethereum blockchain. It is been a few years after the last ice age and the Squirrels living in joy and peace in North America. They are fun, active, curious and sometimes weird; THEY ARE NUT BEYOND NUTS!
                </p>
                <p>
                    Join us on our adventure in creating a positive community. Our journey will be full of surprises such as acquiring a land on sandbox, where we will base our community & game on along with many more projects and events! All this to help shape the future of the Squirreling Squirrels!
                </p>
                </div>
            </div>
            {/* 
            <div className="content">
                <p>Squirreling Squirrels "SS" is a 5,500 collection of 100% completely HAND DRAWN SQUIRRELS. Two species of squirrels: 1000 ice age squirrels and 4500 current age Squirrels, the ice age squirrels are scarce and rare. Rarity can be found in 200 plus hand drawn traits, like robot, gold & diamond Squirrels and others; All Squirreling on the Ethereum blockchain. It is been a few years after the last ice age and the Squirrels living in joy and peace in North America. They are fun, active, curious and sometimes weird; THEY ARE NUT BEYOND NUTS!.</p>
                <p>Join us on our adventure in creating a positive community. Our journey will be full of surprises such as acquiring a land on sandbox, where we will base our community & game on along with many more projects and events! All this to help shape the future of the Squirreling Squirrels!</p>
            </div>
            <div className="content-image">
            <OwlCarousel className='owl-theme' loop margin={5} autoplay="true" items={4} autoplayTimeout={1200}>
                <div class='item'>
                    <img src={nft1} className="nft-images slideIn"/>
                </div>
                <div class='item'>
                    <img src={nft3} className="nft-images slideIn"/>
                </div>
                <div class='item'>
                    <img src={nft2} className="nft-images slideIn"/>
                </div>
                <div class='item'>
                    <img src={nft4} className="nft-images slideIn" />
                </div>
                <div class='item'>
                    <img src={nft5} className="nft-images slideIn" />
                </div>
                <div class='item'>
                     <img src={nft6} className="nft-images slideIn" />
                </div>
                <div class='item'>
                    <img src={nft7} className="nft-images slideIn" />
                </div>
                <div class='item'>
                    <img src={nft8} className="nft-images slideIn" />
                </div>
                <div class='item'>
                    <img src={nft9} className="nft-images slideIn" />
                </div>
                <div class='item'>
                     <img src={nft10} className="nft-images slideIn" />
                </div>
                <div class='item'>
                     <img src={nft11} className="nft-images slideIn" />
                </div>
                <div class='item'>
                    <img src={nft12} className="nft-images slideIn" />
                </div>
            </OwlCarousel>
            </div>
           

            <div className="content">
               <p> Millions of trees in the world are accidently planted by Squirrels. Who bury nuts than forget where they hid it!</p>
            </div>

            {/* <section className="whyus">
                <div className="whyus-header">
                    <h1>Why us?</h1>
                </div>
                <div className="whyus-content">
                
                    Welcome to Squirreling Squirrels "SS" Community, we are happy to have you on board, Please navigate our channels to discover all about SS. After Verification #verification, we propose to start with the #rules, hope it will be respected by all "SS" members. We are all here to have fun and earn! Following will be granted to our loyal Members: - ETH and NFTs giveaways @ 20%, 40%, 60%, 80% and 100% sales. - Have a share in Sandbox Project/Community. - Access to our 3D Game on Metaverse, to play and earn. - Membership in Squirreling Squirrels Club, where you will gain special pass to many events.

                </div>
            </section> */} 
        
        </div>
    )
}

export default Index;