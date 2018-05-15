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
 * @class WiFiPayload
 * @description Structured model data for the WiFi payload
 * @author CarbonCollins <toastyghost@carboncollins.uk>
 * @memberof module:@carboncollins/mobileconfig
 * @extends module:@carboncollins/mobileconfig.MobileConfigPayload
 */
export default class WiFiPayload extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of WiFiPayload
   * @param {Object|module:@carboncollins/mobileconfig.WiFiPayload} [options={}] An object of
   * options
   */
  constructor(options = {}) {
    super(Object.assign({}, options, { type: 'com.apple.wifi.managed' }));

    /**
     * @member {String} [ssid=null]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description SSID of the Wi-Fi network to be used. In iOS 7.0 and later, this is optional
     * if a `domainName` value is provided
     */
    this.ssid = options.ssid || null;

    /**
     * @member {Boolean} [hiddenNetwork=false]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description Besides SSID, the device uses information such as broadcast type and encryption
     * type to differentiate a network. By default (false), it is assumed that all configured
     * networks are open or broadcast. To specify a hidden network, must be true.
     */
    this.hiddenNetwork = options.hiddenNetwork || false;

    /**
     * @member {Boolean} [autoJoin=true]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description Optional. Default true. If true, the network is auto-joined. If false, the user
     * has to tap the network name to join it. Availability: Available in iOS 5.0 and later and in
     * all versions of macOS.
     */
    this.autoJoin = options.autoJoin || true;

    /**
     * @member {Boolean} [isHotspot=false]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description Optional. Default false. If true, the network is treated as a hotspot.
     * Availability: Available in iOS 7.0 and later and in macOS 10.9 and later.
     */
    this.isHotspot = options.isHotspot || false;

    /**
     * @member {String} [domainName=null]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description Optional. Domain Name used for Wi-Fi Hotspot 2.0 negotiation. This field can be
     * provided instead of `ssid`. Availability: Available in iOS 7.0 and later and in macOS 10.9
     * and later..
     */
    this.domainName = options.domainName || null;

    /**
     * @member {Boolean} [serviceProviderRoamingEnabled=false]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description Optional. If true, allows connection to roaming service providers. Defaults to
     * false. Availability: Available in iOS 7.0 and later and in macOS 10.9 and later.
     */
    this.serviceProviderRoamingEnabled = options.serviceProviderRoamingEnabled || false;

    /**
     * @member {String[]} [roamingConsortiumOIs=[]]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description Optional. Array of Roaming Consortium Organization Identifiers used for Wi-Fi
     * Hotspot 2.0 negotiation. Availability: Available in iOS 7.0 and later and in macOS 10.9 and
     * later..
     */
    this.roamingConsortiumOIs = options.roamingConsortiumOIs || [];

    /**
     * @member {String[]} [naiRealmNames=[]]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description Optional. Array of strings. List of Network Access Identifier Realm names used
     * for Wi-Fi Hotspot 2.0 negotiation. Availability: Available in iOS 7.0 and later and in macOS
     * 10.9 and later..
     */
    this.naiRealmNames = options.naiRealmNames || [];

    /**
     * @member {String[]} [mccAndMNCs=[]]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description Optional. Array of strings. List of Mobile Country Code (MCC)/Mobile Network
     * Code (MNC) pairs used for Wi-Fi Hotspot 2.0 negotiation. Each string must contain exactly
     * six digits. Availability: Available in iOS 7.0 and later. This feature is not supported in
     * macOS.
     */
    this.mccAndMNCs = options.mccAndMNCs || [];

    /**
     * @member {String} [displayedOperatorName=null]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description The operator name to display when connected to this network. Used only with
     * Wi-Fi Hotspot 2.0 access points. Availability: Available in iOS 7.0 and later and in macOS
     * 10.9 and later.
     */
    this.displayedOperatorName = options.displayedOperatorName || null;

    /**
     * @member {Boolean} [captiveBypass=false]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description Optional. If set to true, Captive Network detection will be bypassed when the
     * device connects to the network. Defaults to false. Availability: Available in iOS 10.0 and
     * later.
     */
    this.captiveBypass = options.captiveBypass || false;

    /**
     * @member {qosMarkingPolocy} [qosMarkingPolicy={}]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description Optional. When this dictionary is not present for a Wi-Fi network, all apps are
     * whitelisted to use L2 and L3 marking when the Wi-Fi network supports Cisco QoS fast lane.
     * When present in the Wi-Fi payload, the QoSMarkingPolicy dictionary should contain the list
     * of apps that are allowed to benefit from L2 and L3 marking. For dictionary keys, see the
     * table below. Availability: Available in iOS 10.0 and later and in macOS 10.13 and later.
     */
    this.qosMarkingPolicy = options.qosMarkingPolicy || {};

    /**
     * @member {String} [encryptionType=null]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description The possible values are `WEP`, `WPA`, `WPA2`, `Any`, and `None`. WPA specifies
     * WPA only; WPA2 applies to both encryption types. Make sure that these values exactly match
     * the capabilities of the network access point. If you're unsure about the encryption type, or
     * would prefer that it apply to all encryption types, use the value Any. Availability: Key
     * available in iOS 4.0 and later and in all versions of macOS. The None value is available in
     * iOS 5.0 and later and the WPA2 value is available in iOS 8.0 and later.
     */
    this.encryptionType = options.encryptionType || null;

    /**
     * @member {String} [encryptionType=null]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description Optional. If the `encryptionType` field is set to WEP, WPA, or ANY, then this
     * field is used. Note: The absence of a password does not prevent a network from being added
     * to the list of known networks. The user is eventually prompted to provide the password
     * when connecting to that network.
     */
    this.password = options.password || null;

    /**
     * @member {eapClientConfiguration} [eapClientConfiguration={}]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description Optional. If the `encryptionType` field is set to WEP, WPA, or ANY, then this
     * field is used
     */
    this.eapClientConfiguration = options.eapClientConfiguration || {};

    /**
     * @member {String} [payloadCertificateUUID=null]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description Optional. If the `encryptionType` field is set to WEP, WPA, or ANY, then this
     * field is used. Should be the uuid of the certificate to use.
     */
    this.payloadCertificateUUID = options.payloadCertificateUUID || null;

    /**
     * @member {String} [proxyType=null]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description Optional. Valid values are `None`, `Manual`, and `Auto`. Availability:
     * Available in iOS 5.0 and later and on all versions of macOS.
     */
    this.proxyType = options.proxyType || null;

    /**
     * @member {String} [proxyServer=null]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description The proxy server's network address.
     */
    this.proxyServer = options.proxyServer || null;

    /**
     * @member {Number} [proxyServerPort=null]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description The proxy server's port.
     */
    this.proxyServerPort = options.proxyServerPort || null;

    /**
     * @member {String} [proxyUsername=null]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description Optional. The username used to authenticate to the proxy server.
     */
    this.proxyUsername = options.proxyUsername || null;

    /**
     * @member {String} [proxyPassword=null]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description Optional. The password used to authenticate to the proxy server.
     */
    this.proxyPassword = options.proxyPassword || null;

    /**
     * @member {String} [proxyPACURL=null]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description Optional. The URL of the PAC file that defines the proxy configuration.
     */
    this.proxyPACURL = options.proxyPACURL || null;

    /**
     * @member {Boolean} [proxyPACFallbackAllowed=false]
     * @memberof module:@carboncollins/mobileconfig.WiFiPayload
     * @description Optional. If false, prevents the device from connecting directly to the
     * destination if the PAC file is unreachable. Default is false. Availability: Available
     * in iOS 7 and later.
     */
    this.proxyPACFallbackAllowed = options.proxyPACFallbackAllowed || null;
  }

  /**
   * @description generates a plist safe js object with all the required information for generating
   * a mobileconfig profile
   * @readonly
   * @memberof module:@carboncollins/mobileconfig.WiFiPayload
   * @author CarbonCollins <toastyghost@carboncollins.uk>
   * @returns {Object} a plist object encoded into a js object
   */
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

