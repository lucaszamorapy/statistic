export interface CountList {
  [key: string]: number
}

export default function countBy(arr: (string | number)[]) {
  return arr.reduce((inicial: CountList, item) => {
    if (inicial[item]) {
      inicial[item] += 1
    } else {
      inicial[item] = 1
    }
    return inicial
  }, {})
}