import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, SafeAreaView, View, Image, ImageBackground, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Icons } from './assets/Themes';



/*added
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
*/
export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */



  return (
    <SafeAreaView style={styles.container}>
      {/* top flex box*/} 
      <View style={[styles.inside1]}>
        <Image source={Icons.menu.light} style={styles.icon}/>
          <Text
          style={{
            fontFamily: 'Sydney-Bold',
            fontSize: 32,
            
          }}>
          ensom
          </Text>
          <Image source={Icons.sun} style={styles.icon} />  
        </View>

        {/* middle flex box*/}
        <View style={[styles.inside2]}>
          <View style={[styles.bgimage]}>
            <ImageBackground source={Profiles.mtl.image} style= {{ width: 350, height: 400}} imageStyle={styles.image} >
              
              <View style={[styles.name]}> 
                <Text
                style={{
                  fontFamily: 'Sydney',
                  fontSize: 32,
                  color: 'white',
                  marginLeft: 10,
                  
                  
                }}>
                      MTL
                </Text>
              </View>
              <View style={[styles.distance]}>
                <Text
                style={{
                  fontFamily: 'Sydney',
                  fontSize: 12,
                  color: 'white',
                  marginLeft: 10,
                  marginBottom: 10
                }}>
                2 miles away
                </Text>
              </View>
            </ImageBackground>
          </View>

          <View style= {styles.hotTake}>
            {/* <View  style= {{width:'100%', justifyContent:'flex-start', alignItems:'flex-start', marginBottom: '-25%'}}>  */}
              <Text
                style={{
                  fontFamily: 'Sydney',
                  fontSize: 32,
                  color: 'black',
                  marginLeft: 10,
                  marginTop: 10,
                  
                  
                }}>
                My hottest take
              </Text>
            {/* </View>  */}

            <View style= {{flexDirection: 'row', width:'100%', justifyContent:'space-around', alignItems: 'center', height:100}}> 
              <Image source={Icons.player.light} style={{height: 50, width: 50, resizeMode:'contain'}}/>
              <Image source={Icons.audioWave.light} style={{height: 270, width: 270, resizeMode:'contain'}} />
            </View> 
          </View>
          
        </View>



        
        {/* nav flex box*/}
        
        <View style={[styles.inside3]}>
          <View style={[styles.inside31]}> 

            <Image source={Icons.discover.light} style={styles.icon}/>
            <Text
              style={{
                fontFamily: 'Sydney',
                fontSize: 12,
                color: 'white',
              }}>
              Discover
            </Text>
            
          </View>

          <View style={[styles.inside31]}> 
            <Image source={Icons.heart.light} style={styles.icon}/>
            <Text
              style={{
                fontFamily: 'Sydney',
                fontSize: 12,
                color: 'white',
              }}>
              Matches
            </Text>
          </View>
          
          <View style={[styles.inside31]}> 
            <Image source={Icons.messages.light} style={styles.icon}/>
              <Text
                style={{
                  fontFamily: 'Sydney',
                  fontSize: 12,
                  color: 'white',
                }}>
                Chat
              </Text>
          </View>
        </View>

    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    //somehow resize image to be smaller
    height: 40,
    width: 40,
    resizeMode: 'contain',
    paddingTop: '1%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    borderRadius: 7,
    
  },

  inside1: {
    flex: 1,
    height:'10%',
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Themes.light.bg,
  },
  inside2: {
    flex: 8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Themes.light.bg,
  },
  distance: { 
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  name: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10
  },

  bgimage: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '60%',
    shadowColor: Themes.light.shadows.shadowColor, 
    shadowOffset: Themes.light.shadows.shadowOffset, 
    shadowRadius: Themes.light.shadows.shadowRadius, 
    shadowOpacity: Themes.light.shadows.shadowOpacity
  },

  hotTake: {
    flexDirection: 'column', 
    height: 160, 
    width:350, 
    justifyContent:'space-around', 
    alignItems: 'flex-start', 
    backgroundColor:Themes.light.bgSecondary, 
    borderRadius: 20,
    marginBottom:'10%', 
    shadowColor: Themes.light.shadows.shadowColor, 
    shadowOffset: Themes.light.shadows.shadowOffset, 
    shadowRadius: Themes.light.shadows.shadowRadius, 
    shadowOpacity: Themes.light.shadows.shadowOpacity
  },
  


  inside3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
  },

  inside31: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  }

});
