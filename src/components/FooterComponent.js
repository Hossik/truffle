import React from 'react';
import {Link} from 'react-router-dom'
import { ExternalLink } from 'react-external-link';

function Footer(props){
  return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4 offset-1 col-sm-2 title">
                    
                    <ul className="list-unstyled ">
                        <li><Link to="/home">خانه</Link></li>
                        <li><Link to="/aboutus"> درباره من</Link></li>
                        <li><Link to="/menu">منو</Link></li>
                        <li><Link to="/contactus">تماس</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5 title">
                <h5>آدرس</h5>
                <address>
                ایران<br />
                تهران<br />
            
                <i className="fa fa-phone "></i>: 093-71687588  <br />
                <i className="fa fa-envelope"></i>: <a href="mailto:roja.haghighatz@gmail.com">roja.haghighatz@gmail.com</a>
                </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                    <div className="btn-group" role="group">
          <ExternalLink href="tel:+989371687588" ><button className="btn btn-info" ><i className="fa fa-phone"></i> تلفن</button></ExternalLink>
          <ExternalLink href='https://telegram.im/@geminisweet' ><button className="btn btn-primary" ><i className=" fa fa-telegram"></i> تلگرام</button></ExternalLink>
          <ExternalLink href="mailto:roja.haghighatz@gmail.com" ><button className="btn btn-success" ><i className="fa fa-envelope-o"></i> ایمیل</button></ExternalLink>
          </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto notitle">
                    <p>Copyright 2020 Gemini Truffle © 
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}


export default Footer
