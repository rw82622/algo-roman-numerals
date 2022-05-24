exports.toRoman = function (num) {
  let pattern = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  let result = "";
  for (let Key in pattern) {
    while (num >= pattern[Key]) {
      result += Key;
      num -= pattern[Key];
    }
  }
  return result;
};
