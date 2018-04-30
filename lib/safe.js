'use strict';

module.exports.isValueEmpty = (value) => {
  return (value === undefined || value === null || (Array.isArray(value) && value.length === 0) || (typeof(value) === typeof({}) && Object.keys(value).length === 0));
};

module.exports.deleteEmptyKeys = (plistObj) => {
  Object.keys(plistObj).forEach(key => (module.exports.isValueEmpty(plistObj[key]) && delete plistObj[key]));
  
  return plistObj;
};

module.exports.toSafeString = (value) => {
  if (value === undefined || value === null) {
    return null;
  } else {
    return String(value);
  }
};

module.exports.toSafeInteger = (value) => {
  if (value === undefined || value === null) {
    return null;
  } else {
    const intTest = Number.parseInt(value, 10);
    return (Number.isInteger(intTest))
      ? intTest
      : null;
  }
};

module.exports.toSafeFloat = (value) => {
  if (value === undefined || value === null) {
    return null;
  } else {
    const floatTest = Number.parseFloat(value, 10);
    return (!Number.isNaN(floatTest))
      ? floatTest
      : null;
  }
};

module.exports.toSafeBoolean = (value) => {
  if (value === undefined || value === null || typeof(value) !== typeof(true)) {
    return null;
  } else {
    return Boolean(value);
  }
};

module.exports.toSafeArray = (value) => {
  if (value === undefined || value === null || !Array.isArray(value)) {
    return null;
  } else {
    return value.filter(item => !module.exports.isValueEmpty(item));
  }
};

module.exports.toSafeObject = (value) => {
  if (value === undefined || value === null || typeof(value) !== typeof({})) {
    return null;
  } else {
    return module.exports.deleteEmptyKeys(value); // need to run safe functions on values within obj
  }
};

module.exports.toSafeDate = (value) => {
  if (value === undefined || value === null || (typeof(value) !== typeof('') && !(value instanceof Date))) {
    return null;
  } else {
    return String((new Date(value)).toISOString());
  }
};


module.exports.toSafeData = (value) => {
  if (value === undefined || value === null || !(value instanceof Buffer)) {
    return null;
  } else {
    return value;
  }
};

module.exports.hasRequiredValues = (requiredValues, obj, parentName) => {
  let allPresent = true;

  for (let i = 0, iLength = requiredValues.length; i < iLength; i += 1) {
    if (obj[requiredValues[i]] === undefined || obj[requiredValues[i]] === null) {
      allPresent = false;
      throw new Error(`Missing ${requiredValues[i]} from ${parentName}`);
    }
  }
  
  return allPresent;
};
