'use strict';

import MobileConfigPayload from './payload.mjs';

import { toSafeString, toSafeInteger, toSafeData } from '../safe.mjs';

/**
 * @description generates a plist safe airprint list
 * @author Steven Collins <steven@carboncollins.uk>
 * @param {apnDescriptior[]} value an array of apn objects
 * @returns {Object[]} an array of plist safe apn objects
 * @private
 */
function toSafeAPNList(value) {
  if (value === undefined || value === null || !Array.isArray(value)) {
    return null;
  }
  const apnList = [];

  for (let i = 0, iLength = value.length; i < iLength; i += 1) {
    apnList.push({
      apn: toSafeString(value[i].apn),
      username: toSafeString(value[i].username),
      password: toSafeData(value[i].password),
      Proxy: toSafeString(value[i].proxy),
      ProxyPort: toSafeInteger(value[i].proxyPort)
    });
  }

  return (apnList.length === 0)
    ? null
    : apnList;
}

/**
 * @class APNPayload
 * @description Structured model data for the AirPlay payload
 * @author CarbonCollins <toastyghost@carboncollins.uk>
 * @memberof module:@carboncollins/mobileconfig
 * @extends module:@carboncollins/mobileconfig.MobileConfigPayload
 * @deprecated in iOS 7 onwards
 */
export default class APNPayload extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of APNPayload
   * @param {Object|module:@carboncollins/mobileconfig.APNPayload} [options={}] An object of
   * options
   */
  constructor(options = {}) {
    super(Object.assign({}, options, { type: 'com.apple.apn.managed' }));

    /**
     * @member {Object} [defaultsData={}]
     * @memberof module:@carboncollins/mobileconfig.APNPayload
     * @description This dictionary contains two key/value pairs.
     */
    this.defaultsData = options.defaultsData || {};

    /**
     * @member {String} [defaultsDomainName=com.apple.managedCarrier]
     * @memberof module:@carboncollins/mobileconfig.APNPayload
     * @description The only allowed value is com.apple.managedCarrier.
     */
    this.defaultsDomainName = options.defaultsDomainName || 'com.apple.managedCarrier';

    /**
     * @member {apnDescriptior[]} [apns=[]]
     * @memberof module:@carboncollins/mobileconfig.APNPayload
     * @description The only allowed value is com.apple.managedCarrier.
     */
    this.apns = options.apns || [];
  }

  /**
   * @description generates a plist safe js object with all the required information for generating
   * a mobileconfig profile
   * @readonly
   * @memberof module:@carboncollins/mobileconfig.APNPayload
   * @author CarbonCollins <toastyghost@carboncollins.uk>
   * @returns {Object} a plist object encoded into a js object
   */
  get plistSafeObject() {
    const plistObj = {
      DefaultsData: Object.assign({}, this.defaultsData),
      DefaultsDomainName: toSafeString(this.defaultsDomainName),
      apns: toSafeAPNList(this.apns.slice(0))
    };

    return Object.assign({}, super.plistSafeObject, plistObj);
  }
}

/**
 * @typedef {Object} apnDescriptior
 * @description an object containing the various apn infomration
 *
 * @property {String} apn This string specifies the Access Point Name.
 *
 * @property {String} username This string specifies the user name for this APN. If it is missing,
 * the device prompts for it during profile installation.
 *
 * @property {Buffer} [password] Optional. This data represents the password for the user for this
 * APN. For obfuscation purposes, the password is encoded. If it is missing from the payload, the
 * device prompts for the password during profile installation.
 *
 * @property {String} [proxy] Optional. The IP address or URL of the APN proxy.
 *
 * @property {Number} [proxyPort] Optional. The port number of the APN proxy.
 */
