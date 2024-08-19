import { View,Text,StyleSheet,SafeAreaView, StatusBar } from "react-native";
import { Welcome} from "./components/Welcome";

 export default App;
function App(){
  return (
  <SafeAreaView>
    <StatusBar/>
 <View style={styles.container}>
 <Text style={styles.texto}> Ola mundo</Text>
 <Text> Ola mundo</Text>
 <Text> Ola mundo</Text>
 <Text> Ola, fulano, tudo bem ?</Text>
 <Welcome  name="joao" age= {25} on={true}/>
 <Welcome  name="joana" age={40}on= {false}/> 
 <Welcome name= "Marcos" age={37}on= {true}/>
 <Welcome  name="lucas" age={24} on={false}/>

<View style= {styles.bola}>
<Text style={styles.bolatxt}>S</Text>
</View>
 </View>
 </SafeAreaView>
  );
}



const styles=  StyleSheet.create({
  texto:{
    fontSize:36,
    textAlign:"center",
    color:"red"

  },
  container:{
    backgroundColor:"orange"
  },
  bola:{
    width: 90,
    height:90,
    backgroundColor:"blue",
    borderRadius:90,
    justifyContent:"center",
    alignItems: "center",
    borderWidth: 5

  },
  bolatxt:{
    fontSize:48,
    color:"white"

  }



});