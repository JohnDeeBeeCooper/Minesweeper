import React from 'react';
import '../assets/icons';

const getIcon = (id) => {
    if (Array.isArray(id)) {
        return (
            <svg width="13" height="13">
                <use xlinkHref={`#${id[0]}`} />
                <svg width="13" height="13">
                    <use xlinkHref={`#${id[1]}`} />
                </svg>
            </svg>
        );
    }
    return (
        <svg width="13" height="13">
            <use xlinkHref={`#${id}`} />
        </svg>
    );
}


export default getIcon;