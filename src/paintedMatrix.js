import React from 'react';

import './square.css';

const PaintedMatrix = ({matrix, clazz}) => {
    const elements = matrix.map((row, n, rows) => {
        return (
            <div key={n}>
                {
                    row.map((col, i, cols) => {

                        //проверка по вертикали

                        if (rows[n-1]) {
                            if ((col === 1 && rows[n-1][i] === 1)) {
                                clazz += ' active';
                            } else {
                                clazz = 'matrixElem';
                            }
                        }

                        if (rows[n+1]) {
                            if (col === 1 && rows[n+1][i] === 1) {
                                clazz = 'matrixElem';
                                clazz += ' active';
                            } 
                            if ((col === 1 && rows[n+1][i] === 0) && ((cols[i+1] === 1) || (cols[i-1] === 1))) {
                                clazz = 'matrixElem';
                                clazz += ' active';
                            } 
                        }

                        //проверка по горизонтали

                        if (cols[i+1] || cols[i-1]) {
                            if (col === 1 && ((cols[i+1] === 1) || (cols[i-1] === 1))) {
                                clazz = 'matrixElem';
                                clazz += ' active';
                            } else {
                                clazz = 'matrixElem';
                            }
                        }

                        return (
                            <div key={i} className={clazz}>
                                {col}
                            </div>
                        )
                    })
                }
            </div>
        )
    });
    return (
        [elements]
    )
}

export default PaintedMatrix;