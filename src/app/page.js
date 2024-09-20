// app/page.js
import './globals.css'; // Подключение стилей
import GameField from './components/GameField';

export default function Home() {
    return (
        <main className="w-[100dvw] h-[100vh] flex flex-col justify-center content-center items-center gap-[5dvw] px-[5dvw] py-[5dvw] bg-PowderBlue">
            <h1 className="text-[5dvw] font-MontserratMedium text-QueenBlue">Игровое поле</h1>
            <GameField />
        </main>
    );
}
