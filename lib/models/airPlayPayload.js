'use strict';

const MobileConfigPayload = require('./payload');

const { toSafeString } = require('../safe');

function toSafeWhitelist(value) {
  if (value === undefined || value === null || !Array.isArray(value)) {
    return null;
  } else {
    const whitelist = [];
    
    for (let i = 0, iLength = value.length; i < iLength; i += 1) {
      const deviceId = toSafeString(value[i].deviceId);
      
      if (deviceId !== null) {
        whitelist.push({ DeviceID: deviceId });
      }
    }
   
    return (whitelist.length === 0)
      ? null
      : whitelist;
  }
}

function toSafePasswords(value) {
  if (value === undefined || value === null || !Array.isArray(value)) {
    return null;
  } else {
    const passwords = [];
    
    for (let i = 0, iLength = value.length; i < iLength; i += 1) {
      const deviceName = toSafeString(value[i].deviceName);
      const deviceId = toSafeString(value[i].deviceId);
      const password = toSafeString(value[i].password);
      
      if (deviceName !== null && deviceId !== null && password !== null) {
        passwords.push({ DeviceName: deviceName, DeviceID: deviceId, Password: password });
      }
    }
   
    return (passwords.length === 0)
      ? null
      : passwords;
  }
}

/**
 * @class
 * @description A class for containing all of the common structure data used in an AirPlay payload
 * @extends MobileConfigPayload
 * @author Steven Collins <CarbonCollins>
 * @date 27th April 2018
 */
class AirPlayPayload extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of AirPlayPayload
   * @param {Object|AirPlayPayload} [options={}] An object of options
   * @author Steven Collins <CarbonCollins>
   * @date 27th April 2018
   */
  constructor(options = {}) {
    super(Object.assign({}, options, { type: 'com.apple.airplay' }));
    
    this.whitelist = options.whitelist || []; // array of strings, each being an airplay id
    this.passwords = options.passwords || []; // array of objects in the following format: { deviceName: '', deviceId: '', password: '' }
  }
  
  get plistSafeObject() {
    const plistObj = {
      Whitelist: toSafeWhitelist(this.whitelist.slice(0)),
      Passwords: toSafePasswords(this.passwords.slice(0))
    };
    
    return Object.assign({}, super.plistSafeObject, plistObj);
  }
}

module.exports = AirPlayPayload;
