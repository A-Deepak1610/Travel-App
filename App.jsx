import React from 'react';
import {Text, View, FlatList, StatusBar} from 'react-native';
import Header from './src/header/Header';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import PopuralDestination from './src/popuraldestinations/PopuralDestination';
import TravelDetails from './src/traveldestinations/TravelDetails';
import SuggestedActivities from './src/suggestedactivities/SuggestedActivities';
import ExploreTrips from './src/exporetrips/ExploreTrips';
import Selected from './store/Store';
export default function App() {
  const {darkmode, setdarkmode} = Selected();
  const DATA = [
    {key: 'Home', component: <Header />},
    {key: 'Popuraldestination', component: <PopuralDestination />},
    {key: 'TravelDetails', component: <TravelDetails />},
    {key: 'SuggestedActivities', component: <SuggestedActivities />},
    {key: 'ExploreTrips', component: <ExploreTrips />},
  ];
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView
          style={{
            backgroundColor: darkmode ? 'white' : 'rgb(14, 12, 14)',
            flex: 1,
          }}>
          <StatusBar
            backgroundColor={darkmode ? 'white' : 'black'}
            barStyle={darkmode ? 'dark-content' : 'black-content'}
          />
          <FlatList
            data={DATA}
            keyExtractor={item => item.key}
            renderItem={({item}) => item.component}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
