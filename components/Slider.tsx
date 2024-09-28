import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { ImageSlider } from '@/constants/Imagedata'
import SliderItem from './SliderItem'

export default function Slider() {
    return (
        <SafeAreaView className='h-full'>
            <View className='justify-center flex  items-center '>
                <FlatList
                showsVerticalScrollIndicator={false}
                    data={ImageSlider}
                    renderItem={({ item, index }) => (
                        <SliderItem item={item} index={index} />
                    )}
                />
            </View>
        </SafeAreaView>
    )
}