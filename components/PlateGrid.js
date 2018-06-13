import React from 'react';
import { View, StyleSheet } from 'react-native';
import Plate from './Plate';
export default class PlateGrid extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.contentRow}>
          <Plate onPress={() => this.props.navigation.navigate('Cost')} iconName='ios-cash' iconType='ionicon' name="СУММА"/>
          <Plate iconName='gauge' iconType='material-community' name="ККАЛ"/>
        </View>
        <View style={styles.contentRow}>
          <Plate iconName='map' iconType='material-community' name="КАРТА"/>
          <Plate iconName='filter' iconType='material-community' name="ФИЛЬТР"/>
        </View>
        <View style={styles.contentRow}>
          <Plate iconName='sale' iconType='material-community' name="АКЦИИ"/>
          <Plate iconName='file-document-box' iconType='material-community' name="ЗАВЕДЕНИЯ"/>
        </View>
        <View style={styles.contentRow}>
          <Plate iconName='heart' iconType='material-community' name="ИЗБРАННОЕ"/>
          <Plate iconName='help' iconType='material-community' name="ПОДДЕРЖКА"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentRow:{
    flex:1,
    margin:5,
    flexDirection:'row',
  },
  wrapper:{
    flex:1,
  }
});
