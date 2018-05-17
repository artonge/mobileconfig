'use strict';

import plist from 'plist';
import jsrsasign from 'jsrsasign';

import MobileConfigProfile from './models/profile.mjs';
import MobileConfigPayload from './models/payload.mjs';

import ActiveDirectoryCertificate from './models/activeDirectoryCertificatePayload.mjs';
import AirPlayPayload from './models/airPlayPayload.mjs';
import AirPlaySecurityPayload from './models/airPlaySecurityPayload.mjs';
import CalDAVPayload from './models/calDAVPayload.mjs';
import CalendarSubscriptionPayload from './models/calendarSubscriptionPayload.mjs';
import CardDAVPayload from './models/cardDAVPayload.mjs';
import CertificatePayload from './models/certificatePayload.mjs';
import CertificatePreferencePayload from './models/certificatePreferencePayload.mjs';
import WebClipPayload from './models/webClipPayload.mjs';
import WiFiPayload from './models/wifiPayload.mjs';

import RawPayload from './models/rawPayload.mjs';

/**
 * @module @carboncollins/mobileconfig
 * @description Create and sign iOS mobileconfig configuration files
 */

/**
 * @description generates a mobileconfig file from an input profile
 * @param {module:@carboncollins/mobileconfig.MobileConfigProfile} profile an input profile to be
 * generated into a propertylist file and then saved as a .mobileconfig file
 * @author CarbonCollins <toastyghost@carboncollins.uk>
 * @method module:@carboncollins/mobileconfig.generatePropertyList
 * @returns {String} a plist xml string to be exported
 * @static
 */
export function generatePropertyList(profile) {
  return plist.build(profile);
}

/**
 * @description generates a signed mobileconfig file from an input profile
 * @param {module:@carboncollins/mobileconfig.MobileConfigProfile} profile an input profile to be
 * generated into a propertylist file and then saved as a .mobileconfig file
 * @param {Object} [options={}] options used for signing
 * @author CarbonCollins <toastyghost@carboncollins.uk>
 * @method module:@carboncollins/mobileconfig.generateSignedPropertyList
 * @returns {String} a signed plist xml string to be exported
 * @static
 */
export function generateSignedPropertyList(profile, options) {
  return new Promise((resolve) => {
    const {
      certificate = '',
      ca = '',
      key = '',
      hashAlgorithm = 'sha256',
      signAlgorithm = 'SHA256withRSA',
      signingTime = null
    } = options;

    const certs = certificate.toString()
      .concat(ca.toString())
      .trim()
      .split('END CERTIFICATE-----')
      .map((cert) => {
        return `${cert}END CERTIFICATE-----`.trim();
      })
      .reverse()
      .splice(1);

    const signingOptions = {
      content: {
        str: plist.build(profile.plistSafeObject).toString('utf-8')
      },
      certs,
      signerInfos: [
        {
          hashAlg: hashAlgorithm,
          sAttr: (signingTime)
            ? {
              SigningTime: {},
              SigningCertificateV2: { array: certs }
            }
            : {}
        }
      ],
      signerCert: certs.slice(-1),
      sigAlg: signAlgorithm,
      signerPrvKey: key.toString()
    };

    resolve(Buffer.from(jsrsasign.asn1.cms.CMSUtil.newSignedData(signingOptions).getContentInfoEncodedHex(), 'hex'));
  });
}

export {
  MobileConfigProfile,
  MobileConfigPayload,

  ActiveDirectoryCertificate,
  AirPlayPayload,
  AirPlaySecurityPayload,
  CalDAVPayload,
  CalendarSubscriptionPayload,
  CardDAVPayload,
  CertificatePayload,
  CertificatePreferencePayload,
  WebClipPayload,
  WiFiPayload,

  RawPayload
};
