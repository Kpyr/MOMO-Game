// src/app/data.js
export const imagesCats = [
    '/images/cats-1.jpg',
    '/images/cats-2.jpg',
    '/images/cats-3.jpg',
    '/images/cats-4.jpg',
    '/images/cats-5.jpg',
    '/images/cats-6.jpg',
];

export const imagesFlowers = [
    '/images/flowers-1.jpg',
    '/images/flowers-2.jpg',
    '/images/flowers-3.jpg',
    '/images/flowers-4.jpg',
    '/images/flowers-5.jpg',
    '/images/flowers-6.jpg',
];

export const imagesCars = [
    '/images/cars-1.jpg',
    '/images/cars-2.jpg',
    '/images/cars-3.jpg',
    '/images/cars-4.jpg',
    '/images/cars-5.jpg',
    '/images/cars-6.jpg',
];

export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
