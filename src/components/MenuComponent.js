import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderMenuItem ({dish}) {
return (
    <Card className="title">
      <Link to={`/menu/${dish.id}`} >
        <CardImg width="100%" style={{height:'400px'}}src={baseUrl + dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle style={{color:"black", background:"yellow"}}>{dish.name}
          </CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
);
}

const Menu = (props) =>{
  const menu = props.dishes.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1" >
        <RenderMenuItem dish={dish} />
      </div>
    )
  });

  if (props.dishes.isLoading){
    return(
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  else if (props.dishes.errMess) {
    return( 
      <div className="container">
        <div className="row">
          <h4>{props.dishes.errMess}</h4>
        </div>
      </div>
    );
  }
  else
    return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">خانه</Link></BreadcrumbItem>
          <BreadcrumbItem active>منو</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12 title">
          <h3>منو</h3>
          <hr />
        </div>
      </div>
      <div className="row">
          {menu}
      </div>
    </div>
    );
}


export default Menu;
