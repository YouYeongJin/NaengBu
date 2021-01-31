import React, {useEffect, useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {RadioButton} from 'react-native-paper';

const AddItemContainer = () => {
  const [itemTypeCheck, setItemTypeCheck] = useState('limit');

  useEffect(() => {
    console.log('AddItemContainer');
    AsyncStorage.setItem('data', 'AddItemContainer');
    AsyncStorage.getItem('data').then((data) => {
      console.log('스토레이지  >> ', data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.hi}>
      <Text>아이템 등록 화면</Text>
      <RadioButton
        status={itemTypeCheck === 'limit' ? 'checked' : 'unchecked'}
        onPress={() => setItemTypeCheck('limit')}
      />
      <RadioButton
        status={itemTypeCheck === 'nonLimit' ? 'checked' : 'unchecked'}
        onPress={() => setItemTypeCheck('nonLimit')}
      />
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

export default AddItemContainer;
