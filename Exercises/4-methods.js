'use strict';

// Introspect all properties of iface object and
// extract function names and number of arguments
// const obj = {
//   m1: (x,) => [x],
//   // m2: function (x, y) {
//   //   return [x, y];
//   // },
//   m3(x, y, z) {
//     return [x, y, z];
//   },
// };
// will return: [
//   ['m1', 1],
//   ['m2', 2],
//   ['m3', 3]
// ]

const methods = (iface) => {
  const res = [];
  for (const key in iface) {
    const fn = iface[key];
    if (typeof fn === 'function') {
      res.push([key, fn.length]);
    }
  }
  return res;
};

module.exports = { methods };
