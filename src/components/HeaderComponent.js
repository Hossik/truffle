import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
      super(props);

      this.state = {
        isNavOpen: false,
        isModalOpen:false
      };
      this.toggleNav = this.toggleNav.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
      this.handleLogin = this.handleLogin.bind(this);

    }

    toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }

    toggleModal(){
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }
    handleLogin(event){
      this.toggleModal();
      alert("Username:" + this.username.value + "Password: " + this.password.value + "Remember: " + this.remember.checked);
      event.preventDefault();
    }
render() {
return(
    <React.Fragment>
        <Navbar dark  expand="md">
            <div className="container">
                <NavbarToggler  onClick={this.toggleNav} float-xs-right />
                <img id="brand"src='https://raw.githubusercontent.com/Hossik/truffle/master/public/assets/icon.jpeg'  alt='Roja' />
                <Collapse isOpen={this.state.isNavOpen} float-xs-right navbar>
                    <Nav navbar>
                    <NavItem>
                      <NavLink className="nav-link title"  to='/home'><span className="fa fa-home fa-lg"></span> خانه </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link title" to='/aboutus'><span className="fa fa-info fa-lg"></span> درباره من</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link title"  to='/menu'><span className="fa fa-list fa-lg"></span> منو</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link title" to='/contactus'><span className="fa fa-address-card fa-lg"></span>  تماس و سفارش 
                      </NavLink>
                    </NavItem>
                    </Nav>
                    
                </Collapse>
            </div>
        </Navbar>
        <Jumbotron>
            <div className="container title">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Gemini Truffle</h1>
                        <p>تولید کننده شیرینی های خانگی 
دست ساز تهیه شده از مواد تازه و طعم دهنده های
   طبیعی بدون هرگونه مواد نگهدارنده 
,سالم و خوشمزه 
!</p>
                    </div>
                </div>
            </div>
        </Jumbotron>
         
    </React.Fragment>
    );
}
}
export default Header;