export default function randomSequenceGenerator(length, upperBoundary) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(randomNumber(upperBoundary));
  }
  return arr;
}

export const randomNumber = (max) => {
  return Math.floor(Math.random() * max);
};
