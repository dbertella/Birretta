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
    this.state = {
      latitude: '45.487', 
      longitude: '9.218',
      title: '',
      subtitle: ''
    };
  }
  render() {
    var icon;
    if (this.props.status) {
      icon = '-';
    } else {
      icon = '+';
    }

    var marker = {};
    return (
      <View style={[styles.form, this.props.status && styles.toggled]}>
        <TouchableHighlight style={styles.toggler}
          onPress={this.props.slidePane}>
          <Text style={[styles.bold, styles.text]}>{icon} Add Marker</Text> 
        </TouchableHighlight>

        <TextInput style={styles.input}
          onChangeText={(testo) => this.setState({latitude: testo})}
          placeholder="latitude"
          value={this.state.latitude}
          keyboardType="numeric" />
        <TextInput style={styles.input}
          onChangeText={(testo) => this.setState({longitude: testo})}
          placeholder="longitude"
          value={this.state.longitude}
          keyboardType="numeric" />
        <TextInput style={styles.input}
          onChangeText={(testo) => this.setState({title: testo})}
          value={this.state.title}
          placeholder="Pin title" />
        <TextInput style={styles.input}
          onChangeText={(testo) => this.setState({subtitle: testo})}
          value={this.state.subtitle}
          placeholder="Pin subtitle" />
        <TouchableHighlight style={[styles.input, styles.button]}
          onPress={this.add.bind(this)}>
          <Text style={styles.buttonText}>Add Marker</Text> 
        </TouchableHighlight>
      </View>
    );
  }
  add() {
    var newMarker = {
      latitude: parseFloat(this.state.latitude), 
      longitude: parseFloat(this.state.longitude),
      title: this.state.title,
      subtitle: this.state.subtitle
    }
    this.props.addMarker(newMarker);

    this.setState({
      latitude: '45.487', 
      longitude: '9.218',
      title: '',
      subtitle: ''
    })
  }
};

// AddMarker.propTypes = {
//   marker: React.PropTypes.shape({
//     latitude: React.PropTypes.number.isRequired,
//     longitude: React.PropTypes.number.isRequired,
//     title: React.PropTypes.string.isRequired,
//     subtitle: React.PropTypes.string.isRequired,
//   }),
//   addMarker: React.PropTypes.func.isRequired,
// };

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
    height: 280,
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
    marginHorizontal: 10,
    marginBottom: 5,
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