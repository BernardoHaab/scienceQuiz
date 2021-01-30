import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../../public/images/logo.svg';

const LogoWrapper = styled.span`
    margin: auto;
    display: block;
    width: min-content;
`;

export default function Logo(props) {
    return (
        <LogoWrapper {...props}>
            <LogoImg />
        </LogoWrapper>
    );
}
