import { PuzzleInputReader } from '../../shared/puzzle-input-reader';

type Node = { prev: Node; next: Node; val: number };

function getZeroOccurrences(instructions: Readonly<string[]>) {
  let zeroCount = 0;
  let lst = buildRangeCircularLinkedList();

  instructions.forEach((instr) => {
    const dir = instr.at(0);
    const ampl = +instr.substring(1);
    for (let i = 0; i < ampl; i++) {
      if (dir === 'L') {
        lst = lst.prev;
      } else {
        lst = lst.next;
      }
    }
    if (lst.val === 0) {
      zeroCount++;
    }
  });
  return zeroCount;
}

function getZeroCrossingOccurrences(instructions: Readonly<string[]>) {
  let zeroCount = 0;
  let lst = buildRangeCircularLinkedList();
  instructions.forEach((instr) => {
    const dir = instr.at(0);
    const moves = +instr.substring(1);
    for (let i = 0; i < moves; i++) {
      if (dir === 'L') {
        lst = lst.prev;
      } else {
        lst = lst.next;
      }
      if (lst.val === 0) {
        zeroCount++;
      }
    }
  });
  return zeroCount;
}

function buildRangeCircularLinkedList() {
  const start = { prev: {}, next: {}, val: 0 };
  let prev = start;
  let lst;
  for (let i = 1; i < 100; i++) {
    const curr = { val: i, prev: prev, next: {} };
    if (i === 50) {
      lst = curr;
    }
    prev.next = curr;
    prev = curr;
  }
  start.prev = prev;
  prev.next = start;
  return lst as Node;
}

export async function solveDay01() {
  const input = await PuzzleInputReader.getPuzzleInput('./aoc-2025/day01/puzzle-input.txt');
  const lines = input.split('\n');

  console.log(getZeroOccurrences(lines));
  console.log(getZeroCrossingOccurrences(lines));
}
