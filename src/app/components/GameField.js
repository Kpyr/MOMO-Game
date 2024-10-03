// src/app/components/GameField.js
import { useState, useEffect } from 'react';
import Card from './Card';
import { shuffleArray } from '../data';
import { pluralize } from 'numeralize-ru'; // Импортируем библиотеку
import { TIMEOUT } from '../settings'; // Импортируем значение задержки

const GameField = ({ images, onGameEnd, setMoves }) => {
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [moves, setLocalMoves] = useState(0);

    useEffect(() => {
        const duplicatedImages = [...images, ...images]; // Дублируем изображения
        const shuffledCards = shuffleArray(duplicatedImages).map((img, index) => ({
            id: index,
            img,
            isFlipped: false,
        }));
        setCards(shuffledCards);
    }, [images]);

    const handleCardClick = (card) => {
        // Проверка на максимальное количество выбранных карточек и состояние карточек
        if (selectedCards.length < 2 && !matchedCards.includes(card.id) && !card.isFlipped) {
            setCards((prev) =>
                prev.map((c) => (c.id === card.id ? { ...c, isFlipped: true } : c))
            );
            setSelectedCards((prev) => [...prev, card]); // Добавляем карточку в выбранные
        }
    };

    useEffect(() => {
        if (selectedCards.length === 2) {
            const [firstCard, secondCard] = selectedCards;
            setLocalMoves((prev) => prev + 1); // Увеличиваем локальный счетчик ходов
            setMoves((prev) => prev + 1); // Обновляем ход на уровне родительского компонента

            if (firstCard.img === secondCard.img) {
                // Если карточки совпадают
                setMatchedCards((prev) => [...prev, firstCard.id, secondCard.id]);
            } else {
                // Если карточки не совпадают
                setTimeout(() => {
                    setCards((prev) =>
                        prev.map((c) =>
                            c.id === firstCard.id || c.id === secondCard.id ? { ...c, isFlipped: false } : c
                        )
                    );
                }, TIMEOUT); // Используем задержку перед переворотом
            }
            setSelectedCards([]); // Сбрасываем выбранные карточки
        }
    }, [selectedCards]);

    // Проверка завершения игры
    useEffect(() => {
        if (matchedCards.length === cards.length && cards.length > 0) {
            onGameEnd(moves); // Вызываем функцию завершения игры, передавая количество ходов
        }
    }, [matchedCards, cards, moves, onGameEnd]);

    // Вычисляем процент завершенных пар
    const progressPercentage = (matchedCards.length / cards.length) * 100;

    // Правильное склонение "шаг"
    const stepsLabel = pluralize(moves, 'шаг', 'шага', 'шагов');

    return (
        <div className="game-container">
            <div className="stats">
                <p>Ходов: {moves} {stepsLabel}</p> {/* Правильное склонение */}
                <p>Найдено пар: {matchedCards.length / 2}</p>
                <div className="progress-bar">
                    <div
                        className="progress"
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
            </div>
            <div className="game-field">
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                        onClick={() => handleCardClick(card)}
                        isMatched={matchedCards.includes(card.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default GameField;
