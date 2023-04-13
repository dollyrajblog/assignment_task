import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('screen');
const CustomItem = props => {
  return (
    <View style={[styles.main, {backgroundColor: props.backgroundColor}]}>
      <View style={[styles.circleInner, {borderColor: props.color}]}>
        {props.icon}
      </View>
      <View style={styles.textView}>
        <Text style={{color: '#000', fontSize: 13, fontWeight: '800'}}>20</Text>
        <Text
          style={{
            fontSize: 10,
            textAlign: 'center',
            fontWeight: '800',
            color: '#637381',
          }}>
          {props.msg}
        </Text>
      </View>
    </View>
  );
};
export default CustomItem;
const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    width: width * 0.3,
    height: height * 0.07,
    // backgroundColor: '#f2fac3',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    borderRadius: 5,
  },
  circleInner: {
    backgroundColor: '#fff',
    height: 30,
    width: 30,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  textView: {
    flex: 1,
    alignItems: 'center',
  },
});
