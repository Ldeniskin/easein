import React from 'react';
import { StyleSheet, View, StatusBar, TouchableOpacity,ScrollView } from 'react-native';
import { Text,Header, Icon,Button } from 'react-native-elements';
import PlateGrid from '../components/PlateGrid';
export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle = "light-content" hidden = {false}/>
        <Header
          placement="left"
          backgroundColor='#000'
          leftComponent={this.props.leftComponent}
          centerComponent={{ text: 'EASEIN', style: { color: '#0e95c5',fontSize:33 } }}
          rightComponent={{  }}
          outerContainerStyles={{flex:1,marginTop:20}}
          innerContainerStyles={{flex:1, justifyContent:'space-between',alignItems:'center'}}
        />
        <View style={styles.content}>
          {this.props.children}
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },

  sectionLabel:{
      fontSize:25,
      color:'#0e95c5',
  },

  header:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    flex:10,
    backgroundColor:'#0e95c5',
    padding:10
  }
});
