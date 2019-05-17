import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.info.name,
            coords: props.info.coords
        };
        this.itemClick = this.itemClick.bind(this);
    }

    itemClick = (e) => {
        e.preventDefault();
        this.props.clickChangeCenter(this.state.coords);
        console.log(this.state.name);
    }

    render() {
        return (
            <div onClick={this.itemClick} className="item">
                {this.state.name}
            </div>
        );
    }
}

export default Item;