import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mensagem: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
  },
  containerPerfil: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imagemPerfil: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  nomeUsuario: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E91E63',
    marginTop: 10,
  },
  tituloSessao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E91E63',
    marginTop: 20,
    marginBottom: 10,
  },
  textoInfo: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  infoContainer: {
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default styles