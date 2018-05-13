'use strict';

import MobileConfigPayload from './payload.mjs';

import { toSafeString, toSafeBoolean, toSafeInteger } from '../safe.mjs';

/**
 * @class
 * @description A class for containing all of the common structure data used in an CalDAV payload
 * @extends MobileConfigPayload
 * @author Steven Collins <CarbonCollins>
 * @date 12th May 2018
 */
export default class CalDAVPayload extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of CalDAVPayload
   * @param {Object|CalDAVPayload} [options={}] An object of options
   * @author Steven Collins <CarbonCollins>
   * @date 12th May 2018
   */
  constructor(options = {}) {
    super(Object.assign({}, options, { type: 'com.apple.caldav.account' }));

    this.accountDescription = options.accountDescription || null;
    this.hostname = options.hostname || null;
    this.username = options.username || '';
    this.password = options.password || null;
    this.useSSL = options.useSSL || false;
    this.port = options.port || (this.useSSL) ? 8448 : 8008;
    this.principalURL = options.principalURL || null;
  }

  /**
   * @description generates a plist safe js object to be converted into plist xml
   * @readonly
   * @memberof AirPlayPayload
   */
  get plistSafeObject() {
    const plistObj = {
      CalDAVAccountDescription: toSafeString(this.accountDescription),
      CalDAVHostName: toSafeString(this.hostname),
      CalDAVUsername: toSafeString(this.username),
      CalDAVPassword: toSafeString(this.password),
      CalDAVUseSSL: toSafeBoolean(this.useSSL),
      CalDAVPort: toSafeInteger(this.port),
      CalDAVPrincipalURL: toSafeString(this.principalURL)
    };

    return Object.assign({}, super.plistSafeObject, plistObj);
  }
}
