import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
   
   
    return(

        <View style={styles.backGColor}>
            <Feather 
            name="search"
             size={35} 
             color="black"
             style={{alignSelf:'center', marginHorizontal:15}} />
        <TextInput style={styles.input}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
        
        />
        </View>

    );
}
const styles = StyleSheet.create({
backGColor: {
backgroundColor:'#fff',
height:50,
borderRadius:5,
marginHorizontal:15,
flexDirection:'row',
marginTop:15,
marginBottom:10,
},
input:{
    flex:1,
    fontSize:18,
},
});
export default SearchBar;