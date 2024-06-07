import { StyleSheet,Image, Text, View ,Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';
import BackgroundImage from '../assets/Hk.png';
import { useFonts } from 'expo-font';
// import BackgroundImage from '../assets/Logo.png';
import SourceSansProLight from '../assets/Font/SourceSansPro-Light.ttf';
import SourceSansProRegular from '../assets/Font/SourceSansPro-Regular.ttf';
import SourceSansProBold from '../assets/Font/SourceSansPro-Bold.ttf';
export default function Home(props) {
  const [load] = useFonts({
      SourceSansProLight,
      SourceSansProRegular,
      SourceSansProBold,
    });
    if (!load || !BackgroundImage) {
      return <Text>Loading...</Text>;
    }
    return(
     <View style={styles.container}>
        <Image
          style={styles.picsty}
          source={BackgroundImage}
        />
        <Text style={styles.smallheaderTitle}>
                Copyright 2022
                    </Text>
         <LottieView  style={styles.Anistyle} source={require('../assets/81312-live-sensor-data')} autoPlay/>
    </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    smallheaderTitle: {
        fontSize: 15,
        position: 'absolute',
        alignItems: 'center',
        color: "#FFFFFF",
        marginTop: Dimensions.get('screen').height * 0.25,
        marginLeft: Dimensions.get('screen').height * 0.18,
        fontFamily: 'SourceSansProRegular'
    },
    Anistyle:{
    position: 'absolute',
    alignSelf: 'center',
    height: 140,
    // marginBottom:12,
    // marginTop:100,
    // marginLeft:Dimensions.get('screen').height * 0.15,
    top: Dimensions.get('screen').height * 0.15
  },
  picsty:{
    
      width: 350,
      height: 351,
      // marginLeft:20,
      position: 'absolute', alignItems: 'center',
      height: 250, 
      marginTop: Dimensions.get('screen').height * 0.04,
      marginLeft: Dimensions.get('screen').height * 0.023,
      resizeMode: 'contain'
    

  },
 

});