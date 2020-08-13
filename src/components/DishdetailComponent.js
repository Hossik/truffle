import React ,{Component} from "react";
import {Card,CardImg ,CardText ,CardBody ,CardTitle ,Breadcrumb ,BreadcrumbItem , Button ,Modal ,ModalHeader , ModalBody,Label ,Col, Row} from "reactstrap";
import { Link } from "react-router-dom";
import  { Loading } from './LoadingComponent';
import {FadeTransform, Fade, Stagger} from 'react-animation-components'
import { baseUrl } from '../shared/baseUrl';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)

export class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen:false
    };
    

  }
  toggleModal= () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
  handleSubmit(values){
    this.toggleModal();
    this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
  }
  
  render() {
    
    return (
      <React.Fragment>
      <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span>Submit Comment</Button>
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
        <ModalBody>
        
        </ModalBody>
      </Modal>
      </React.Fragment>
    )
  }
}

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <FadeTransform in
          transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
          }}>
      <Card>
        <CardImg top src={baseUrl +dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
      </FadeTransform>
    </div>
  );
}

function RenderComments({ comments, addComment, dishId }) {
  if (comments != null)
    return (
      <div className="col-12 col-md-5 m1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
        <Stagger in>
          {comments.map((comment) => {
            return (
              <Fade in>
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author},{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
              </Fade>
            );
          })}
          </Stagger>
        </ul>
        <CommentForm dishId={dishId} addComment={addComment} />
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
