import REACT from "react";

function Card(props) {
    return <div className="col-lg-3 col-md-6 mb-4">
    <div className="card h-100">
      <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
      <div className="card-body">
        <h4 className="card-title">
          <a href="#">{props.details.productName}</a>
        </h4>
        <h5>${props.details.price}</h5>
        <p className="card-text">{props.details.description}</p>
      </div>
      <div className="card-footer">
      <a href="#" class="btn btn-block btn-primary text-uppercase" onClick={() => props.handleBtnClick(props.details.productName)}>Button</a>
      </div>
    </div>
  </div>
  
}

export default Card;