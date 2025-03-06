import React, {useEffect, useState} from 'react';
import {styles} from './SuddestedActivitystyles';
import {Text,View,TouchableOpacity,} from 'react-native';
import Selected from '../../store/Store';
export default function SuggestedActivities() {
  const {darkmode} = Selected();
  const {settotal,total} = Selected();
  const [count, setCount] = useState(0);
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [d, setD] = useState(false);
  const [e, setE] = useState(false);
  function select(id) {
    switch (id) {
      case 1:
        setA(prevA => !prevA);
        break;
      case 2:
        setB(prevB => !prevB);
        break;
      case 3:
        setC(prevC => !prevC);
        break;
      case 4:
        setD(prevD => !prevD);
        break;
      case 5:
        setE(prevE => !prevE);
        break;
      default:
        break;
    }
    setCount(() => {
      let newCount = 0;
      if (a) newCount++;
      if (b) newCount++;
      if (c) newCount++;
      if (d) newCount++;
      if (e) newCount++;
      if (id === 1 && !a) newCount++;
      if (id === 2 && !b) newCount++;
      if (id === 3 && !c) newCount++;
      if (id === 4 && !d) newCount++;
      if (id === 5 && !e) newCount++;
      if (id === 1 && a) newCount--;
      if (id === 2 && b) newCount--;
      if (id === 3 && c) newCount--;
      if (id === 4 && d) newCount--;
      if (id === 5 && e) newCount--;
      return newCount;
    });
  }
  useEffect(() => {
    settotal(count);
  }, [count, settotal]);
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {backgroundColor: darkmode ?'white' : 'rgb(50, 50, 50)'},
        ]}>
        <Text style={[styles.text, {color: darkmode ? 'black' : 'white'}]}>
          Suggested Activities
        </Text>
        <View style={styles.row1}>
          <TouchableOpacity>
            <Text
              style={[
                styles.text1,
                {
                  backgroundColor: a ? '#6d24e9' : 'rgba(173, 173, 173, 0.4)',
                  color: a ? 'white' : 'black',
                  color: darkmode ? 'black' : 'white',
                },
              ]}
              onPress={() => select(1)}>
              🏛️ Visit Museums
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[
                styles.text2,
                {
                  backgroundColor: b ? '#6d24e9' : 'rgba(173, 173, 173, 0.4)',
                  color: b ? 'white' : 'black',
                  color: darkmode ? 'black' : 'white',
                },
              ]}
              onPress={() => select(2)}>
              🏖️ Beach Day
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
          <TouchableOpacity>
            <Text
              style={[
                styles.text3,
                {
                  backgroundColor: c ? '#6d24e9' : 'rgba(173, 173, 173, 0.4)',
                  color:darkmode?"black":"white",
                  color: c ? 'white' : 'black',
                  color:darkmode?"black":"white"
                },
              ]}
              onPress={() => select(3)}>
              📰 Local Cuisine Tour
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row3}>
          <TouchableOpacity>
            <Text
              style={[
                styles.text4,
                {
                  backgroundColor: d ? '#6d24e9' : 'rgba(173, 173, 173, 0.4)',
                  color: d ? 'white' : 'black',
                  color:darkmode?"black":"white"
                },
              ]}
              onPress={() => select(4)}>
              🛍️ Shopping
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[
                styles.text5,
                {
                  backgroundColor: e ? '#6d24e9' : 'rgba(173, 173, 173, 0.4)',
                  color: e ? 'white' : 'black',
                  color:darkmode?"black":"white",
                },
              ]}
              onPress={() => select(5)}>
              👢 Hiking
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
