export function countIdsInRanges(ranges: Readonly<[number, number][]>) {
  let freshIngredientIdsCount = 0;
  for (let i = 0; i < ranges.length; i++) {
    const iRange = ranges[i];
    freshIngredientIdsCount += length(iRange);
    for (let j = i + 1; j < ranges.length; j++) {
      const jRange = ranges[j];
      const ijIntersection = intersect(iRange, jRange);
      if (ijIntersection) {
        freshIngredientIdsCount -= length(ijIntersection);
      }
    }
  }
  let rangesIntersection = ranges[0] as [number, number] | null;
  let i = 1;
  while (i < ranges.length && rangesIntersection) {
    console.log('rangesIntersection:', rangesIntersection, '| ranges[i]', ranges[i]);
    rangesIntersection = intersect(rangesIntersection, ranges[i]);
    i++;
  }
  if (rangesIntersection) {
    console.log('super intersection:', rangesIntersection);
    freshIngredientIdsCount += length(rangesIntersection);
  }
  return freshIngredientIdsCount;
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
