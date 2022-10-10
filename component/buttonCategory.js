import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES } from '../constants';

export const ButtonMath = ({handlePress}) => {
  return (
    <TouchableOpacity
        style={{
            backgroundColor: COLORS.buttonCategory,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: SIZES.font,
            padding: SIZES.big,
            marginRight: 10,
            flex: 1
        }}
        onPress={handlePress}
    >
        <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/897/897368.png' }}
            style={{width: 20, height: 20}}
        />
        <Text>Math</Text>
        <Text>21 Quizes</Text>
    </TouchableOpacity>
  )
}

export const ButtonSport = () => {
    return (
      <TouchableOpacity
          style={{
              backgroundColor: COLORS.buttonCategory,
              justifyContent: 'center',
              alignItems: 'center',
              padding: SIZES.big,
              borderRadius: SIZES.font,
              flex: 1
          }}
      >
          <Image 
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/897/897368.png' }}
              style={{width: 20, height: 20}}
          />
          <Text>Math</Text>
          <Text>21 Quizes</Text>
      </TouchableOpacity>
    )
  }
