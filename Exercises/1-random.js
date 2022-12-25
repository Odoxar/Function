'use strict';

// Generate random Number between from min to max
// Use Math.random() and Math.floor()
// See documentation at MDN

const random = (min = 0, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
module.exports = { random };
