import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Linking
} from 'react-native';
import LottieView from 'lottie-react-native';
import { useFonts } from 'expo-font';
import BackgroundImage from '../assets/hk_logo.jpg';
import pic from '../assets/picture.jpeg';

import SourceSansProLight from '../assets/Font/SourceSansPro-Light.ttf';
import SourceSansProRegular from '../assets/Font/SourceSansPro-Regular.ttf';
import SourceSansProBold from '../assets/Font/SourceSansPro-Bold.ttf';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Contact(props) {
    const [loaded] = useFonts({
        SourceSansProLight,
        SourceSansProRegular,
        SourceSansProBold,
    });
    if (!loaded || !BackgroundImage) {
        return <Text>Loading...</Text>;
    }
    return (
        <ScrollView>
            <View style={styles.container}>

                
                <View style={styles.header}>
                <Image
                    style={{
                        width: 250,
                        height:250,
                        // marginLeft:20,
                         marginLeft: 10,
                        resizeMode: 'contain'
                    }}
                    source={BackgroundImage}
                />

                    {/* <Text style={styles.headerTitle}>
                        Hk Hopper Kremer
                    </Text> */}
                     <Text style={styles.smallheaderTitle}>
                        About The Developer
                    </Text> 

                </View>
                <View style={styles.postContent}>


                    <Text style={styles.postDescription}>
                    Greetings! I am a React Native engineer with a 
                    degree in Computer Science. My key strengths include 
                    software development, debugging, OOP, algorithms, data structures, 
                    and responsive web design
                    </Text>
                    {/* <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.tags} onPress={() => Linking.openURL('http://hopperkremer.com')}>
                            <Text style={{ color: '#00BFFF', fontFamily: 'SourceSansProBold', marginTop: -1.5 }} >Email   </Text>
                        </TouchableOpacity>
                        <Text style={styles.date}>
                            Me if You Like My Application
                        </Text>
                    </View> */}
                    {/* <Text style={styles.date}>
                        Raleigh,Nc 27610
                    </Text> */}
                    
                    <View style={styles.profile}>
                        <Image style={styles.avatar}
                            source={pic} />

                        <Text style={styles.name}>
                            Hopper Kremer
                        </Text>


                    </View>

                    <TouchableOpacity style={styles.shareButton} onPress={() => Linking.openURL("mailto:hopperkremer@gmail.com?subject=Nice%20App&body=You're%20hired") }>
                        <Text style={styles.shareButtonText}>Contact Me</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',marginTop:20,marginLeft:60}}>
                    <Ionicons name="logo-linkedin" size={26} style={{marginLeft:15}} onPress={() => Linking.openURL('https://www.linkedin.com/in/hopperkremer/')} />
                    <Ionicons name="ios-logo-github" size={26} style={{marginLeft:15}} onPress={() => Linking.openURL('https://github.com/hopperkremer')}/>
                    <Ionicons name="earth-outline" size={26} style={{marginLeft:15}} onPress={() => Linking.openURL('http://hopperkremer.com')} />
                    <Ionicons name="ios-logo-facebook" size={26} style={{marginLeft:15}} onPress={() => Linking.openURL('https://www.facebook.com/hopperkremer')}/>
                    <Ionicons name="ios-logo-codepen" size={26} style={{marginLeft:15}} onPress={() => Linking.openURL('https://codepen.io/HopperKremer')}/>
                    </View>
                    
                    {/* <Button onPress={() => Linking.openURL("mailto:hopperkremer@gmail.com?subject=Nice%20App&body=You're%20hired") }title="hopperkremer@gmail.com" /> */}
                </View>

            </View>

        </ScrollView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 30,
        alignItems: 'center',
        backgroundColor: "#000000",
    },
    headerTitle: {
        fontSize: 30,
        color: "#FFFFFF",
        marginTop: 10,
        fontFamily: 'SourceSansProBold'
    },
    smallheaderTitle: {
        fontSize: 20,
        color: "#FFFFFF",
        marginTop: -40,
        fontFamily: 'SourceSansProBold'
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
        fontFamily: 'SourceSansProBold'
    },
    postContent: {
        flex: 1,
        padding: 30,
    },
    postTitle: {
        fontSize: 26,
        fontWeight: '600',
    },
    postDescription: {
        fontSize: 18,
        marginTop: 10,
        fontFamily: 'SourceSansProRegular'
    },
    tags: {
        color: '#00BFFF',
        marginTop: 10,
    },
    date: {
        color: '#696969',
        marginTop: 10,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 35,
        borderWidth: 4,
        borderColor: "#00BFFF",
    },
    profile: {
        flexDirection: 'row',
        marginTop: 20
    },
    name: {
        fontSize: 22,
        color: "#000000",
        fontWeight: '600',
        alignSelf: 'center',
        marginLeft: 10,
        fontFamily: 'SourceSansProBold'

    },
    shareButton: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
    shareButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
    }
});
