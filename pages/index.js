import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import Logo from '../src/components/Logo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

const Playbutton = styled.div`
    *:first-child {
        border-radius: 0 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius};
    }
`;

export default function Home() {
    const router = useRouter();
    const [name, setName] = useState('');

    function handleOnPlayClick(e) {
        e.preventDefault();
        router.push({
            pathname: '/quiz',
            query: { name },
        });
    }

    return (
        <QuizBackground backgroundImage={db.bg} mobileBackgroundImage={db.bgMobile}>
            <QuizContainer>
                <Logo />
                <Widget>
                    <Widget.Header>
                        <h1>O Quiz da Ciência</h1>
                    </Widget.Header>
                    <Widget.Content>
                        <form onSubmit={handleOnPlayClick}>
                            <Input
                                name="Nome do usuário"
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Qual teu nome?"
                                value={name}
                            />
                            <Playbutton>
                                <Button type="submit" disabled={!name}>
                                    Vamos jogar {name}{(name) && '!'}
                                </Button>
                            </Playbutton>
                        </form>
                    </Widget.Content>
                </Widget>
                <Widget>
                    <Widget.Content>
                        <h1>Quizes da galera</h1>

                        <p>Lorem ipsum dolor sit amet, consectetur adip</p>
                    </Widget.Content>
                </Widget>
                <Footer />
            </QuizContainer>
            <GitHubCorner projectUrl="https://github.com/BernardoHaab/scienceQuiz" />
        </QuizBackground>
    );
}
