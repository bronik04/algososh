const getRandomInt = (min: number = 3, max: number = 17) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

export const randomArray = (length: number, max: number = 100): number[] =>
    [...Array(length)].map(() => Math.floor(Math.random() * max));

