import '../../../assets/css/Faq/faq.css'
import Path from '../../../assets/images/Path.png'
import { Accordion } from 'react-bootstrap'
const Index=()=>{
    return (
        <div className="faq" id="faq">
            <div className="faq-title">
                <h1>Faq</h1>
                <small>You have questions, we have answers!</small>
            </div>

            <div className="faq-resp">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header style={{fontWeight:'bold'}}>What does SS mean?</Accordion.Header>
                        <Accordion.Body style={{textAlign:'left'}}>
                        SS means Squireling Squirrels, which is the name of our project.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What is NFT?</Accordion.Header>
                        <Accordion.Body style={{textAlign:'left'}}>
                            An NFT is a ‘non fungible token’, a unique digital asset, that can be verified on the blockchain.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What is SS build on?</Accordion.Header>
                        <Accordion.Body style={{textAlign:'left'}}>
                        We build SS to live on the Ethereum Blockchain and hosted on IPFS.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Pre sale and public sale date?</Accordion.Header>
                        <Accordion.Body style={{textAlign:'left'}}>
                            <span>Pre sale date is 22 Jan 2022</span><br/>
                            <span>Public sale date is 23 Jan 2022</span>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
           
        </div>
    )
}

export default Index;