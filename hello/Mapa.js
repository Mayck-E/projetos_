import React, { useEffect, useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permissão de localização negada');
        return;
      }

      let locationWatcher = await Location.watchPositionAsync({
        accuracy: Location.Accuracy.High,
        timeInterval: 1000,  // Update location every 1 second
        distanceInterval: 1  // Or every time the device moves 1 meter
      }, (location) => {
        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      });

      // Don't forget to stop watching the location when the component unmounts
      return () => {
        locationWatcher.remove();
      };
    })();
  }, []);

  return (
    <View style={styles.container}>

      <StatusBar style='auto'/>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={location}
        >
          <Marker
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title="Você"
          />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({

  map: {
    width: 500,
    height: 200,

  }
});