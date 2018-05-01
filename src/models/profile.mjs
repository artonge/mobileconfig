'use strict';

import uuid from 'uuid';

import { toSafeString, toSafeInteger, toSafeDate, toSafeBoolean, toSafeFloat, hasRequiredValues, deleteEmptyKeys } from '../safe.mjs';

const requiredValues = ['PayloadType', 'PayloadVersion', 'PayloadIdentifier', 'PayloadUUID'];

/**
 * @class
 * @description A class for containing all of the structure data used in a mobileconfig profile
 * @author Steven Collins <CarbonCollins>
 * @date 27th April 2018
 */
export default class MobileConfigProfile {
  /**
   * @constructor
   * @description creates an instance of MobileConfigProfile
   * @param {Object|MobileConfigProfile} [options={}] An object of options and structure data
   */
  constructor(options = {}) {
    this.type = options.type || 'Configuration';
    this.version = options.version || 1;
    this.scope = options.scope || 'User';
    this.content = options.content || [];
    this.description = options.description || null;
    this.displayName = options.displayName || null;
    this.expirationDate = options.expirationDate || null;
    this.identifier = options.identifier || 'com.example.myprofile';
    this.organization = options.organization || null;
    this.uuid = options.uuid || uuid.v4();
    this.removeDisallowed = options.removeDisallowed || false;
    this.removalDate = options.removalDate || null;
    this.durationUntilRemoval = options.durationUntilRemoval || null;
    this.consentText = options.consentText || {}; // i18n dictionary files { en: 'some lisence agreement' }
  }
  
  get plistSafeObject() {
    const plistObj = {
      PayloadContent: this.content.slice(0).map(content => content.plistSafeObject),
      PayloadDescription: toSafeString(this.description),
      PayloadDisplayName: toSafeString(this.displayName),
      PayloadExpirationDate: toSafeDate(this.expirationDate),
      PayloadIdentifier: toSafeString(this.identifier),
      PayloadOrganization: toSafeString(this.organization),
      PayloadUUID: toSafeString(this.uuid),
      PayloadRemoveDisallowed: toSafeBoolean(this.removeDisallowed),
      PayloadType: toSafeString(this.type),
      PayloadVersion: toSafeInteger(this.version),
      PayloadScope: toSafeString(this.scope),
      RemovalDate: toSafeDate(this.removalDate),
      DurationUntilRemoval: toSafeFloat(this.durationUntilRemoval),
      ConsentText: this.consentText
    };

    deleteEmptyKeys(plistObj);
    
    return (hasRequiredValues(requiredValues, plistObj, 'profile'))
      ? plistObj
      : null;
  }
  
  /**
   * @method MobileConfigProfile~addPayload
   * @description Adds a payload to the profile (allows multiple settings to be added to a profile)
   * @param {Payload} any of the various payloads
   * @author Steven Collins <CarbonCollins>
   * @date 27th April 2018
   */
  addPayload(payload = null) {
    // if (payload && payload.ancestors && payload.ancestors.include('MobileConfigPayload')) { // need to verify that it is a payload type
      this.content.push(payload);
    // }
  }
  
  /**
   * @method MobileConfigProfile~clearPayloads
   * @description Removes any previously added payloads from the profile
   * @author Steven Collins <CarbonCollins>
   * @date 27th April 2018
   */
  clearPayloads() {
    this.content = [];
  }
}
