'use strict';

import MobileConfigPayload from './payload.mjs';

import { toSafeString, toSafeBoolean } from '../safe.mjs';

/**
 * @class CalendarSubscriptionPayload
 * @description Structured model data for the Calendar Subscription payload
 * @author CarbonCollins <toastyghost@carboncollins.uk>
 * @memberof module:@carboncollins/mobileconfig
 * @extends module:@carboncollins/mobileconfig.MobileConfigPayload
 */
export default class CalendarSubscriptionPayload extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of CalDAVPayload
   * @param {Object|module:@carboncollins/mobileconfig.CalendarSubscriptionPayload} [options={}] An object of options
   */
  constructor(options = {}) {
    super(Object.assign({}, options, { type: 'com.apple.subscribedcalendar.account' }));

    /**
     * @member {String} [accountDescription=null]
     * @memberof module:@carboncollins/mobileconfig.CalendarSubscriptionPayload
     * @description The description of the account.
     */
    this.accountDescription = options.accountDescription || null;

    /**
     * @member {String} [hostname=null]
     * @memberof module:@carboncollins/mobileconfig.CalendarSubscriptionPayload
     * @description The server address. In macOS, this key is required.
     */
    this.hostname = options.hostname || null;

    /**
     * @member {String} [username='']
     * @memberof module:@carboncollins/mobileconfig.CalendarSubscriptionPayload
     * @description The user's login name. In macOS, this key is required.
     */
    this.username = options.username || '';

    /**
     * @member {String} [password='']
     * @memberof module:@carboncollins/mobileconfig.CalendarSubscriptionPayload
     * @description The user's login password.
     */
    this.password = options.password || null;

    /**
     * @member {Boolean} [useSSL=false]
     * @memberof module:@carboncollins/mobileconfig.CalendarSubscriptionPayload
     * @description Whether or not to use SSL.
     */
    this.useSSL = options.useSSL || false;
  }

  /**
   * @description generates a plist safe js object with all the required information for generating
   * a mobileconfig profile
   * @readonly
   * @memberof module:@carboncollins/mobileconfig.CalendarSubscriptionPayload
   * @author CarbonCollins <toastyghost@carboncollins.uk>
   * @returns {Object} a plist object encoded into a js object
   */
  get plistSafeObject() {
    const plistObj = {
      SubCalAccountDescription: toSafeString(this.accountDescription),
      SubCalAccountHostName: toSafeString(this.hostname),
      SubCalAccountUsername: toSafeString(this.username),
      SubCalAccountPassword: toSafeString(this.password),
      SubCalAccountUseSSL: toSafeBoolean(this.useSSL)
    };

    return Object.assign({}, super.plistSafeObject, plistObj);
  }
}