/**
 * @typedef {Object} qosMarkingPolocy
 * @description should contain a list of apps that are aloud to use L3 and L3 marking
 * 
 * @property {String[]} qosMarkingWhitelistedAppIdentifiers Optional. Array of app bundle
 * identifiers that will be whitelisted for L2 and L3 marking for traffic sent to the Wi-Fi
 * network. If the array is not present but the QoSMarkingPolicy key is present (even empty) no app
 * gets whitelisted.
 * @property {Boolean} [qosMarkingAppleAudioVideoCalls=false] Optional. Specifies if audio and
 * video traffic of built-in audio/video services such as FaceTime and Wi-Fi Calling will be
 * whitelisted for L2 and L3 marking for traffic sent to the Wi-Fi network. Defaults to true.
 * @property {Boolean} [qosMarkingEnabled=true] Optional. May be used to disable L3
 * marking and only use L2 marking for traffic sent to the Wi-Fi network. When this key is false
 * the system behaves as if Wi-Fi was not associated with a Cisco QoS fast lane network. Defaults
 * to true.
 */

/**
 * @typedef {Object} eapClientConfiguration
 * @description In addition to the standard encryption types, it is possible to specify an
 * enterprise profile for a given network via the `eapClientConfiguration` key. If present, its value
 * is a dictionary with the following keys.
 * 
 * @property {String} [username=null] Optional. Unless you know the exact user name, this property
 * won't appear in an imported configuration. Users can enter this information when they
 * authenticate. 
 * @property {Number[]} [acceptEAPTypes=[]] The following EAP types are accepted: `13 = TLS`,
 * `17 = LEAP`, `18 = EAP-SIM`, `21 = TTLS`, `23 = EAP-AKA`, `25 = PEAP`, and `43 = EAP-FAST`
 * @property {String} [userPassword=null] Optional. User password. If not provided, the user may be
 * prompted during login.
 * @property {Boolean} [oneTimePassword=false] Optional. If true, the user will be prompted for a
 * password each time they connect to the network. Defaults to false.
 * @property {String[]} [certificateAnchorUUID=[]] Optional. Identifies the certificates to be
 * trusted for this authentication. Each entry must contain the `uuid` of a certificate payload. Use
 * this key to prevent the device from asking the user if the listed certificates are trusted.
 * Dynamic trust (the certificate dialogue) is disabled if this property is specified, unless
 * `tlsAllowTrustExceptions` is also specified with the value true.
 * @property {String[]} [tlsTrustedServerNames=[]] Optional. This is the list of server certificate
 * common names that will be accepted. You can use wildcards to specify the name, such as
 * wpa.*.example.com. If a server presents a certificate that isn't in this list, it won't be
 * trusted. Used alone or in combination with `certificateAnchorUUID`, the property allows
 * someone to carefully craft which certificates to trust for the given network, and avoid
 * dynamically trusted certificates. Dynamic trust (the certificate dialogue) is disabled if this
 * property is specified, unless `tlsAllowTrustExceptions` is also specified with the value true.
 * @property {Boolean} [tlsAllowTrustExceptions=true|false] Optional. Allows/disallows a dynamic trust
 * decision by the user. The dynamic trust is the certificate dialogue that appears when a
 * certificate isn't trusted. If this is false, the authentication fails if the certificate isn't
 * already trusted. See `certificateAnchorUUID` and `tlsTrustedNames` above. The default value of
 * this property is true unless either `certificateAnchorUUID` or `tlsTrustedServerNames` is
 * supplied, in which case the default value is false. Availability: Deprecated and ignored in
 * iOS 8.0 and later.
 * @property {Boolean} [tlsCertificateIsRequired=true|false] Optional. If true, allows for
 * two-factor authentication for EAP-TTLS, PEAP, or EAP-FAST. If false, allows for zero-factor
 * authentication for EAP-TLS. The default is true for EAP-TLS, and false for other EAP types.
 * Availability: Available in iOS 7.0 and later.
 * @property {String} [tlsMinimumVersion=null] Optional. The minimum TLS version to be used with
 * EAP authentication. Value may be `1.0`, `1.1`, or `1.2`. If no value is specified, the default
 * minimum is 1.0. Availability: Available in iOS 11.0 and macOS 10.13 and later.
 * @property {String} [outerIdentity=null] Optional. This key is only relevant to `TTLS`, `PEAP`,
 * and `EAP-FAST`. This allows the user to hide his or her identity. The user's actual name appears
 * only inside the encrypted tunnel. For example, it could be set to "anonymous" or "anon", or
 * "anon@mycompany.net". It can increase security because an attacker can't see the authenticating
 * user's name in the clear.
 * @property {String} [ttlsInnerAuthentication=MSCHAPv2] Optional. Specifies the inner
 * authentication used by the TTLS module. Possible values are `PAP`, `CHAP`, `MSCHAP`, `MSCHAPv2`,
 * and `EA`. Defaults to `MSCHAPv2`.
 * @property {Boolean} [eapFASTUsePAC=false] Optional.If true, the device will use an existing PAC
 * if it's present. Otherwise, the server must present its identity using a certificate. Defaults
 * to false.
 * @property {Boolean} [eapFASTProvisionPAC=false] Optional. Used only if `eapFASTUsePAC` is true.
 * If set to true, allows PAC provisioning. Defaults to false. This value must be set to true for
 * EAP-FAST PAC usage to succeed, because there is no other way to provision a PAC.
 * @property {Boolean} [eapFASTProvisionPACAnonymously=false] Optional. If true, provisions the
 * device anonymously. Note that there are known man-in-the-middle attacks for anonymous
 * provisioning. Defaults to false.
 * @property {Number} [eapSIMNumberOfRANDs=3] Optional. Number of expected RANDs for EAPSIM. Valid
 * values are `2` and `3`. Defaults to 3.
 */
