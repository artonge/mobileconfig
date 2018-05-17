'use strict';

import MobileConfigPayload from './payload.mjs';

import { toSafeString } from '../safe.mjs';

/**
 * @class AirPlaySecurityPayload
 * @description Structured model data for the AirPlay Security payload
 * @author CarbonCollins <toastyghost@carboncollins.uk>
 * @memberof module:@carboncollins/mobileconfig
 * @extends module:@carboncollins/mobileconfig.MobileConfigPayload
 */
export default class AirPlaySecurityPayload extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of AirPlaySecurityPayload
   * @param {Object|module:@carboncollins/mobileconfig.AirPlaySecurityPayload} [options={}] An object of
   * options
   */
  constructor(options = {}) {
    super(Object.assign({}, options, { type: 'com.apple.airplay.security' }));

    /**
     * @member {String} securityType
     * @memberof module:@carboncollins/mobileconfig.AirPlaySecurityPayload
     * @description Required. Must be one of the defined values: `PASSCODE_ONCE`,
     * `PASSCODE_ALWAYS`, or `PASSWORD`.
     *
     * `PASSCODE_ONCE` will require an on-screen passcode to be entered on the first connection
     * from a device. Subsequent connections from the same device will not be prompted.
     *
     * `PASSCODE_ALWAYS` will require an on-screen passcode to be entered upon every AirPlay
     * connection.
     *
     * `PASSWORD` will require a passphrase to be entered as specified in the Password key. The
     * Password key is required if this SecurityType is selected.
     *
     * `NONE` was deprecated in tvOS 11.3. Existing profiles using `NONE` will get the
     * `PASSWORD_ONCE` behavior.
     */
    this.securityType = options.securityType || null;

    /**
     * @member {String} accessType
     * @memberof module:@carboncollins/mobileconfig.AirPlaySecurityPayload
     * @description Required. Must be one of the defined values: `ANY` or `WIFI_ONLY`.
     *
     * `ANY` allows connections from both Ethernet/WiFi and AWDL.
     *
     * `WIFI_ONLY` allows connections only from devices on the same Ethernet/WiFi network as the
     * Apple TV.
     */
    this.accessType = options.accessType || null;

    /**
     * @member {String} [password=null]
     * @memberof module:@carboncollins/mobileconfig.AirPlaySecurityPayload
     * @description Optional. The AirPlay password. Required if `securityType` is `PASSWORD`.
     */
    this.password = options.password || null;
  }

  /**
   * @description generates a plist safe js object with all the required information for generating
   * a mobileconfig profile
   * @readonly
   * @memberof module:@carboncollins/mobileconfig.AirPlaySecurityPayload
   * @author CarbonCollins <toastyghost@carboncollins.uk>
   * @returns {Object} a plist object encoded into a js object
   */
  get plistSafeObject() {
    const plistObj = {
      SecurityType: toSafeString(this.securityType),
      AccessType: toSafeString(this.accessType),
      Password: toSafeString(this.password)
    };

    return Object.assign({}, super.plistSafeObject, plistObj);
  }
}
