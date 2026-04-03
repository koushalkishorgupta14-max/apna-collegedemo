import React from 'react';

export default function Product(props) {
  return (
    <div className="row mt-3">
      
      <div className="col-5">
        <h4>
          {props.product.name}
          <span className="badge bg-secondary ms-2">
            ₹{props.product.price}
          </span>
        </h4>
      </div>

      <div className="col-3">
        <div className="btn-group">

          {/* ❌ Decrement */}
          <button
            className="btn btn-danger"
            onClick={() => props.decrementQuantity(props.index)}
          >
            -
          </button>

          {/* Quantity */}
          <button className="btn btn-warning">
            {props.product.quantity}
          </button>

          {/* ✅ Increment */}
          <button
            className="btn btn-success"
            onClick={() => props.incrementQuantity(props.index)}
          >
            +
          </button>

        </div>
    
      </div>

      <div className="col-2">
        ₹{props.product.price * props.product.quantity}
      </div>
     <button className ="col-2 btn btn-danger" 
     onClick={()=>
     {
      props.removeItem(props.index)}}>
      Remove
     </button>
    </div>
  )
}
