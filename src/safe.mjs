/* eslint no-param-reassign: ["error", { "ignorePropertyModificationsFor": ["value"] }] */

'use strict';

/**
 * @description Determins if an input `value` is empty/null/undefined/0-length/no-keys
 * @author Steven Collins <steven@carboncollins.uk>
 * @export
 * @param {any} value an input value to be checked
 * @returns {boolean}
 */
export function isValueEmpty(value) {
  return (value === undefined
    || value === null
    || (Array.isArray(value) && value.length === 0)
    || (typeof value === typeof {} && Object.keys(value).length === 0));
}

/**
 * @description removes any keys in an object that are consiered empty
 * @author Steven Collins <steven@carboncollins.uk>
 * @export
 * @param {Object} value
 * @returns {Object} returns the existing object reference but with the empty keys deleted
 */
export function deleteEmptyKeys(value) {
  Object.keys(value).forEach((key) => {
    // Remove empty values recursively 
    if (typeof value[key] === typeof {}) {
        value[key] = toSafeObject(value[key])
    }
    
    return (isValueEmpty(value[key]) && delete value[key]);
  });

  return value;
}

/**
 * @description formats the input value into a string or null value if it is unable too
 * @author Steven Collins <steven@carboncollins.uk>
 * @export
 * @param {any} value the input value to convert to a safe string
 * @returns {?String}
 */
export function toSafeString(value) {
  return (value === undefined || value === null)
    ? null
    : String(value);
}

/**
 * @description formats the input value into a integer or null value if it is unable too
 * @author Steven Collins <steven@carboncollins.uk>
 * @export
 * @param {any} value the input value to convert to a safe integer
 * @returns {?Number}
 */
export function toSafeInteger(value) {
  if (value === undefined || value === null) {
    return null;
  }

  const intTest = Number.parseInt(value, 10);
  return (Number.isInteger(intTest))
    ? intTest
    : null;
}

/**
 * @description formats the input value into a float or null value if it is unable too
 * @author Steven Collins <steven@carboncollins.uk>
 * @export
 * @param {any} value the input value to convert to a safe float
 * @returns {?Number}
 */
export function toSafeFloat(value) {
  if (value === undefined || value === null) {
    return null;
  }

  const floatTest = Number.parseFloat(value, 10);
  return (!Number.isNaN(floatTest))
    ? floatTest
    : null;
}

export function toSafeBoolean(value) {
  if (value === undefined || value === null || typeof(value) !== typeof(true)) {
    return null;
  } else {
    return Boolean(value);
  }
};

export function toSafeArray(value) {
  if (value === undefined || value === null || !Array.isArray(value)) {
    return null;
  } else {
    return value.filter(item => !isValueEmpty(item));
  }
};

export function toSafeObject(value) {
  if (value === undefined || value === null || typeof(value) !== typeof({})) {
    return null;
  } else {
    return deleteEmptyKeys(value); // need to run safe functions on values within obj
  }
};

export function toSafeDate(value) {
  if (value === undefined || value === null || (typeof(value) !== typeof('') && !(value instanceof Date))) {
    return null;
  } else {
    return String((new Date(value)).toISOString());
  }
};


export function toSafeData(value) {
  if (value === undefined || value === null || !(value instanceof Buffer)) {
    return null;
  } else {
    return value;
  }
};

export function hasRequiredValues(requiredValues, obj, parentName) {
  let allPresent = true;

  for (let i = 0, iLength = requiredValues.length; i < iLength; i += 1) {
    if (obj[requiredValues[i]] === undefined || obj[requiredValues[i]] === null) {
      allPresent = false;
      throw new Error(`Missing ${requiredValues[i]} from ${parentName}`);
    }
  }
  
  return allPresent;
};
