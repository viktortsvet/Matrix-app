import React, {Component} from 'react';
import {getRandomInt} from './random';
import Square from './square';
import PaintedMatrix from './paintedMatrix';
import {Button, TextField, Container} from '@material-ui/core';

import './style.css';
import './media.css';

export default class Matrix extends Component {
    
    state = {
        board: [],
        rows: 0,
        cols: 0,
        painted: false
    };

    clazz = 'matrixElem';

    createBoard = (rows, cols) => {
        this.setState(() => {
            let newArr = [];
            for (let i = 0; i < rows; i++) {
                let row = [];
                for (let j = 0; j < cols; j++) {
                    row.push(getRandomInt());
                }
                newArr.push(row);
            }
            return {
                board: newArr
            }
        });
        this.removePaint();
    }

    onRowsInputChange = (e) => {
        this.setState({rows: e.target.value});
        localStorage.setItem('rows', e.target.value);
    }

    onColsInputChange = (e) => {
        this.setState({cols: e.target.value});
        localStorage.setItem('cols', e.target.value);
    }

    componentDidMount() {
        const rows = localStorage.getItem('rows'),
            cols = localStorage.getItem('cols');
        this.setState({rows, cols});
    }

    removePaint = () => {
        this.setState({painted: false});
    }

    onPaint = () => {
        this.setState({painted: true});
    }

    render() {
        const {board, rows, cols, painted} = this.state;
        const result = board.map((row, i) => {
            return (
                <div key={i}>
                    {
                        row.map((col, i) => {
                            return (
                                <Square clazz={this.clazz} key={i} col={col}/>
                            )
                        })
                    }
                </div>
            )
        });
        return (
            <Container className="cont">
                <div className="inputs">
                    <TextField placeholder="Количество строк" value={rows} type="number" className="rows" onChange={this.onRowsInputChange}></TextField>
                    <TextField placeholder="Количество столбцов" value={cols} type="number" onChange={this.onColsInputChange}></TextField>
                    <Button className="btn" variant="outlined" color="primary" onClick={() => this.createBoard(rows, cols)}>Создать</Button>
                    <Button className="btn" variant="outlined" color="secondary" onClick={this.onPaint}>Раскрасить</Button>
                </div>
                <div className="matrix">
                    {painted ? <PaintedMatrix matrix={board} clazz={this.clazz}/> : result}
                </div>
            </Container>
        )
    }

}
