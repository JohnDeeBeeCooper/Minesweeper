import React from 'react';
import styled from 'styled-components';
import '../assets/icons';

const getIcon = (id) => {
    if (Array.isArray(id)) {
        return <Svg><use xlinkHref={`#${id[0]}`} /><Svg><use xlinkHref={`#${id[1]}`} /></Svg></Svg>
    }
    return <Svg><use xlinkHref={`#${id}`} /></Svg>
}

export default getIcon;

const Svg = styled.svg`
    width: 13px;
    height: 13px;
    margin: auto;
`;