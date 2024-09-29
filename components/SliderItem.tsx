import { View, Text, Image, useWindowDimensions } from 'react-native';
import React from 'react';
import { ImageSliderProps } from '@/constants/Imagedata';
import { Extrapolation, SharedValue, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

export type ItemProps = {
  item: ImageSliderProps;
  index: number;
  scrollX: SharedValue<number>;
};

export default function SliderItem({ item, index, scrollX }: ItemProps) {
  const { width } = useWindowDimensions(); 

  const rnAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.25, 0, width * 0.25],
            Extrapolation.CLAMP
          ),
        },
        {
          scaleY: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 15,
          width: width,
        },
        rnAnimatedStyles, 
      ]}
      key={index}
    >
      <Image source={item.icon} style={{ width: 270, height: 400, borderRadius: 15 }} />
      <Text className="text-[0.4rem]">{item.name}</Text>
    </Animated.View>
  );
}
