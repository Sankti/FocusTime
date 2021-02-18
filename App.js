import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Focus } from './src/features/focus/focus';
import { Timer } from './src/features/timer/Timer';

export default function App() {
  const [focusSubject, setFocusSubject] = useState("Hardcoded activity - change to null");

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject} />
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
    backgroundColor: "#252250"
  },
});
