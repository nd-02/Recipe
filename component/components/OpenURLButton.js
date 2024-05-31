import React, { useCallback } from 'react';
import { Linking, Pressable, View, Alert } from 'react-native';

const OpenURLWrapper = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <Pressable onPress={handlePress}>
      <View>{children}</View>
    </Pressable>
  );
};

export default OpenURLWrapper;
