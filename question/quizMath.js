import React, { useState } from 'react';
import { View, Text } from 'react-native';
import questions from '../constants/dummy';
import MathQuestion from './mathQuestion';

const QuizMath = (props) => {
    const [questionIndex, setQuestionIndex] = useState(0);
  return (
      <MathQuestion 
        question={questions['questions'][questionIndex]['questionText']}
        index={questionIndex}
        answers={questions['questions'][questionIndex]['answers']}
        image={questions['questions'][questionIndex]['img']}
      />
  )
}

export default QuizMath