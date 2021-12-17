import '../../../assets/css/About/about.css';
import nft1 from '../../../assets/images/nft/nft-1.png'
import nft2 from '../../../assets/images/nft/nft-2.png'
import nft3 from '../../../assets/images/nft/nft-3.png'
import nft4 from '../../../assets/images/nft/nft-4.png'
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
                <img src={nft1} className="nft-images slideIn"/>
                <img src={nft3} className="nft-images slideIn"/>
                <img src={nft2} className="nft-images slideIn"/>
                <img src={nft4} className="nft-images slideIn" />
            </div>
            <div className="content">
               <p> Millions of trees in the world are accidently planted by Squirrels. Who bury nuts than forget where they hid it!</p>
            </div>
            
        </div>
    )
}

export default Index;