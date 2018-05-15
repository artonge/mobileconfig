'use strict';

import MobileConfigPayload from './payload.mjs';

import { toSafeString, toSafeBoolean, toSafeInteger } from '../safe.mjs';

/**
 * @class CardDAVPayload
 * @description Structured model data for the CardDAV payload
 * @author CarbonCollins <toastyghost@carboncollins.uk>
 * @memberof module:@carboncollins/mobileconfig
 * @extends module:@carboncollins/mobileconfig.MobileConfigPayload
 */
export default class CardDAVPayload extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of CardDAVPayload
   * @param {Object|module:@carboncollins/mobileconfig.CardDAVPayload} [options={}] An object of
   * options
   */
  constructor(options = {}) {
    super(Object.assign({}, options, { type: 'com.apple.carddav.account' }));

    /**
     * @member {String} [accountDescription=null]
     * @memberof module:@carboncollins/mobileconfig.CardDAVPayload
     * @description The description of the account.
     */
    this.accountDescription = options.accountDescription || null;

    /**
     * @member {String} [hostname=null]
     * @memberof module:@carboncollins/mobileconfig.CardDAVPayload
     * @description The server address. In macOS, this key is required.
     */
    this.hostname = options.hostname || null;

    /**
     * @member {String} [username='']
     * @memberof module:@carboncollins/mobileconfig.CardDAVPayload
     * @description The user's login name. In macOS, this key is required.
     */
    this.username = options.username || '';

    /**
     * @member {String} [password='']
     * @memberof module:@carboncollins/mobileconfig.CardDAVPayload
     * @description The user's login password.
     */
    this.password = options.password || null;

    /**
     * @member {Boolean} [useSSL=false]
     * @memberof module:@carboncollins/mobileconfig.CardDAVPayload
     * @description Whether or not to use SSL. In macOS, this key is optional.
     */
    this.useSSL = options.useSSL || false;

    /**
     * @member {Number} [port=(this.useSSL) ? 443 : 80]
     * @memberof module:@carboncollins/mobileconfig.CardDAVPayload
     * @description The port on which to connect to the server.
     */
    this.port = options.port || (this.useSSL) ? 443 : 80;

    /**
     * @member {String} [principalURL=null]
     * @memberof module:@carboncollins/mobileconfig.CardDAVPayload
     * @description Not supported on macOS. The base URL to the user’s address book.
     */
    this.principalURL = options.principalURL || null;
  }

  /**
   * @description generates a plist safe js object with all the required information for generating
   * a mobileconfig profile
   * @readonly
   * @memberof module:@carboncollins/mobileconfig.CardDAVPayload
   * @author CarbonCollins <toastyghost@carboncollins.uk>
   * @returns {Object} a plist object encoded into a js object
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
