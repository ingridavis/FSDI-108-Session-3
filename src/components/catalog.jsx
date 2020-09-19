import React, { Component } from 'react';

import ItemService from "../services/itemService";
import Item from './item';


class Catalog extends Component {


    state = { 
        items: [],
     };
    render() { 
        return ( 
            <div className="catalog-page">
                <h2>Grocery Inventory</h2>
                <div className="categories"></div>
                <div className="products">
                    {this.state.items.map((i)=>(
                    <Item key={i.id} product={i}></Item>)) }
                </div>
            </div>
         );
    }
    componentDidMount(){
        // perfect place to get data from server/DB/ Ajax call
        let service = new ItemService();
        const data = service.getProducts();
        this.setState({items:data});

        
    }
}


 
export default Catalog;