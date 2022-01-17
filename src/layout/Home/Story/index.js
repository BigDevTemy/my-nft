import { useEffect, useState } from 'react'
import '../../../assets/css/Story/story.css'
import character from '../../../assets/images/storypic/iceage.png'
import characterII from '../../../assets/images/storypic/icecave.png'
import characterIII from '../../../assets/images/storypic/partypic.png'
import logo from '../../../assets/images/logo_100.png'
const Index = ()=>{
    const [animateImg, setanimateImg] = useState(0)
    
    useEffect(()=>{
        const intervalId = setInterval(changeImage,2000)
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
            <div className="SoleHeader">

                <div className='mylogo'>
                    <img src={logo}/>
                </div>
                <div className='myTitle'>
                    <h2>OUR</h2>
                    <span>STORY</span>
                </div>

            </div>

            
            <div className="story-content">
               
               <div className="mystory">
                    <p>
                        At the beginning of the last ice age, 11,000 to 20,000 thousand years ago, our squirrel hero Bailey became best friends with Rikky, the reindeer. Rikky was under a heap of trouble after getting his antlers stuck in a big old tree branch. Seconds before ricky was losing hope, Bailey came to the rescue where she quickly ground the branch with her rugged teeth!
                    </p>
                   
                    <p>
                    Rikky returned the favor to Bailey by welcoming her and her community to his cave where they rested and got their warmth by staying close together, which helped the squirrel community to survive the ice age phase. Years pass by throughout their time together before Bailey discovers the canal that will lead to the underground world, where the sun penetrates through the ice on top, awaiting its melting. Their community spent 9,000 years together in the underground world.

                    </p>
                    
                    <p>
                    Abas emerges as the first squirrel from the underground at the end of the ice age and travels the longest distance with his community until they reach their playing grounds; North America! Filled with trees, greenery, and all the food one can dream of. Thus, Abas settled with his initially small community until they grew to 6,600 squirrels. The squirrels survived through the intelligent search of their nuts; However, with a failure to recover 74% of the nuts they bury, the community can be called responsible for the oak forest regeneration.
                    </p>
                    
                   
               </div>
               <div className="mystoryImg">
                    {_renderImage()}
               </div>
               
            </div>

            
            </div>
            
        
    )
}

export default Index;