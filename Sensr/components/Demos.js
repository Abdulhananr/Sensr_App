import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View, Platform, Dimensions, ScrollView } from 'react-native';
import { Accelerometer, Gyroscope, Barometer, Magnetometer } from 'expo-sensors';
import { useFonts } from 'expo-font';
import BackgroundImage from '../assets/hk_logo.jpg';
import SourceSansProLight from '../assets/Font/SourceSansPro-Light.ttf';
import SourceSansProRegular from '../assets/Font/SourceSansPro-Regular.ttf';
import SourceSansProBold from '../assets/Font/SourceSansPro-Bold.ttf';
export default function Demos() {
  // 
  const [rgbRed, setRgbRed] = useState(200);
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [megdata, setMegData] = useState({
    l: 0,
    m: 0,
    n: 0,
  });
  const [gyroData, setGyroData] = useState({
    gX: 0,
    gY: 0,
    gZ: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => {
    Accelerometer.setUpdateInterval(1000);
  };

  const _fast = () => {
    Accelerometer.setUpdateInterval(16);
  };

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
        const { x, y, z } = accelerometerData;
        setRgbRed(y * 150);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const { x, y, z } = data;
  // -------------- Gyro Scope Start ------------

  
  const [gyroSubscription, setGyroSubscription] = useState(null);

  const _gyroSlow = () => {
    Gyroscope.setUpdateInterval(1000);
  };

  const _gyroFast = () => {
    Gyroscope.setUpdateInterval(16);
  };

  const _gyroSubscribe = () => {
    setGyroSubscription(
      Gyroscope.addListener(gyroscopeData => {
        setGyroData(gyroscopeData);
        // console.log(gyroscopeData)
      })
    );
    return gyroData;
  };

  const _gyroUnsubscribe = () => {
    gyroSubscription && gyroSubscription.remove();
    setGyroSubscription(null);
  };

  useEffect(() => {
    _gyroSubscribe();
    return () => _gyroUnsubscribe();
  }, []);

  // console.log(gyroData)
  var gX = gyroData["x"]
  var gY = gyroData["y"]
  var gZ = gyroData["z"]
  // -------------- Gyro Scope End --------------



  // ---------------- Start Magnetometer ----------


  const [Megsubscription, setMegSubscription] = useState(null);
  const _megslow = () => {
    Magnetometer.setUpdateInterval(1000);
  };

  const _megfast = () => {
    Magnetometer.setUpdateInterval(16);
  };

  const _megsubscribe = () => {
    setMegSubscription(
      Magnetometer.addListener(result => {
        setMegData(result);

      })
    );
    return megdata;
  };

  const _megunsubscribe = () => {
    Megsubscription && Megsubscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _megsubscribe();
    return () => _megunsubscribe();
  }, []);
  // console.log( megdata["y"])
  // const { l, m, n } = megdata;
  var l = megdata["x"]
  var m = megdata["y"]
  var n = megdata["z"]






  // ---------------- End Magnetometer -------------



  //  ------------------Start  Code Barometer--------------
  const [bardata, setBarData] = useState({});

  const [barSubscription, setBarSubscription] = useState(null);

  const _barsubscribe = () => {
    setBarSubscription(
      Barometer.addListener(barometerData => {
        setBarData(barometerData);

      })
    );
  }


  const _barunsubscribe = () => {
    barSubscription && barSubscription.remove();
    setBarSubscription(null);
  };

  useEffect(() => {
    _barsubscribe();
    return () => _barunsubscribe();
  }, []);
  const { pressure = 0, relativeAltitude = 0 } = bardata;

  //  ------------------End  Code Barometer--------------


  return (
    <ScrollView>

    <View style={styles.container}>

      <View style={styles.header}>
        <Image
          style={{
            width: 100,
            height: 100,
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
          Sensor Demos
        </Text>

      </View>
      {/* <Text style={{fontSize:26,fontFamily:'SourceSansProBold'}}>: Sensor Demos:</Text> */}
      <Text style={{ textAlign: 'center', fontFamily: 'SourceSansProBold', fontSize: 26, marginTop: 20 }}>1. Accelerometer:</Text>
      <Text style={{ textAlign: 'center', fontFamily: 'SourceSansProRegular', fontSize: 16 }}>Gs where 1 G = 9.81 m s^-2</Text>
      <Text style={{ textAlign: 'center', fontFamily: 'SourceSansProRegular', fontSize: 16, marginTop: 10 }}>
        X: {round(x)} Y: {round(y)} Z: {round(z)}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>
          <Text style={styles.buttoncolor}>{subscription ? 'On' : 'Off'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
          <Text style={styles.buttoncolor}>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text style={styles.buttoncolor}>Fast</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.container}>
        <Text style={{ textAlign: 'center', fontFamily: 'SourceSansProBold', fontSize: 26, marginTop: 20 }}>2. Magnetometer:</Text>
        <Text style={{ textAlign: 'center', fontFamily: 'SourceSansProRegular', fontSize: 16, marginTop: 20 }}>
          {/* L: {round(l)} M: {round(m)} N: {round(n)} */}
          X: {round(gX)} Y: {round(gY)} Z: {round(gZ)}
          {/* {Mx} */}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={Megsubscription ? _megunsubscribe : _megsubscribe} style={styles.button}>
            <Text style={styles.buttoncolor}>{Megsubscription ? 'On' : 'Off'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={_megslow} style={[styles.button, styles.middleButton]}>
            <Text style={styles.buttoncolor}>Slow</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={_megfast} style={styles.button}>
            <Text style={styles.buttoncolor} >Fast</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', fontFamily: 'SourceSansProBold', fontSize: 26, marginTop: 20 }}>3. Gyroscope:</Text>
        <Text style={{ textAlign: 'center', fontFamily: 'SourceSansProRegular', fontSize: 16, marginTop: 20 }}>
          {/* L: {round(l)} M: {round(m)} N: {round(n)} */}
          X: {round(l)} Y: {round(m)} Z: {round(n)}
          {/* {Mx} */}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={Megsubscription ? _megunsubscribe : _megsubscribe} style={styles.button}>
            <Text style={styles.buttoncolor}>{Megsubscription ? 'On' : 'Off'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={_megslow} style={[styles.button, styles.middleButton]}>
            <Text style={styles.buttoncolor}>Slow</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={_megfast} style={styles.button}>
            <Text style={styles.buttoncolor} >Fast</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* marginTop: Dimensions.get('screen').height * 0.25,
        marginLeft: Dimensions.get('screen').height * 0.18, */}
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', fontFamily: 'SourceSansProBold', fontSize: 26, marginTop: Dimensions.get('screen').height * 0.03 }} >4. Barometer:</Text>
        <Text style={{ textAlign: 'center', fontFamily: 'SourceSansProRegular', fontSize: 16, marginTop: Dimensions.get('screen').height * 0.01 }}>Pressure: {pressure * 100} Pa</Text>
        <Text style={{ textAlign: 'center', fontFamily: 'SourceSansProRegular', fontSize: 16, marginTop: Dimensions.get('screen').height * 0.02 }}>
          Relative Altitude:{''}
          {Platform.OS === 'ios' ? `${relativeAltitude} m` : `Only available on iOS`}
        </Text>
        <View style={styles.buttonContainer}>
          {/* <TouchableOpacity onPress={barSubscription} style={styles.button}>
          <Text>Toggle</Text>
        </TouchableOpacity> */}
        </View>
      </View>
      
    </View>
    </ScrollView>
  );
}

function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingHorizontal: 10,
  },
  text: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 25,


  },
  sensor: {
    marginTop: 45,
    paddingHorizontal: 10,
  },
  buttoncolor: {
    color: 'white'
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
    marginTop: -20,
    fontFamily: 'SourceSansProBold'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 10,
    marginLeft: 10,
    marginRight: 10

  },
  middleButton: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: '#ccc',
    marginLeft: 10,
    marginRight: 10
  },
});

