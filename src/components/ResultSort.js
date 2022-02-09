import { View, Text, StyleSheet,FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import Resultsdetails from './ResultsDetails';

const ResultSort = ({title, results,navigation}) => {
  if (!results.length){
    return null;
  }
  
  return (
    <View >
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
      data={results}
      keyExtractor={(result) => result.id}
      renderItem={({item}) => {
        // item === results that we will get from yelp
        return (
          <TouchableOpacity onPress={ () =>navigation.navigate('IdScreen',{id:item.id})}>
           <Resultsdetails result ={item}/>
          </TouchableOpacity>
        
        );
    }}
    />
    </View>
  );
  }

const styles = StyleSheet.create({
 titleStyle: {
    fontSize:18, 
    fontWeight:'bold',
    marginLeft:15,
    marginBottom:5,
    
 },
 container:{
     marginBottom:10,
 },
});
export default ResultSort;
