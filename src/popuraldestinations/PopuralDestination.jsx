import React from 'react'
import { Image, Text, View,Switch, ScrollView,TouchableOpacity } from 'react-native'
import { styles } from './PopuralDestinationstyles'
import Selected from '../../store/Store';
export default function PopuralDestination() {
  const {darkmode}=Selected()
  return (
    <View style={styles.container}>
       <View style={[styles.box,{backgroundColor:darkmode?"white":"rgb(50, 50, 50)"}]}>
        <Text style={[styles.text ,{color:darkmode?"black":"white"}]}>Popular Destination</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >
          <View style={styles.box1}>
            <TouchableOpacity>
            <Image source={require("../../assets/paris.jpeg")} style={styles.image1} /></TouchableOpacity>
            <Text style={[styles.text1 ,{color:darkmode?"black":"white"}]}>Paris</Text>
          </View>
          <View style={styles.box1}>
          <TouchableOpacity>
            <Image source={require("../../assets/newyork.jpg")} style={styles.image1} /></TouchableOpacity>
            <Text style={[styles.text1 ,{color:darkmode?"black":"white"}]}>New York</Text>
          </View>
          <View style={styles.box1}>
          <TouchableOpacity>
            <Image source={require("../../assets/tokiyo.jpeg")} style={styles.image1} /></TouchableOpacity>
            <Text style={[styles.text1 ,{color:darkmode?"black":"white"}]}>Tokoyo</Text>
          </View>
        </ScrollView>
       </View>
    </View>
  )
}
