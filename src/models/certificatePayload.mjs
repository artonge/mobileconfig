'use strict';

import MobileConfigPayload from './payload.mjs';

import { toSafeString, toSafeData, hasRequiredValues, deleteEmptyKeys } from '../safe.mjs';

const requiredValues = ['PayloadContent'];

/**
 * @class CertificatePayload
 * @description Structured model data for the Certificate payload
 * @author CarbonCollins <toastyghost@carboncollins.uk>
 * @memberof module:@carboncollins/mobileconfig
 * @extends module:@carboncollins/mobileconfig.MobileConfigPayload
 */
export default class CertificatePayload extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of CertificatePayload
   * @param {Object|module:@carboncollins/mobileconfig.CertificatePayload} [options={}] An object of
   * options
   */
  constructor(type, options = {}) {
    super(Object.assign({}, options, { type: `com.apple.security.${type}` }));

    /**
     * @member {String} [certificateFileName=null]
     * @memberof module:@carboncollins/mobileconfig.CertificatePayload
     * @description The file name of the enclosed certificate.
     */
    this.certificateFileName = options.certificateFileName || null;

    /**
     * @member {Buffer} [content=null]
     * @memberof module:@carboncollins/mobileconfig.CertificatePayload
     * @description The base64 representation of the payload with a line length of 52.
     */
    this.content = options.content || null;

    /**
     * @member {String} [password=null]
     * @memberof module:@carboncollins/mobileconfig.CertificatePayload
     * @description For PKCS#12 certificates, contains the password to the identity.
     */
    this.password = options.password || null;
  }

  /**
   * @description generates a plist safe js object with all the required information for generating
   * a mobileconfig profile
   * @readonly
   * @memberof module:@carboncollins/mobileconfig.CertificatePayload
   * @author CarbonCollins <toastyghost@carboncollins.uk>
   * @returns {Object} a plist object encoded into a js object
   */
  get plistSafeObject() {
    const plistObj = {
      PayloadCertificateFileName: toSafeString(this.certificateFileName),
      PayloadContent: toSafeData(this.content),
      Password: toSafeString(this.password)
    };

    deleteEmptyKeys(plistObj);

    return (hasRequiredValues(requiredValues, plistObj, 'com.apple.security payload'))
      ? Object.assign({}, super.plistSafeObject, plistObj)
      : null;
  }
}
