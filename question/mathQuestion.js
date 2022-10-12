import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, SIZES, SHADOWS, MATHQuestion } from '../constants';



const MathQuestion = (props) => {
    const [selected, setSelected] = useState({});
    const [score, setScore] = useState({});

    useEffect(() => {
        var arr = Object.values(score)
        let temp = 0;
        for (let i = 0; i < arr.length; i++) {
            temp = temp + arr[i]
        }
        final_score = temp
        props.getScore(final_score);
        props.get_selected(selected)
    }, [score, props.index])

    var final_score;
    const handleNext = async (selectedAns, achieved_score) => {
        setSelected({ ...selected, [props.index]: selectedAns });
        setScore({ ...score, [props.index]: achieved_score });
        props.is_next();
    }
    
    
  return (
    <View>
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
                source={{ uri:props.image }}
                style={{
                  width: '100%',
                  height: 180 
                }}
            />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 10}}>
            <Text
                style={{
                    fontSize: SIZES.large,
                    fontFamily: 'Kanit-Bold',
                    color: COLORS.gray,
                    fontWeight: '1000'
                }}
            >Question {props.index + 1}</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10, marginHorizontal: SIZES.standar}}>
            <Text
                style={{
                    fontSize: SIZES.large,
                    fontFamily: 'RobotoSlab-VariableFont_wght',
                    color: COLORS.white,
                   
                }}
            >P: {props.question}</Text>
           
        </View>
        <View style={{marginHorizontal:SIZES.standar, marginVertical: SIZES.standar}}>
                <Text
                    style={{
                        fontSize: SIZES.medium,
                        fontFamily: 'RobotoSlab-VariableFont_wght',
                        fontWeight: '800',
                        color: COLORS.white
                    }}
                >Selected Answer: {selected[props.index] === undefined ? <Text>_________</Text> : selected[props.index]} </Text>
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
                            padding: SIZES.base,
                            borderRadius: SIZES.base,
                            marginBottom: SIZES.standar,
                            ...SHADOWS.light,

                        }}
                        onPress={handleNext.bind(this, ans['label'], ans['value'])}
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