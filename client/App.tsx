import React from 'react';
import RootNavigation from './navigation/Root';
import {NavigationContainer} from '@react-navigation/native';
import {ProductProvider} from './context';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <ProductProvider>
        <RootNavigation />
      </ProductProvider>
    </NavigationContainer>
  );
}

export default App;
