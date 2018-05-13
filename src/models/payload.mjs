'use strict';

import uuid from 'uuid';

import { toSafeString, toSafeInteger, hasRequiredValues, deleteEmptyKeys } from '../safe.mjs';

const requiredValues = ['PayloadType', 'PayloadVersion', 'PayloadIdentifier', 'PayloadUUID', 'PayloadDisplayName'];

/**
 * @class
 * @description A class for containing all of the common structure data used in a mobileconfig
 * payload
 * @author Steven Collins <CarbonCollins>
 * @date 27th April 2018
 */
export default class MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of MobileConfigPayload
   * @param {Object|MobileConfigPayload} [options={}] An object of options and structure data
   */
  constructor(options = {}) {
    this.type = options.type || '';
    this.version = options.version || 1;
    this.identifier = options.identifier || 'com.example.myprofile.mypayload';
    this.uuid = options.uuid || uuid.v4();
    this.displayName = options.displayName || '';
    this.description = options.description || null;
    this.organisation = options.organisation || null;
  }

  /**
   * @description generates a plist safe js object to be converted to plist xml
   * @readonly
   * @memberof MobileConfigPayload
   * @private
   */
  get plistSafeObject() {
    const plistObj = {
      PayloadType: toSafeString(this.type),
      PayloadVersion: toSafeInteger(this.version),
      PayloadIdentifier: toSafeString(this.identifier),
      PayloadUUID: toSafeString(this.uuid),
      PayloadDisplayName: toSafeString(this.displayName),
      PayloadDescription: toSafeString(this.description),
      PayloadOrganisation: toSafeString(this.organisation)
    };

    deleteEmptyKeys(plistObj);
    return (hasRequiredValues(requiredValues, plistObj, `${this.type} payload`))
      ? plistObj
      : null;
  }
}
