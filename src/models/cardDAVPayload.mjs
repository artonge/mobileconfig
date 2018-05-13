'use strict';

import MobileConfigPayload from './payload.mjs';

import { toSafeString, toSafeBoolean, toSafeInteger } from '../safe.mjs';

/**
 * @class
 * @description A class for containing all of the common structure data used in an CardDav payload
 * @extends MobileConfigPayload
 * @author Steven Collins <CarbonCollins>
 * @date 13th May 2018
 */
export default class CardDAVPayload extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of CardDAVPayload
   * @param {Object|CardDAVPayload} [options={}] An object of options
   * @author Steven Collins <CarbonCollins>
   * @date 13th May 2018
   */
  constructor(options = {}) {
    super(Object.assign({}, options, { type: 'com.apple.carddav.account' }));

    this.accountDescription = options.accountDescription || null;
    this.hostname = options.hostname || null;
    this.username = options.username || '';
    this.password = options.password || null;
    this.useSSL = options.useSSL || false;
    this.port = options.port || (this.useSSL) ? 443 : 80;
    this.principalURL = options.principalURL || null;
  }

  /**
   * @description generates a plist safe js object to be converted into plist xml
   * @readonly
   * @memberof AirPlayPayload
   */
  get plistSafeObject() {
    const plistObj = {
      CardDAVAccountDescription: toSafeString(this.accountDescription),
      CardDAVHostName: toSafeString(this.hostname),
      CardDAVUsername: toSafeString(this.username),
      CardDAVPassword: toSafeString(this.password),
      CardDAVUseSSL: toSafeBoolean(this.useSSL),
      CardDAVPort: toSafeInteger(this.port),
      CardDAVPrincipalURL: toSafeString(this.principalURL)
    };

    return Object.assign({}, super.plistSafeObject, plistObj);
  }
}
