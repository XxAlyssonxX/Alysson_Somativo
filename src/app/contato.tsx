import { StatusBar } from 'expo-status-bar';
import { Text, View , Image} from 'react-native';
import { styles } from '../css/index.style';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/astro.jpg')}/>
      <Text>Clique no meu botão(Contato)</Text>
      <StatusBar style="auto" />
      <Link style={styles.btn} href={'/sobre'}> Sobre</Link>
      <Link style={styles.btn} href={'/'}> Inicio</Link>
    </View>
  );
}