// app/data.js
export const images = [
    '/images/cats-1.jpg',
    '/images/cats-2.jpg',
    '/images/cats-3.jpg',
    '/images/cats-4.jpg',
    '/images/cats-5.jpg',
    '/images/cats-6.jpg',
];


export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
