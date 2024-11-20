import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  filterText: {
    margin: 12,
    marginTop: 0,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  columnsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '48%',
    marginBottom: 10,
    padding: 20,
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 18,
    color: 'black',
  },
  flatlistView: {
    marginTop: 17,
  }, 
  itemAddCartButton: {
    color: 'white',
    fontWeight: 600,
  },
  itemAddCartsButtonView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#28A745',
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

export const pickerStyle = StyleSheet.create({
  inputWeb: {
        fontSize: 20,
        paddingVertical: 3,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
    },
});

