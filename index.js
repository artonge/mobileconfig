'use strict'

const plist = require('plist');

const MobileConfigProfile = require('./lib/models/profile.js');
const MobileConfigPayload = require('./lib/models/payload.js');

const AirPlayPayload = require('./lib/models/airPlayPayload.js');
const CertificatePayload = require('./lib/models/certificatePayload.js');
const CertificatePreferencePayload = require('./lib/models/certificatePreferencePayload.js');
const WebClipPayload = require('./lib/models/webClipPayload.js');
const WiFiPayload = require('./lib/models/wifiPayload.js');

class MobileConfig {
  constructor() {}
  
  generatePropertyList(profile) {
    return plist.build(profile);
  }
}


module.exports = module.exports.mobileconfig = new MobileConfig();

module.exports.MobileConfigProfile = MobileConfigProfile;
module.exports.MobileConfigPayload = MobileConfigPayload;

module.exports.AirPlayPayload = AirPlayPayload;
module.exports.CertificatePayload = CertificatePayload;
module.exports.CertificatePreferencePayload = CertificatePreferencePayload;
module.exports.WebClipPayload = WebClipPayload;
module.exports.WiFiPayload = WiFiPayload;

