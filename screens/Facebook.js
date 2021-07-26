import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Linking
} from 'react-native';
import { Header } from 'react-native-elements';



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={"white"}
          centerComponent={{
            text: 'Facebook',
            style: { color: 'blue', fontSize: 30 , fontWeight:'bold'},
          }}
        />

<TouchableOpacity
onPress={() => Linking.openURL('https://www.facebook.com/amogh.pkaushik/')}>

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://i.pcmag.com/imagery/articles/04HUXgEu0I3mdCOejOjQpNE-5..1620748900.jpg',
          }}
        />
        </TouchableOpacity>
        
             <Text style = {styles.accessT}>To See Facebook Profile Of Amogh Click On The Icon☝️</Text>

     
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
    marginTop:20,
  }

});
