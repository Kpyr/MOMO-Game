"use client"
// app/components/GameField.js
import { useState, useEffect } from 'react';
import Card from './Card';
import { images, shuffleArray } from '../data';

const GameField = () => {
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);

    useEffect(() => {
        const duplicatedImages = [...images, ...images];
        const shuffledCards = shuffleArray(duplicatedImages).map((img, index) => ({
            id: index,
            img,
            isFlipped: false,
        }));
        setCards(shuffledCards);
    }, []);

    const handleCardClick = (card) => {
        if (selectedCards.length < 2 && !matchedCards.includes(card.id) && !card.isFlipped) {
            setCards((prev) =>
                prev.map((c) => (c.id === card.id ? { ...c, isFlipped: true } : c))
            );
            setSelectedCards((prev) => [...prev, card]);
        }
    };

    useEffect(() => {
        if (selectedCards.length === 2) {
            const [firstCard, secondCard] = selectedCards;
            if (firstCard.img === secondCard.img) {
                setMatchedCards((prev) => [...prev, firstCard.id, secondCard.id]);
            } else {
                setTimeout(() => {
                    setCards((prev) =>
                        prev.map((c) =>
                            c.id === firstCard.id || c.id === secondCard.id ? { ...c, isFlipped: false } : c
                        )
                    );
                }, 1000);
            }
            setSelectedCards([]);
        }
    }, [selectedCards]);

    return (
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
    );
};

export default GameField;
