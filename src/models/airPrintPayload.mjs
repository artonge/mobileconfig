'use strict';

import MobileConfigPayload from './payload.mjs';

import { toSafeString, toSafeInteger, toSafeBoolean } from '../safe.mjs';

/**
 * @description generates a plist safe airprint list
 * @author Steven Collins <steven@carboncollins.uk>
 * @param {airPrintServers[]} value an array of whitelist objects
 * @returns {Object[]} an array of plist safe whitelist objects
 * @private
 */
function toSafePrinterlist(value) {
  if (value === undefined || value === null || !Array.isArray(value)) {
    return null;
  }
  const AirPrintList = [];

  for (let i = 0, iLength = value.length; i < iLength; i += 1) {
    AirPrintList.push({
      IPAddress: toSafeString(value[i].ipAddress),
      ResourcePath: toSafeString(value[i].resourcePath),
      Port: toSafeInteger(value[i].port),
      ForceTLS: toSafeBoolean(value[i].forceTLS)
    });
  }

  return (AirPrintList.length === 0)
    ? null
    : AirPrintList;
}

/**
 * @class AirPrintPayload
 * @description Structured model data for the AirPlay payload
 * @author CarbonCollins <toastyghost@carboncollins.uk>
 * @memberof module:@carboncollins/mobileconfig
 * @extends module:@carboncollins/mobileconfig.MobileConfigPayload
 */
export default class AirPrintPayload extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of AirPrintPayload
   * @param {Object|module:@carboncollins/mobileconfig.AirPrintPayload} [options={}] An object of
   * options
   */
  constructor(options = {}) {
    super(Object.assign({}, options, { type: 'com.apple.airprint' }));

    /**
     * @member {airPrintServers[]} [printers=[]]
     * @memberof module:@carboncollins/mobileconfig.AirPrintPayload
     * @description An array of AirPrint printers that should always be shown.
     */
    this.printers = options.printers || []; // array of strings, each being an airplay id
  }

  /**
   * @description generates a plist safe js object with all the required information for generating
   * a mobileconfig profile
   * @readonly
   * @memberof module:@carboncollins/mobileconfig.AirPrintPayload
   * @author CarbonCollins <toastyghost@carboncollins.uk>
   * @returns {Object} a plist object encoded into a js object
   */
  get plistSafeObject() {
    const plistObj = {
      AirPrint: toSafePrinterlist(this.printers.slice(0))
    };

    return Object.assign({}, super.plistSafeObject, plistObj);
  }
}

/**
 * @typedef {Object} airPrintServers
 * @description Each item in the AirPrint array must contain the following keys and values
 *
 * @property {String} ipAddress The IP Address of the AirPrint destination.
 *
 * @property {String} resourcePath The Resource Path associated with the printer. This corresponds
 * to the rp parameter of the _ipps.tcp Bonjour record. For example:
 *
 * `printers/Canon_MG5300_series`
 * `printers/Xerox_Phaser_7600`
 * `ipp/print`
 * `Epson_IPP_Printer`
 *
 * @property {Number} [port] Listening port of the AirPrint destination. If this key is not
 * specified AirPrint will use the default port. Availability: Available only in iOS 11.0 and later.
 *
 * @property {Boolean} [forceTLS=false] If true AirPrint connections are secured by Transport Layer
 * Security (TLS). Default is false. Availability: Available only in iOS 11.0 and later.
 */
