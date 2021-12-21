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
                    11,000 to 20,000 thousand years ago, a squirrel community survived the ice age. Our hero Bailey became best friends with Rikky, the reindeer, after Bailey helped Rikky free himself from a tree as Bailey ground the tree branches with her rugged teeth! Since squirrels' front teeth never stop growing, Bailey was quick!
                    </p>
                   
                    <p>
                         Rikky returned the favor to Bailey by welcoming her and her community to his cave where they rested and got their warmth by staying close together. Years pass by throughout their time together before Bailey discovers the canal that will lead to the underground world, where the sun penetrates through the ice on top, awaiting its melting. Their community spent 9,000 years together in the underground world.

                    </p>
                    
                    <p>
                         Abas emerges as the first squirrel from the underground at the end of the ice age and travels the longest distance with his community until they reach their playing grounds; North America! Filled with trees, greenery, and a scene that communicates food can be found here; Thus, Abas settled with his initially small community until they grew to 5,500 squirrels. The squirrels survived through the intelligent search of their nuts; However, with a failure to recover 74% of the nuts they bury, the community can be called responsible for the oak forest regeneration. Squirrels' habits of their misplacement of nuts can be seen as our Squirreling Squirrels are environmental activists keeping our planet alive!
                    </p>
                    <p>
                    From the 5,500 squirrels, 1,000 squirrels are origins from the ice age; Survivors, heroes, and environmental activists!
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