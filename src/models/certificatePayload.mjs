'use strict';

import MobileConfigPayload from './payload.mjs';

import { toSafeString, toSafeData, hasRequiredValues, deleteEmptyKeys } from '../safe.mjs';

const requiredValues = ['PayloadContent'];

/**
 * @class
 * @description A class for containing all of the common structure data used in an Cirtificate payload
 * @extends MobileConfigPayload
 * @author Steven Collins <CarbonCollins>
 * @date 27th April 2018
 */
export default class CertificatePayload extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of AirPlayPayload
   * @param {String} type a certificate type to use can be either: 'root', 'pkcs1', 'pem', or  'pkcs12'
   * @param {Object|CertificatePayload} [options={}] An object of options
   * @author Steven Collins <CarbonCollins>
   * @date 27th April 2018
   */
  constructor(type, options = {}) {
    super(Object.assign({}, options, { type: `com.apple.security.${type}` }));
    
    this.certificateFileName = options.certificateFileName || null;
    this.content = options.content || null;
    this.password = options.password || null;
  }
  
  get plistSafeObject() {
    const plistObj = {
      PayloadCertificateFileName: toSafeString(this.certificateFileName),
      PayloadContent: toSafeData(this.content),
      Password: toSafeString(this.password)
    };
    
    deleteEmptyKeys(plistObj);
    
    return (hasRequiredValues(requiredValues, plistObj, `com.apple.security payload`))
      ? Object.assign({}, super.plistSafeObject, plistObj)
      : null;
  }
}
