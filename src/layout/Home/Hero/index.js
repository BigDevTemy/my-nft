import Button from '@restart/ui/esm/Button';
import '../../../assets/css/Hero/hero.css'
import banner from '../../../assets/images/nft.png';
import path from '../../../assets/images/Path.png'
import Typewriter from 'typewriter-effect';
const Index = ()=>{
    return(
        <div className="hero">
           <div className="heroOverlay">
            <div className="typewriter">
             {/* We are building an immersive & inclusive digital world - a Squirrel community on Sandbox, games, shops, art galleries, parties & adventures.     */}
             <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('We are building an immersive & inclusive digital world - a Squirrel community on Sandbox, games, shops, art galleries, parties & adventures')
                    .callFunction(() => {
                        console.log('String typed out!');
                    })
                    .pauseFor(500)
                    // .deleteChars(10)
                    // .deleteAll()
                    .callFunction(() => {
                        console.log('All strings were deleted');
                    })
                    .start();
                }}
                />
            </div> 
           </div>
           <img src={banner} className="herobanner"/>
           <div className="path">
                <img src={path} />
          </div>
          
         
            {/* <div className="mint">Mint</div> */}
        </div>
    )
}

export default Index;