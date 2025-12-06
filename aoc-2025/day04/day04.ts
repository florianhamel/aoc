type Pos = { y: number; x: number };

export function countMaxForkableRollsOfPaper(rawDiagram: string) {
  const diagram = rawDiagram.split('\n').map((line) => line.split(''));
  let maxForkableRollsOfPaper = 0;
  while (true) {
    const positions = getPosOfForkableRollsOfPaper(diagram);
    const countOfForkableRollsOfPaper = positions.length;
    if (positions.length === 0) {
      break;
    }
    forkliftRollsOfPaper(positions, diagram);
    maxForkableRollsOfPaper += countOfForkableRollsOfPaper;
  }
  return maxForkableRollsOfPaper;
}

export function countForkableRollsOfPaper(rawDiagram: string) {
  const diagram = rawDiagram.split('\n').map((line) => line.split(''));
  const positions = getPosOfForkableRollsOfPaper(diagram);
  return positions.length;
}

function forkliftRollsOfPaper(positions: Pos[], diagram: Readonly<string[][]>) {
  for (let pos of positions) {
    diagram[pos.y]![pos.x] = '.';
  }
}

function getPosOfForkableRollsOfPaper(diagram: Readonly<string[][]>) {
  const forkableRollsOfPaperPos: Pos[] = [];
  for (let y = 0; y < diagram.length; y++) {
    for (let x = 0; x < diagram[y]!.length; x++) {
      if (diagram[y]![x] === '@' && countAdjacentRollsOfPaper({ y, x }, diagram) < 4) {
        forkableRollsOfPaperPos.push({ y, x });
      }
    }
  }
  return forkableRollsOfPaperPos;
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
