import { View, Text,Image } from 'react-native'
import React from 'react'
import { ImageSliderProps } from '@/constants/Imagedata'


export type ItemProps ={
    item: ImageSliderProps,
    index: number,
}
export default function SliderItem({item,index}:ItemProps | any) {
  return (
    <View  style={{width:'92%',marginHorizontal: 'auto',}} key={index}>
        <Image source={item.icon} style={{ width: '100%', height: 300, borderRadius: 15}} className='' />
      <Text className=''>{item.description}</Text>
    </View>
  )
}