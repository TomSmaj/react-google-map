import React, { Component } from "react";
import $script from 'scriptjs';
import "./GoogleMap.css";

var openwindow;

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

    componentDidMount() {
        $script('https://maps.googleapis.com/maps/api/js?key=AIzaSyBgZLanx1F3uxF339fjCxb0gf647ZLVVoU', this.createMap)
    }

    createMap = () => {
        this.setState({
            map: new window.google.maps.Map(this.mapRef.current)
        })
        this.state.map.setCenter({ lat: 30.296238, lng: -97.742591 });
        this.state.map.setZoom(13);

        var waterloo = { lat: 30.271849, lng: -97.754284 };
        var antones = { lat: 30.296238, lng: -97.742591 };
        var afs = { lat: 30.324586, lng: -97.708802 };
        var arr = [waterloo, antones, afs];
        var names = ["Waterloo Records", "Antones Records", "Austin Film Society"];

        var tempArr;
        for (let i = 0; i < arr.length; i++) {
            tempArr = this.state.markers;
            let marker = new window.google.maps.Marker({ position: arr[i], map: this.state.map, animation: window.google.maps.Animation.DROP });
            marker.addListener('click', (e) => {    // if event jandler e is not passed to function, 'this' will refer to marker
                this.state.map.panTo(marker.getPosition());
            })

            let infowindow = new window.google.maps.InfoWindow({
                content: "<h4>" + names[i] + "</h4>"
            });
            marker.addListener('click', (e) => {
                if(openwindow){
                    openwindow.close();
                }                
                openwindow = infowindow;
                infowindow.open(this.state.map, marker)
            })

            tempArr.push(marker)
            this.setState({ markers: tempArr });
        }
    }

    render() {
        return (
            <div className="map" ref={this.mapRef}>

            </div>
        );
    }
}

export default GoogleMap;