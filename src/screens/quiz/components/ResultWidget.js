import React from 'react';
import PropTypes from 'prop-types';

import Widget from '../../../components/Widget';

function ResultWidget({ playerName, results }) {
    return (
        <Widget>
            <Widget.Header>
                {playerName}, este é seu resultado!
            </Widget.Header>

            <Widget.Content>
                <p>
                    Você acertou
                    {` ${results.filter((result) => result).length} `}
                    pergunta(s)
                </p>
                <ul>
                    {results.map((result, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <li key={`result_${index}`}>
                            #{index + 1} Resultado: {(result) ? 'Acertou' : 'Errou'}
                        </li>
                    ))}
                </ul>
            </Widget.Content>
        </Widget>
    );
}

ResultWidget.defaultProps = {
    playerName: 'Jogador',
};

ResultWidget.propTypes = {
    playerName: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default ResultWidget;
