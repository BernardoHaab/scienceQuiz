import styled from "styled-components";
import db from "../db";

import Widget from "../src/components/Widget";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizContainer from "../src/components/QuizContainer";
import QuizBackground from "../src/components/QuizBackground";

export default function Home() {
    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <Widget>
                    <Widget.Header>
                        <h1>O quiz da Ciência</h1>
                    </Widget.Header>
                    <Widget.Content>

                        <p>Lorem ipsum dolor sit amet, consectetur adip</p>
                    </Widget.Content>
                </Widget>
                <Widget>
                    <Widget.Content>
                        <h1>Quizes da galera</h1>

                        <p>Lorem ipsum dolor sit amet, consectetur adip</p>
                    </Widget.Content>
                </Widget>
                <Footer/>
            </QuizContainer>
            <GitHubCorner/>
        </QuizBackground>
    );
}
