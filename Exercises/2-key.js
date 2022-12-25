'use strict';

// Generate string of random characters
// Use Math.random() and Math.floor()
// See documentation at MDN
const generateKey = (length, possible) => {
  let res = '';
  const len = possible.length;
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * len);
    res += possible[index];
  }
  return res;
};

module.exports = { generateKey };
