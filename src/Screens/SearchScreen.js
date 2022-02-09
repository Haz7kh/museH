import { View, Text,StyleSheet, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import yelp from '../Api/yelp';
import ResultSort from '../components/ResultSort';


const SearchScreen = ({ navigation }) => {
 
    const [term,setTerm]= useState('')
    const [results,setResults]=useState([]);
    const [errMsg, setErrMsg]= useState([''])
   
    //  console.log(results);
    
    // func to sort the restaurnts depends on price 
    //price === '$' || '$$' || '$$$' ...etc 
  
    const fliterByPrice = (price) => {
        return results.filter(result =>{
          return result.price === price;
        }); 
      }
       // this function for called the link with /search 
    const searchApi = async(searchTerm) =>{
        // consol.log('kör')
        try{
       const response = await yelp.get('/search', {
         params:{
           limit:50,
           term:searchTerm,
           location:'stockholm'
  
         }
       });
       setResults (response.data.businesses)
      } catch (err){
        setErrMsg('somthing went wrong !!!')
      }
      };
      useEffect( () => {
       searchApi('pasta')
      }, []);

  return (
    <View style={styles.bg}>
        <SearchBar 
        term ={term}
        onTermChange={setTerm}
        onTermSubmit={() =>  searchApi(term)}
        />
        {errMsg ? <Text>{errMsg}</Text>: null}
        <ScrollView>
        <ResultSort results= {fliterByPrice('$')} title = "Econimcal"  navigation={navigation}/> 
      <ResultSort results= {fliterByPrice('$$')} title = "Average Price " navigation={navigation}/> 
      <ResultSort results= {fliterByPrice('$$$')} title = "High Price" navigation={navigation}/> 
      <ResultSort results= {fliterByPrice('$$$$')} title = "you have to be rich (:" navigation={navigation}/>
      </ScrollView> 
    </View>
  );
};

const styles = StyleSheet.create({
    bg:{
        backgroundColor:'#CBF8F3',
        flex:1
        
       },
   
});

export default SearchScreen;
