import { useEffect, useState } from 'react'
import '../../../assets/css/Story/story.css'
import character from '../../../assets/images/character.png'
import characterII from '../../../assets/images/character-2.png'
import characterIII from '../../../assets/images/character-3.png'
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
                return <img src={character}/>
                break;
            case 1:
                return <img src={characterII}/>
                break;
            case 2:
                return <img src={characterIII}/>
                break;
            default:
                return <img src={character}/>
        }
    }
    return(
        <div className="story" id="story">
            <div className="story-title">
              <h1>  Story</h1>
              <small><i>Once upon a time..</i></small>
            </div>

            <div className="story-content">
            <div className="mystoryImg">
                    {_renderImage()}
               </div>
               <div className="mystory">
                <p>
                    An ice age squirrel community that survived the last ice age phase from 11,000 to 20,000 year ago. The ice age hero named “Sandy”, was the best friend of a caribou called “Rikky”. Sandy and Rikky got friends after Sandy helped Rikky to free himself from a tree by grinding the tree branches with her theeth.
                </p>
                <p>
                “Rikky” helped Sandy and her community to keep their body temp high enough to survive, while they used to stay very close to caribou’s body, inside a cave where caribou used to live. 
                </p>
                <p>
                They lived together for few years, until Sandy discovered a canal inside the cave that lead to an under ground world, where sun can penetrate after reflection through ice from the top, they spend all together 9,000 years.
                </p>
                <p>
                Coco, the first squirrel to leave the underground world at the end of the ice age, travelled long distances with some of his friends to reach area in north America full of trees where he started his life with a small community, and build this community of 5,500Squirrels.
                </p>
               </div>
               
            </div>
        </div>
    )
}

export default Index;