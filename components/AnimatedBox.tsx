import React from 'react';
import { View, Button } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

export default function AnimatedBox() {

  const translateX = useSharedValue(0);
  console.log(translateX.value)
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateX.value }],
    };
  });

  const moveBox = () => {
    translateX.value = withSpring(translateX.value === 0 ? 150 : 0); 
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View style={[{ width: 100, height: 100, backgroundColor: 'blue' }, animatedStyle]} />
      <Button title="Move Box" onPress={moveBox} />
    </View>
  );
}
