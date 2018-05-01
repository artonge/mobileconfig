'use strict';

import MobileConfigPayload from './payload.mjs';

import { toSafeString, toSafeBoolean, toSafeData, toSafeInteger, toSafeArray, deleteEmptyKeys, hasRequiredValues } from '../safe.mjs';

const requiredValues = [];

function toSafeQoSMarkingPolicy(value = {}) {
  if (value === undefined || value === null || typeof(value) !== typeof({}) || Object.keys(value) === 0) {
    return null;
  } else {
    const qosObj = {
      QoSMarkingWhitelistedAppIdentifiers: ((value !== undefined && value !== null && Array.isArray(value.qosMarkingWhitelistedAppIdentifiers))
        ? toSafeArray(value.qosMarkingWhitelistedAppIdentifiers.map(id => toSafeString(id)))
        : null),
      QoSMarkingAppleAudioVideoCalls: toSafeBoolean(value.qosMarkingAppleAudioVideoCalls),
      QoSMarkingEnabled: toSafeBoolean(value.qosMarkingEnabled)
    };
  
    return deleteEmptyKeys(qosObj);
  }
}

function toSafeEAPClientConfiguration(value = {}) {
  if (value === undefined || value === null || typeof(value) !== typeof({}) || Object.keys(value) === 0) {
    return null;
  } else {
    const eapObj = {
      Username: toSafeString(value.username),
      AcceptEAPTypes: ((value !== undefined && value !== null && Array.isArray(value.acceptEAPTypes))
        ? toSafeArray(value.acceptEAPTypes.map(type => toSafeInteger(type)))
        : null),
      UserPassword: toSafeString(value.userPassword),
      OneTimePassword: toSafeBoolean(value.oneTimePassword),
      PayloadCertificateAnchorUUID: ((value !== undefined && value !== null && Array.isArray(value.certificateAnchorUUID))
        ? toSafeArray(value.certificateAnchorUUID.map(uuid => toSafeString(uuid)))
        : null),
      TLSTrustedServerNames: ((value !== undefined && value !== null && Array.isArray(value.tlsTrustedServerNames))
        ? toSafeArray(value.tlsTrustedServerNames.map(uuid => toSafeString(uuid)))
        : null),
      TLSAllowTrustExceptions: toSafeBoolean(value.tlsAllowTrustExceptions),
      TLSCertificateIsRequired: toSafeBoolean(value.tlsCertificateIsRequired),
      TLSMinimumVersion: toSafeString(value.tlsMinimumVersion),
      TLSMaximumVersion: toSafeString(value.tlsMaximumVersion),
      OuterIdentity: toSafeString(value.outerIdentity),
      TTLSInnerAuthentication: toSafeString(value.ttlsInnerAuthentication),
      EAPFASTUsePAC: toSafeBoolean(value.eapFASTUsePAC),
      EAPFASTProvisionPAC: toSafeBoolean(value.eapFASTProvisionPAC),
      EAPFASTProvisionPACAnonymously: toSafeBoolean(value.eapFASTProvisionPACAnonymously),
      EAPSIMNumberOfRANDs: toSafeInteger(value.eapSIMNumberOfRANDs)
    };
  
    return deleteEmptyKeys(eapObj);
  }
}

/**
 * @class
 * @description A class for containing all of the common structure data used in an WiFi payload
 * @extends MobileConfigPayload
 * @author Steven Collins <CarbonCollins>
 * @date 29th April 2018
 */
export default class WiFiPayload extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of WiFiPayload
   * @param {Object|WiFiPayload} [options={}] An object of options
   * @author Steven Collins <CarbonCollins>
   * @date 29th April 2018
   */
  constructor(options = {}) {
    super(Object.assign({}, options, { type: 'com.apple.wifi.managed' }));
    
    this.ssid = options.ssid || null;
    this.hiddenNetwork = options.hiddenNetwork || null;
    this.autoJoin = options.autoJoin || null;
    this.isHotspot = options.isHotspot || null;
    this.domainName = options.domainName || null;
    this.serviceProviderRoamingEnabled = options.serviceProviderRoamingEnabled || null;
    this.roamingConsortiumOIs = options.roamingConsortiumOIs || [];
    this.naiRealmNames = options.naiRealmNames || [];
    this.mccAndMNCs = options.mccAndMNCs || [];
    this.displayedOperatorName = options.displayedOperatorName || null;
    this.captiveBypass = options.captiveBypass || null;
    this.qosMarkingPolicy = options.qosMarkingPolicy || {};
    
    this.encryptionType = options.encryptionType || null;
    this.password = options.password || null;
    this.eapClientConfiguration = options.eapClientConfiguration || {};
    this.payloadCertificateUUID = options.payloadCertificateUUID || null;

    this.proxyType = options.proxyType || null;
    this.proxyServer = options.proxyServer || null;
    this.proxyServerPort = options.proxyServerPort || null;
    this.proxyUsername = options.proxyUsername || null;
    this.proxyPassword = options.proxyPassword || null;
    this.proxyPACURL = options.proxyPACURL || null;
    this.proxyPACFallbackAllowed = options.proxyPACFallbackAllowed || null;
  }
  
  get plistSafeObject() {
    const plistObj = {
      SSID_STR: toSafeString(this.ssid),
      HIDDEN_NETWORK: toSafeBoolean(this.hiddenNetwork),
      AutoJoin: toSafeBoolean(this.autoJoin),
      EncryptionType: toSafeString(this.encryptionType),
      IsHotspot: toSafeBoolean(this.isHotspot),
      DomainName: toSafeString(this.domainName),
      ServiceProviderRoamingEnabled: toSafeBoolean(this.serviceProviderRoamingEnabled),
      RoamingConsortiumOIs: toSafeArray(this.roamingConsortiumOIs.slice(0).map(id => toSafeString(id))),
      NAIRealmNames: toSafeArray(this.naiRealmNames.slice(0).map(name => toSafeString(name))),
      MCCAndMNCs: toSafeArray(this.mccAndMNCs.slice(0).map(mccmnc => toSafeString(mccmnc))),
      DisplayedOperatorName: toSafeString(this.displayedOperatorName),
      ProxyType: toSafeString(this.proxyType),
      CaptiveBypass: toSafeBoolean(this.captiveBypass),
      QoSMarkingPolicy: toSafeQoSMarkingPolicy(this.qosMarkingPolicy),
      Password: toSafeString(this.password),
      EAPClientConfiguration: toSafeEAPClientConfiguration(this.eapClientConfiguration),
      PayloadCertificateUUID: toSafeString(this.payloadCertificateUUID),
      ProxyServer: toSafeString(this.proxyServer),
      ProxyServerPort: toSafeInteger(this.proxyServerPort),
      ProxyUsername: toSafeString(this.proxyUsername),
      ProxyPassword: toSafeString(this.proxyPassword),
      ProxyPACURL: toSafeString(this.proxyPACURL),
      ProxyPACFallbackAllowed: toSafeBoolean(this.proxyPACFallbackAllowed)
    };
    
    deleteEmptyKeys(plistObj);

    return (hasRequiredValues(requiredValues, plistObj, 'com.apple.wifi.managed payload'))
      ? Object.assign({}, super.plistSafeObject, plistObj)
      : null;
  }
}
