import Button from '@restart/ui/esm/Button';
import '../../../assets/css/Hero/hero.css'
import banner from '../../../assets/images/nft.png';
import path from '../../../assets/images/Path.png'
import Typewriter from 'typewriter-effect';
import logo from '../../../assets/images/logo_new.png'
const Index = ()=>{
    return(
        <div className="hero">
          
          <div className="heroText">
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('We are building an immersive & inclusive digital world - a Squirrel community on Sandbox, games, shops, art galleries, parties & adventures')
                        .callFunction(() => {
                            
                        })
                        .pauseFor(10)
                        .deleteChars(10)
                        .typeString('<strong>adventures.</strong>')
                        .callFunction(() => {
                            
                        })
                        .start();
                        
                    }}
                />
          </div>
          <div className="heroLogo">
              <img src={logo}/>
          </div>

        </div>
    )
}

export default Index;