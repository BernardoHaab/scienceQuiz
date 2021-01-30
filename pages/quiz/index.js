import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import db from '../../db.json';
import QuizContainer from '../../src/components/QuizContainer';
import QuizBackground from '../../src/components/QuizBackground';
import Logo from '../../src/components/Logo';
import QuestionWidget from './QuestionWidget';
import LoadingWidget from './LoadingWidget';
import ResultWidget from './ResultWidget';

const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
};

export default function QuizPage() {
    const totalQuestions = db.questions.length;
    const [screenState, setScreenState] = useState(screenStates.LOADING);
    const [results, setResults] = useState([]);
    const [currentQuestionId, setCurrentQuestionId] = useState(0);
    const question = db.questions[currentQuestionId];
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            setScreenState(screenStates.QUIZ);
        }, 1000);
    }, []);

    function handleNextQuestion() {
        const nextQuestion = currentQuestionId + 1;
        if (nextQuestion < totalQuestions) {
            setCurrentQuestionId(nextQuestion);
        } else {
            setScreenState(screenStates.RESULT);
        }
    }

    function addResult(result) {
        setResults([...results, result]);
    }

    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <Logo />
                {screenState === screenStates.QUIZ && (
                    <QuestionWidget
                        question={question}
                        currentQuestionId={currentQuestionId}
                        totalQuestions={totalQuestions}
                        onSubmit={handleNextQuestion}
                        addResult={addResult}
                    />
                )}

                {screenState === screenStates.LOADING && <LoadingWidget />}

                {screenState === screenStates.RESULT
                    && <ResultWidget playerName={router.name} results={results} />}
            </QuizContainer>
        </QuizBackground>
    );
}
