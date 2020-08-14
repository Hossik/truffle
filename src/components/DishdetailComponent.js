import React  from "react";
import {Card,CardImg ,CardText ,CardBody ,CardTitle ,Breadcrumb ,BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import  { Loading } from './LoadingComponent';
import {FadeTransform, Fade, Stagger} from 'react-animation-components'
import { baseUrl } from '../shared/baseUrl';





function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 h-100 m-1 title" >
      <FadeTransform in
          transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
          }}>
      <Card >
        <CardImg  style={{height:'400px'}} top src={baseUrl +dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
      </FadeTransform>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments != null)
    return (
      <div className="col-12 col-md-5 m1 title">
        <h4>مواد تشکیل دهنده</h4>
        <ul className="list-unstyled">
        <Stagger in>
          {comments.map((comment) => {
            return (
              <Fade in>
              <li key={comment.id}>
                <p>{comment.comment}</p>
                
              </li>
              </Fade>
            );
          })}
          </Stagger>
        </ul>
      </div>
    );
  else return <div></div>;
}
const Dishdetail = (props) => {
  if (props.isLoading){
    return(
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  else if (props.errMess) {
    return(
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  }
  else if (props.dish != null)
    return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">منو</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
      <div className="col-12 title">
        <h3>{props.dish.name}</h3>
        <hr />
      </div>
      </div>
      <div className="row">
        <RenderDish dish={props.dish} />
        <RenderComments comments={props.comments} 
          addComment={props.addComment}
          dishId={props.dish.id} />
      </div>
    </div>
    );
  else {
    return <div></div>;
  }
}

export default Dishdetail;
