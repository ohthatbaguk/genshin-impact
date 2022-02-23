export default function randomSequenceGenerator(upperBoundary) {
  const arr = [];
  for (let i = 0; i < upperBoundary; i++) {
    arr.push(randomNumber(upperBoundary));
  }
  return arr;
}

const randomNumber = (max) => {
  return Math.floor(Math.random() * max);
};
