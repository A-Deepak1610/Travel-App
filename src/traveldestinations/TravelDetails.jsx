import React, { useState } from 'react'
import {  Text, View,TextInput,KeyboardAvoidingView } from 'react-native'
import { styles } from './TravelDetailsstyless'
import Selected from '../../store/Store';
export default function TravelDetails() {
  const {darkmode,date,setdate,setdestination,destination}=Selected()
  function Datee(text){
    setdate(text)
  }
  function Destination(text){ 
    setdestination(text)
  }
  return (
    <View style={styles.container}>
           <View style={[styles.box,{backgroundColor:darkmode?"white":"rgb(50, 50, 50)"}]}>
            <Text style={[styles.text,{color:darkmode?"black":"white"}]}>Travel Details</Text>
            <KeyboardAvoidingView behavior='padding'>
            <View style={[styles.destination,{backgroundColor:darkmode?"white":"rgb(88, 88, 88)"}]}>
              <Text style={styles.destinationtext}>Destination</Text>
              <TextInput style={[styles.input,{color:darkmode?"black":"white"}]} onChangeText={Destination} value={destination} placeholder='Where do you want to go?'placeholderTextColor={darkmode?"gray":"white"}  />
            </View>
            <View style={[styles.date,{backgroundColor:darkmode?"white":"rgb(80, 80, 80)"}]}>
              <Text style={styles.datetext} >Travel Date</Text>
              <TextInput style={[styles.input,{color:darkmode?"black":"white"}]} placeholder='MM/DD/YYYY' placeholderTextColor={darkmode?"gray":"white"} onChangeText={Datee} value={date} />
            </View>
            </KeyboardAvoidingView>
           </View>
        </View>
  )
}
