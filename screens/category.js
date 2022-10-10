import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ButtonMath, ButtonSport } from '../component';
import { assets, COLORS, SIZES } from '../constants';

const Category = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#480ca8" }}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
            >
                <Image 
                    source={assets.leftarrow}
                    style={{width: 30, height: 30, marginLeft: SIZES.standar}}
                />
            </TouchableOpacity>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text
                    style={{ 
                        fontSize: SIZES.large,
                        fontFamily: 'Silkscreen-Bold',
                        color: COLORS.button,
                    }}
                >CHOOSE CATEGORY</Text>
            </View>
        </View>
        <View 
            style={{ 
                backgroundColor: COLORS.white, 
                marginVertical: 30, 
                marginHorizontal: SIZES.standar,
                borderRadius: SIZES.font,
                padding: SIZES.standar
            }}
        >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: SIZES.standar}}>
            <ButtonMath handlePress={() => navigation.navigate("QuizMath")}/>
            <ButtonSport />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: SIZES.standar }}>
            <ButtonMath />
            <ButtonSport />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <ButtonMath />
            <ButtonSport />
        </View>

      </View>
    </View>
  )
}

export default Category