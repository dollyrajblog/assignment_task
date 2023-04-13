import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Main from './src/routes/Main';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <Main />
    </SafeAreaView>
  );
};
export default App;
