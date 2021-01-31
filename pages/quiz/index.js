import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import db from '../../db.json';
import QuizContainer from '../../src/components/QuizContainer';
import QuizBackground from '../../src/components/QuizBackground';
import Logo from '../../src/components/Logo';
import QuestionWidget from '../../src/screens/quiz/components/QuestionWidget';
import LoadingWidget from '../../src/screens/quiz/components/LoadingWidget';
import ResultWidget from '../../src/screens/quiz/components/ResultWidget';

const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
};

function QuizPage({ dbQuestions, dbBackground }) {
    const totalQuestions = dbQuestions.length;
    const [screenState, setScreenState] = useState(screenStates.LOADING);
    const [results, setResults] = useState([]);
    const [currentQuestionId, setCurrentQuestionId] = useState(0);
    const question = dbQuestions[currentQuestionId];
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
        <QuizBackground backgroundImage={dbBackground}>
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

QuizPage.defaultProps = {
    dbQuestions: db.questions,
    dbBackground: db.bg,
};

QuizPage.propTypes = {
    dbQuestions: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        answer: PropTypes.number.isRequired,
        alternatives: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    })),
    dbBackground: PropTypes.string,
};

export default QuizPage;
