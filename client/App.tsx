import React from 'react';
import {SafeAreaView} from 'react-native';
import RootNavigation from './navigation/Root';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
  );
}


export default App;
