import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';
import "./item.css";

class Item extends Component {
    state = {  }

    render() { 
        return (
            <div className="item">
                <img src="http://picsum.photos/200" alt="Product"></img>

                <h4>Title of Product</h4>

                <div className="prices">
                    <h5>$ Total</h5>
                    <h6>$ Price</h6>

                </div>
                <div >
                    <QuantityPicker></QuantityPicker>

                    <button  className="btn btn-sm btn-primary btn-add">Add</button>
                </div>
                
            </div>
          );
    }
}
 
export default Item;