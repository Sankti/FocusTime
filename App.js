import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Focus } from './src/features/focus/focus';
import { colors } from './src/utils/colors';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>Subject is set - this is a placeholder for the timer.</Text>
      ) : (
        <Focus addSubject={setFocusSubject} />
        )}
      <Text>{focusSubject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue
  },
});
