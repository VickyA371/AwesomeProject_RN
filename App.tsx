import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

// ** Navigators
import RootNavigation from './src/navigation';

// ** MISC
import colors from './src/constants/colors';

const App = () => {
  return (
    <SafeAreaProvider style={styles.rootContainer}>
      <RootNavigation />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default App;
