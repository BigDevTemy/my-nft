import '../../../assets/css/About/about.css';
import nft1 from '../../../assets/images/aboutus_new/NFT1.png'
import nft2 from '../../../assets/images/aboutus_new/NFT2.png'
import nft3 from '../../../assets/images/aboutus_new/NFT3.png'
import nft4 from '../../../assets/images/aboutus_new/NFT4.png'
import nft5 from '../../../assets/images/aboutus_new/NFT5.png'
import nft6 from '../../../assets/images/aboutus_new/NFT6.png'


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

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
    const slideImages = [
        {
          url: nft1,
          caption: 'NFT1'
        },
        {
          url: nft2,
          caption: 'NFT2'
        },
        {
          url: nft3,
          caption: 'NFT3'
        },
        {
            url: nft4,
            caption: 'NFT4'
        },
        {
            url: nft5,
            caption: 'NFT5'
        },
        {
            url: nft6,
            caption: 'NFT6'
          },
      ];

      const properties = {
        duration: 0,
        transitionDuration: 2000,
        infinite: true,
        prevArrow: null,
        nextArrow:null,
        slidesToShow:4,
        arrows:false
      };
    

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
            <div className="SoleHeader">

                <div className='mylogo'>
                     <img src={logo} style={{pointerEvents:'none'}}/>
                </div>
                <div className='myTitle'>
                    <h2>WHO WE ARE</h2>
                    <span>about us</span>
                </div>
               
            </div>
            <div className="aboutusContainer">

            

            <div className="carousel-images">

            <div className="slide-container">

                <Slide {...properties}>
                    {slideImages.map((slideImage, index)=> (
                        
                        <div className="each-slide" key={index}>
                            
                            {/* <div style={{'backgroundImage': `url(${slideImage.url})`,height:'100%',backgroundPosition:'center',backgroundSize:'cover'}} >
                                <span>{slideImage.caption}</span>
                            </div> */}
                            <div class='item'>
                                <div className='overlayDiv'></div>
                                    <img src={slideImage.url}/>
                                </div>
                        </div>
                    ))} 
                </Slide>
                  
            </div>
                
                  {/* <OwlCarousel 
                      className='owl-theme' 
                      loop margin={1} 
                      autoplay="true"
                      items={4} 
                      autoplayTimeout={900} 
                      
                      nav="true">
                      <div class='item'>
                          <div className='overlayDiv'></div>
                          <img src={nft5} className="nft-images"/>
                      </div>
                      <div class='item'>
                        <div className='overlayDiv'></div>
                          <img src={nft2} className="nft-images"/>
                      </div>
                      <div class='item'>
                          <div className='overlayDiv'></div>
                          <img src={nft3} className="nft-images"/>
                      </div>
                      <div class='item'>
                          <div className='overlayDiv'></div>
                          <img src={nft6} className="nft-images" />
                      </div>
                      <div class='item'>
                         <div className='overlayDiv'></div>
                          <img src={nft1} className="nft-images" />
                      </div>
                      <div class='item'>
                        <div className='overlayDiv'></div>
                          <img src={nft4} className="nft-images" />
                      </div>
                  
                  </OwlCarousel> */}
                  
              </div>
                <div className="aboutus-Text">
                    {/* {_renderImage()} */}
                    <p>
                        {/* Squirreling Squirrels "SS" is an NFT collection of 6,600 fully hand drawn squirrels. <span>Two species of squirrels:</span> 1,600 ice age squirrels and 5,000 current age squirrels. Rarity can be found in 200 plus hand drawn traits, one of a kind squirrels (characters based from our storyline), in addition to traits such as robot, gold, diamond and many more; All squirreling on the Ethereum Blockchain. It has been a few years after the last ice age and the squirrels are currently living in joy and peace in their new homeland. <span>They are fun, active, curious and sometimes weird;</span> THEY ARE NUT BEYOND NUTS! */}
                        Squirreling Squirrels "SS" is an NFT collection of 6,600 fully hand-drawn squirrels. Two species of squirrels: 1,600 ice age squirrels and 5,000 current age squirrels; All squirreling on the Ethereum Blockchain. Rarity can be found in 200 plus hand-drawn traits, one of a kind squirrels (characters based from our storyline). Traits can be found in different forms such as robot, gold, diamond, and more. It has been a few years after the last ice age, and the squirrels are currently living in joy and peace in their new homeland. They are fun, active, curious, and sometimes weird; THEY ARE NUT BEYOND NUTS!
                    </p>
                    <p>
                        {/* Join us on our adventure in creating a positive community. Our journey will be full of surprises such as acquiring land on Sandbox, where we will base our community & game on along with many more projects, events and airdrops! <span>All this to help shape the future of the Squirreling Squirrels!</span> */}
                        Join us on our adventure in creating a positive community. Our journey will be full of surprises, such as acquiring land on Sandbox, where we will base our community & game, along with many more projects, events, and airdrops! All this to help shape the future of the Squirreling Squirrels!
                    </p>

                   
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