import React, {useEffect, useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const ItemSortContainer = () => {
  useEffect(() => {
    console.log('ItemSortContainer');
    AsyncStorage.setItem('data', 'ItemSortContainer');
    AsyncStorage.getItem('data').then((data) => {
      console.log('스토레이지  >> ', data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.hi}>
      <Text>아이템 뷰 화면</Text>
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

export default ItemSortContainer;
