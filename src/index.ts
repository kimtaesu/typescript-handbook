const operands = [1, 2, 3, [1, 2]];
const $array = operands[operands.length - 1];
operands.every((operand) => $array.includes(operand));

console.log(1);
