'use strict';

import MobileConfigPayload from './payload.mjs';

import { toSafeString, deleteEmptyKeys } from '../safe.mjs';

/**
 * @class CertificatePreferencePayload
 * @description Structured model data for the Certificate Preference payload
 * @author CarbonCollins <toastyghost@carboncollins.uk>
 * @memberof module:@carboncollins/mobileconfig
 * @extends module:@carboncollins/mobileconfig.MobileConfigPayload
 */
export default class CertificatePreferencePayload extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of CertificatePreferencePayload
   * @param {Object|module:@carboncollins/mobileconfig.CertificatePreferencePayload} [options={}]
   * An object of options
   */
  constructor(options = {}) {
    super(Object.assign({}, options, { type: 'com.apple.security.certificatepreference' }));

    /**
     * @member {String} [name=null]
     * @memberof module:@carboncollins/mobileconfig.CertificatePreferencePayload
     * @description An email address (RFC822) or other name for which a preferred certificate is
     * requested.
     */
    this.name = options.name || null;

    /**
     * @member {String} [certificateUUID=null]
     * @memberof module:@carboncollins/mobileconfig.CertificatePreferencePayload
     * @description The UUID of another payload within the same profile that installed the
     * certificate; for example, a 'com.apple.security.root' payload.
     */
    this.certificateUUID = options.certificateUUID || null;
  }

  /**
   * @description generates a plist safe js object with all the required information for generating
   * a mobileconfig profile
   * @readonly
   * @memberof module:@carboncollins/mobileconfig.CertificatePreferencePayload
   * @author CarbonCollins <toastyghost@carboncollins.uk>
   * @returns {Object} a plist object encoded into a js object
   */
  get plistSafeObject() {
    const plistObj = {
      Name: toSafeString(this.name),
      PayloadCertificateUUID: toSafeString(this.certificateUUID)
    };

    deleteEmptyKeys(plistObj);

    return plistObj;
  }
}
