import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.info.name
        };
    }

    render() {
        return (
            <div className="item">
                {this.state.name}
            </div>
        );
    }
}

export default Item;