import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
export default class Plate extends React.Component {
  constructor(props){
    super(props);
  }
  plateClick=()=>{
    console.log("roflyan");
  }
  render() {
    return (
        <TouchableOpacity onPress={this.props.onPress} style={styles.plate}>
              <Icon
                name={this.props.iconName}
                type={this.props.iconType}
                size={60}
                color='#0e95c5'
              />
              <Text style={styles.plateText}>{this.props.name}</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  plate:{
    backgroundColor:"#fff",
    flex:1,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:5
  },
  plateText:{
    color:'#0e95c5'
  },
  plateButton:{
    color:'#0e95c5'
  }
});
