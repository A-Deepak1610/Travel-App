import React, {useState} from 'react';
import {styles} from './ExploreTripsstyles';
import {Text, View,TouchableOpacity,Alert,ActivityIndicator,Modal, Image,SectionList} from 'react-native';
import Selected from '../../store/Store';
export default function ExploreTrips() {
  const {
    total,
    settotal,
    darkmode,
    date,
    setdate,
    destination,
    setdestination,
  } = Selected();
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
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
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
        <View style={styles.box1}>
          <Text
            style={[
              styles.text1,
              {backgroundColor: darkmode ? '#00c2b2' : '#b987fb'},
            ]}>
            Popural Destinations
          </Text>
          <Text style={[styles.text2, {color: darkmode ? 'black' : 'white'}]}>
            Bali
          </Text>
          <Text style={[styles.text3, {color: darkmode ? 'black' : 'white'}]}>
            Santorini
          </Text>
          <Text style={[styles.text4, {color: darkmode ? 'black' : 'white'}]}>
            Maldives
          </Text>
          <Text style={[styles.text5, {color: darkmode ? 'black' : 'white'}]}>
            Venice
          </Text>
        </View>
        <View style={styles.box2}>
          <Text
            style={[
              styles.text1,
              {backgroundColor: darkmode ? '#00c2b2' : '#b987fb'},
            ]}>
            Adventure Trips
          </Text>
          <Text style={[styles.text2, {color: darkmode ? 'black' : 'white'}]}>
            Hiking in Alps
          </Text>
          <Text style={[styles.text3, {color: darkmode ? 'black' : 'white'}]}>
            Safari in Kenya
          </Text>
          <Text style={[styles.text4, {color: darkmode ? 'black' : 'white'}]}>
            Driving in Great Barrier Reef
          </Text>
        </View>
        <View style={styles.box3}>
          <Text
            style={[
              styles.text1,
              {backgroundColor: darkmode ? '#00c2b2' : '#b987fb'},
            ]}>
            Cultural Experiences
          </Text>
          <Text style={[styles.text2, {color: darkmode ? 'black' : 'white'}]}>
            Kyoto Temples
          </Text>
          <Text style={[styles.text3, {color: darkmode ? 'black' : 'white'}]}>
            Marrakech Media
          </Text>
          <Text style={[styles.text4, {color: darkmode ? 'black' : 'white'}]}>
            Angkor Wat
          </Text>
        </View>
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
