const cloneDeep = (target) => {
  let result;

  if (typeof target !== "object" || target === null) {
    result = target;
  }

  if (target.constructor === Array) {
    result = [];
    for (let i = 0; i < target.length; i++) {
      result[i] = cloneDeep(target[i]);
    }
  }

  if (target.constructor === Map) {
    result = new Map();
    for (let [key, value] of target) {
      result.set(cloneDeep(key), cloneDeep(value));
    }
  }

  if (target.constructor === Set) {
    result = new Set();
    for (let value of target) {
      result.add(cloneDeep(value));
    }
  }

  if (target.constructor === Object) {
    result = {};
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        result[prop] = cloneDeep(target[prop]);
      }
    }
  }

  return result;
};

export default cloneDeep;
