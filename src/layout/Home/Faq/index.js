import '../../../assets/css/Faq/faq.css'
import Path from '../../../assets/images/Path.png'
import logo from '../../../assets/images/logo_100.png'

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapsible from 'react-collapsible';
import { useState } from 'react'
import {RiArrowDropDownFill} from 'react-icons/ri';
import {MdArrowDropUp} from 'react-icons/md'
const Index=()=>{
    const [isOpenEvent1, setOpenEvent1] = useState(false);
    const [isOpenEvent2, setOpenEvent2] = useState(false);
    const [isOpenEvent3, setOpenEvent3] = useState(false);
    const [isOpenEvent4, setOpenEvent4] = useState(false);
    const [isOpenEvent5, setOpenEvent5] = useState(false);

    const _handleOpen =(event)=>{
        console.log(event)
        switch (event) {
            case 'event1':
                setOpenEvent1(!isOpenEvent1)
                setOpenEvent2(false)
                setOpenEvent3(false)
                setOpenEvent4(false)
                setOpenEvent5(false)
                break;
            case 'event2':
                setOpenEvent2(!isOpenEvent2)
                setOpenEvent1(false)
                setOpenEvent3(false)
                setOpenEvent4(false)
                setOpenEvent5(false)
                break;
            case 'event3':
                setOpenEvent3(!isOpenEvent3)
                setOpenEvent2(false)
                setOpenEvent1(false)
                setOpenEvent4(false)
                setOpenEvent5(false)
                break;
            case 'event4':
                setOpenEvent4(!isOpenEvent4)
                setOpenEvent2(false)
                setOpenEvent3(false)
                setOpenEvent1(false)
                setOpenEvent5(false)
                break;
            case 'event5':
                setOpenEvent5(!isOpenEvent5)
                setOpenEvent2(false)
                setOpenEvent3(false)
                setOpenEvent1(false)
                setOpenEvent4(false)
                break;
                
            default:
                break;
        }
    }

    return (
        <div className="faq" id="faq">
            {/* <div className="faq-title">
                <h1>Faq</h1>
                <small>You have questions, we have answers!</small>
            </div> */}
             <div className="title">
                <div className="logoArea">
                    <img src={logo}/>
                </div>  
                <div className="textTitle">
                    <h2><br/>
                        <span>
                             FAQ
                        </span>
                    </h2>
                </div>   
            </div>

            <div className="faq-resp">
                {/* <Accordion>
                    <Accordion.Item eventKey="0" >
                        <Accordion.Header>1. What does SS mean?</Accordion.Header>
                        <Accordion.Body style={{textAlign:'left'}}>
                        SS means Squireling Squirrels, which is the name of our project.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2. What is NFT?</Accordion.Header>
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
                </Accordion> */}

                {/* <Collapsible trigger="Start here">
                    <p>
                        This is the collapsible content. It can be any element or React
                        component you like.
                    </p>
                    <p>
                        It can even be another Collapsible component. Check out the next
                        section!
                    </p>
                </Collapsible> */}

                <div className='faq-question'>
                    <div className='faq-title' onClick={()=>{_handleOpen('event1')}}>  
                        1. &nbsp;	I am new to NFT’s where do I start?
                    </div>
                    <div className='faq-icon'> 
                    {isOpenEvent1 ? <MdArrowDropUp size={25} color='#fff' onClick={()=>{_handleOpen('event1')}}/>:<RiArrowDropDownFill size={25} color='#fff' onClick={()=>{_handleOpen('event1')}}/> }
                    </div>
                    <div>
                        {isOpenEvent1 && 
                            <div className='faq-answer'>
                                   <p>Welcome to the wild west of Web3! There is so much to write but it has been explained by great journalists around the globe.</p>
                                   <p>
                                   The following links can give you everything you want to know and more. As you read, remember; the Squirreling Squirrels project is a series of NFT’s, we are forming a community with the goal of creating a new positive impact to the NFT universe both virtually and physically. We are incredibly excited for you to join us in the process.
                                   </p>
                                   <p>
                                    <a href="https://ethereum.org/en/nft/" target="_blank"><span>What is an NFT? </span></a> / <a href='https://opensea.io/blog/guides/non-fungible-tokens/' target="_blank"><span>The Non-Fungible Token Bible</span></a> - Your guides to everything that is an NFT 
                                    Don’t forget that you can always hop  on to our discord where our moderators will help in any additional insights!

                                   </p>
                            </div> 
                        }
                    </div>
                    
                </div>
                <div className='faq-question'>
                    <div className='faq-title' onClick={()=>{_handleOpen('event2')}}>  
                        2. &nbsp;	What is Squirreling Squirrels?
                    </div>
                    <div className='faq-icon'> 
                    {isOpenEvent2 ? <MdArrowDropUp size={25} color='#fff' onClick={()=>{_handleOpen('event2')}}/>:<RiArrowDropDownFill size={25} color='#fff' onClick={()=>{_handleOpen('event2')}}/> }
                    </div>
                    <div>
                        {isOpenEvent2 && 
                            <div className='faq-answer'>
                                  <p>Squirreling Squirrels "SS" is a 5,500 collection of 100% completely HAND DRAWN SQUIRRELS.</p>
                                  <p>Two species of squirrels: 1000 ice age squirrels and 4500 current age Squirrels, the ice age squirrels are scarce and rare. Rarity can be found in 200 plus hand drawn traits.</p>
                                  <p>It has been a few years after the last ice age and the Squirrels are now living in joy and peace in North America. They are fun, active, curious, and sometimes weird; THEY ARE NUT BEYOND NUTS!</p>
                                 <p>Join us on our adventure in creating an active, positive community. Our journey will be full of surprises such as acquiring a land on sandbox, where we will base our community & game on, along with many more projects, events, and giveaways! So, make sure you join our Discord!</p>
                            </div> 
                        }
                    </div>
                    
                </div>

                <div className='faq-question'>
                    <div className='faq-title' onClick={()=>{_handleOpen('event3')}}>  
                        3. &nbsp;	When is the launch date? 
                    </div>
                    <div className='faq-icon'> 
                        {isOpenEvent3 ? <MdArrowDropUp size={25} color='#fff' onClick={()=>{_handleOpen('event3')}}/>:<RiArrowDropDownFill size={25} color='#fff' onClick={()=>{_handleOpen('event3')}}/> }
                    </div>
                    <div>
                        {isOpenEvent3 && 
                            <div className='faq-answer'>
                                    <p>Squirreling Squirrels launch date is still TBA. The pre-launch will be available to all whitelisted users 24 hours before launch. Make sure to join our Discord channel to always be up to date!</p>
                            </div> 
                        }
                    </div>
                    
                </div>
                <div className='faq-question'>
                    <div className='faq-title' onClick={()=>{_handleOpen('event4')}}>  
                    4.	&nbsp; How much will it cost to mint a Squirreling Squirrel NFT?
                    </div>
                    <div className='faq-icon'> 
                    {isOpenEvent4 ? <MdArrowDropUp size={25} color='#fff' onClick={()=>{_handleOpen('event4')}}/>:<RiArrowDropDownFill size={25} color='#fff' onClick={()=>{_handleOpen('event4')}}/> }
                    </div>
                    <div>
                        {isOpenEvent4&& 
                            <div className='faq-answer'>
                                  <p> Squirreling Squirrels prices are to be announced. Pre-Sale and Public Sale prices will differ.</p>
                            </div> 
                        }
                    </div>
                    
                </div>
                
                <div className='faq-question'>
                    <div className='faq-title' onClick={()=>{_handleOpen('event5')}}>  
                    5.	&nbsp; How many Squirreling Squirrels NFT’s will there be?
                    </div>
                    <div className='faq-icon'> 
                    {isOpenEvent4 ? <MdArrowDropUp size={25} color='#fff' onClick={()=>{_handleOpen('event5')}}/>:<RiArrowDropDownFill size={25} color='#fff' onClick={()=>{_handleOpen('event5')}}/> }
                    </div>
                    <div>
                        {isOpenEvent5&& 
                            <div className='faq-answer'>
                                  <p> Squirreling Squirrels will be comprised of 5,500unique NFT’s on the Ethereum Blockchain.</p>
                            </div> 
                        }
                    </div>
                    
                </div>



                
    
            </div>
           
        </div>
    )
}

export default Index;