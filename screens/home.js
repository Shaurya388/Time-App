 import React from "react";
import {View, Text, StyleSheet , Styles, TouchableOpacity,} from 'react-native';


export default class Home extends React.Component{
   constructor() {
    super();
    this.stState;
  }
  render() {
    return(
      <View>
      <View style={styles.mainContainer}>
          <Text style={styles.watch}>Timer/StopWatch</Text>
          <TouchableOpacity
            style={styles.box}
            onPress={() => this.props.navigation.navigate('Timer')}>
            <Text style={styles.routeText}>Timer</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
              onPress={() => this.props.navigation.navigate('StopWatch')}>
            <Text style={styles.routeText}>StopWatch</Text>
          </TouchableOpacity>
        </View>
     </View>
    )
  }
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

