import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'f5f5f5',
    padding: 8,
  },
  containe:{
    flex: 1,
    backgroundColor: 'f5f5f5',
    padding: 0,
  },
   overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente
  },
  popup: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  grafic: {
    marginVertical: 0,
    marginRight: 18,
    borderRadius: 10
  },
  button:{
    backgroundColor: 'purple',
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