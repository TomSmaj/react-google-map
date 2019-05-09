import React, { Component } from "react";
import Item from './Item';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.createItems = this.createItems.bind(this);
    }

    createItems = (item) => {
        return(<Item info={item}/>)
    }

    render() {
        return (
            <div className="items">
                {this.props.info.map(item => this.createItems(item))}
            </div>
        );
    }
}

export default Items;