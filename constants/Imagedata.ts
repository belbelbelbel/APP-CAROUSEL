import { ImageSourcePropType } from "react-native";

export type ImageSliderProps = {
    name: string;
    icon: ImageSourcePropType
    description: string; 
}

export const ImageSlider = [
    {
      name: 'Delivery',
      icon: require('../assets/images/carousel1.jpg'),
      description: 'Fast and reliable delivery service right to your doorstep.'
    },
    {
      name: 'Shipping',
      icon: require('../assets/images/carousel3.jpg'),
      description: 'Global shipping options for all your goods.'
    },
    {
      name: 'Payment',
      icon: require('../assets/images/carousel4.jpg'),
      description: 'Secure and easy payment methods for hassle-free transactions.'
    },
    {
      name: 'Help',
      icon: require('../assets/images/carousel5.jpg'),
      description: '24/7 customer support for all your inquiries and issues.'
    },
    {
      name: 'Returns',
      icon: require('../assets/images/carousel4.jpg'), // Add a new image path
      description: 'Easy return process for a hassle-free experience.'
    },
    {
      name: 'Tracking',
      icon: require('../assets/images/carousel3.jpg'), // Add a new image path
      description: 'Real-time tracking of your shipments and orders.'
    },
  ]
