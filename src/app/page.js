// src/app/page.js
"use client";

import { useState } from 'react';
import StartScreen from './components/StartScreen';
import GameField from './components/GameField';
import ResultScreen from './components/ResultScreen';
import { imagesCats, imagesFlowers, imagesCars } from './data';

const sampleResults = [
    { player: 'Игрок 1', moves: 12 },
    { player: 'Игрок 2', moves: 15 },
    { player: 'Игрок 3', moves: 10 },
];

export default function Home() {
    const [currentScreen, setCurrentScreen] = useState('start'); // Начальный экран
    const [theme, setTheme] = useState(null);
    const [moves, setMoves] = useState(0);
    const [results, setResults] = useState(sampleResults);

    const handleThemeSelect = (selectedTheme) => {
        setTheme(selectedTheme);
        setCurrentScreen('game'); // Переключаем на экран игры
        setMoves(0); // Сброс счетчика ходов
    };

    const handleGameEnd = (finalMoves) => {
        setMoves(finalMoves);
        setCurrentScreen('result'); // Переключаем на экран результатов
    };

    const handleRestart = () => {
        setCurrentScreen('start'); // Вернуться на стартовый экран
        setTheme(null); // Сбросить тему
        setMoves(0); // Сбросить счетчик ходов
    };

    const getImagesByTheme = () => {
        switch (theme) {
            case 'cats':
                return imagesCats;
            case 'flowers':
                return imagesFlowers;
            case 'cars':
                return imagesCars;
            default:
                return [];
        }
    };

    return (
        <main className="flex flex-col justify-center items-center content-center w-[100dvw] h-[100vh] bg-PowderBlue">
            {currentScreen === 'start' && (
                <StartScreen onThemeSelect={handleThemeSelect} />
            )}
            {currentScreen === 'game' && (
                <GameField
                    images={getImagesByTheme()}
                    onGameEnd={handleGameEnd}
                    setMoves={setMoves}
                />
            )}
            {currentScreen === 'result' && (
                <ResultScreen
                    moves={moves}
                    onRestart={handleRestart}
                    results={results}
                />
            )}
        </main>
    );
}
