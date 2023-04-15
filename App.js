import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Home from './screens/home';
import StopWatch from './screens/stopWatch';
import Timer from './screens/Timer';

const Stack = createStackNavigator();

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.mainContainer}>
          <Text style={styles.watch}>Timer/StopWatch</Text>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('Timer')}>
            <Text style={styles.routeText}>Timer</Text>
          </TouchableOpacity>

         <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('StopWatch')}>
            <Text style={styles.routeText}>StopWatch</Text>
          </TouchableOpacity>
        </View>
        </View>

        );
     }
}
 
function MyStack(){
    return(
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="StopWatch" component={StopWatch} />
            <Stack.Screen name="Timer" component={Timer} />
          </Stack.Navigator>
         )  
      }

export default function App() {
  return(
    <NavigationContainer> 
    <MyStack/>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  watch: {
    alignSelf: 'center',
    fontSize: 25,
  },
  box: {
    flex: 1,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'lightgray',
    width: 200,
    height: 200,
  },
  routeText: {
    fontSize: 29,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 75,
    paddingLeft: 30,
  },
  mainContainer: {},
});
