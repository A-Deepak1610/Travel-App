import React, {useState} from 'react';
import {styles} from './ExploreTripsstyles';
import {Text, View,TouchableOpacity,Alert,ActivityIndicator,Modal, Image,SectionList} from 'react-native';
import Selected from '../../store/Store';
export default function ExploreTrips() {
  const {total,settotal,darkmode,date,setdate,destination,setdestination,} = Selected();
  const [loader, setloader] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  function palceOrder() {
    setloader(true);
    if (total == 0) {
      Alert.alert('Please select atleast one item');
      setloader(false);
      return;
    }
    setTimeout(oredrConfirm, 2000);
  }
  function oredrConfirm() {
    setloader(false);
    setModalVisible(true);
  }
  function closeModal() {
    setModalVisible(false);
    settotal(0);
  }
  const DATA = [
    {
      title: 'Popural Destinations',
      data: ['Bali', 'Santorini', 'Maldives','Venice'],
      text:['text1','text2','text3','text4','text5']
    },
    {
      title: 'Adventure Trips',
      data: ['Hiking in Alps', 'Safari in Kenya', 'Driving in Great Barrier Reef'],
    },
    {
      title: 'Cultural Experiences',
      data: ['Kyoto Temples', 'Marrakech Media', 'Angor Wat'],
    },
  ];
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              source={require('../../assets/tick.png')}
              style={styles.image}
            />
            <Text style={styles.modalText}>Trip Saved Sucessfully !</Text>
            <Text style={styles.modalText1}>
              Your trip to {destination} on {date} has been saved. With {total}{' '}
              planned activities.
            </Text>
            <Text style={styles.modalText2} onPress={closeModal}>
              Continue
            </Text>
          </View>
        </View>
      </Modal>
      <View
        style={[
          styles.box,
          {backgroundColor: darkmode ? 'white' : 'rgb(50, 50, 50)'},
        ]}>
        <Text style={[styles.text, {color: darkmode ? 'black' : 'white'}]}>
          Expore Trips Types
        </Text>
        <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.box1}> 
           <TouchableOpacity><Text style={styles.text2}>{item}</Text></TouchableOpacity> 
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.text1}>{title}</Text>
        )}
      />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={palceOrder}
        underlaycolor="rgb(189,143,254)">
        {loader ? (
          <ActivityIndicator size="large" color="white" style={styles.plan} />
        ) : (
          <Text style={styles.plan}>Plan My Trip </Text>
        )}
      </TouchableOpacity>
      <Text style={styles.footer}>
        Your dream vacctions is just a click away
      </Text>
    </View>
  );
}
