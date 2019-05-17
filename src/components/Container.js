import React, { Component } from "react";
import Items from './Items';
import Item from './Item';
import GoogleMap from './GoogleMap';
import items from '../data/items';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCenter: { lat: 30.296238, lng: -97.742591 }
        };
        this.createItems = this.createItems.bind(this);
        this.changeCenter = this.changeCenter.bind(this);
    }

    
    changeCenter = (center) => {
        this.setState({currentCenter: center})
    }

    createItems = (item) => {
        return(<Item clickChangeCenter={this.changeCenter} info={item}/>)
    }
    
    render() {
        return (
            <div className="container">
                <GoogleMap center={this.state.currentCenter} markers={items} />
                <div  className="items">
                    {items.map(item => this.createItems(item))}
                </div>
            </div>
        );
    }
}

export default Container;