// src/app/components/StartScreen.js
import React from 'react';

const StartScreen = ({ onThemeSelect }) => {
    return (
        <div className="flex flex-col gap-[4dvw] justify-center content-center items-center text-QueenBlue">
            <h1 className="font-MontserratExtraBold font-black text-[4dvw]">Игра Memory</h1>
            <p className="w-[80dvw] px-[3dvw] py-[3dvw] bg-QueenBlue rounded-[2dvw] text-white content-center text-center text-[1.5dvw]">Правила игры: Выберите пару карточек. Если изображения совпадают, карточки остаются открытыми. Игра продолжается, пока не будут найдены все пары.</p>
            <h2 className="font-MontserratExtraBold font-black text-[3dvw]">Выберите тему:</h2>
            <div className="flex flex-row justify-center content-center items-center gap-[5dvw]">
                <button className="flex justify-center items-center text-center px-[2dvw] py-[1.5dvw] bg-QueenBlue text-white rounded-[2dvw]" onClick={() => onThemeSelect('cats')}>Котики</button>
                <button className="flex justify-center items-center text-center px-[2dvw] py-[1.5dvw] bg-QueenBlue text-white rounded-[2dvw]" onClick={() => onThemeSelect('flowers')}>Цветы</button>
                <button className="flex justify-center items-center text-center px-[2dvw] py-[1.5dvw] bg-QueenBlue text-white rounded-[2dvw]" onClick={() => onThemeSelect('cars')}>Машины</button>
            </div>
        </div>
    );
};

export default StartScreen;
