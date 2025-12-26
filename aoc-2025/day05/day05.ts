export type RangeSet = [number, number];

export function countFreshIngredientIds(ranges: Readonly<RangeSet[]>) {
  let count = 0;
  for (let i = 0; i < ranges.length; i++) {
    let uncountedRanges = [ranges[i]];
    for (let j = 0; j < i; j++) {
      for (let k = 0; k < uncountedRanges.length; k++) {
        const arr = removeRangeFrom(ranges[j], uncountedRanges[k]);
        if (arr) {
          arr.length === 2
            ? uncountedRanges.splice(k, 1, arr[0], arr[1])
            : uncountedRanges.splice(k, 1, arr[0]);
        }
      }
    }
    console.log('final:', uncountedRanges);
    uncountedRanges.forEach((ur) => (count += length(ur)));
  }
  return count;
}

export function removeRangeFrom(toRemove: RangeSet, from: RangeSet): RangeSet[] | null {
  // [............]
  //    [xxxxx]
  // [..]    [....]
  if (from[0] < toRemove[0] && toRemove[1] < from[1]) {
    return [
      [from[0], toRemove[0] - 1],
      [toRemove[1] + 1, from[1]],
    ];
  }
  // [.....]
  //    [xxxxx]
  // [...]
  if (from[0] < toRemove[0] && from[1] <= toRemove[1]) {
    return [[from[0], toRemove[0] - 1]];
  }
  //    [.....]
  // [xxxxx]
  //      [...]
  if (toRemove[0] <= from[0] && toRemove[1] < from[1]) {
    return [[toRemove[1] + 1, from[1]]];
  }
  return null;
}

export function intersect(rangeA: RangeSet, rangeB: RangeSet) {
  const intersection = [Math.max(rangeA[0], rangeB[0]), Math.min(rangeA[1], rangeB[1])] as RangeSet;
  if (intersection[0] > intersection[1]) {
    return null;
  }
  return intersection;
}

function max(a: bigint, b: bigint) {
  if (a >= b) {
    return a;
  }
  return b;
}

function min(a: bigint, b: bigint) {
  if (a <= b) {
    return a;
  }
  return b;
}

function length(range: RangeSet) {
  return range[1] - range[0] + 1;
}

export function countFreshIngredients(ranges: Readonly<RangeSet[]>, ids: Readonly<number[]>) {
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

function isInRange(n: number, range: RangeSet) {
  if (range[0] <= n && n <= range[1]) {
    return true;
  }
  return false;
}
