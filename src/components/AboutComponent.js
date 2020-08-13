import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';



function RenderLeader({leader}){
  return(
      <Media>
        <Media left middle>
          <Media object src={baseUrl +leader.image} alt={leader.name} />
        </Media>
        <Media body className="ml-5">
          <Media heading>{leader.name}</Media>
          <p>{leader.designation}</p>
          <p>{leader.description}</p>
        </Media>
      </Media>
  )
}



function About(props) {

const leaders = props.leaders.map((leader) => {
return (
  <div key={leader.id} className="col-12 mt-5">
    <RenderLeader leader={leader} />
    </div>
);
});


return(
<div className="container">
    <div className="row ">
        <Breadcrumb >
            <BreadcrumbItem><Link to="/home"> خانه</Link></BreadcrumbItem>
            <BreadcrumbItem active> درباره من</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12 title">
            <h3> درباره من</h3>
            <hr />
        </div>
    </div>
    <div className="row row-content title">
        <div className="col-12 col-md-6">
            <h2>تاریخچه</h2>
            <p>
از سال ۱۳۹۸ شروع به تولید
 ترافل های کیکی در انواع و طعم های مختلف کردیم.</p>
        </div>
        
        <div className="col-12">
            <Card>
                <CardBody className="bg-faded">
                    <blockquote className="blockquote">
                        <p className="mb-0">زندگی با ترافل های کیکی خوشمزه تر می شود
</p>
                        
                    </blockquote>
                </CardBody>
            </Card>
        </div>
    </div>
    <div className="row row-content title">
        <div className="col-12">
            <h2>لیدر مجموعه</h2>
        </div>
        <div className="col-12 ">
            <Media list>
                {leaders}
            </Media>
        </div>
    </div>
</div>
);
}

export default About;
