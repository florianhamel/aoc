export type RangeSet = [bigint, bigint];

export function countFreshIngredientIds(ranges: Readonly<RangeSet[]>) {
  let count: bigint = 0n;
  const n = ranges.length;
  console.log(n);
  console.log('test', 1 << n);
  for (let mask = 1; mask < 1 << n; mask++) {
    let rangeCount = 0;
    let intersection: RangeSet | null = null;
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        console.log('test');
        if (!intersection && rangeCount === 0) {
          intersection = ranges[i];
        } else if (intersection) {
          intersection = intersect(intersection!, ranges[i]);
        }
        rangeCount++;
      }
    }
    if (intersection) {
      count = rangeCount % 2 !== 0 ? count + length(intersection) : count - length(intersection);
      console.log(count);
    }
  }
  return count;
}

export function intersect(rangeA: RangeSet, rangeB: RangeSet) {
  const intersection = [max(rangeA[0], rangeB[0]), min(rangeA[1], rangeB[1])] as RangeSet;
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
  return range[1] - range[0] + 1n;
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
