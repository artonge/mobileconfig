'use strict';

import MobileConfigPayload from './payload.mjs';

/**
 * @class RawPayload
 * @description Structured model data for a raw payload
 * @author CarbonCollins <toastyghost@carboncollins.uk>
 * @memberof module:@carboncollins/mobileconfig
 * @extends module:@carboncollins/mobileconfig.MobileConfigPayload
 */
export default class RawPayload extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of RawPayload
   * @param {Object|module:@carboncollins/mobileconfig.RawPayload} [options={}] An object of
   * options
   */
  constructor(options = {}) {
    super(options);

    /**
     * @member {Object} [raw={}]
     * @memberof module:@carboncollins/mobileconfig.RawPayload
     * @description AN object of raw profile keys defined in the configuration profile reference
     * document. the base payload properties still apply but can be overriden with the raw fields
     * @see {@link https://developer.apple.com/library/content/featuredarticles/iPhoneConfigurationProfileRef/Introduction/Introduction.html}
     */
    this.raw = options.raw || {};
  }

  /**
   * @description generates a plist safe js object with all the required information for generating
   * a mobileconfig profile
   * @readonly
   * @memberof module:@carboncollins/mobileconfig.RawPayload
   * @author CarbonCollins <toastyghost@carboncollins.uk>
   * @returns {Object} a plist object encoded into a js object
   */
  get plistSafeObject() {
    return Object.assign({}, super.plistSafeObject, this.raw);
  }
}
