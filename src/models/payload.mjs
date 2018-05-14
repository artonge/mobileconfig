'use strict';

import uuid from 'uuid';

import { toSafeString, toSafeInteger, hasRequiredValues, deleteEmptyKeys } from '../safe.mjs';

const requiredValues = ['PayloadType', 'PayloadVersion', 'PayloadIdentifier', 'PayloadUUID', 'PayloadDisplayName'];

/**
 * @class MobileConfigPayload
 * @description Structured model data to be extended for each payload which can be added to a
 * profile
 * @author CarbonCollins <toastyghost@carboncollins.uk>
 * @memberof module:@carboncollins/mobileconfig
 */
export default class MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of MobileConfigPayload
   * @param {Object|MobileConfigPayload} [options={}] An object of options and structure data
   */
  constructor(options = {}) {
    /**
     * @member {String} [type='']
     * @memberof module:@carboncollins/mobileconfig.MobileConfigPayload
     * @description The payload type. The payloads are described in the payload specific classes.
     */
    this.type = options.type || '';

    /**
     * @member {Number} [version=1]
     * @memberof module:@carboncollins/mobileconfig.MobileConfigPayload
     * @description The version number of the individual payload. A profile can consist of payload
     * with different version numbers. For example changes to the vpn software in iOS might
     * introduce a new payload version to support additional features, but mail payload versions
     * wont necessarily change in the same release.
     */
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
   * @memberof module:@carboncollins/mobileconfig.MobileConfigPayload
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
