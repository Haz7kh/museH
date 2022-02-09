import React, { useEffect, useState } from 'react';
import {View, StyleSheet,Text,FlatList,Image} from 'react-native';
import yelp from '../Api/yelp';

const Idshowscreen = ({route}) => {
    const  [result,setResult] = useState (null)
    const { id } = route.params;
//   console.log(result)  ;
  //help func to get the submitted id
  const getResult = async (id) =>{
      const response = await yelp.get(`/${id}`);
     setResult (response.data);
  };
  useEffect(() =>{
   getResult(id);
  }, [])
  if (!result){
      return null;
  }
  return (
        <View style={styles.bg}>
            <View style={styles.TexStyle}>
            <Text>Name: {result.name}</Text>
            <Text>
              {result.rating} Stars, {result.review_count} Reviews
            </Text>
      
            <Text> Phone: {result.phone}</Text>
            <Text>categories:{result.categories['']}</Text>
            <Text>location:{result.address1}</Text>
            </View>
            
            <FlatList 
            data = {result.photos}
            keyExtractor={(pic) => pic }
            renderItem={({item}) => {
             return <Image 
             style={styles.imgStyle}
             source={{uri:item}} />
            }}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    imgStyle: {
        flexDirection:'row',
     height:200,
     width:300,
     margin:5,
     marginLeft:25
    },
    TexStyle:{
        marginTop:5,
        borderWidth:1,
        padding:10,

    },
    bg:{
        backgroundColor:'#CBF8F3',
        flex:1
        
       },
   
})

export default Idshowscreen;
