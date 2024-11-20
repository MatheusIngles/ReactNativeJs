import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  tituloPagina: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  pedidoContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  numeroPedido: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  dataPedido: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  statusPedido: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  totalPedido: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  tituloItens: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 12,
  },
  itemPedido: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});
