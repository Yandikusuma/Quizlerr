import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, SIZES, SHADOWS, MATHQuestion } from '../constants';



const MathQuestion = (props) => {
    console.log(props.image)
    
  return (
    <View style={{flex: 1, backgroundColor: '#8338ec'}}>
        <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20}}>
            <Text
                style={{
                    fontSize: SIZES.extraLarge,
                    fontFamily: 'Silkscreen-Bold',
                    color: COLORS.button
                }}
            >MATH</Text>
        </View>
        <View style={{marginHorizontal: 15}}>
            <Image 
                source={props.image}
                style={{
                  width: '100%',
                  height: 250  
                }}
            />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 15}}>
            <Text
                style={{
                    fontSize: SIZES.extraLarge,
                    fontFamily: 'Kanit-Bold',
                    color: COLORS.white
                }}
            >Question {props.index + 1}</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 15}}>
            <Text
                style={{
                    fontSize: SIZES.large,
                    fontFamily: 'RobotoSlab-VariableFont_wght',
                    color: COLORS.white
                }}
            >{props.question}</Text>
        </View>
        <View style={{marginHorizontal: SIZES.standar}}>
            {
                props.answers.map((ans, i) => {
                    return(
                    <TouchableOpacity
                        key={i}
                        style={{
                            backgroundColor: COLORS.white,
                            justifyContent: 'center',
                            padding: SIZES.standar,
                            borderRadius: SIZES.base,
                            marginBottom: SIZES.standar,
                            ...SHADOWS.light,

                        }}
                
                     >
                        <Text
                            style={{
                                fontSize: SIZES.medium,
                                fontFamily: 'Kanit-Bold',
                                color: COLORS.secondary
                            }}
                        >{ans['label']}</Text>
                     </TouchableOpacity>
                    )
                })
            }
            
            
        </View>
    </View>
  )
}

export default MathQuestion