import React from 'react';
import {View, StyleSheet, Text, Button,Image} from 'react-native';



const Homescreen = ({navigation}) => {
    return (
        <View style={styles.bg} >
      
      <Text style={styles.textStyle}> Where ? And What?   </Text>
         
         <Button 
      style={styles.Btn}
           
           color={'green'}
           title='Let Us Find Out ' 
           onPress={() => 
               navigation.navigate('Search')
           }
           />

         <Image
        style={styles.img}
        source={{
          uri: 'https://images.unsplash.com/photo-1611315764615-3e788573f31e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1lYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        }}
      />
      
      
     
        
     
        </View>
        
    );
}

const styles = StyleSheet.create({
    bg:{
        backgroundColor:'#CBF8F3',
        flex:1
       },
    img:{
       flex:1,
    },
    textStyle:{
      fontSize:16,
      fontStyle:'normal',
      fontWeight:'bold',
      marginHorizontal:100
    },
    Btn:{
      marginVertical:150,
      borderRadius:20
    }
})

export default Homescreen;
