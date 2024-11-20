import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 8,
  },
  button:{
    backgroundColor: '#F83758',
    padding: 13,
    marginTop: 12,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput:{
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  paragraph: {
    fontSize: 18,
    //color: 'White',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default styles;