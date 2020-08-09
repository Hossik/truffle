import  React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Button,Label ,Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom';


 const required = (val) => val && val.length;
 const maxLength = (len) => (val) => !(val) || (val.length <= len)
 const minLength = (len) => (val) => (val) && (val.length >= len)
 const isNumber = (val) => !isNaN(Number(val));
 const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
 class Contact extends Component {

  
  
  handleSubmit(values){
    console.log("Current State is" + JSON.stringify(values));
    alert("Current State is" + JSON.stringify(values));
  }

  render(){
    
    return(
    <div className="container">
    <div className="row">
        <Breadcrumb>
            <BreadcrumbItem><Link to="/home">خانه</Link></BreadcrumbItem>
            <BreadcrumbItem active>تماس</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
            <h3>تماس</h3>
            <hr />
        </div>
    </div>
    <div className="row row-content">
      <div className="col-12">
      <h3>Location Information</h3>
      </div>
      <div className="col-12 col-sm-4 offset-sm-1">
        <h5>Our Address</h5>
        <address>
        121, Clear Water Bay Road<br />
        Clear Water Bay, Kowloon<br />
        HONG KONG<br />
        <i className="fa fa-phone"></i>: +852 1234 5678<br />
        <i className="fa fa-fax"></i>: +852 8765 4321<br />
        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
        </address>
      </div>
      
      <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <button className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> تلفن</button>
            <button className="btn btn-info"><i className="fa fa-skype"></i> Skype</button>
            <button className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</button>
          </div>
        </div>
    </div>
    
</div>
  );
  }
}

export default Contact;
