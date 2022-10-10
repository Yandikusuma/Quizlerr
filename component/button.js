import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../constants';

export const ProfileButton = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity
        style={{ 
            width: 40,
            height: 40,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.extraLarge,
            alignItems: 'center',
            justifyContent: 'center',
            ...SHADOWS.light,
            ...props
        }}
        onPress={handlePress}
    >
        <Image 
            source={imgUrl}
            resizeMode="contain"
            style={{ width: 24, height: 24 }}
        />
    </TouchableOpacity>
  )
}

export const BurgerButton = ({imgUrl, handlePress, ...props}) => {
    return (
      <TouchableOpacity
          style={{ 
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              ...props
          }}
          onPress={handlePress}
      >
          <Image 
              source={imgUrl}
              resizeMode="contain"
              style={{ width: 24, height: 24 }}
          />
      </TouchableOpacity>
    )
}

export const StartButton = ({imgUrl, handlePress, ...props}) => {
    return (
      <TouchableOpacity
          style={{ 
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.buttonBlue,
              marginVertical: 20,
              marginHorizontal: 15,
              paddingVertical: 12,
              borderRadius: SIZES.small,
              ...SHADOWS.light,
              ...props

          }}
          onPress={handlePress}
      >
          <Text
            style={{ 
                fontSize: SIZES.medium,
                fontFamily: 'Silkscreen-Bold',
                color: COLORS.white
             }}
          >Start</Text>
      </TouchableOpacity>
    )
}

