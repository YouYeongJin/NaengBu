import React, {useEffect, useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const EndDaySortContainer = () => {
  useEffect(() => {
    console.log('EndDaySortContainer');
    AsyncStorage.setItem('data', 'EndDaySortContainer');
    AsyncStorage.getItem('data').then((data) => {
      console.log('스토레이지  >> ', data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.hi}>
      <Text>유통기한 끝 뷰 화면</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  hi: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EndDaySortContainer;
