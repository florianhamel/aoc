type Pos = { y: number; x: number };

export function countForkableRollsOfPaper(diagram: Readonly<string[][]>) {
  let forkableRollsOfPaper = 0;
  for (let y = 0; y < diagram.length; y++) {
    for (let x = 0; x < diagram.at(y)!.length; x++) {
      if (diagram[y]![x] === '@' && countAdjacentRollsOfPaper({ y, x }, diagram) < 4) {
        forkableRollsOfPaper++;
      }
    }
  }
  return forkableRollsOfPaper;
}

function countAdjacentRollsOfPaper(pos: Pos, diagram: Readonly<string[][]>) {
  let adjacentRollsOfPaper = 0;
  for (let y = pos.y - 1; y <= pos.y + 1; y++) {
    for (let x = pos.x - 1; x <= pos.x + 1; x++) {
      if (y === pos.y && x === pos.x) {
        continue;
      }
      if (at({ y, x }, diagram) === '@') {
        adjacentRollsOfPaper++;
      }
    }
  }
  return adjacentRollsOfPaper;
}

function at(pos: Pos, diagram: Readonly<string[][]>) {
  if (pos.y < 0 || diagram.length <= pos.y) {
    return undefined;
  }
  if (pos.x < 0 || (diagram[pos.y]?.length ?? 0) <= pos.x) {
    return undefined;
  }
  return diagram[pos.y]![pos.x];
}
