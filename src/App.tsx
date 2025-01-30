import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './Screens/HomeScreen'

const App = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <HomeScreen />
    </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
  }
})