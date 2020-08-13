import  React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';


 
 class Contact extends Component {

  
  
  handleSubmit(values){
    console.log("Current State is" + JSON.stringify(values));
    alert("Current State is" + JSON.stringify(values));
  }

  render(){
    
    return(
    <div className="container title">
    <div className="row">
        <Breadcrumb>
            <BreadcrumbItem><Link to="/home">خانه</Link></BreadcrumbItem>
            <BreadcrumbItem active>تماس</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12 title">
            <h3> تماس و سفارش</h3>
            <hr />
        </div>
    </div>
    <div className="row row-content">
      <div className="col-12 title">
      </div>
      <div className="col-12 col-sm-7 offset-sm-1 title">
        <h2 className="col-sm-nowrap">لطفا سفارش خود را دو روز قبل اعلام کنید</h2>
        <h5>آدرس</h5>
        <address>
        ایران<br />
        تهران<br />
       
        <i className="fa fa-phone "></i>: 093-71687588  <br />
        <i className="fa fa-envelope"></i>: <a href="mailto:roja.haghighatz@gmail.com">roja.haghighatz@gmail.com</a>
        </address>
      </div>
      
      <div className=" align-self-end ml-auto ">
          <div className="btn-group  align-self-end ml-auto" role="group">
          <ExternalLink href="tel:+989371687588" ><button className="btn btn-info text-nowrap btncon" ><i className="fa fa-phone"></i> تلفن</button></ExternalLink>
          <ExternalLink href='https://telegram.im/@geminisweet' ><button className="btn btn-primary text-nowrap btncon" ><i className=" fa fa-telegram"></i> تلگرام</button></ExternalLink>
          <ExternalLink href="mailto:roja.haghighatz@gmail.com" ><button className="btn btn-success text-nowrap btncon" ><i className="fa fa-envelope-o"></i> ایمیل</button></ExternalLink>
          <ExternalLink href="https://www.instagram.com/sweet.geminitruffle" ><button className="btn btn-danger text-nowrap btncon" ><i className="fa fa-instagram"></i> اینستگرام</button></ExternalLink>
          </div>
        </div>
    </div>
    
</div>
  );
  }
}

export default Contact;
