import '../../../assets/css/About/about.css';
import nft1 from '../../../assets/images/aboutus/edit/1.png'
import nft2 from '../../../assets/images/aboutus/edit/2.png'
import nft3 from '../../../assets/images/aboutus/edit/3.png'
import nft4 from '../../../assets/images/aboutus/edit/4.png'
import nft5 from '../../../assets/images/aboutus/edit/5.png'
import nft6 from '../../../assets/images/aboutus/edit/6.png'


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import logo from '../../../assets/images/logo_100.png'
import { useEffect, useState } from 'react';
const Index = ()=>{
    const [animateImg, setanimateImg] = useState(0)
    
    // useEffect(()=>{
    //     const intervalId = setInterval(changeImage,2000)
    //     return () => clearInterval(intervalId);
    // },[animateImg])
    
    // const changeImage=()=>{
    //     if(animateImg === 2){
    //         setanimateImg(0)
            
    //     }
    //     else{
    //         setanimateImg(animateImg + 1)
    //     }
        
    // }
    // setInterval(changeImage(),10000)

    

    const _renderImage=()=>{
        
        switch(animateImg){
            
            case 0:
                return <div>
                            <img src={nft1} className="abt-pic"/>
                            <img src={nft2} className="abt-pic"/>
                        </div>
                break;
            case 1:
                return <div>
                            <img src={nft3} className="abt-pic"/>
                            <img src={nft4} className="abt-pic"/>
                        </div>
                break;
            case 2:
                return <div>
                    <img src={nft5} className="abt-pic"/>
                    <img src={nft6} className="abt-pic"/>
                </div>
                 break;
            default:
                return <div>
                            <img src={nft1} className="abt-pic"/>
                            <img src={nft2} className="abt-pic"/>
                        </div>
        }
    }

    return(
        <div className="aboutus" id="aboutus">
            <div className="title">
                <div className="logoArea">
                    <img src={logo}/>
                </div>  
                <div className="textTitle">
                    <h2>WHO WE ARE<br/>
                        <span>
                            ABOUT US
                        </span>
                    </h2>
                </div>   
            </div>
            <div className="aboutusContainer">
                <div className="aboutus-Text">
                    {/* {_renderImage()} */}
                    <p>
                        Squirreling Squirrels "SS" is a 5,500 collection of 100% completely HAND DRAWN SQUIRRELS. <span>Two species of squirrels:</span> 1000 ice age squirrels and 4500 current age Squirrels, the ice age squirrels are scarce and rare. Rarity can be found in 200 plus hand drawn traits, like robot, gold & diamond Squirrels and others; All Squirreling on the Ethereum blockchain. It is been a few years after the last ice age and the Squirrels living in joy and peace in North America. <span>They are fun, active, curious and sometimes weird;</span> THEY ARE NUT BEYOND NUTS!
                    </p>
                    <p>
                        Join us on our adventure in creating a positive community. Our journey will be full of surprises such as acquiring a land on sandbox, where we will base our community & game on along with many more projects and events! <span>All this to help shape the future of the Squirreling Squirrels!</span>
                    </p>

                   
                </div>
                <div className="carousel-images">
                  
                    <OwlCarousel 
                        className='owl-theme' 
                        loop margin={1} 
                        autoplay="true"
                        items={4} 
                        autoplayTimeout={1200} 
                        
                        nav="true">
                        <div class='item'>
                            <img src={nft1} className="nft-images"/>
                        </div>
                        <div class='item'>
                            <img src={nft2} className="nft-images"/>
                        </div>
                        <div class='item'>
                            <img src={nft3} className="nft-images"/>
                        </div>
                        <div class='item'>
                            <img src={nft4} className="nft-images" />
                        </div>
                        <div class='item'>
                            <img src={nft5} className="nft-images" />
                        </div>
                        <div class='item'>
                            <img src={nft6} className="nft-images" />
                        </div>
                    
                    </OwlCarousel>
                    
                </div>
                
            </div>
            
{/*             
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
                
                </OwlCarousel>
            </div> */}
        </div>
    )
}

export default Index;