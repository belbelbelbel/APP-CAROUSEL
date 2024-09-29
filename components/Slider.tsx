import { View, SafeAreaView } from 'react-native';
import React from 'react';
import { ImageSlider } from '@/constants/Imagedata';
import SliderItem from './SliderItem';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { useWindowDimensions } from 'react-native';
import Pagination from './Pagination'; // Import the Pagination component

export default function Slider() {
    const scrollX = useSharedValue(0); // Shared value for scrolling
    const { width } = useWindowDimensions(); // Get device width

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (e) => {
            scrollX.value = e.contentOffset.x;
        },
    });

    return (
        <SafeAreaView className="h-full">
            <View className="justify-center  flex items-center">
                <Animated.FlatList
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={ImageSlider}
                    keyExtractor={(item) => item.name}
                    onScroll={scrollHandler}
                    renderItem={({ item, index }) => (
                        <SliderItem item={item} index={index} scrollX={scrollX} />
                    )}
                />
                <View style={{position:"relative",top:-80,width: "50%",marginHorizontal:'auto'}}>
                    <Pagination scrollX={scrollX} data={ImageSlider} width={width} />
                </View>
            </View>
        </SafeAreaView>
    );
}
