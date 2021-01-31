/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

function Link({ children, href, ...props }) {
    return (
        <NextLink href={href} passHref>
            <a {...props}>
                {children}
            </a>
        </NextLink>
    );
}

Link.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    href: PropTypes.string.isRequired,
};

export default Link;
