import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import Mapa from './Mapa.js';



export default function App() {
  return (

    <View style={styles.container}>
      <Text style={styles.texto1}>Hehehe</Text>
      <Image source={require("./assets/teste.png")} style={styles.img}></Image>
      <Button
        title="aperte"
        onPress={() => Alert.alert('oi', 'bom dia')}
      />
      <StatusBar style="auto" />
      <Mapa />

    </View>
    


  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto1: {
    fontSize: 40,
  },
  img: {
    borderRadius: 200,
  },
  map: {
    width: '100%',
    height: '50%',
    borderRadius: 50
  },

});
