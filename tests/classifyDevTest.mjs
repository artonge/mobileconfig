'use strict';

import path from 'path';
import fs from 'fs';

import * as mobileconfig from '../src/index.mjs';

const _dirname = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([a-zA-Z]:)/g, '$1')) || __dirname;

const profile = new mobileconfig.MobileConfigProfile({
  displayName: 'Test Profile',
  description: 'A test profile to see if it works',
  identifier: 'com.carboncollins.testprofile',
  organization: 'CarbonCollins',
  durationUntilRemoval: 60
});

profile.addPayload(new mobileconfig.AirPlayPayload({
  whitelist: [
    { deviceId: 'aa:bb:cc:dd:ee:ff' }
  ],
  passwords:[
    { deviceName: 'test airplay device', deviceId: 'aa:bb:cc:dd:ee:ff', password: 'testpassword' }
  ],
  displayName: 'airplay device'
}));

profile.addPayload(new mobileconfig.WebClipPayload({
  url: 'https://google.co.uk',
  label: 'google',
  isRemovable: true,
  displayName: 'google homepage link',
  description: 'A homepage link added to quickly link to google',
  organization: 'carboncollins',
  identifier: 'com.carboncollins.testprofile.testwebclip'
}));

profile.addPayload(new mobileconfig.WiFiPayload({
  displayName: 'test wifi',
  description: 'a test wifi payload',
  organization: 'carboncollins',
  identifier: 'com.carboncollins.testprofile.testwifi',
  ssid: 'test',
  password:'some password',
  encryptionType: 'WPA2',
  hidenNetwork: false
}));

profile.addPayload(new mobileconfig.CertificatePayload('pem', {
  displayName: 'test certificate',
  description: 'a test certificate',
  organization: 'carboncollins',
  identifier: 'com.carboncollins.testprofile.testcert',
  certificateFileName: 'cert.pem',
  content: fs.readFileSync(path.join(_dirname, './fixtures/cert.pem'))
}));

console.log(profile);

mobileconfig.generateSignedPropertyList(profile, {
  certificate: fs.readFileSync(path.join(_dirname, './fixtures/cert.pem'), 'utf-8'),
  key: fs.readFileSync(path.join(_dirname, './fixtures/key.pem'), 'utf-8'),
  hashAlgorithm: 'sha1',
  signAlgorithm: 'SHA1withRSA'
})
  .then((result) => {
    console.log(result);
    fs.writeFileSync('./test.mobileconfig', result, 'utf-8');
  })
  .catch(console.error);
