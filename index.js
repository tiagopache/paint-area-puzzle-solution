// Write here your bootstrap code for your project!
let M = [];

const resetM = () => [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1],
    [0, 0, 1, 1, 1],
    [0, 1, 0, 0, 0],
  ];

const getPixel = (x, y) => M[x][y];
const setPixel = (x, y, color) => M[x][y] = color;

const fillArea = (x, y, fillColor, borderColor) => {
  if (x < 0 || x > M.length - 1)
    return;
  else if (y < 0 || y > M[x].length - 1)
    return;

  const color = getPixel(x, y);

  if ((color !== fillColor) && (color !== borderColor)) {
    setPixel(x, y, fillColor);
    fillArea(x + 1, y, fillColor, borderColor);
    fillArea(x - 1, y, fillColor, borderColor);
    fillArea(x, y + 1, fillColor, borderColor);
    fillArea(x, y - 1, fillColor, borderColor);
  }
}

M = resetM();
fillArea(0, 0, 4, 1);
console.log(M);
M = resetM();
fillArea(2, 3, 2, 0);
console.log(M);
