import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { COLORS, SIZES } from '../constants'
import { readScore } from '../store/storeScore'


const Result = ({navigation}) => {
    const [scoreString, setScoreString] = useState(null);

    const getScoreFromFile = async () => {
        const scoreString = await readScore();
        setScoreString(scoreString);
    }

    useEffect(() => {
        getScoreFromFile();
    })
  return (
    <View style={{ flex: 1 }}>
        <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20}}>
            <Text
                style={{
                    fontSize: SIZES.extraLarge,
                    fontFamily: 'Silkscreen-Bold'
                }}
            >result</Text>
        </View>
        {(scoreString !== 'noscore' && scoreString !== null) ?
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                <Text
                    style={{
                        fontSize: SIZES.large,
                        fontFamily: 'Kanit-Bold',
                        color: COLORS.secondary
                    }}
                >Score: {scoreString}</Text>
            </View>  : null
        }
        <View style={{marginVertical: 50, flex: 1}}>
            <Image 
                source={{ uri: 'https://img.freepik.com/free-vector/portrait-man-woman-with-facepalm-gestures_10045-635.jpg?w=740&t=st=1665397436~exp=1665398036~hmac=e0dcd186c4b2fee68111ec9f220c776244dad7f1f42e2fcd6db1342f0e0676e7' }}
                style={{
                    width: '100%',
                    height: 300
                }}
            />
        </View>
        <View style={{marginVertical: 20}}>
            <TouchableOpacity
                style={{
                    backgroundColor: COLORS.button,
                    marginHorizontal: 15,
                    borderRadius: SIZES.small,
                    paddingVertical: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={() => navigation.navigate('UserLogin')}
            >
                <Text
                    style={{
                        color: COLORS.white,
                        fontSize: SIZES.medium,
                        fontFamily: 'Silkscreen-Bold'
                    }}
                >Go To Home</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Result