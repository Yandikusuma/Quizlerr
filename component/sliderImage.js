import React from 'react';
import { View, Text, Image } from 'react-native';
import { SIZES, SHADOWS } from '../constants';

const SliderImage = () => {
  return (
    <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
      <Image 
        source={{ uri: 'https://img.freepik.com/free-vector/did-you-know-facts_1017-30768.jpg?w=740&t=st=1665388842~exp=1665389442~hmac=18795d6551b124b9a2ac9f5c7fa17966883aaa9822bcbb91ec4d844a25fbf0ee' }}
        style={{
            width: '100%',
            height: 300,
            resizeMode: 'cover',
            borderRadius: SIZES.font,
        }}
      />
    </View>
  )
}

export default SliderImage