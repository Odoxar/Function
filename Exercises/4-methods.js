'use strict';

// Introspect all properties of iface object and
// extract function names and number of arguments

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
