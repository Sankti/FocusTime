import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const minutesToMilliseconds = (minutes) => minutes * 1000 * 60;

export const Countdown = ({
  minutes = 20,
  isPaused,
}) => {
  const [ milliseconds, setMilliseconds ] = useState(minutesToMilliseconds(minutes));

  const minute = Math.floor(milliseconds / 1000 / 60) % 60;
  const second = Math.floor(milliseconds / 1000) % 60;

  return <Text style={styles.text}>{minute}:{second}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xl,
    fontWeight: "bold",
    color: colors.white,
    padding: spacing.large,
    backgroundColor: 'rgba(94, 132, 226, 0.3)'
  }
});