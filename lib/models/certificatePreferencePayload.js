'use strict';

const MobileConfigPayload = require('./payload');

const { toSafeString, deleteEmptyKeys } = require('../safe');

/**
 * @class
 * @description A class for containing all of the common structure data used in an Certificate Preference payload
 * @extends MobileConfigPayload
 * @author Steven Collins <CarbonCollins>
 * @date 27th April 2018
 */
class CertificatePreferencePayload extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of CertificatePreferencePayload
   * @param {Object|CertificatePreferencePayload} [options={}] An object of options
   * @author Steven Collins <CarbonCollins>
   * @date 27th April 2018
   */
  constructor(options = {}) {
    super(Object.assign({}, options, { type: 'com.apple.security.certificatepreference' }));
    
    this.name = options.name || null;
    this.certificateUUID = options.certificateUUID || null;
  }
  
  get plistSafeObject() {
    const plistObj = {
      Name: toSafeString(this.name),
      PayloadCertificateUUID: toSafeString(this.certificateUUID)
    };
    
    deleteEmptyKeys(plistObj);
    
    return plistObj;
  }
}

module.exports = CertificatePreferencePayload;
