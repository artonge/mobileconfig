'use strict';

import MobileConfigPayload from './payload.mjs';

import { toSafeString, toSafeBoolean, toSafeInteger } from '../safe.mjs';

/**
 * @class ActiveDirectoryCertificate
 * @description Structured model data for the Active Directory Certificate payload
 * @author CarbonCollins <toastyghost@carboncollins.uk>
 * @memberof module:@carboncollins/mobileconfig
 * @extends module:@carboncollins/mobileconfig.MobileConfigPayload
 */
export default class ActiveDirectoryCertificate extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of ActiveDirectoryCertificate
   * @param {Object|module:@carboncollins/mobileconfig.ActiveDirectoryCertificate} [options={}] An object of
   * options
   */
  constructor(options = {}) {
    super(Object.assign({}, options, { type: 'com.apple.ADCertificate.managed' }));

    /**
     * @member {Boolean} allowAllAppsAccess
     * @memberof module:@carboncollins/mobileconfig.ActiveDirectoryCertificate
     * @description If true, apps have access to the private key.
     */
    this.allowAllAppsAccess = options.allowAllAppsAccess || null;

    /**
     * @member {String} server
     * @memberof module:@carboncollins/mobileconfig.ActiveDirectoryCertificate
     * @description Fully qualified host name of the Active Directory issuing CA.
     */
    this.server = options.server || null;

    /**
     * @member {String} template
     * @memberof module:@carboncollins/mobileconfig.ActiveDirectoryCertificate
     * @description Template Name as it appears in the General tab of the template’s object in the
     * Certificate Templates’ Microsoft Management Console snap-in component.
     */
    this.template = options.template || null;

    /**
     * @member {String} acquisitionMechanism
     * @memberof module:@carboncollins/mobileconfig.ActiveDirectoryCertificate
     * @description Most commonly `RPC`. If using ‘Web enrollment,’ `HTTP`.
     */
    this.acquisitionMechanism = options.acquisitionMechanism || null;

    /**
     * @member {String} authority
     * @memberof module:@carboncollins/mobileconfig.ActiveDirectoryCertificate
     * @description Name of the CA. This value is determined from the Common Name (CN) of the
     * Active Directory entry: CN=<your CA name>, CN='Certification Authorities', CN='Public Key
     * Services', CN='Services', or CN='Configuration', <your base Domain Name>.
     */
    this.authority = options.authority || null;

    /**
     * @member {Number} renewalTimeInterval
     * @memberof module:@carboncollins/mobileconfig.ActiveDirectoryCertificate
     * @description Number of days in advance of certificate expiration that the notification
     * center will notify the user.
     */
    this.renewalTimeInterval = options.renewalTimeInterval || null;

    /**
     * @member {String} description
     * @memberof module:@carboncollins/mobileconfig.ActiveDirectoryCertificate
     * @description User-friendly description of the certification identity.
     */
    this.description = options.description || null;

    /**
     * @member {Boolean} keyIsExtractable
     * @memberof module:@carboncollins/mobileconfig.ActiveDirectoryCertificate
     * @description If true, the private key can be exported.
     */
    this.keyIsExtractable = options.keyIsExtractable || null;

    /**
     * @member {Boolean} promptForCredentials
     * @memberof module:@carboncollins/mobileconfig.ActiveDirectoryCertificate
     * @description This key applies only to user certificates where Manual Download is the chosen
     * method of profile delivery. If true, the user will be prompted for credentials when the
     * profile is installed. Omit this key for computer certificates.
     */
    this.promptForCredentials = options.promptForCredentials || null;

    /**
     * @member {Number} [keysize=2048]
     * @memberof module:@carboncollins/mobileconfig.ActiveDirectoryCertificate
     * @description Optional; defaults to 2048. The RSA key size for the Certificate Signing
     * Request (CSR). Availability: Available in macOS 10.11 and later.
     */
    this.keysize = options.keysize || 2048;

    /**
     * @member {Boolean} [enableAutoRenewal=false]
     * @memberof module:@carboncollins/mobileconfig.ActiveDirectoryCertificate
     * @description Optional. If set to true, the certificate obtained with this payload will
     * attempt auto-renewal. Only applies to device Active Directory certificate payloads.
     * Availability: Available in macOS 10.13.4 and later.
     */
    this.enableAutoRenewal = options.enableAutoRenewal || false;
  }

  /**
   * @description generates a plist safe js object with all the required information for generating
   * a mobileconfig profile
   * @readonly
   * @memberof module:@carboncollins/mobileconfig.ActiveDirectoryCertificate
   * @author CarbonCollins <toastyghost@carboncollins.uk>
   * @returns {Object} a plist object encoded into a js object
   */
  get plistSafeObject() {
    const plistObj = {
      AllowAllAppsAccess: toSafeBoolean(this.allowAllAppsAccess),
      CertServer: toSafeString(this.server),
      CertTemplate: toSafeString(this.template),
      CertificateAcquisitionMechanism: toSafeString(this.acquisitionMechanism),
      CertificateAuthority: toSafeString(this.authority),
      CertificateRenewalTimeInterval: toSafeInteger(this.renewalTimeInterval),
      Description: toSafeString(this.description),
      KeyIsExtractable: toSafeBoolean(this.keyIsExtractable),
      PromptForCredentials: toSafeBoolean(this.promptForCredentials),
      Keysize: toSafeInteger(this.keysize),
      EnableAutoRenewal: toSafeBoolean(this.enableAutoRenewal)
    };

    return Object.assign({}, super.plistSafeObject, plistObj);
  }
}
