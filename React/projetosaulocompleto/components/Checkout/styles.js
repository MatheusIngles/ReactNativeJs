import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#555',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentTitle: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  icon: {
  width: 24, // Largura do ícone
  height: 24, // Altura do ícone
  resizeMode: 'contain', // Mantém as proporções da imagem
  marginRight: 10, // Espaçamento entre o ícone e o texto
},
  paymentMethodsContainer: {
    marginBottom: 30,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
  },
  paymentMethodSelected: {
    borderColor: '#f00',
    backgroundColor: '#ffe5e5',
  },
  iconPlaceholder: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ddd',
    marginRight: 10,
  },
  paymentText: {
    fontSize: 14,
    color: '#333',
  },
  button: {
    backgroundColor: '#ff4d4d',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
