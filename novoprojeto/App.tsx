
import { StyleSheet, Text, View, SafeAreaView, Button, StatusBar } from 'react-native';
import React from "react";     
import { useState } from 'react';       

export default function App() {
 const [count, setCount] = useState(100);

 function somar(){
  setCount(count+1)
 }

 function diminuir(){
  if (count >=1)
    setCount(count-1);
 }

  return (
<SafeAreaView>
  <StatusBar/>
<View style={styles.container}>
  <Text style={styles.txt}>  {count}  </Text>
  <Button title = "somar" onPress={somar}/>
  <Button title= "diminuir" onPress={diminuir}/>

</View>

</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    height:500,
   padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt:{
    fontSize:40,
    marginBottom:20,
    fontWeight:"bold",
    padding:25
  }
});
