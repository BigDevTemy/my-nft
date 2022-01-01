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


    const _handleOpen =(event)=>{
        switch (event) {
            case 'event1':
                setOpenEvent1(!isOpenEvent1)
                setOpenEvent2(false)
                setOpenEvent3(false)
                setOpenEvent4(false)
                break;
            case 'event2':
                setOpenEvent2(!isOpenEvent2)
                setOpenEvent1(false)
                setOpenEvent3(false)
                setOpenEvent4(false)
                break;
            case 'event3':
                setOpenEvent3(!isOpenEvent3)
                setOpenEvent2(false)
                setOpenEvent1(false)
                setOpenEvent4(false)
                break;
            case 'event4':
                setOpenEvent4(!isOpenEvent4)
                setOpenEvent2(false)
                setOpenEvent3(false)
                setOpenEvent1(false)
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
                    <h2>FREQUENTLY ASKED<br/>
                        <span>
                             QUESTIONS
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
                        1 &nbsp;	What does SS mean?
                    </div>
                    <div className='faq-icon'> 
                    {isOpenEvent1 ? <MdArrowDropUp size={25} color='#fff' onClick={()=>{_handleOpen('event1')}}/>:<RiArrowDropDownFill size={25} color='#fff' onClick={()=>{_handleOpen('event1')}}/> }
                    </div>
                    <div>
                        {isOpenEvent1 && 
                            <div className='faq-answer'>
                                    SS means Squireling Squirrels, which is the name of our project
                            </div> 
                        }
                    </div>
                    
                </div>
                <div className='faq-question'>
                    <div className='faq-title' onClick={()=>{_handleOpen('event2')}}>  
                        2 &nbsp;	What is NFT?
                    </div>
                    <div className='faq-icon'> 
                    {isOpenEvent2 ? <MdArrowDropUp size={25} color='#fff' onClick={()=>{_handleOpen('event2')}}/>:<RiArrowDropDownFill size={25} color='#fff' onClick={()=>{_handleOpen('event2')}}/> }
                    </div>
                    <div>
                        {isOpenEvent2 && 
                            <div className='faq-answer'>
                                  An NFT is a ‘non fungible token’, a unique digital asset, that can be verified on the blockchain.
                            </div> 
                        }
                    </div>
                    
                </div>

                <div className='faq-question'>
                    <div className='faq-title' onClick={()=>{_handleOpen('event3')}}>  
                        3 &nbsp;	What is SS build on?
                    </div>
                    <div className='faq-icon'> 
                        {isOpenEvent3 ? <MdArrowDropUp size={25} color='#fff' onClick={()=>{_handleOpen('event3')}}/>:<RiArrowDropDownFill size={25} color='#fff' onClick={()=>{_handleOpen('event3')}}/> }
                    </div>
                    <div>
                        {isOpenEvent3 && 
                            <div className='faq-answer'>
                                    We build SS to live on the Ethereum Blockchain and hosted on IPFS
                            </div> 
                        }
                    </div>
                    
                </div>
                <div className='faq-question'>
                    <div className='faq-title' onClick={()=>{_handleOpen('event4')}}>  
                    4	&nbsp; Pre sale and public sale date?
                    </div>
                    <div className='faq-icon'> 
                    {isOpenEvent4 ? <MdArrowDropUp size={25} color='#fff' onClick={()=>{_handleOpen('event4')}}/>:<RiArrowDropDownFill size={25} color='#fff' onClick={()=>{_handleOpen('event4')}}/> }
                    </div>
                    <div>
                        {isOpenEvent4&& 
                            <div className='faq-answer'>
                                   Pre sale date is 22 Jan 2022
                            </div> 
                        }
                    </div>
                    
                </div>


                
    
            </div>
           
        </div>
    )
}

export default Index;