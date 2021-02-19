import React, {useState} from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

import { Focus } from './src/features/focus/focus';
import { Timer } from './src/features/timer/Timer';

import { spacing } from './src/utils/sizes';
import { colors } from './src/utils/colors';

export default function App() {
  const [focusSubject, setFocusSubject] = useState("Hardcoded Activity - please change to null");

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
    paddingTop: Platform.OS === 'ios' ? spacing.medium : spacing.large,
    backgroundColor: colors.darkBlue
  },
});
