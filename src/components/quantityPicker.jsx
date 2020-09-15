import React, { Component } from 'react';

class QuantityPicker extends Component {
    state={ // read only attrtibute, change with setState
        quantity: 1,
       name: "Ingrid"
    };
    
    render() { 
        
        return ( //return statement must only have one child
            <div>
                <button onClick={this.increase} className="btn btn-sm btn-info">+</button>  
                <label>{this.state.quantity} </label> 

                <button 
                onClick={this.decrease} 
                disabled={this.state.quantity === 0}
                className="btn btn-sm btn-info">
                -</button>

            </div>
         );
    }

    increase = () => { //you need an arrow function to use "this"
        console.log("increasing the value");
        this.setState({ quantity: this.state.quantity +1 });
    };

    decrease = ()=> {
        let newVal = this.state.quantity -1;
        if(newVal >=0){
            this.setState({ quantity: newVal });
        }
        console.log("decreasing the value")
    }
}
 
export default QuantityPicker;