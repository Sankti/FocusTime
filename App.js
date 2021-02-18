import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Focus } from './src/features/focus/focus';
import { Timer } from './src/features/timer/Timer';

import { colors } from './src/utils/colors';

export default function App() {
  const [focusSubject, setFocusSubject] = useState("Hardcoded Activity - please change to null");

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer />
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
