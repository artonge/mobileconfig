# mobileconfig


[![npm](https://img.shields.io/npm/v/@carboncollins/mobileconfig.svg)](https://www.npmjs.com/package/@carboncollins/mobileconfig)
[![npm](https://img.shields.io/npm/dt/@carboncollins/mobileconfig.svg)](https://www.npmjs.com/package/@carboncollins/mobileconfig)
[![node](https://img.shields.io/node/v/@carboncollins/mobileconfig.svg)](https://www.npmjs.com/package/@carboncollins/mobileconfig)
[![license](https://img.shields.io/github/license/CarbonCollins/mobileconfig.svg)](https://github.com/CarbonCollins/mobileconfig/blob/master/LICENSE)
[![NSP Status](https://nodesecurity.io/orgs/carboncollins/projects/731057ed-eef2-4bec-a0b8-64298d3a971b/badge)](https://nodesecurity.io/orgs/carboncollins/projects/731057ed-eef2-4bec-a0b8-64298d3a971b)
[![Maintainability](https://api.codeclimate.com/v1/badges/18ce7eb1903785701002/maintainability)](https://codeclimate.com/github/@carboncollins/mobileconfig/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/18ce7eb1903785701002/test_coverage)](https://codeclimate.com/github/@carboncollins/mobileconfig/test_coverage)
[![Build Status](https://travis-ci.org/@carboncollins/mobileconfig.svg?branch=master)](https://travis-ci.org/@carboncollins/mobileconfig)

Create and sign iOS and mac *mobileconfig* configuration files.

This module has been bassed off of the previous work done by [andris9](https://github.com/andris9)/[mobileconfig](https://github.com/andris9/mobileconfig) and converted to be an ES6 module and use classes for creating profiles with multiple configuration payloads.

Currently this module supports adding the following payloads to a profile:

* ActiveDirectoryCertificatePayload
* AirPlayPayload
* AirPlaySecurityPayload
* CalDAVPayload,
* CalendarSubscriptionPayload
* CardDAVPayload
* CertificatePayload
* CertificatePreferencePayload
* WebClipPayload
* WiFiPayload

and for any other payload or a custom payload you can use the RawPayload.

Profile signing is handled by [jsrsasign](http://kjur.github.io/jsrsasign/) allowing the profile to be signed on any platform that supports [Node.JS](https://nodejs.org/).

## Usage

This package can be both required and imported into your application by using the following:

### require
```
const mobileconfig = require('@carboncollins/mobileconfig');
```
### import (ES6)
```
import mobileconfig from '@carboncollins/mobileconfig';
```

example for creating and generating a mobile profile with an airplay payload:

```
const profile = new mobileconfig.MobileConfigProfile({
  displayName: 'Test Profile',
  description: 'A test profile to see if it works',
  identifier: 'com.mobileconfig.testprofile',
  organization: 'mobileconfig',
  durationUntilRemoval: 60
});

profile.addPayload(new mobileconfig.AirPlayPayload({
  whitelist: [{ deviceId: 'xx:xx:xx:xx:xx:xx' }],
  passwords:[{ deviceName: 'test airplay device', deviceId: 'xx:xx:xx:xx:xx:xx', password: 'testpassword' }],
  displayName: 'airplay device'
}));

console.log(mobileconfig.generatePropertyList(profile))
```

## API docs

for documentation on this module please checkout the [API Docs](./docs/api.md)

## Dev notes:

There is a known issue with signing profiles which is currently being looked into

## License

**MIT**
