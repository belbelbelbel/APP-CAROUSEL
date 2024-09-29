import React from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle,SharedValue, interpolate, Extrapolation } from 'react-native-reanimated';

type PaginationProps = {
  scrollX: SharedValue<number>;
  data: any[];
  width: number;
};

export default function Pagination({ scrollX, data, width }: PaginationProps) {
  return (
    <View style={{ flexDirection: 'row', marginTop: 20 }}>
      {data.map((_, index) => {
        const animatedDotStyle = useAnimatedStyle(() => {
          const dotWidth = interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [10, 20, 10], 
            Extrapolation.CLAMP
          );

          const opacity = interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.5, 1, 0.5],
            Extrapolation.CLAMP
          );

          return {
            width: dotWidth,
            opacity: opacity,
          };
        });
        return (
          <Animated.View
            key={index}
            style={[
              {
                height: 10,
                borderRadius: 5,
                backgroundColor: '#333',
                marginHorizontal: 5,
              },
              animatedDotStyle,
            ]}
          />
        );
      })}
    </View>
  );
}
