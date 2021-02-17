import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [tmpItem, setTmpItem] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: spacing.medium }}
            onSubmitEditing={
              ({ nativeEvent }) => {
                setTmpItem(nativeEvent.text)
              }}
          />
          <RoundedButton size={50} title="+" onPress={() => {addSubject(tmpItem)}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: spacing.medium,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: fontSizes.large,
  },
  inputContainer: {
    paddingTop: spacing.medium,
    flexDirection: 'row',
    alignItems: 'center'
  },
});
