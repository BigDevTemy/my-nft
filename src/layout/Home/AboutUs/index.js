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
const Index = ()=>{
    return(
        <div className="aboutus" id="aboutus">
            <div className="title">
                <h1>About US</h1>
                <small>Welcome to Squireling Squirrels</small>
            </div>
            <div className="content">
                <p>SS is a collection of 5,500 hand drawn Squirrels, NFTs-unique digital collectibles, Squirreling on the Ethereum blockchain, Squirrels Holders will have access to an exclusive Web3 Community, where exclusive events will be hold on Metaverse, in addition to access to SS 3D Game, where SS Holder can play and earn.</p>
                <p>Two species of squirrels: ice age squirrels and current age Squirrels, the ice age squirrels are scarce and rare. Rarity can be found as well in many traits for both species, like robot, gold, diamond Squirrels and others.</p>
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

            <section className="whyus">
                <div className="whyus-header">
                    <h1>Why us?</h1>
                </div>
                <div className="whyus-content">
                
                    Welcome to Squirreling Squirrels "SS" Community, we are happy to have you on board, Please navigate our channels to discover all about SS. After Verification #verification, we propose to start with the #rules, hope it will be respected by all "SS" members. We are all here to have fun and earn! Following will be granted to our loyal Members: - ETH and NFTs giveaways @ 20%, 40%, 60%, 80% and 100% sales. - Have a share in Sandbox Project/Community. - Access to our 3D Game on Metaverse, to play and earn. - Membership in Squirreling Squirrels Club, where you will gain special pass to many events.

                </div>
            </section>
            
        </div>
    )
}

export default Index;