import '../../../assets/css/OurTeam/ourteam.css'
import Path from '../../../assets/images/Path-2.png'
import team1 from '../../../assets/images/our-team/nft-1.png'
import team2 from '../../../assets/images/our-team/nft-2.png'
import team3 from '../../../assets/images/our-team/nft-3.png'
import team4 from '../../../assets/images/our-team/nft-4.png'
import Anthony from '../../../assets/images/slider/4.png'
import Marilyn from '../../../assets/images/slider/2.png'
import PathDown from '../../../assets/images/Path.png'
const Index=()=>{
    return (
        <div className="ourteam" id="team">
              <div className="heroOverlay">

              <div className="our-team-title">
                    <h1>Our Team</h1>
                    <small>Trust, diversity, friendship, ambition. We are more than a team. </small>
                </div>
                
                <div className="team-pic-div">
                
                    <div className="team-1">
                        <img src={Marilyn} className="char-img"/>
                        <div className="jobTitle">
                            <span className="official-title">CEO</span>
                            <span className="officer-name">Clark</span>
                            <span className="job-description">Design & Operation</span>
                        </div>
                    </div>
                    <div className="team-2">
                        <img src={team1} className="char-img"/>
                        <div className="jobTitle">
                                <span className="official-title">CMO</span>
                                <span className="officer-name">Kaylee</span>
                                <span className="job-description">Community & Marketing</span>
                        </div>
                    </div>
                    <div className="team-3">
                        <img src={Anthony} className="char-img"/>
                        <div className="jobTitle">
                            <span className="official-title">CTO</span>
                            <span className="officer-name">Jack</span>
                            <span className="job-description">Technology & Blockchain</span>
                        </div>

                    </div>
                    {/* <div className="team-4">
                        <img src={Marilyn}/>
                        <div className="jobTitle">
                            <span className="official-title">Software Engineer</span>
                            <span className="officer-name">Marilyn</span>
                            <span className="job-description">Smart Contract/Developer</span>
                        </div>

                    </div> */}
                     <div className="team-5">
                        <img src={team1} className="char-img"/>
                        <div className="jobTitle">
                            <span className="official-title">Software Engineer</span>
                            <span className="officer-name">Marilyn</span>
                            <span className="job-description">Smart Contract/Developer</span>
                        </div>

                    </div>
                    <div className="team-5">
                        <img src={team1} className="char-img"/>
                        <div className="jobTitle">
                            <span className="official-title">Architect/Artist</span>
                            <span className="officer-name">Chris</span>
                            <span className="job-description">Designer</span>
                        </div>

                    </div>
                    <div className="team-6">
                        <img src={Anthony} className="char-img"/>
                        <div className="jobTitle">
                            <span className="official-title">Game Marker</span>
                            <span className="officer-name">Anthony</span>
                            <span className="job-description">Architect/Artist</span>
                        </div>

                    </div>

                    
                    
                    
                </div>
              </div>
               
               
               

                
               
               
        </div>
    )
}

export default Index;