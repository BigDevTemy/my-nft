import '../../assets/css/Footer/footer.css';
import {FaTwitter} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {BsGoogle} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import logo from '../../assets/images/logo_white_new.png';
import {AiFillHome} from 'react-icons/ai';
import {AiFillMail} from 'react-icons/ai';
import {BsFillTelephoneForwardFill} from 'react-icons/bs';
import {BsFillPrinterFill} from 'react-icons/bs'
const Index = ()=>{
    return(
        <div className="footer">
                 <footer className="text-center text-lg-start bg-dark text-muted">
                   
                    <section
                        className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                    >
                        
                        <div className="me-5 d-none d-lg-block">
                        <span style={{color:'#fff'}}>Get connected with us on social networks:</span>
                        </div>
                        
                        <div>
                        <a href="" className="me-4 text-reset">
                            <FaFacebookF size={20}/>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <FaTwitter size={20}/>
                        </a>
                        <a href="" className="me-4 text-reset">
                        
                            <BsGoogle size={20}/>
                            
                        </a>
                        <a href="" className="me-4 text-reset">
                            <FiInstagram size={20}/>
                           
                        </a>
                        <a href="" className="me-4 text-reset">
                             <FaLinkedinIn size={20}/>
                        </a>
                        
                        </div>
                        
                    </section>
                    
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                      
                        <div className="row mt-3">
                            
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            
                            <h6 className="text-uppercase fw-bold mb-4">
                                <img src={logo}/>
                            </h6>
                            <p style={{color:'#fff'}}>
                            We are building an immersive & inclusive digital world - a Squirrel community on Sandbox, games, shops, art galleries, parties & adventures.
                            </p>
                            </div>
                            
                            
                            
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p className="useful-link">
                                <a href="#!" className="text-reset" style={{textDecoration:'none'}} >About Us</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset" style={{textDecoration:'none'}} >Story</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset" style={{textDecoration:'none'}} >Roadmap</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset" style={{textDecoration:'none'}} >Team</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset" style={{textDecoration:'none'}} >Next Project</a>
                            </p>
                            </div>
                            
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><AiFillHome size={15} style={{marginRight:10}}/>Lagos, Nigeria</p>
                            <p>
                                <AiFillMail size={15} style={{marginRight:10}}/>
                                info@example.com
                            </p>
                            <p><BsFillTelephoneForwardFill size={15} style={{marginRight:10}}/>+234 80 333 766 87</p>
                            <p><BsFillPrinterFill size={15}style={{marginRight:10}}/>+234 80 333 766 87</p>
                            </div>
                            
                        </div>
                        
                        </div>
                    </section>
                   
                    <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                        © 2021 Copyright:
                        <a className="text-reset fw-bold" href="#!">Squirreling Squirrels</a>
                    </div>
                    
                    </footer>
                    
        </div>
       
    )
}

export default Index;