import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class StopWatch extends React.Component {
  constructor(){
    super()
      this.state={
    buttonColor:"red",
    buttonIndex:"",
    }
  }
start(){
this.setState({
  buttonColor:"blue",
})
}
if(){ 

}
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.numtext}>1</Text>
        </View>
        <View style={styles.touchcontainer}>
          <TouchableOpacity style={[styles.touchscreen,{borderColor:this.state.buttonColor,}]} onPress={()=> this.start}>
            <Text style={styles.timer}>start</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchscreen}>
            <Text style={styles.timer}>reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchscreen}>
            <Text style={styles.timer}>stop</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timer: {
    alignSelf: 'center',
    fontSize: 30,
  },

  touchcontainer: {
    flexDirection: 'row',
    flex: 1,
  },
  touchscreen: {
    alignSelf: 'center',
    fontSize: 30,
    justifyContent: 'center',
    marginTop: 80,
    borderWidth: 7,
    backgroundColor: 'lightgray',
    borderColor: 'darkgray',
    borderRadius: 18,
    width: '30%',
    flex: 0.3,
  },
  numtext: {
    alignSelf: 'center',
    marginTop: 50,
    borderWidth: 6,
    flex: 0.7,
    fontSize: 50,
    width: 150,
    borderRadius: 20,
    borderColor: '#737373',
  },
  container: {},
});
