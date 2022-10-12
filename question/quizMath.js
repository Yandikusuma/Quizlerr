import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import questions from '../constants/dummy';
import MathQuestion from './mathQuestion';
import { writeScore } from '../store/storeScore';
import { SIZES } from '../constants';

const QuizMath = (props) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [showNext, setShowNext] = useState(false);
    const [score, setScore] = useState(0)
    const [selected, setSelected] = useState({});

    const handleQuizTraversal = () => {
      if (questionIndex === questions['questions'].length - 1) {
        writeScore(`${score}`);
        props.navigation.navigate('Result', {score: score});
        return
      }
      setQuestionIndex((questionIndex) => questionIndex +1);
      setShowNext(false);
    }

    const is_next = () => {
      setShowNext(true);
    }

    const get_Score = (score) => {
      setScore(score);
    }

    const getSelected = (selected) => {
      setSelected(selected);
  }

    
  return (
    <View style={{flex: 1, backgroundColor: '#8338ec'}}>
      <MathQuestion 
        question={questions['questions'][questionIndex]['questionText']}
        index={questionIndex}
        answers={questions['questions'][questionIndex]['answers']}
        image={questions['questions'][questionIndex]['img']}
        is_next={is_next}
        getScore={get_Score}
        length={questions['questions'].length} 
        get_selected={getSelected}
      />
            <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 15}}>
                <View style={{marginRight: SIZES.standar, }}>
                        {
                            showNext && questionIndex > 0 || (selected[questionIndex]!== undefined && questionIndex > 0) ? 
                            <View style={{width: 100}}>
                              <Button title="Back " onPress={() => setQuestionIndex((index) => index - 1)} />
                            </View> : null
                        }
                </View>
                {
                    showNext || selected[questionIndex] !== undefined ? 
                    <View style={{width: 100}}>
                        <Button title={questionIndex === questions['questions'].length - 1 ? 'end ' : 'next'} onPress={handleQuizTraversal} />
                    </View> : null
                }
            </View>
    </View>
  )
}

export default QuizMath