import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const minutesToMilliseconds = (minutes) => minutes * 1000 * 60;

const formatTime = (time) => time < 10 ? `0${time}` : time;

export const Countdown = ({
  minutes = 20,
  isPaused = true,
  onProgress,
  onEnd
}) => {
  const interval = React.useRef(null);

  const [ milliseconds, setMilliseconds ] = useState(null);

  const countDown = () => {
    setMilliseconds((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    })
  }
  
  useEffect(() => {
    setMilliseconds(minutesToMilliseconds(minutes));
  }, [minutes]);

  useEffect(() => {
    onProgress(milliseconds / minutesToMilliseconds(minutes));
    if(milliseconds === 0) {
      onEnd();
    }
  }, [milliseconds]);

  useEffect(() => {
    if(isPaused) {
      if(interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current)
  }, [isPaused])

  const minute = Math.floor(milliseconds / 1000 / 60) % 60;
  const second = Math.floor(milliseconds / 1000) % 60;

  return (
    <Text style={styles.text}>
      {formatTime(minute)}
      :
      {formatTime(second)}
    </Text>);
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: "bold",
    color: colors.white,
    padding: spacing.large,
    backgroundColor: 'rgba(94, 132, 226, 0.3)'
  }
});