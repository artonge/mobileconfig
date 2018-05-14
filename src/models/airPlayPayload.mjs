'use strict';

import MobileConfigPayload from './payload.mjs';

import { toSafeString } from '../safe.mjs';

/**
 * @description generates a plist safe whitelist list
 * @author Steven Collins <steven@carboncollins.uk>
 * @param {Object[]} value an array of whitelist objects
 * @returns {Object[]} an array of plist safe whitelist objects
 * @private
 */
function toSafeWhitelist(value) {
  if (value === undefined || value === null || !Array.isArray(value)) {
    return null;
  }
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

/**
 * @description generates a plist safe password list
 * @author Steven Collins <steven@carboncollins.uk>
 * @param {Object[]} value an arrray of airplay password objects
 * @returns {Object[]} an array of airplay password objects
 * @private
 */
function toSafePasswords(value) {
  if (value === undefined || value === null || !Array.isArray(value)) {
    return null;
  }
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

/**
 * @class AirPlayPayload
 * @description Structured model data for the AirPlay payload
 * @author CarbonCollins <toastyghost@carboncollins.uk>
 * @memberof module:@carboncollins/mobileconfig
 * @extends module:@carboncollins/mobileconfig.AirPlayPayload
 */
export default class AirPlayPayload extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of AirPlayPayload
   * @param {Object|module:@carboncollins/mobileconfig.AirPlayPayload} [options={}] An object of
   * options
   */
  constructor(options = {}) {
    super(Object.assign({}, options, { type: 'com.apple.airplay' }));

    /**
     * @member {String[]} [whitelist=[]]
     * @memberof module:@carboncollins/mobileconfig.AirPlayPayload
     * @description Supervised only (ignored otherwise). If present, only AirPlay destinations
     * present in this list are available to the device. The dictionary format is described below.
     */
    this.whitelist = options.whitelist || []; // array of strings, each being an airplay id

    /**
     * @member {String[]} [passwords=[]]
     * @memberof module:@carboncollins/mobileconfig.AirPlayPayload
     * @description If present, sets passwords for known AirPlay destinations. The dictionary
     * format is described below.
     */
    this.passwords = options.passwords || []; // array of objects in the following format:
    // { deviceName: '', deviceId: '', password: '' }
  }

  /**
   * @description generates a plist safe js object with all the required information for generating
   * a mobileconfig profile
   * @readonly
   * @memberof module:@carboncollins/mobileconfig.AirPlayPayload
   * @author CarbonCollins <toastyghost@carboncollins.uk>
   * @returns {Object} a plist object encoded into a js object
   */
  get plistSafeObject() {
    const plistObj = {
      Whitelist: toSafeWhitelist(this.whitelist.slice(0)),
      Passwords: toSafePasswords(this.passwords.slice(0))
    };

    return Object.assign({}, super.plistSafeObject, plistObj);
  }
}
