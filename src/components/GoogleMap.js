import React, { Component } from "react";
import $script from 'scriptjs';
import "./GoogleMap.css";

class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            map: {},
            markers: []
        };
        this.mapRef = React.createRef();
        this.createMap = this.createMap.bind(this);
        // this.createMarkers = this.createMarkers.bind(this);
    }

    componentDidMount(){
        $script('https://maps.googleapis.com/maps/api/js?key=AIzaSyBgZLanx1F3uxF339fjCxb0gf647ZLVVoU', this.createMap)
    }

    createMap = () => {
        this.setState({
            map: new window.google.maps.Map(this.mapRef.current)
        })
        this.state.map.setCenter({ lat: 30.2672, lng: -97.7431 });
        this.state.map.setZoom(13);
        
        var waterloo = {lat: 30.271849, lng: -97.754284};
        var antones = {lat: 30.296238, lng: -97.742591};
        var afs = {lat: 30.324586, lng: -97.708802};
        var arr = [waterloo, antones, afs];

        var tempArr;
        for(let i = 0; i < arr.length; i++){            
            tempArr = this.state.markers;
            tempArr.push(new window.google.maps.Marker({position: arr[i], map: this.state.map}))
            this.setState({markers: tempArr});
        }
    }

    // createMarkers = () => {
    //     var waterloo = {lat: 30.271849, lng: -97.754284};
    //     var antones = {lat: 30.296238, lng: -97.742591};
    //     var afs = {lat: 30.324586, lng: -97.708802};
    //     var arr = [waterloo, antones, afs];

    //     for(let i = 0; i++; i< arr.length){
    //         var marker = new window.google.maps.Marker({position: arr[i], map: this.state.map});
    //     }
    // }

    render() {
        return (
            <div className="map" ref={this.mapRef}>

            </div>
        );
    }
}

export default GoogleMap;