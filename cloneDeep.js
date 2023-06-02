const cloneDeep = (target) => {
  let result;

  if (typeof target !== "object" || target === null) {
    result = target;
  }

  switch (target.constructor) {
    case Array:
      result = [];
      for (let i = 0; i < target.length; i++) {
        result[i] = cloneDeep(target[i]);
      }
      break;
    case Map:
      result = new Map();
      for (let [key, value] of target) {
        result.set(cloneDeep(key), cloneDeep(value));
      }
      break;
    case Set:
      result = new Set();
      for (let value of target) {
        result.add(cloneDeep(value));
      }
      break;
    case Object:
      result = {};
      for (let prop in target) {
        if (target.hasOwnProperty(prop)) {
          result[prop] = cloneDeep(target[prop]);
        }
      }
      break;

    default:
      break;
  }

  return result;
};

export default cloneDeep;
