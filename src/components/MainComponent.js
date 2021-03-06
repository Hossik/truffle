import React, { Component } from 'react';
import Home from './HomeComponent'
import Header from './HeaderComponent'
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Footer  from './FooterComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition }from 'react-transition-group'

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())}
})

class Main extends Component{


  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {

  const HomePage = () =>{
    return(
      <Home dish={this.props.promotions.filter((promo) => promo.featured)[1]}
      dishesLoading={this.props.dishes.isLoading}
      dishesErrMess={this.props.dishes.errMess}
      promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
      leader={this.props.leaders.filter((leader) => leader.featured)[0]}/>
    )
  }

  const DishWithId = ({match}) => {
    return(
      <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        isLoading={this.props.dishes.isLoading}
        errMess={this.props.dishes.errMess}
        comments={this.props.comments.filter((comment) => comment.dishId=== parseInt(match.params.dishId,10))}
        addComment={this.props.addComment}
      />
    );
  }
  return (
    <React.Fragment>
    <Header />
      <TransitionGroup>
      <CSSTransition key={this.props.location.pathname} classNames="page" timeout={300}>
        <Switch location={this.props.location}>
          <Route path="/home" component={HomePage} />
          <Route path="/Aboutus" component={() =><About leaders={this.props.leaders}/>} />
          <Route exact path="/menu" component={() =><Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path='/contactus' component={Contact} />
          <Redirect to="/home" />
        </Switch>
        </CSSTransition>
        </TransitionGroup>
      <Footer />
      </React.Fragment>
  );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
