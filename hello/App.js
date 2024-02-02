import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, StyleSheet, Text, View, TextInput } from 'react-native';
import Mapa from './Mapa.js';


  
export default function App() {

  return (

    <View style={styles.container}>
      <View>
        <Text style={styles.texto1}>🐸</Text>
        <Image source={require("./assets/01.png")} style={styles.img}></Image>
        <Button
          title="aperte"
          onPress={() => Alert.alert('oi', 'bom dia')}
        />
        <TextInput placeholder='escreva' ></TextInput>
        <StatusBar style="auto" />
      </View>
      <View>
        <Mapa />

      </View>
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
    textAlign: 'center'
  },
  img: {
    borderRadius: 200,
    width: 150,
    height: 150,
  },
  map: {
    width: '100%',
    height: '50%',
  },

});