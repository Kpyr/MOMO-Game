// src/app/components/ResultScreen.js
import React from 'react';

const ResultScreen = ({ moves, onRestart, results }) => {
    return (
        <div className="result-screen">
            <h1>Игра завершена!</h1>
            <p>Ваш результат: {moves} шагов</p>

            <h2>Результаты других игроков:</h2>
            <table>
                <thead>
                <tr>
                    <th>Игрок</th>
                    <th>Шагов</th>
                </tr>
                </thead>
                <tbody>
                {results.map((result, index) => (
                    <tr key={index} className={result.moves === moves ? 'highlight' : ''}>
                        <td>{result.player}</td>
                        <td>{result.moves}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <button onClick={onRestart}>Начать новую игру</button>
        </div>
    );
};

export default ResultScreen;
