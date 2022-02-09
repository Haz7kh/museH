import React from 'react';
import {View, StyleSheet, Image,Text} from 'react-native';

const Resultsdetails = ({ result }) => {
    return (
        <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize:14,
    
  }
});


export default Resultsdetails;
