import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from '../css/index.style';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/astro.jpg')}
      />
      <Text>Pagina sobre os meus aluno(Sobre)</Text>
      <StatusBar style="auto" />
      <Link style={styles.btn} href={'/'}> Inicio</Link>
      <Link style={styles.btn} href={'/contato'}> Contato</Link>
    </View>
  );
}


