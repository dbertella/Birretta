var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Component,
} = React;

class AddMarker extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var icon;
    if (this.props.status) {
      icon = '-';
    } else {
      icon = '+';
    }
    return (
      <View style={[styles.form, this.props.status && styles.toggled]}>
        <TouchableHighlight style={styles.toggler}
          onPress={this.props.slidePane}>
          <Text style={[styles.bold, styles.text]}>{icon} Add Marker</Text> 
        </TouchableHighlight>

        <TextInput style={styles.input}
          placeholder="latitude" />
        <TextInput style={styles.input}
          placeholder="longitude" />
        <TouchableHighlight style={[styles.input, styles.button]}
          onPress={this.props.addMarker}>
          <Text style={styles.buttonText}>Add Marker</Text> 
        </TouchableHighlight>
      </View>
    );
  }
  
};
var styles = StyleSheet.create({
  form: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    borderTopColor: '#000',
    borderTopWidth: 1, 
  },
  toggled: {
    height: 330,
  },
  toggler: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 10,
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});
module.exports = AddMarker;