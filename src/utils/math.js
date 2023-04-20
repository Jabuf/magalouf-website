export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * max) + min
}

export function getRandomNumberString(min, max) {
  return '' + getRandomNumber(min, max)
}
