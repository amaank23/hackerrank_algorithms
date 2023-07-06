function catAndMouse(x, y, z) {
  const catOnePosToMouse = Math.abs(z - x);
  const catTwoPosToMouse = Math.abs(z - y);
  if (catOnePosToMouse < catTwoPosToMouse) {
    return "Cat A";
  } else if (catTwoPosToMouse < catOnePosToMouse) {
    return "Cat B";
  } else {
    return "Mouse C";
  }
}

const catOnePos = 2;
const catTwoPos = 5;
const mousePos = 4;

catAndMouse(catOnePos, catTwoPos, mousePos);
