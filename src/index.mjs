'use strict';

import plist from 'plist';

import MobileConfigProfile from './models/profile.mjs';
import MobileConfigPayload from './models/payload.mjs';

import AirPlayPayload from './models/airPlayPayload.mjs';
import CertificatePayload from './models/certificatePayload.mjs';
import CertificatePreferencePayload from './models/certificatePreferencePayload.mjs';
import WebClipPayload from './models/webClipPayload.mjs';
import WiFiPayload from './models/wifiPayload.mjs';

/**
 * @description Main entrypoint for creating mobile configuration profiles
 * @author Steven Collins <steven.collins@capgemini.com>
 * @class MobileConfig
 */
export function generatePropertyList(profile) {
  return plist.build(profile);
}

export {
  MobileConfigProfile,
  MobileConfigPayload,

  AirPlayPayload,
  CertificatePayload,
  CertificatePreferencePayload,
  WebClipPayload,
  WiFiPayload
};
