'use strict';

import MobileConfigPayload from './payload.mjs';

import { toSafeString, toSafeBoolean } from '../safe.mjs';

/**
 * @class
 * @description A class for containing all of the common structure data used in an calendar subscription payload
 * @extends MobileConfigPayload
 * @author Steven Collins <CarbonCollins>
 * @date 13th May 2018
 */
export default class CalendarSubscriptionPayload extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of CalDAVPayload
   * @param {Object|CalendarSubscriptionPayload} [options={}] An object of options
   * @author Steven Collins <CarbonCollins>
   * @date 13th May 2018
   */
  constructor(options = {}) {
    super(Object.assign({}, options, { type: 'com.apple.subscribedcalendar.account' }));

    this.accountDescription = options.accountDescription || null;
    this.hostname = options.hostname || null;
    this.username = options.username || '';
    this.password = options.password || null;
    this.useSSL = options.useSSL || false;
  }

  /**
   * @description generates a plist safe js object to be converted into plist xml
   * @readonly
   * @memberof CalendarSubscriptionPayload
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
