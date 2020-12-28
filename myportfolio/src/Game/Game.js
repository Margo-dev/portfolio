import React from 'react';
import './Game.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squeres: Array(9).fill(null),
            count: 0,
            scoreX: 0,
            score0: 0,
            first: 'x',
            second: '0',
            winner: ''
        }
        this.winner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
    }
    isWinner = () => {
        let s = (this.state.count % 2 === 0) ? this.state.first : this.state.second;
        for (let i = 0; i < 8; i++) {
            let line = this.winner[i];
            if (this.state.squeres[line[0]] === s && this.state.squeres[line[1]] === s && this.state.squeres[line[2]] == s) {
                this.setState({ winner: (s + ' ' + 'You are winner') });
                if (s === 'x') {
                    this.setState({ scoreX: this.state.scoreX + 1 })
                } else {
                    this.setState({ score0: this.state.score0 + 1 })
                }
                setTimeout(() => {
                    this.setState({ squeres: Array(9).fill(null) });
                    this.setState({ count: 0 });
                    this.setState({ winner: '' })
                }, 3000)
            } else if (this.state.count === 8) {
                this.setState({ winner: 'Dead heat' });
                setTimeout(() => {
                    this.setState({ squeres: Array(9).fill(null) });
                    this.setState({ count: 0 })
                }, 3000)
                return;
            }
        }
    }

    OnBtn = () => {
        this.setState({ squeres: Array(9).fill(null) });
        this.setState({ count: 0 });
    }
    setSymbol = (e) => {
        let data = e.target.getAttribute('data');
        let currentSqueres = this.state.squeres;
        if (currentSqueres[data] === null) {
            currentSqueres[data] = (this.state.count % 2 === 0) ? this.state.first : this.state.second;
            this.setState({ count: this.state.count + 1 });
            this.setState({ squeres: currentSqueres });
        } else {
            alert('Эта ячейка занята');
        }
        this.isWinner();
    }
    chooseSymbol = (e) => {
        if (e.target.value === 'x') {
            this.setState({ first: 'x' })
            this.setState({ second: '0' })
        } else if (e.target.value === '0') {
            this.setState({ first: '0' })
            this.setState({ second: 'x' })
        }
    }

    render() {
        return (
            <>
                <div className="container-game">
                    <div className="field ">
                        <div className="tao">
                            <div className='ttr' onClick={this.setSymbol} data='0'>{this.state.squeres[0]}</div>
                            <div className='ttr' onClick={this.setSymbol} data='1'>{this.state.squeres[1]}</div>
                            <div className='ttr' onClick={this.setSymbol} data='2'>{this.state.squeres[2]}</div>
                            <div className='ttr' onClick={this.setSymbol} data='3'>{this.state.squeres[3]}</div>
                            <div className='ttr' onClick={this.setSymbol} data='4'>{this.state.squeres[4]}</div>
                            <div className='ttr' onClick={this.setSymbol} data='5'>{this.state.squeres[5]}</div>
                            <div className='ttr' onClick={this.setSymbol} data='6'>{this.state.squeres[6]}</div>
                            <div className='ttr' onClick={this.setSymbol} data='7'>{this.state.squeres[7]}</div>
                            <div className='ttr' onClick={this.setSymbol} data='8'>{this.state.squeres[8]}</div>
                        </div>
                        <div className='score'>
                            <p className='score_item'><span>Score X:</span>{this.state.scoreX}</p>
                            <p className='score_item'><span>Score 0:</span>{this.state.score0}</p>
                        </div>
                    </div>
                    <div className="option d-flex">
                        <button className='btn_option' onClick={this.OnBtn}>START</button>
                        <select className='select-game' onChange={this.chooseSymbol}>
                            <option value='x'>X</option>
                            <option value='0'>0</option>
                        </select>
                    </div>
                    <p className='winner'>{this.state.winner}</p>
                </div>
            </>
        );
    }
}

export default Game;
