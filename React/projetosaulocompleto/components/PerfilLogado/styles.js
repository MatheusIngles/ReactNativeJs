import { StyleSheet, Dimensions } from 'react-native';

// Obtendo as dimensões da tela
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: width, // Ajusta ao tamanho da largura da tela
    height: height, // Ajusta ao tamanho da altura da tela
  },
  containerRolagem: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  containerPerfil: {
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ddd',
  },
  imagemPerfil: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ddd',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#E91E63',
  },
  detailsContainer: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  tituloSessao: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  detailItem: {
    fontSize: 16,
    marginVertical: 5,
    color: '#666',
  },
  entradaTexto: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    color: '#000',
    width: '90%', // Adapta ao tamanho da tela
  },
  button: {
    marginTop: 30,
    backgroundColor: '#E91E63',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%', // Botão ocupa 90% da largura
  },
  botaoSalvar: {
    backgroundColor: '#E91E63',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    width: '90%', // Botão ocupa 90% da largura
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textoBotaoSalvar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textEmpty: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    width: '90%', // Alinha com os outros campos
    backgroundColor: '#fff', // Fundo branco para consistência
    height: 50, // Altura igual aos outros inputs
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    paddingHorizontal: 10, // Espaçamento interno
  },
   picker: {
    fontSize: 16,
    color: '#000',
    textAlign: 'left', // Alinha o texto à esquerda (como os inputs)
    paddingVertical: 0, // Remove padding adicional que possa causar desalinhamento
    borderRadius: 8,
    borderWidth: 1,
  },
});

export default styles;
