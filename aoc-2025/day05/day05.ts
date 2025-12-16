export type Range = [number, number];

export function countFreshIngredientIds(ranges: Readonly<[number, number][]>) {
  let count = 0;
  return count;
}

function remove(source: [number, number], toRemove: [number, number]) {
  if (source[0] <= toRemove[0] && toRemove[1] <= source[1]) {
    return [
      [source[0], toRemove[0]],
      [toRemove[1], source[1]],
    ];
  }
}

export function intersect(rangeA: [number, number], rangeB: [number, number]) {
  const intersection = [Math.max(rangeA[0], rangeB[0]), Math.min(rangeA[1], rangeB[1])] as [
    number,
    number,
  ];
  if (intersection[0] > intersection[1]) {
    return null;
  }
  return intersection;
}

function length(range: [number, number]) {
  return range[1] - range[0] + 1;
}

export function countFreshIngredients(
  ranges: Readonly<[number, number][]>,
  ids: Readonly<number[]>,
) {
  let freshIngredientsCount = 0;
  for (let id of ids) {
    for (let range of ranges) {
      if (isInRange(id, range)) {
        freshIngredientsCount++;
        break;
      }
    }
  }
  return freshIngredientsCount;
}

function isInRange(n: number, range: [number, number]) {
  if (range[0] <= n && n <= range[1]) {
    return true;
  }
  return false;
}
