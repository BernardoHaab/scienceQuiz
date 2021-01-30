import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBase = styled.input`
    width: -webkit-fill-available;
    padding: 15px;
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.mainBg};
    border-radius: ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius} 0 0 ;
    outline: 0;
    /* margin-bottom: 25px; */
`;

function Input({ onChange, placeholder, ...props }) {
    return (
        <div>
            <InputBase onChange={onChange} placeholder={placeholder} {...props} />
        </div>
    );
}

Input.defaultProps = {
    // eslint-disable-next-line react/default-props-match-prop-types
    value: '',
};

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // eslint-disable-next-line react/require-default-props
    value: PropTypes.string.isRequired,
};

export default Input;
