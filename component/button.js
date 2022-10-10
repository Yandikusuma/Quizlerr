import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../constants';

export const ProfileButton = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity
        style={{ 
            width: SIZES.extraBig,
            height: SIZES.extraBig,
            backgroundColor: COLORS.secondary,
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
            style={{ width: SIZES.big, height: SIZES.big }}
        />
    </TouchableOpacity>
  )
}

export const BurgerButton = ({imgUrl, handlePress, ...props}) => {
    return (
      <TouchableOpacity
          style={{ 
              width: SIZES.extraBig,
              height: SIZES.extraBig,
              alignItems: 'center',
              justifyContent: 'center',
              ...props
          }}
          onPress={handlePress}
      >
          <Image 
              source={imgUrl}
              resizeMode="contain"
              style={{ width: SIZES.extraLarge, height: SIZES.extraLarge }}
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
              paddingVertical: SIZES.small,
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

