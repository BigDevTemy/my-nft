import '../../assets/css/Footer/footer.css';
import {FaTwitter} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {BsGoogle} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import logo from '../../assets/images/logo_new.png';
import {AiFillHome} from 'react-icons/ai';
import {AiFillMail} from 'react-icons/ai';
import {BsFillTelephoneForwardFill} from 'react-icons/bs';
import {BsFillPrinterFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
const Index = ()=>{
    return(
        <div className="footer">
                 <footer className="text-center text-lg-start bg-dark text-muted">
                   
                   
                   
                    <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                        © 2021 Copyright:
                        <a className="text-reset fw-bold" href="#!">Squirreling Squirrels</a>
                    </div>
                    
                    </footer>
                    
        </div>
       
    )
}

export default Index;