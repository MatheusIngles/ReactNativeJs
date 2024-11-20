import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Estilo principal da página
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  emptyMessage: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkoutButton: {
  backgroundColor: '#ff4d4d', 
  padding: 10,               
  borderRadius: 8,           
  alignItems: 'center',      
  marginTop: 10,            
  },
  checkoutButtonText: {
  color: '#fff',             
  fontSize: 16,              
  fontWeight: 'bold',        
  },


  // Estilo dos itens do carrinho
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 5,
    marginRight: 10,
    resizeMode: 'contain'
  },
  itemDetailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemDetails: {
    fontSize: 14,
    color: '#555',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  quantityValue: {
    fontSize: 14,
    color: '#555',
    marginHorizontal: 5,
  },
  removeButton: {
    backgroundColor: '#ff4d4d',
    padding: 3,
    width: 25,
    height: 25, 
    borderRadius: 12.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
  },
});

export default styles;
