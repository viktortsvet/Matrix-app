import React from 'react';

const Square = ({clazz, col}) => {
    return (
        <div className={clazz}>{col}</div>
    )
}

export default Square;