import React from 'react';
import { StyleSheet, View,  TouchableOpacity,ScrollView, Picker } from 'react-native';
import Screen from '../components/Screen';
import { Text,Icon } from 'react-native-elements';
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
{
  title: 'First',
  content: 'Lorem ipsum...'
},
{
  title: 'Second',
  content: 'Lorem ipsum...'
}
];

export default class CostScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      val:1,
    }
  }
  plateClick=()=>{
    console.log("roflyan");
  }

_renderSectionTitle(section) {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  }

  _renderHeader(section) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  }
  render() {
    return (
      <Accordion
        sections={SECTIONS}
        renderSectionTitle={this._renderSectionTitle}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        style={styles.accordion}
      />
    );
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    margin:10,
    backgroundColor: '#fff',
    alignItems:'center',
    padding:10,
    borderRadius:5
  },
  accordion:{
    flex:1,
    backgroundColor: '#ff0',

  },
  content:{
    flex:1,
    backgroundColor: '#f0f',
  },
  header:{
    backgroundColor: '#0ff',
  },
  content:{
    backgroundColor: '#00f',
  }
});

/*

<Screen navigation={this.props.navigation} leftComponent={
  <Icon
  name='chevron-left'
  type='font-awesome'
  color='#0e95c5'
  size={30}
  onPress={()=>this.props.navigation.goBack()}/>
}>
  <View style={styles.wrapper}>


  </View>
</Screen>




<Text style={styles.sectionLabel}>Количество людей:</Text>
<Picker
style={{width: 100}}
selectedValue={this.state.val}
onValueChange={(value) => {console.log(value);this.setState({val: value})}}>
<Picker.Item label="1" value={1} />
<Picker.Item label="2" value={2} />
<Picker.Item label="3" value={3} />
<Picker.Item label="4" value={4} />
<Picker.Item label="5" value={5} />
<Picker.Item label="6" value={6} />
</Picker>
<ScrollView>

</ScrollView>
<Text style={styles.sectionLabel}>Результаты</Text>
*/
