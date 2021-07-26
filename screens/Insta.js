import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import { Linking } from 'react-native';




export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={"pink"}
          centerComponent={{
            text: '𝕴𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒',
            style: { color: 'black', fontSize: 30, fontWeight:"bold" },
          }}
        />

        <TouchableOpacity
    onPress={() => Linking.openURL('https://www.instagram.com/amoghpkaushik/')}>
        

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhq0nB6g_er3wRcib07vhIR49M7qHAgB4tA&usqp=CAU',
          }}
        />
        
</TouchableOpacity>
     
     <Text style = {styles.accessT}>To See Instagram Profile Of Amogh Click On The Icon☝️</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
 
   imageIcon: {
    width: 150,
    height: 150,
    alignSelf:'center',
    marginTop:60
  },

    accessT:{
    textAlign:"center",
    fontSize:20,
    alignSelf:'center',
    marginTop:20
  
  }

});
