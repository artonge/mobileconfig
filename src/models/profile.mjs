'use strict';

import uuid from 'uuid';

import { toSafeString, toSafeInteger, toSafeDate, toSafeBoolean, toSafeFloat, hasRequiredValues, deleteEmptyKeys } from '../safe.mjs';

const requiredValues = ['PayloadType', 'PayloadVersion', 'PayloadIdentifier', 'PayloadUUID'];

/**
 * @class MobileConfigProfile
 * @description Structured model data for the mobileconfig profile
 * @author CarbonCollins <toastyghost@carboncollins.uk>
 * @memberof module:@carboncollins/mobileconfig
 */
export default class MobileConfigProfile {
  /**
   * @constructor
   * @description creates an instance of MobileConfigProfile
   * @param {Object|MobileConfigProfile} [options={}] An object of options and structure data
   */
  constructor(options = {}) {
    /**
     * @member {String} [type=Configuration]
     * @memberof module:@carboncollins/mobileconfig.MobileConfigProfile
     * @description Can only be `Configuration` currently
     */
    this.type = options.type || 'Configuration';

    /**
     * @member {Number} [version=1]
     * @memberof module:@carboncollins/mobileconfig.MobileConfigProfile
     * @description The version number of the profile format. This describes the version of the
     * configuration profile as a whole, not of the individual payloads within it. This should
     * start at 1
     */
    this.version = options.version || 1;

    /**
     * @member {String} [scope=User]
     * @memberof module:@carboncollins/mobileconfig.MobileConfigProfile
     * @description Determines if the profile should be installed for the system or for the user.
     * In many cases, it determines the location of the certificate items, such as keychains.
     * Though it is not possible to declare different payload scopes, payloads, like VPN, may
     * automaticaly install their items in both scopes if needed. Values can be: `System`
     * or `User`.
     */
    this.scope = options.scope || 'User';

    /**
     * @member {module:@carboncollins/mobileconfig.MobileConfigPayload[]} [content=[]]
     * @memberof module:@carboncollins/mobileconfig.MobileConfigProfile
     * @description An array of payload objects.
     */
    this.content = options.content || [];

    /**
     * @member {String} [description=null]
     * @memberof module:@carboncollins/mobileconfig.MobileConfigProfile
     * @description A description of the profile, shown on the detail screen for the profile. This
     * should be descriptive enough to help the user decide whether to install the profile.
     */
    this.description = options.description || null;

    /**
     * @member {String} [displayName=null]
     * @memberof module:@carboncollins/mobileconfig.MobileConfigProfile
     * @description A human-readable name for the profile. This value is displayed on the detail
     * screen. It does not have to be unique.
     */
    this.displayName = options.displayName || null;

    /**
     * @member {Date} [expirationDate=null]
     * @memberof module:@carboncollins/mobileconfig.MobileConfigProfile
     * @description A date in which a profile is considered to have expired and can be updated over
     * the air. This key is only used if the profile is delivered via over-the-air profile
     * delivery
     */
    this.expirationDate = options.expirationDate || null;

    /**
     * @member {String} [identifier=com.example.myprofile]
     * @memberof module:@carboncollins/mobileconfig.MobileConfigProfile
     * @description A reverse-DNS style identifier (com.example.myprofile, for example) that
     * identifies the profile. The string is used to determine whether a new profile should
     * replace an existing one or should be added.
     */
    this.identifier = options.identifier || 'com.example.myprofile';

    /**
     * @member {String} [organization=null]
     * @memberof module:@carboncollins/mobileconfig.MobileConfigProfile
     * @description A human-readable string containing the name of the organisation that provided
     * the profile
     */
    this.organization = options.organization || null;

    /**
     * @member {String} [uuid=new UUIDv4()]
     * @memberof module:@carboncollins/mobileconfig.MobileConfigProfile
     * @description A globaly unique identifier for the profile. The actual content is
     * unimportant, but it must be globaly unique. If left blank a new uuid will be generated.
     * If in macOS you can use uuidgen to generate reasonable UUIDs.
     */
    this.uuid = options.uuid || uuid.v4();

    /**
     * @member {Boolean} [removeDisallowed=false]
     * @memberof module:@carboncollins/mobileconfig.MobileConfigProfile
     * @description Supervised only. If present and set to true, the user cannot delete the profile
     * (unless the profile has a removal password and the user provides it)
     */
    this.removeDisallowed = options.removeDisallowed || false;

    /**
     * @member {Date} [removalDate=null]
     * @memberof module:@carboncollins/mobileconfig.MobileConfigProfile
     * @description The date on which the profile will automaticaly be removed. If
     * `durationUntilRemoval` is also defined, whichever field yeilds the earliest date will be
     * used.
     */
    this.removalDate = options.removalDate || null;

    /**
     * @member {Number} [durationUntilRemoval=null]
     * @memberof module:@carboncollins/mobileconfig.MobileConfigProfile
     * @description Number of seconds untill the profile is automaticaly removed. If `removalDate`
     * is also defined, whichever field yeilds the earliest date will be used.
     */
    this.durationUntilRemoval = options.durationUntilRemoval || null;

    /**
     * @member {Object} [consentText={}}]
     * @memberof module:@carboncollins/mobileconfig.MobileConfigProfile
     * @description An object consiting of a key in IETF BCP 47 language identifier (e.g. `en`,
     * `jp`) and a stirng value consisting of a lisence agreement the user must agree to before
     * installing the profile. The system will choose which language to use based on the users
     * current lanuage setting. If the language is not found then the default localisation is
     * used. If the default is not found then `en` localisation is used. If there is no `en`
     * localisation then the first available localisation is used.\n You should provide a default
     * value if possible. No warning shall be displayed if the users locale does not match any
     * localisation in the consentTest object.
     */
    this.consentText = options.consentText || {}; // i18n dictionary files { en: 'some lisence agreement' }
  }

  /**
   * @description generates a plist safe js object with all the required information for generating
   * a mobileconfig profile
   * @readonly
   * @memberof module:@carboncollins/mobileconfig.MobileConfigProfile
   * @author CarbonCollins <toastyghost@carboncollins.uk>
   * @returns {Object} a plist object encoded into a js object
   */
  get plistSafeObject() {
    const plistObj = {
      PayloadContent: this.content.slice(0).map((content) => { return content.plistSafeObject; }),
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
   * @method module:@carboncollins/mobileconfig.MobileConfigProfile~addPayload
   * @description Adds a payload to the profile (allows multiple settings to be added to a profile)
   * @param {Payload} any of the various payloads
   * @author CarbonCollins <toastyghost@carboncollins.uk>
   */
  addPayload(payload = null) {
    // if (payload && payload.ancestors && payload.ancestors.include('MobileConfigPayload')) { // need to verify that it is a payload type
    this.content.push(payload);
    // }
  }

  /**
   * @method module:@carboncollins/mobileconfig.MobileConfigProfile~clearPayloads
   * @description Removes any previously added payloads from the profile
   * @author CarbonCollins <toastyghost@carboncollins.uk>
   */
  clearPayloads() {
    this.content = [];
  }
}
