/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 'use strict';

 var React = require('react-native');
 var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView,
  Component,
} = React;

var AddMarker = require('./components/AddMarker.js');

class Birretta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
        mapRegion: {
          latitude: 45.486377,
          longitude: 9.217522,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        markers: [],
      status: false,
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
      <MapView style={styles.map}
      region={this.state.mapRegion || undefined}
      annotations={this.state.markers.map(m => m)}
      />
      <AddMarker slidePane={this.slidePane.bind(this)} addMarker={this.addMarker.bind(this)} status={this.state.status} />
      </View>
      );
  }
  slidePane() {
    this.setState({
      status: !this.state.status
    });
  }
  addMarker(marker) {
    console.log(marker);
    var newMarkers = this.state.markers;
    newMarkers.push(marker);
    this.setState({
      status: false,
      markers: newMarkers,
    });
  }
};
// showsUserLocation={true}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
    height: 400,
    alignSelf: 'stretch',
  },
});

AppRegistry.registerComponent('Birretta', () => Birretta);
