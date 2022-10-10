import React from 'react';
import { View, Text, Image } from 'react-native';
import { COLORS, SIZES, assets, SHADOWS } from '../constants';

const CardRank = () => {
  return (
    <View
        style={{
            flexDirection: 'row',
            backgroundColor: COLORS.white,
            borderRadius: SIZES.font,
            alignItems: 'center',
            justifyContent: 'space-between',
            ...SHADOWS.light,
            marginHorizontal: 15,
            marginVertical: SIZES.standar,
            paddingHorizontal: 20
        }}
    >
        <View
            style={{ flexDirection: 'row', paddingVertical: SIZES.standar, alignItems: 'center', justifyContent: 'center' }}
        >
            <Image 
                source={assets.king}
                style={{ width: 30, height: 30 }}
                
            />
            <View style={{ paddingLeft: SIZES.standar }}>
                <Text style={{ fontFamily: 'Kanit-Regular', color: COLORS.gray }}>Rank</Text>
                <Text style={{fontFamily: 'RobotoSlab-VariableFont_wght', color: COLORS.primary}}>116</Text>
            </View>
        </View>
        <View
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
        >
            <Image 
                source={assets.coin}
                style={{ width: 30, height: 30 }}
                
            />
            <View style={{ paddingLeft: SIZES.standar }}>
                <Text style={{ fontFamily: 'Kanit-Regular', color: COLORS.gray }}>Points</Text>
                <Text style={{fontFamily: 'RobotoSlab-VariableFont_wght', color: COLORS.primary}}>2.801</Text>
            </View>
        </View>
    </View>
  )
}

export default CardRank