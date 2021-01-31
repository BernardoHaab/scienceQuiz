import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import QuizScreen from './index';

function ExternalQuizzes({ externalDb }) {
    return (
        <ThemeProvider theme={externalDb.theme}>
            <QuizScreen
                dbQuestions={externalDb.questions}
                dbBackground={externalDb.bg}
            />
        </ThemeProvider>
    );
}

export async function getServerSideProps(context) {
    const [projectName, githubUser] = context.query.id.split('___');
    const externalDb = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Falha ao pegaros dados');
        })
        .catch((err) => {
            // eslint-disable-next-line no-console
            console.error(err);
        });

    return {
        props: {
            externalDb,
        },
    };
}

ExternalQuizzes.propTypes = {
    externalDb: PropTypes.shape({
        bg: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        questions: PropTypes.arrayOf(PropTypes.shape({
            alternatives: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
            answer: PropTypes.number.isRequired,
            description: PropTypes.string,
            image: PropTypes.string,
            title: PropTypes.string.isRequired,
        }).isRequired).isRequired,
        theme: PropTypes.shape({
            borderRadius: PropTypes.string.isRequired,
            colors: PropTypes.shape({
                contrastText: PropTypes.string.isRequired,
                mainBg: PropTypes.string.isRequired,
                primary: PropTypes.string.isRequired,
                secondary: PropTypes.string.isRequired,
                success: PropTypes.string.isRequired,
                wrong: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
};

export default ExternalQuizzes;
