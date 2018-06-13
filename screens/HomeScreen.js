import React from 'react';
import { StyleSheet, View, StatusBar, TouchableOpacity,ScrollView } from 'react-native';
import PlateGrid from '../components/PlateGrid';
import Screen from '../components/Screen';
export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
  }
  plateClick=()=>{
    console.log("roflyan");
  }
  render() {
    return (
      <Screen>
        <PlateGrid navigation={this.props.navigation}/>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({

});

/*
<View style={styles.wrapper}>
  <Text style={styles.sectionLabel}>Количество людей:</Text>
  <ScrollView>
    <Text style={styles.sectionLabel}>Количество людей:</Text>
    <Text style={styles.sectionLabel}>Количество людей:</Text>
    <Text style={styles.sectionLabel}>Количество людей:</Text>
    <Text style={styles.sectionLabel}>Количество людей:</Text>
    <Text style={styles.sectionLabel}>Количество людей:</Text>
    <Text style={styles.sectionLabel}>Количество людей:</Text>
    <Text style={styles.sectionLabel}>Количество людей:</Text>
    <Text style={styles.sectionLabel}>Количество людей:</Text>

  </ScrollView>
  <Text style={styles.sectionLabel}>Результаты</Text>
</View>*/
