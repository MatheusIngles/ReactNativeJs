import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backButtonView: {
    alignItems: 'flex-start',
    width: '90%'
  },
  backButton: {
    borderRadius: 15,
    backgroundColor: '#E1E1E1',
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backButtonText: {
    fontSize: 16,
    fontFamily: 'monospace'
  },
  itemImg: {
    height: '35vh'
  },
  textInput: {
    fontSize: 18,
    marginTop: 5,
    border: '1px solid black',
    borderRadius: 3,
    paddingLeft: 6,
    paddingVertical: 3,
    width: '78%',
  },
  incrementButton: {
    fontSize: 19,
    fontWeight: 'bold',
    width: '10%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#90EE90',
    borderRadius: 5,
    marginLeft: '1%'
  },
  decrementButton: {
    fontSize: 19,
    fontWeight: 'bold',
    width: '10%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF7F7F',
    borderRadius: 5,
    marginLeft: '1%'
  },
  itemAddCartButton: {
    color: 'white',
    fontWeight: 600,
  },
  itemAddCartsButtonView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    border: '1px solid #888888',
  },
  itemOpacity: {
    padding: 10,
    width: '100%', 
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;