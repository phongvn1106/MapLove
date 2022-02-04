import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import img from './assets/images/test.jpg'
export default function App() {

  return (
    <View style={styles.container}>
      {/* <CircularProgress value={58} /> */}

      <Image
        source={{ uri: 'https://updatenaw.com/wp-content/uploads/2022/01/HD-wallpaper-valentines-cards-Love-Romance-Valentines-Day-Heart-Vector-Abstract-Artistic-Free-iphone-wallpaper.jpg' }}
        style={styles.stretch} />

      {/* <Image
        source={{ uri: 'https://mcdn2-coolmate.cdn.vccloud.vn/uploads/September2021/true-love-real-love.jpg' }}
        style={styles.loveLeft} /> */}
      <Image
        source={require('./assets/images/right.jpg')}
        style={styles.loveRight} />

      <View style={styles.loveLeft}>
        <ProgressCircle
          percent={30}
          radius={65}
          borderWidth={5}
          color="aqua"
          shadowColor="white"
          bgColor="white"

        >
          {/* <Text style={{ fontSize: 18 }}>56%</Text> */}
          <Image style={styles.loveLeftCustom}
           source={require('./assets/images/left.jpg')}
          />

        </ProgressCircle>
      </View>

      {/* <Text>Open up App.js to sta!</Text> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  stretch: {
    flex: 1,
    resizeMode: 'cover'
  },
  loveLeft: {
    position: 'absolute',
    width: 130,
    height: 130,
    bottom: 200,
    left: 30,
    borderRadius: 65,
    // borderColor: 'white',
    // borderWidth: 5
  },
  loveRight: {
    position: 'absolute',
    width: 130,
    height: 130,
    bottom: 200,
    right: 30,
    borderRadius: 65,
    borderColor: 'white',
    borderWidth: 5
  },
  loveLeftCustom: {
    width: 130,
    height: 130,
  }
});
