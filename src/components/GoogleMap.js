import React, { Component } from "react";
import $script from 'scriptjs';
import "./GoogleMap.css";

// const google = window.google;

class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            map: {}
        };
        this.mapRef = React.createRef();
        this.createMap = this.createMap.bind(this);
    }

    componentDidMount(){
        $script('https://maps.googleapis.com/maps/api/js?key=AIzaSyBgZLanx1F3uxF339fjCxb0gf647ZLVVoU', this.createMap)
    }

    createMap = () => {
        var tempMap = new window.google.maps.Map(this.mapRef.current);
        tempMap.setCenter({ lat: -34.397, lng: 150.644 });
        tempMap.setZoom(8);
        this.setState({
            map: tempMap
        })
    }

    render() {
        return (
            <div className="map" ref={this.mapRef}>

            </div>
        );
    }
}

export default GoogleMap;