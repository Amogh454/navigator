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




export default class Youtube extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={"pink"}
          centerComponent={{
            text: '𝗬𝗼𝘂𝘁𝘂𝗯𝗲',
            style: { color: 'black', fontSize: 30, fontWeight:"bold",
            },
          }}
        />

        <TouchableOpacity
    onPress={() => Linking.openURL('https://www.youtube.com/channel/UCtMami_W4x0-dJ4834yNcsA')}>
        

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://cdn.vox-cdn.com/thumbor/2skA87SH7CEX3KHryci6AoKVCKw=/0x0:2040x1360/1400x933/filters:focal(857x517:1183x843):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66243228/wjoel_1777_180403_youtube_003.0.jpg',
          }}
        />
        
</TouchableOpacity>

<Text style = {styles.accessT}>To See Youtube Channel Of Amogh Click On The Icon☝️</Text>
     
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
