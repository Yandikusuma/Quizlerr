import React from 'react';
import { View, Text, Image } from 'react-native';
import { ProfileButton, BurgerButton, StartButton } from '../component';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import CardRank from '../component/cardRank';
import SliderImage from '../component/sliderImage';


const Home = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{ 
            flexDirection: 'row', 
            justifyContent: "space-between", 
            paddingHorizontal: 10, 
            paddingVertical: 20 
        }}
      >
        <BurgerButton imgUrl={assets.menu}/>
        <Text style={{ 
            fontSize: SIZES.extraLarge,
            fontFamily: 'Silkscreen-Bold',
            color: COLORS.button,
         }}
        >Quizlerr</Text>
        <ProfileButton imgUrl={assets.man}/>
      </View>
      <View style={{marginVertical: 20}}>
        <View style={{ flexDirection: 'row', paddingHorizontal: 15}}>
            <Text
                style={{
                    fontSize: SIZES.medium,
                    fontFamily: 'Kanit-Bold',
                    color: COLORS.gray
                }}
            >Hi Yandik </Text>
            <Image 
                source={assets.goodbye}
                resizeMode="contain"
                style={{ width: 18, height: 18 }}
            />
        </View>
        <Text
            style={{
                fontSize: SIZES.extraBig,
                fontFamily: 'Kanit-Bold',
                paddingHorizontal: 15,
                color: COLORS.primary
            }}
        >Let's Play</Text>
      </View>
      <CardRank />
      <SliderImage />
      <StartButton />
    </View>
  )
}

export default Home