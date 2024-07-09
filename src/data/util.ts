export const makeArray = (length: number) => new Array(length).fill(null);

// min과 max 사이의 값 크기의 null로 채워진 array를 만들고, min 값을 기준으로 1씩 증가하는 값을 할당
export const range = (min: number, max: number): number[] =>
  makeArray(max - min).map((notUsed, index) => index + min);

// min과 max 사이의 임의값을 반환
export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;
