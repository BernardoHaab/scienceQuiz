import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import Widget from '../../../components/Widget';
import Button from '../../../components/Button';
import AlternativesForm from '../../../components/AlternativesForm';
import BackLinkArrow from '../../../components/BackLinkArrow';

function QuestionWidget({
    question,
    currentQuestionId,
    totalQuestions,
    onSubmit,
    addResult,
}) {
    const [selectedAlternative, setSelectedAlternative] = useState(undefined);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [buttonText, setButtonText] = useState('Próxima');
    const hasSelectedAlernative = selectedAlternative !== undefined;
    const questionId = `question__${currentQuestionId}`;

    function handleSelectAternative(alternativeIndex) {
        setSelectedAlternative(alternativeIndex);
        setIsSubmitted(true);
        const selectedCorrect = alternativeIndex === question.answer;
        setIsCorrect(selectedCorrect);
        addResult(selectedCorrect);
    }

    return (
        <Widget>
            <Widget.Header>
                <BackLinkArrow href="/" />
                <h3>
                    {`Pergunta ${currentQuestionId + 1} de ${totalQuestions}`}
                </h3>
            </Widget.Header>

            <img
                alt="Descrição"
                style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                }}
                src={question.image}
            />
            <Widget.Content>
                <h2>
                    {question.title}
                </h2>
                <p>
                    {question.description}
                </p>

                <AlternativesForm
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSubmit();
                        setIsSubmitted(false);
                        setSelectedAlternative(undefined);
                        setIsCorrect(false);
                        if (currentQuestionId + 2 >= totalQuestions) {
                            setButtonText('Finalizar');
                        }
                    }}
                >
                    {question.alternatives.map((alternative, alternativeIndex) => {
                        const alternativeId = `alternative__${alternativeIndex}`;
                        const selectedAlternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
                        const isSelected = selectedAlternative === alternativeIndex;
                        return (
                            <Widget.Topic
                                key={alternativeId}
                                as={motion.label}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                htmlFor={alternativeId}
                                data-selected={isSelected}
                                data-status={isSubmitted && selectedAlternativeStatus}
                                data-is-submitted={isSubmitted}
                            >
                                <input
                                    checked={selectedAlternative === alternativeIndex}
                                    disabled={isSubmitted}
                                    style={{ display: 'none' }}
                                    id={alternativeId}
                                    name={questionId}
                                    type="radio"
                                    onChange={() => handleSelectAternative(alternativeIndex)}
                                />
                                {alternative}
                            </Widget.Topic>
                        );
                    })}
                    <Button disabled={!hasSelectedAlernative} type="submit">
                        {buttonText}
                    </Button>
                </AlternativesForm>
            </Widget.Content>
        </Widget>
    );
}

QuestionWidget.propTypes = {
    question: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        answer: PropTypes.number.isRequired,
        alternatives: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    currentQuestionId: PropTypes.number.isRequired,
    totalQuestions: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
    addResult: PropTypes.func.isRequired,
};

export default QuestionWidget;
