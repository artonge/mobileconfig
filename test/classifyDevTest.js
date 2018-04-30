'use strict';

const path = require('path');
const fs = require('fs');

const mobileconfig = require('../index');

const mobileconfig2 = require('../index.old');

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
  identifier: 'com.carboncollins.testprofile.testwebclip',
  icon: fs.readFileSync(path.join(__dirname, '../lib/assets/googleicon.png')),
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
  content: fs.readFileSync(path.join(__dirname, './fixtures/cert.pem'))
}));

console.log(profile);

const plist = mobileconfig.generatePropertyList(profile.plistSafeObject);

console.log(plist);
fs.writeFileSync('./test.mobileconfig', plist, 'utf-8');

console.log('hellow world');

const existing = mobileconfig2.getEmailConfig({});

console.log(existing);
fs.writeFileSync('./test2.mobileconfig', existing, 'utf-8');