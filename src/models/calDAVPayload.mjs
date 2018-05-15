'use strict';

import MobileConfigPayload from './payload.mjs';

import { toSafeString, toSafeBoolean, toSafeInteger } from '../safe.mjs';

/**
 * @class CalDAVPayload
 * @description Structured model data for the CalDAV payload
 * @author CarbonCollins <toastyghost@carboncollins.uk>
 * @memberof module:@carboncollins/mobileconfig
 * @extends module:@carboncollins/mobileconfig.MobileConfigPayload
 */
export default class CalDAVPayload extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of CalDAVPayload
   * @param {Object|module:@carboncollins/mobileconfig.CalDAVPayload} [options={}] An object of
   * options
   */
  constructor(options = {}) {
    super(Object.assign({}, options, { type: 'com.apple.caldav.account' }));

    /**
     * @member {String} [accountDescription=null]
     * @memberof module:@carboncollins/mobileconfig.CalDAVPayload
     * @description The description of the account.
     */
    this.accountDescription = options.accountDescription || null;

    /**
     * @member {String} [hostname=null]
     * @memberof module:@carboncollins/mobileconfig.CalDAVPayload
     * @description The server address. In macOS, this key is required.
     */
    this.hostname = options.hostname || null;

    /**
     * @member {String} [username='']
     * @memberof module:@carboncollins/mobileconfig.CalDAVPayload
     * @description The user's login name. In macOS, this key is required.
     */
    this.username = options.username || '';

    /**
     * @member {String} [password='']
     * @memberof module:@carboncollins/mobileconfig.CalDAVPayload
     * @description The user's login password.
     */
    this.password = options.password || null;

    /**
     * @member {Boolean} [useSSL=false]
     * @memberof module:@carboncollins/mobileconfig.CalDAVPayload
     * @description Whether or not to use SSL. In macOS, this key is optional.
     */
    this.useSSL = options.useSSL || false;

    /**
     * @member {Number} [port=(this.useSSL) ? 8448 : 8008]
     * @memberof module:@carboncollins/mobileconfig.CalDAVPayload
     * @description The port on which to connect to the server.
     */
    this.port = options.port || (this.useSSL) ? 8448 : 8008;

    /**
     * @member {String} [principalURL=null]
     * @memberof module:@carboncollins/mobileconfig.CalDAVPayload
     * @description The base URL to the user’s calendar. In macOS this URL is required if the user
     * doesn’t provide a password, because auto-discovery of the service will fail and the account
     * won’t be created.
     */
    this.principalURL = options.principalURL || null;
  }

  /**
   * @description generates a plist safe js object with all the required information for generating
   * a mobileconfig profile
   * @readonly
   * @memberof module:@carboncollins/mobileconfig.CalDAVPayload
   * @author CarbonCollins <toastyghost@carboncollins.uk>
   * @returns {Object} a plist object encoded into a js object
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
