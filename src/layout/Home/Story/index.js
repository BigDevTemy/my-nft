import { useEffect, useState } from 'react'
import '../../../assets/css/Story/story.css'
import character from '../../../assets/images/storypic/iceage.png'
import characterII from '../../../assets/images/storypic/icecave.png'
import characterIII from '../../../assets/images/storypic/partypic.png'
const Index = ()=>{
    const [animateImg, setanimateImg] = useState(0)
    
    useEffect(()=>{
        const intervalId = setInterval(changeImage,5000)
        return () => clearInterval(intervalId);
    },[animateImg])
    
    const changeImage=()=>{
        if(animateImg === 2){
            setanimateImg(0)
            
        }
        else{
            setanimateImg(animateImg + 1)
        }
        
    }
    // setInterval(changeImage(),10000)

    

    const _renderImage=()=>{
        
        switch(animateImg){
            
            case 0:
                return <img src={character} className="story_pic"/>
                break;
            case 1:
                return <img src={characterII} className="story_pic"/>
                break;
            case 2:
                return <img src={characterIII} className="story_pic"/>
                break;
            default:
                return <img src={character} className="story_pic"/>
        }
    }
    return(
        <div className="story" id="story">
            <div className="heroOverlay">

            <div className="story-title">
              <h1>  Story</h1>
              <small><i>Once upon a time..</i></small>
            </div>
            <div className="story-content">
               
               <div className="mystory">
                    <p>
                    Squirreling Squirrels "SS" is a 5,500 collection of 100% completely HAND DRAWN SQUIRRELS.
                    Two species of squirrels: 1000 ice age squirrels and 4500 current age Squirrels, the ice age squirrels are scarce and rare. Rarity can be found in 200 plus hand drawn traits, like robot, gold & diamond Squirrels and others; All Squirreling on the Ethereum blockchain.
                    It is been a few years after the last ice age and the  Squirrels living in joy and peace in North America. They are fun, active, curious and sometimes weird; THEY ARE NUT BEYOND NUTS!

                    </p>
                    <p>
                    Join us on our adventure in creating a positive community. Our journey will be full of surprises such as acquiring a land on sandbox, where we will base our community & game on along with many more projects and events!
                    All this to help shape the future of the Squirreling Squirrels!

                    </p>
                    <p>
                    Join us on our adventure in creating a positive community. Our journey will be full of surprises such as acquiring a land on sandbox, where we will base our community & game on along with many more projects and events!
                    All this to help shape the future of the Squirreling Squirrels!

                    </p>
                    <p>
                     Rikky returned the favor to Bailey by welcoming her and her community to his cave where they rested and got their warmth by staying close together. Years pass by throughout their time together before Bailey discovers the canal that will lead to the underground world, where the sun penetrates through the ice on top, awaiting its melting. Their community spent 9,000 years together in the underground world.
                    </p>
                    <p>
                    Abas emerges as the first squirrel from the underground at the end of the ice age and travels the longest distance with his community until they reach their playing grounds; North America! Filled with trees, greenery, and a scene that communicates food can be found here; Thus, Abas settled with his initially small community until they grew to 5,500 squirrels. The squirrels survived through the intelligent search of their nuts; However, with a failure to recover 74% of the nuts they bury, the community can be called responsible for the oak forest regeneration. Squirrels' habits 
                    </p>
               </div>
               <div className="mystoryImg">
                    {_renderImage()}
               </div>
               
            </div>

            
            </div>
            
        </div>
    )
}

export default Index;