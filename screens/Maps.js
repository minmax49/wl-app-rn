import React from 'react' 
import {
  View
} from 'react-native' 


import MapView, { Marker } from 'react-native-maps';
export default function Maps() {
  
 
  return (
    <View>
        <MapView
          initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
  
  
}