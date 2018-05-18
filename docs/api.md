## Modules

<dl>
<dt><a href="#module_@carboncollins/mobileconfig">@carboncollins/mobileconfig</a></dt>
<dd><p>Create and sign iOS mobileconfig configuration files</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#airPrintServers">airPrintServers</a> : <code>Object</code></dt>
<dd><p>Each item in the AirPrint array must contain the following keys and values</p>
</dd>
<dt><a href="#apnDescriptior">apnDescriptior</a> : <code>Object</code></dt>
<dd><p>an object containing the various apn infomration</p>
</dd>
<dt><a href="#AppDescriptor">AppDescriptor</a> : <code>Object</code></dt>
<dd><p>an object containing the various app information and options</p>
</dd>
<dt><a href="#AppOptionsDescriptor">AppOptionsDescriptor</a> : <code>Object</code></dt>
<dd><p>an object containing the various app options</p>
</dd>
<dt><a href="#UserEnabledOptionsDescriptor">UserEnabledOptionsDescriptor</a> : <code>Object</code></dt>
<dd><p>an object containing the various user enabled options</p>
</dd>
<dt><a href="#qosMarkingPolocy">qosMarkingPolocy</a> : <code>Object</code></dt>
<dd><p>should contain a list of apps that are aloud to use L3 and L3 marking</p>
</dd>
<dt><a href="#eapClientConfiguration">eapClientConfiguration</a> : <code>Object</code></dt>
<dd><p>In addition to the standard encryption types, it is possible to specify an
enterprise profile for a given network via the <code>eapClientConfiguration</code> key. If present, its value
is a dictionary with the following keys.</p>
</dd>
</dl>

<a name="module_@carboncollins/mobileconfig"></a>

## @carboncollins/mobileconfig
Create and sign iOS mobileconfig configuration files


* [@carboncollins/mobileconfig](#module_@carboncollins/mobileconfig)
    * [.ActiveDirectoryCertificate](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
        * [new ActiveDirectoryCertificate()](#new_module_@carboncollins/mobileconfig.ActiveDirectoryCertificate_new)
        * [.allowAllAppsAccess](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.allowAllAppsAccess) : <code>Boolean</code>
        * [.server](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.server) : <code>String</code>
        * [.template](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.template) : <code>String</code>
        * [.acquisitionMechanism](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.acquisitionMechanism) : <code>String</code>
        * [.authority](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.authority) : <code>String</code>
        * [.renewalTimeInterval](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.renewalTimeInterval) : <code>Number</code>
        * [.description](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.description) : <code>String</code>
        * [.keyIsExtractable](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.keyIsExtractable) : <code>Boolean</code>
        * [.promptForCredentials](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.promptForCredentials) : <code>Boolean</code>
        * [.keysize](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.keysize) : <code>Number</code>
        * [.enableAutoRenewal](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.enableAutoRenewal) : <code>Boolean</code>
        * [.plistSafeObject](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.plistSafeObject) ⇒ <code>Object</code>
    * [.AirPlayPayload](#module_@carboncollins/mobileconfig.AirPlayPayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
        * [new AirPlayPayload()](#new_module_@carboncollins/mobileconfig.AirPlayPayload_new)
        * [.whitelist](#module_@carboncollins/mobileconfig.AirPlayPayload.whitelist) : <code>Array.&lt;String&gt;</code>
        * [.passwords](#module_@carboncollins/mobileconfig.AirPlayPayload.passwords) : <code>Array.&lt;String&gt;</code>
        * [.plistSafeObject](#module_@carboncollins/mobileconfig.AirPlayPayload.plistSafeObject) ⇒ <code>Object</code>
    * [.AirPlaySecurityPayload](#module_@carboncollins/mobileconfig.AirPlaySecurityPayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
        * [new AirPlaySecurityPayload()](#new_module_@carboncollins/mobileconfig.AirPlaySecurityPayload_new)
        * [.securityType](#module_@carboncollins/mobileconfig.AirPlaySecurityPayload.securityType) : <code>String</code>
        * [.accessType](#module_@carboncollins/mobileconfig.AirPlaySecurityPayload.accessType) : <code>String</code>
        * [.password](#module_@carboncollins/mobileconfig.AirPlaySecurityPayload.password) : <code>String</code>
        * [.plistSafeObject](#module_@carboncollins/mobileconfig.AirPlaySecurityPayload.plistSafeObject) ⇒ <code>Object</code>
    * [.AirPrintPayload](#module_@carboncollins/mobileconfig.AirPrintPayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
        * [new AirPrintPayload()](#new_module_@carboncollins/mobileconfig.AirPrintPayload_new)
        * [.printers](#module_@carboncollins/mobileconfig.AirPrintPayload.printers) : [<code>Array.&lt;airPrintServers&gt;</code>](#airPrintServers)
        * [.plistSafeObject](#module_@carboncollins/mobileconfig.AirPrintPayload.plistSafeObject) ⇒ <code>Object</code>
    * ~~[.APNPayload](#module_@carboncollins/mobileconfig.APNPayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)~~
        * [new APNPayload()](#new_module_@carboncollins/mobileconfig.APNPayload_new)
        * [.defaultsData](#module_@carboncollins/mobileconfig.APNPayload.defaultsData) : <code>Object</code>
        * [.defaultsDomainName](#module_@carboncollins/mobileconfig.APNPayload.defaultsDomainName) : <code>String</code>
        * [.apns](#module_@carboncollins/mobileconfig.APNPayload.apns) : [<code>Array.&lt;apnDescriptior&gt;</code>](#apnDescriptior)
        * [.plistSafeObject](#module_@carboncollins/mobileconfig.APNPayload.plistSafeObject) ⇒ <code>Object</code>
    * ~~[.AppLockPayload](#module_@carboncollins/mobileconfig.AppLockPayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)~~
        * [new AppLockPayload()](#new_module_@carboncollins/mobileconfig.AppLockPayload_new)
        * [.app](#module_@carboncollins/mobileconfig.AppLockPayload.app) : [<code>AppDescriptor</code>](#AppDescriptor)
        * [.plistSafeObject](#module_@carboncollins/mobileconfig.AppLockPayload.plistSafeObject) ⇒ <code>Object</code>
    * [.CalDAVPayload](#module_@carboncollins/mobileconfig.CalDAVPayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
        * [new CalDAVPayload()](#new_module_@carboncollins/mobileconfig.CalDAVPayload_new)
        * [.accountDescription](#module_@carboncollins/mobileconfig.CalDAVPayload.accountDescription) : <code>String</code>
        * [.hostname](#module_@carboncollins/mobileconfig.CalDAVPayload.hostname) : <code>String</code>
        * [.username](#module_@carboncollins/mobileconfig.CalDAVPayload.username) : <code>String</code>
        * [.password](#module_@carboncollins/mobileconfig.CalDAVPayload.password) : <code>String</code>
        * [.useSSL](#module_@carboncollins/mobileconfig.CalDAVPayload.useSSL) : <code>Boolean</code>
        * [.port](#module_@carboncollins/mobileconfig.CalDAVPayload.port) : <code>Number</code>
        * [.principalURL](#module_@carboncollins/mobileconfig.CalDAVPayload.principalURL) : <code>String</code>
        * [.plistSafeObject](#module_@carboncollins/mobileconfig.CalDAVPayload.plistSafeObject) ⇒ <code>Object</code>
    * [.CalendarSubscriptionPayload](#module_@carboncollins/mobileconfig.CalendarSubscriptionPayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
        * [new CalendarSubscriptionPayload()](#new_module_@carboncollins/mobileconfig.CalendarSubscriptionPayload_new)
        * [.accountDescription](#module_@carboncollins/mobileconfig.CalendarSubscriptionPayload.accountDescription) : <code>String</code>
        * [.hostname](#module_@carboncollins/mobileconfig.CalendarSubscriptionPayload.hostname) : <code>String</code>
        * [.username](#module_@carboncollins/mobileconfig.CalendarSubscriptionPayload.username) : <code>String</code>
        * [.password](#module_@carboncollins/mobileconfig.CalendarSubscriptionPayload.password) : <code>String</code>
        * [.useSSL](#module_@carboncollins/mobileconfig.CalendarSubscriptionPayload.useSSL) : <code>Boolean</code>
        * [.plistSafeObject](#module_@carboncollins/mobileconfig.CalendarSubscriptionPayload.plistSafeObject) ⇒ <code>Object</code>
    * [.CardDAVPayload](#module_@carboncollins/mobileconfig.CardDAVPayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
        * [new CardDAVPayload()](#new_module_@carboncollins/mobileconfig.CardDAVPayload_new)
        * [.accountDescription](#module_@carboncollins/mobileconfig.CardDAVPayload.accountDescription) : <code>String</code>
        * [.hostname](#module_@carboncollins/mobileconfig.CardDAVPayload.hostname) : <code>String</code>
        * [.username](#module_@carboncollins/mobileconfig.CardDAVPayload.username) : <code>String</code>
        * [.password](#module_@carboncollins/mobileconfig.CardDAVPayload.password) : <code>String</code>
        * [.useSSL](#module_@carboncollins/mobileconfig.CardDAVPayload.useSSL) : <code>Boolean</code>
        * [.port](#module_@carboncollins/mobileconfig.CardDAVPayload.port) : <code>Number</code>
        * [.principalURL](#module_@carboncollins/mobileconfig.CardDAVPayload.principalURL) : <code>String</code>
        * [.plistSafeObject](#module_@carboncollins/mobileconfig.CardDAVPayload.plistSafeObject) ⇒ <code>Object</code>
    * [.CertificatePayload](#module_@carboncollins/mobileconfig.CertificatePayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
        * [new CertificatePayload()](#new_module_@carboncollins/mobileconfig.CertificatePayload_new)
        * [.certificateFileName](#module_@carboncollins/mobileconfig.CertificatePayload.certificateFileName) : <code>String</code>
        * [.content](#module_@carboncollins/mobileconfig.CertificatePayload.content) : <code>Buffer</code>
        * [.password](#module_@carboncollins/mobileconfig.CertificatePayload.password) : <code>String</code>
        * [.plistSafeObject](#module_@carboncollins/mobileconfig.CertificatePayload.plistSafeObject) ⇒ <code>Object</code>
    * [.CertificatePreferencePayload](#module_@carboncollins/mobileconfig.CertificatePreferencePayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
        * [new CertificatePreferencePayload()](#new_module_@carboncollins/mobileconfig.CertificatePreferencePayload_new)
        * [.name](#module_@carboncollins/mobileconfig.CertificatePreferencePayload.name) : <code>String</code>
        * [.certificateUUID](#module_@carboncollins/mobileconfig.CertificatePreferencePayload.certificateUUID) : <code>String</code>
        * [.plistSafeObject](#module_@carboncollins/mobileconfig.CertificatePreferencePayload.plistSafeObject) ⇒ <code>Object</code>
    * [.MobileConfigPayload](#module_@carboncollins/mobileconfig.MobileConfigPayload)
        * [new MobileConfigPayload()](#new_module_@carboncollins/mobileconfig.MobileConfigPayload_new)
        * [.type](#module_@carboncollins/mobileconfig.MobileConfigPayload.type) : <code>String</code>
        * [.version](#module_@carboncollins/mobileconfig.MobileConfigPayload.version) : <code>Number</code>
        * [.identifier](#module_@carboncollins/mobileconfig.MobileConfigPayload.identifier) : <code>String</code>
        * [.uuid](#module_@carboncollins/mobileconfig.MobileConfigPayload.uuid) : <code>String</code>
        * [.displayName](#module_@carboncollins/mobileconfig.MobileConfigPayload.displayName) : <code>String</code>
        * [.description](#module_@carboncollins/mobileconfig.MobileConfigPayload.description) : <code>String</code>
        * [.organisation](#module_@carboncollins/mobileconfig.MobileConfigPayload.organisation) : <code>String</code>
        * [.plistSafeObject](#module_@carboncollins/mobileconfig.MobileConfigPayload.plistSafeObject) ⇒ <code>Object</code>
    * [.MobileConfigProfile](#module_@carboncollins/mobileconfig.MobileConfigProfile)
        * [new MobileConfigProfile()](#new_module_@carboncollins/mobileconfig.MobileConfigProfile_new)
        * _static_
            * [.type](#module_@carboncollins/mobileconfig.MobileConfigProfile.type) : <code>String</code>
            * [.version](#module_@carboncollins/mobileconfig.MobileConfigProfile.version) : <code>Number</code>
            * [.scope](#module_@carboncollins/mobileconfig.MobileConfigProfile.scope) : <code>String</code>
            * [.content](#module_@carboncollins/mobileconfig.MobileConfigProfile.content) : [<code>Array.&lt;MobileConfigPayload&gt;</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
            * [.description](#module_@carboncollins/mobileconfig.MobileConfigProfile.description) : <code>String</code>
            * [.displayName](#module_@carboncollins/mobileconfig.MobileConfigProfile.displayName) : <code>String</code>
            * [.expirationDate](#module_@carboncollins/mobileconfig.MobileConfigProfile.expirationDate) : <code>Date</code>
            * [.identifier](#module_@carboncollins/mobileconfig.MobileConfigProfile.identifier) : <code>String</code>
            * [.organization](#module_@carboncollins/mobileconfig.MobileConfigProfile.organization) : <code>String</code>
            * [.uuid](#module_@carboncollins/mobileconfig.MobileConfigProfile.uuid) : <code>String</code>
            * [.removeDisallowed](#module_@carboncollins/mobileconfig.MobileConfigProfile.removeDisallowed) : <code>Boolean</code>
            * [.removalDate](#module_@carboncollins/mobileconfig.MobileConfigProfile.removalDate) : <code>Date</code>
            * [.durationUntilRemoval](#module_@carboncollins/mobileconfig.MobileConfigProfile.durationUntilRemoval) : <code>Number</code>
            * [.consentText](#module_@carboncollins/mobileconfig.MobileConfigProfile.consentText) : <code>Object</code>
            * [.plistSafeObject](#module_@carboncollins/mobileconfig.MobileConfigProfile.plistSafeObject) ⇒ <code>Object</code>
        * _inner_
            * [~addPayload(any)](#module_@carboncollins/mobileconfig.MobileConfigProfile..addPayload)
            * [~clearPayloads()](#module_@carboncollins/mobileconfig.MobileConfigProfile..clearPayloads)
    * [.RawPayload](#module_@carboncollins/mobileconfig.RawPayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
        * [new RawPayload()](#new_module_@carboncollins/mobileconfig.RawPayload_new)
        * [.raw](#module_@carboncollins/mobileconfig.RawPayload.raw) : <code>Object</code>
        * [.plistSafeObject](#module_@carboncollins/mobileconfig.RawPayload.plistSafeObject) ⇒ <code>Object</code>
    * [.WebClipPayload](#module_@carboncollins/mobileconfig.WebClipPayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
        * [new WebClipPayload()](#new_module_@carboncollins/mobileconfig.WebClipPayload_new)
        * [.url](#module_@carboncollins/mobileconfig.WebClipPayload.url) : <code>String</code>
        * [.label](#module_@carboncollins/mobileconfig.WebClipPayload.label) : <code>String</code>
        * [.icon](#module_@carboncollins/mobileconfig.WebClipPayload.icon) : <code>Buffer</code>
        * [.isRemovable](#module_@carboncollins/mobileconfig.WebClipPayload.isRemovable) : <code>Boolean</code>
        * [.plistSafeObject](#module_@carboncollins/mobileconfig.WebClipPayload.plistSafeObject) ⇒ <code>Object</code>
    * [.WiFiPayload](#module_@carboncollins/mobileconfig.WiFiPayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
        * [new WiFiPayload()](#new_module_@carboncollins/mobileconfig.WiFiPayload_new)
        * [.ssid](#module_@carboncollins/mobileconfig.WiFiPayload.ssid) : <code>String</code>
        * [.hiddenNetwork](#module_@carboncollins/mobileconfig.WiFiPayload.hiddenNetwork) : <code>Boolean</code>
        * [.autoJoin](#module_@carboncollins/mobileconfig.WiFiPayload.autoJoin) : <code>Boolean</code>
        * [.isHotspot](#module_@carboncollins/mobileconfig.WiFiPayload.isHotspot) : <code>Boolean</code>
        * [.domainName](#module_@carboncollins/mobileconfig.WiFiPayload.domainName) : <code>String</code>
        * [.serviceProviderRoamingEnabled](#module_@carboncollins/mobileconfig.WiFiPayload.serviceProviderRoamingEnabled) : <code>Boolean</code>
        * [.roamingConsortiumOIs](#module_@carboncollins/mobileconfig.WiFiPayload.roamingConsortiumOIs) : <code>Array.&lt;String&gt;</code>
        * [.naiRealmNames](#module_@carboncollins/mobileconfig.WiFiPayload.naiRealmNames) : <code>Array.&lt;String&gt;</code>
        * [.mccAndMNCs](#module_@carboncollins/mobileconfig.WiFiPayload.mccAndMNCs) : <code>Array.&lt;String&gt;</code>
        * [.displayedOperatorName](#module_@carboncollins/mobileconfig.WiFiPayload.displayedOperatorName) : <code>String</code>
        * [.captiveBypass](#module_@carboncollins/mobileconfig.WiFiPayload.captiveBypass) : <code>Boolean</code>
        * [.qosMarkingPolicy](#module_@carboncollins/mobileconfig.WiFiPayload.qosMarkingPolicy) : [<code>qosMarkingPolocy</code>](#qosMarkingPolocy)
        * [.encryptionType](#module_@carboncollins/mobileconfig.WiFiPayload.encryptionType) : <code>String</code>
        * [.encryptionType](#module_@carboncollins/mobileconfig.WiFiPayload.encryptionType) : <code>String</code>
        * [.eapClientConfiguration](#module_@carboncollins/mobileconfig.WiFiPayload.eapClientConfiguration) : [<code>eapClientConfiguration</code>](#eapClientConfiguration)
        * [.payloadCertificateUUID](#module_@carboncollins/mobileconfig.WiFiPayload.payloadCertificateUUID) : <code>String</code>
        * [.proxyType](#module_@carboncollins/mobileconfig.WiFiPayload.proxyType) : <code>String</code>
        * [.proxyServer](#module_@carboncollins/mobileconfig.WiFiPayload.proxyServer) : <code>String</code>
        * [.proxyServerPort](#module_@carboncollins/mobileconfig.WiFiPayload.proxyServerPort) : <code>Number</code>
        * [.proxyUsername](#module_@carboncollins/mobileconfig.WiFiPayload.proxyUsername) : <code>String</code>
        * [.proxyPassword](#module_@carboncollins/mobileconfig.WiFiPayload.proxyPassword) : <code>String</code>
        * [.proxyPACURL](#module_@carboncollins/mobileconfig.WiFiPayload.proxyPACURL) : <code>String</code>
        * [.proxyPACFallbackAllowed](#module_@carboncollins/mobileconfig.WiFiPayload.proxyPACFallbackAllowed) : <code>Boolean</code>
        * [.plistSafeObject](#module_@carboncollins/mobileconfig.WiFiPayload.plistSafeObject) ⇒ <code>Object</code>
    * [.generatePropertyList(profile)](#module_@carboncollins/mobileconfig.generatePropertyList) ⇒ <code>String</code>
    * [.generateSignedPropertyList(profile, [options])](#module_@carboncollins/mobileconfig.generateSignedPropertyList) ⇒ <code>String</code>

<a name="module_@carboncollins/mobileconfig.ActiveDirectoryCertificate"></a>

### @carboncollins/mobileconfig.ActiveDirectoryCertificate ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
**Kind**: static class of [<code>@carboncollins/mobileconfig</code>](#module_@carboncollins/mobileconfig)  
**Extends**: [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  

* [.ActiveDirectoryCertificate](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
    * [new ActiveDirectoryCertificate()](#new_module_@carboncollins/mobileconfig.ActiveDirectoryCertificate_new)
    * [.allowAllAppsAccess](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.allowAllAppsAccess) : <code>Boolean</code>
    * [.server](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.server) : <code>String</code>
    * [.template](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.template) : <code>String</code>
    * [.acquisitionMechanism](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.acquisitionMechanism) : <code>String</code>
    * [.authority](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.authority) : <code>String</code>
    * [.renewalTimeInterval](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.renewalTimeInterval) : <code>Number</code>
    * [.description](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.description) : <code>String</code>
    * [.keyIsExtractable](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.keyIsExtractable) : <code>Boolean</code>
    * [.promptForCredentials](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.promptForCredentials) : <code>Boolean</code>
    * [.keysize](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.keysize) : <code>Number</code>
    * [.enableAutoRenewal](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.enableAutoRenewal) : <code>Boolean</code>
    * [.plistSafeObject](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.plistSafeObject) ⇒ <code>Object</code>

<a name="new_module_@carboncollins/mobileconfig.ActiveDirectoryCertificate_new"></a>

#### new ActiveDirectoryCertificate()
Structured model data for the Active Directory Certificate payload

<a name="module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.allowAllAppsAccess"></a>

#### ActiveDirectoryCertificate.allowAllAppsAccess : <code>Boolean</code>
If true, apps have access to the private key.

**Kind**: static property of [<code>ActiveDirectoryCertificate</code>](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate)  
<a name="module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.server"></a>

#### ActiveDirectoryCertificate.server : <code>String</code>
Fully qualified host name of the Active Directory issuing CA.

**Kind**: static property of [<code>ActiveDirectoryCertificate</code>](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate)  
<a name="module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.template"></a>

#### ActiveDirectoryCertificate.template : <code>String</code>
Template Name as it appears in the General tab of the template’s object in the
Certificate Templates’ Microsoft Management Console snap-in component.

**Kind**: static property of [<code>ActiveDirectoryCertificate</code>](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate)  
<a name="module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.acquisitionMechanism"></a>

#### ActiveDirectoryCertificate.acquisitionMechanism : <code>String</code>
Most commonly `RPC`. If using ‘Web enrollment,’ `HTTP`.

**Kind**: static property of [<code>ActiveDirectoryCertificate</code>](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate)  
<a name="module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.authority"></a>

#### ActiveDirectoryCertificate.authority : <code>String</code>
Name of the CA. This value is determined from the Common Name (CN) of the
Active Directory entry: CN=<your CA name>, CN='Certification Authorities', CN='Public Key
Services', CN='Services', or CN='Configuration', <your base Domain Name>.

**Kind**: static property of [<code>ActiveDirectoryCertificate</code>](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate)  
<a name="module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.renewalTimeInterval"></a>

#### ActiveDirectoryCertificate.renewalTimeInterval : <code>Number</code>
Number of days in advance of certificate expiration that the notification
center will notify the user.

**Kind**: static property of [<code>ActiveDirectoryCertificate</code>](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate)  
<a name="module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.description"></a>

#### ActiveDirectoryCertificate.description : <code>String</code>
User-friendly description of the certification identity.

**Kind**: static property of [<code>ActiveDirectoryCertificate</code>](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate)  
<a name="module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.keyIsExtractable"></a>

#### ActiveDirectoryCertificate.keyIsExtractable : <code>Boolean</code>
If true, the private key can be exported.

**Kind**: static property of [<code>ActiveDirectoryCertificate</code>](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate)  
<a name="module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.promptForCredentials"></a>

#### ActiveDirectoryCertificate.promptForCredentials : <code>Boolean</code>
This key applies only to user certificates where Manual Download is the chosen
method of profile delivery. If true, the user will be prompted for credentials when the
profile is installed. Omit this key for computer certificates.

**Kind**: static property of [<code>ActiveDirectoryCertificate</code>](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate)  
<a name="module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.keysize"></a>

#### ActiveDirectoryCertificate.keysize : <code>Number</code>
Optional; defaults to 2048. The RSA key size for the Certificate Signing
Request (CSR). Availability: Available in macOS 10.11 and later.

**Kind**: static property of [<code>ActiveDirectoryCertificate</code>](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate)  
**Default**: <code>2048</code>  
<a name="module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.enableAutoRenewal"></a>

#### ActiveDirectoryCertificate.enableAutoRenewal : <code>Boolean</code>
Optional. If set to true, the certificate obtained with this payload will
attempt auto-renewal. Only applies to device Active Directory certificate payloads.
Availability: Available in macOS 10.13.4 and later.

**Kind**: static property of [<code>ActiveDirectoryCertificate</code>](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate)  
**Default**: <code>false</code>  
<a name="module_@carboncollins/mobileconfig.ActiveDirectoryCertificate.plistSafeObject"></a>

#### ActiveDirectoryCertificate.plistSafeObject ⇒ <code>Object</code>
generates a plist safe js object with all the required information for generating
a mobileconfig profile

**Kind**: static property of [<code>ActiveDirectoryCertificate</code>](#module_@carboncollins/mobileconfig.ActiveDirectoryCertificate)  
**Returns**: <code>Object</code> - a plist object encoded into a js object  
**Read only**: true  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  
<a name="module_@carboncollins/mobileconfig.AirPlayPayload"></a>

### @carboncollins/mobileconfig.AirPlayPayload ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
**Kind**: static class of [<code>@carboncollins/mobileconfig</code>](#module_@carboncollins/mobileconfig)  
**Extends**: [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  

* [.AirPlayPayload](#module_@carboncollins/mobileconfig.AirPlayPayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
    * [new AirPlayPayload()](#new_module_@carboncollins/mobileconfig.AirPlayPayload_new)
    * [.whitelist](#module_@carboncollins/mobileconfig.AirPlayPayload.whitelist) : <code>Array.&lt;String&gt;</code>
    * [.passwords](#module_@carboncollins/mobileconfig.AirPlayPayload.passwords) : <code>Array.&lt;String&gt;</code>
    * [.plistSafeObject](#module_@carboncollins/mobileconfig.AirPlayPayload.plistSafeObject) ⇒ <code>Object</code>

<a name="new_module_@carboncollins/mobileconfig.AirPlayPayload_new"></a>

#### new AirPlayPayload()
Structured model data for the AirPlay payload

<a name="module_@carboncollins/mobileconfig.AirPlayPayload.whitelist"></a>

#### AirPlayPayload.whitelist : <code>Array.&lt;String&gt;</code>
Supervised only (ignored otherwise). If present, only AirPlay destinations
present in this list are available to the device. The dictionary format is described below.

**Kind**: static property of [<code>AirPlayPayload</code>](#module_@carboncollins/mobileconfig.AirPlayPayload)  
**Default**: <code>[]</code>  
<a name="module_@carboncollins/mobileconfig.AirPlayPayload.passwords"></a>

#### AirPlayPayload.passwords : <code>Array.&lt;String&gt;</code>
If present, sets passwords for known AirPlay destinations. The dictionary
format is described below.

**Kind**: static property of [<code>AirPlayPayload</code>](#module_@carboncollins/mobileconfig.AirPlayPayload)  
**Default**: <code>[]</code>  
<a name="module_@carboncollins/mobileconfig.AirPlayPayload.plistSafeObject"></a>

#### AirPlayPayload.plistSafeObject ⇒ <code>Object</code>
generates a plist safe js object with all the required information for generating
a mobileconfig profile

**Kind**: static property of [<code>AirPlayPayload</code>](#module_@carboncollins/mobileconfig.AirPlayPayload)  
**Returns**: <code>Object</code> - a plist object encoded into a js object  
**Read only**: true  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  
<a name="module_@carboncollins/mobileconfig.AirPlaySecurityPayload"></a>

### @carboncollins/mobileconfig.AirPlaySecurityPayload ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
**Kind**: static class of [<code>@carboncollins/mobileconfig</code>](#module_@carboncollins/mobileconfig)  
**Extends**: [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  

* [.AirPlaySecurityPayload](#module_@carboncollins/mobileconfig.AirPlaySecurityPayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
    * [new AirPlaySecurityPayload()](#new_module_@carboncollins/mobileconfig.AirPlaySecurityPayload_new)
    * [.securityType](#module_@carboncollins/mobileconfig.AirPlaySecurityPayload.securityType) : <code>String</code>
    * [.accessType](#module_@carboncollins/mobileconfig.AirPlaySecurityPayload.accessType) : <code>String</code>
    * [.password](#module_@carboncollins/mobileconfig.AirPlaySecurityPayload.password) : <code>String</code>
    * [.plistSafeObject](#module_@carboncollins/mobileconfig.AirPlaySecurityPayload.plistSafeObject) ⇒ <code>Object</code>

<a name="new_module_@carboncollins/mobileconfig.AirPlaySecurityPayload_new"></a>

#### new AirPlaySecurityPayload()
Structured model data for the AirPlay Security payload

<a name="module_@carboncollins/mobileconfig.AirPlaySecurityPayload.securityType"></a>

#### AirPlaySecurityPayload.securityType : <code>String</code>
Required. Must be one of the defined values: `PASSCODE_ONCE`,
`PASSCODE_ALWAYS`, or `PASSWORD`.

`PASSCODE_ONCE` will require an on-screen passcode to be entered on the first connection
from a device. Subsequent connections from the same device will not be prompted.

`PASSCODE_ALWAYS` will require an on-screen passcode to be entered upon every AirPlay
connection.

`PASSWORD` will require a passphrase to be entered as specified in the Password key. The
Password key is required if this SecurityType is selected.

`NONE` was deprecated in tvOS 11.3. Existing profiles using `NONE` will get the
`PASSWORD_ONCE` behavior.

**Kind**: static property of [<code>AirPlaySecurityPayload</code>](#module_@carboncollins/mobileconfig.AirPlaySecurityPayload)  
<a name="module_@carboncollins/mobileconfig.AirPlaySecurityPayload.accessType"></a>

#### AirPlaySecurityPayload.accessType : <code>String</code>
Required. Must be one of the defined values: `ANY` or `WIFI_ONLY`.

`ANY` allows connections from both Ethernet/WiFi and AWDL.

`WIFI_ONLY` allows connections only from devices on the same Ethernet/WiFi network as the
Apple TV.

**Kind**: static property of [<code>AirPlaySecurityPayload</code>](#module_@carboncollins/mobileconfig.AirPlaySecurityPayload)  
<a name="module_@carboncollins/mobileconfig.AirPlaySecurityPayload.password"></a>

#### AirPlaySecurityPayload.password : <code>String</code>
Optional. The AirPlay password. Required if `securityType` is `PASSWORD`.

**Kind**: static property of [<code>AirPlaySecurityPayload</code>](#module_@carboncollins/mobileconfig.AirPlaySecurityPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.AirPlaySecurityPayload.plistSafeObject"></a>

#### AirPlaySecurityPayload.plistSafeObject ⇒ <code>Object</code>
generates a plist safe js object with all the required information for generating
a mobileconfig profile

**Kind**: static property of [<code>AirPlaySecurityPayload</code>](#module_@carboncollins/mobileconfig.AirPlaySecurityPayload)  
**Returns**: <code>Object</code> - a plist object encoded into a js object  
**Read only**: true  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  
<a name="module_@carboncollins/mobileconfig.AirPrintPayload"></a>

### @carboncollins/mobileconfig.AirPrintPayload ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
**Kind**: static class of [<code>@carboncollins/mobileconfig</code>](#module_@carboncollins/mobileconfig)  
**Extends**: [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  

* [.AirPrintPayload](#module_@carboncollins/mobileconfig.AirPrintPayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
    * [new AirPrintPayload()](#new_module_@carboncollins/mobileconfig.AirPrintPayload_new)
    * [.printers](#module_@carboncollins/mobileconfig.AirPrintPayload.printers) : [<code>Array.&lt;airPrintServers&gt;</code>](#airPrintServers)
    * [.plistSafeObject](#module_@carboncollins/mobileconfig.AirPrintPayload.plistSafeObject) ⇒ <code>Object</code>

<a name="new_module_@carboncollins/mobileconfig.AirPrintPayload_new"></a>

#### new AirPrintPayload()
Structured model data for the AirPlay payload

<a name="module_@carboncollins/mobileconfig.AirPrintPayload.printers"></a>

#### AirPrintPayload.printers : [<code>Array.&lt;airPrintServers&gt;</code>](#airPrintServers)
An array of AirPrint printers that should always be shown.

**Kind**: static property of [<code>AirPrintPayload</code>](#module_@carboncollins/mobileconfig.AirPrintPayload)  
**Default**: <code>[]</code>  
<a name="module_@carboncollins/mobileconfig.AirPrintPayload.plistSafeObject"></a>

#### AirPrintPayload.plistSafeObject ⇒ <code>Object</code>
generates a plist safe js object with all the required information for generating
a mobileconfig profile

**Kind**: static property of [<code>AirPrintPayload</code>](#module_@carboncollins/mobileconfig.AirPrintPayload)  
**Returns**: <code>Object</code> - a plist object encoded into a js object  
**Read only**: true  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  
<a name="module_@carboncollins/mobileconfig.APNPayload"></a>

### ~~@carboncollins/mobileconfig.APNPayload ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)~~
***Deprecated***

**Kind**: static class of [<code>@carboncollins/mobileconfig</code>](#module_@carboncollins/mobileconfig)  
**Extends**: [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  

* ~~[.APNPayload](#module_@carboncollins/mobileconfig.APNPayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)~~
    * [new APNPayload()](#new_module_@carboncollins/mobileconfig.APNPayload_new)
    * [.defaultsData](#module_@carboncollins/mobileconfig.APNPayload.defaultsData) : <code>Object</code>
    * [.defaultsDomainName](#module_@carboncollins/mobileconfig.APNPayload.defaultsDomainName) : <code>String</code>
    * [.apns](#module_@carboncollins/mobileconfig.APNPayload.apns) : [<code>Array.&lt;apnDescriptior&gt;</code>](#apnDescriptior)
    * [.plistSafeObject](#module_@carboncollins/mobileconfig.APNPayload.plistSafeObject) ⇒ <code>Object</code>

<a name="new_module_@carboncollins/mobileconfig.APNPayload_new"></a>

#### new APNPayload()
Structured model data for the AirPlay payload

<a name="module_@carboncollins/mobileconfig.APNPayload.defaultsData"></a>

#### APNPayload.defaultsData : <code>Object</code>
This dictionary contains two key/value pairs.

**Kind**: static property of [<code>APNPayload</code>](#module_@carboncollins/mobileconfig.APNPayload)  
**Default**: <code>{}</code>  
<a name="module_@carboncollins/mobileconfig.APNPayload.defaultsDomainName"></a>

#### APNPayload.defaultsDomainName : <code>String</code>
The only allowed value is com.apple.managedCarrier.

**Kind**: static property of [<code>APNPayload</code>](#module_@carboncollins/mobileconfig.APNPayload)  
**Default**: <code>com.apple.managedCarrier</code>  
<a name="module_@carboncollins/mobileconfig.APNPayload.apns"></a>

#### APNPayload.apns : [<code>Array.&lt;apnDescriptior&gt;</code>](#apnDescriptior)
The only allowed value is com.apple.managedCarrier.

**Kind**: static property of [<code>APNPayload</code>](#module_@carboncollins/mobileconfig.APNPayload)  
**Default**: <code>[]</code>  
<a name="module_@carboncollins/mobileconfig.APNPayload.plistSafeObject"></a>

#### APNPayload.plistSafeObject ⇒ <code>Object</code>
generates a plist safe js object with all the required information for generating
a mobileconfig profile

**Kind**: static property of [<code>APNPayload</code>](#module_@carboncollins/mobileconfig.APNPayload)  
**Returns**: <code>Object</code> - a plist object encoded into a js object  
**Read only**: true  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  
<a name="module_@carboncollins/mobileconfig.AppLockPayload"></a>

### ~~@carboncollins/mobileconfig.AppLockPayload ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)~~
***Deprecated***

**Kind**: static class of [<code>@carboncollins/mobileconfig</code>](#module_@carboncollins/mobileconfig)  
**Extends**: [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  

* ~~[.AppLockPayload](#module_@carboncollins/mobileconfig.AppLockPayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)~~
    * [new AppLockPayload()](#new_module_@carboncollins/mobileconfig.AppLockPayload_new)
    * [.app](#module_@carboncollins/mobileconfig.AppLockPayload.app) : [<code>AppDescriptor</code>](#AppDescriptor)
    * [.plistSafeObject](#module_@carboncollins/mobileconfig.AppLockPayload.plistSafeObject) ⇒ <code>Object</code>

<a name="new_module_@carboncollins/mobileconfig.AppLockPayload_new"></a>

#### new AppLockPayload()
Structured model data for the AirPlay payload

<a name="module_@carboncollins/mobileconfig.AppLockPayload.app"></a>

#### AppLockPayload.app : [<code>AppDescriptor</code>](#AppDescriptor)
An object containing information about the app.

**Kind**: static property of [<code>AppLockPayload</code>](#module_@carboncollins/mobileconfig.AppLockPayload)  
**Default**: <code>{}</code>  
<a name="module_@carboncollins/mobileconfig.AppLockPayload.plistSafeObject"></a>

#### AppLockPayload.plistSafeObject ⇒ <code>Object</code>
generates a plist safe js object with all the required information for generating
a mobileconfig profile

**Kind**: static property of [<code>AppLockPayload</code>](#module_@carboncollins/mobileconfig.AppLockPayload)  
**Returns**: <code>Object</code> - a plist object encoded into a js object  
**Read only**: true  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  
<a name="module_@carboncollins/mobileconfig.CalDAVPayload"></a>

### @carboncollins/mobileconfig.CalDAVPayload ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
**Kind**: static class of [<code>@carboncollins/mobileconfig</code>](#module_@carboncollins/mobileconfig)  
**Extends**: [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  

* [.CalDAVPayload](#module_@carboncollins/mobileconfig.CalDAVPayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
    * [new CalDAVPayload()](#new_module_@carboncollins/mobileconfig.CalDAVPayload_new)
    * [.accountDescription](#module_@carboncollins/mobileconfig.CalDAVPayload.accountDescription) : <code>String</code>
    * [.hostname](#module_@carboncollins/mobileconfig.CalDAVPayload.hostname) : <code>String</code>
    * [.username](#module_@carboncollins/mobileconfig.CalDAVPayload.username) : <code>String</code>
    * [.password](#module_@carboncollins/mobileconfig.CalDAVPayload.password) : <code>String</code>
    * [.useSSL](#module_@carboncollins/mobileconfig.CalDAVPayload.useSSL) : <code>Boolean</code>
    * [.port](#module_@carboncollins/mobileconfig.CalDAVPayload.port) : <code>Number</code>
    * [.principalURL](#module_@carboncollins/mobileconfig.CalDAVPayload.principalURL) : <code>String</code>
    * [.plistSafeObject](#module_@carboncollins/mobileconfig.CalDAVPayload.plistSafeObject) ⇒ <code>Object</code>

<a name="new_module_@carboncollins/mobileconfig.CalDAVPayload_new"></a>

#### new CalDAVPayload()
Structured model data for the CalDAV payload

<a name="module_@carboncollins/mobileconfig.CalDAVPayload.accountDescription"></a>

#### CalDAVPayload.accountDescription : <code>String</code>
The description of the account.

**Kind**: static property of [<code>CalDAVPayload</code>](#module_@carboncollins/mobileconfig.CalDAVPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.CalDAVPayload.hostname"></a>

#### CalDAVPayload.hostname : <code>String</code>
The server address. In macOS, this key is required.

**Kind**: static property of [<code>CalDAVPayload</code>](#module_@carboncollins/mobileconfig.CalDAVPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.CalDAVPayload.username"></a>

#### CalDAVPayload.username : <code>String</code>
The user's login name. In macOS, this key is required.

**Kind**: static property of [<code>CalDAVPayload</code>](#module_@carboncollins/mobileconfig.CalDAVPayload)  
**Default**: <code>&#x27;&#x27;</code>  
<a name="module_@carboncollins/mobileconfig.CalDAVPayload.password"></a>

#### CalDAVPayload.password : <code>String</code>
The user's login password.

**Kind**: static property of [<code>CalDAVPayload</code>](#module_@carboncollins/mobileconfig.CalDAVPayload)  
**Default**: <code>&#x27;&#x27;</code>  
<a name="module_@carboncollins/mobileconfig.CalDAVPayload.useSSL"></a>

#### CalDAVPayload.useSSL : <code>Boolean</code>
Whether or not to use SSL. In macOS, this key is optional.

**Kind**: static property of [<code>CalDAVPayload</code>](#module_@carboncollins/mobileconfig.CalDAVPayload)  
**Default**: <code>false</code>  
<a name="module_@carboncollins/mobileconfig.CalDAVPayload.port"></a>

#### CalDAVPayload.port : <code>Number</code>
The port on which to connect to the server.

**Kind**: static property of [<code>CalDAVPayload</code>](#module_@carboncollins/mobileconfig.CalDAVPayload)  
**Default**: <code>(this.useSSL) ? 8448 : 8008</code>  
<a name="module_@carboncollins/mobileconfig.CalDAVPayload.principalURL"></a>

#### CalDAVPayload.principalURL : <code>String</code>
The base URL to the user’s calendar. In macOS this URL is required if the user
doesn’t provide a password, because auto-discovery of the service will fail and the account
won’t be created.

**Kind**: static property of [<code>CalDAVPayload</code>](#module_@carboncollins/mobileconfig.CalDAVPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.CalDAVPayload.plistSafeObject"></a>

#### CalDAVPayload.plistSafeObject ⇒ <code>Object</code>
generates a plist safe js object with all the required information for generating
a mobileconfig profile

**Kind**: static property of [<code>CalDAVPayload</code>](#module_@carboncollins/mobileconfig.CalDAVPayload)  
**Returns**: <code>Object</code> - a plist object encoded into a js object  
**Read only**: true  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  
<a name="module_@carboncollins/mobileconfig.CalendarSubscriptionPayload"></a>

### @carboncollins/mobileconfig.CalendarSubscriptionPayload ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
**Kind**: static class of [<code>@carboncollins/mobileconfig</code>](#module_@carboncollins/mobileconfig)  
**Extends**: [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  

* [.CalendarSubscriptionPayload](#module_@carboncollins/mobileconfig.CalendarSubscriptionPayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
    * [new CalendarSubscriptionPayload()](#new_module_@carboncollins/mobileconfig.CalendarSubscriptionPayload_new)
    * [.accountDescription](#module_@carboncollins/mobileconfig.CalendarSubscriptionPayload.accountDescription) : <code>String</code>
    * [.hostname](#module_@carboncollins/mobileconfig.CalendarSubscriptionPayload.hostname) : <code>String</code>
    * [.username](#module_@carboncollins/mobileconfig.CalendarSubscriptionPayload.username) : <code>String</code>
    * [.password](#module_@carboncollins/mobileconfig.CalendarSubscriptionPayload.password) : <code>String</code>
    * [.useSSL](#module_@carboncollins/mobileconfig.CalendarSubscriptionPayload.useSSL) : <code>Boolean</code>
    * [.plistSafeObject](#module_@carboncollins/mobileconfig.CalendarSubscriptionPayload.plistSafeObject) ⇒ <code>Object</code>

<a name="new_module_@carboncollins/mobileconfig.CalendarSubscriptionPayload_new"></a>

#### new CalendarSubscriptionPayload()
Structured model data for the Calendar Subscription payload

<a name="module_@carboncollins/mobileconfig.CalendarSubscriptionPayload.accountDescription"></a>

#### CalendarSubscriptionPayload.accountDescription : <code>String</code>
The description of the account.

**Kind**: static property of [<code>CalendarSubscriptionPayload</code>](#module_@carboncollins/mobileconfig.CalendarSubscriptionPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.CalendarSubscriptionPayload.hostname"></a>

#### CalendarSubscriptionPayload.hostname : <code>String</code>
The server address. In macOS, this key is required.

**Kind**: static property of [<code>CalendarSubscriptionPayload</code>](#module_@carboncollins/mobileconfig.CalendarSubscriptionPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.CalendarSubscriptionPayload.username"></a>

#### CalendarSubscriptionPayload.username : <code>String</code>
The user's login name. In macOS, this key is required.

**Kind**: static property of [<code>CalendarSubscriptionPayload</code>](#module_@carboncollins/mobileconfig.CalendarSubscriptionPayload)  
**Default**: <code>&#x27;&#x27;</code>  
<a name="module_@carboncollins/mobileconfig.CalendarSubscriptionPayload.password"></a>

#### CalendarSubscriptionPayload.password : <code>String</code>
The user's login password.

**Kind**: static property of [<code>CalendarSubscriptionPayload</code>](#module_@carboncollins/mobileconfig.CalendarSubscriptionPayload)  
**Default**: <code>&#x27;&#x27;</code>  
<a name="module_@carboncollins/mobileconfig.CalendarSubscriptionPayload.useSSL"></a>

#### CalendarSubscriptionPayload.useSSL : <code>Boolean</code>
Whether or not to use SSL.

**Kind**: static property of [<code>CalendarSubscriptionPayload</code>](#module_@carboncollins/mobileconfig.CalendarSubscriptionPayload)  
**Default**: <code>false</code>  
<a name="module_@carboncollins/mobileconfig.CalendarSubscriptionPayload.plistSafeObject"></a>

#### CalendarSubscriptionPayload.plistSafeObject ⇒ <code>Object</code>
generates a plist safe js object with all the required information for generating
a mobileconfig profile

**Kind**: static property of [<code>CalendarSubscriptionPayload</code>](#module_@carboncollins/mobileconfig.CalendarSubscriptionPayload)  
**Returns**: <code>Object</code> - a plist object encoded into a js object  
**Read only**: true  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  
<a name="module_@carboncollins/mobileconfig.CardDAVPayload"></a>

### @carboncollins/mobileconfig.CardDAVPayload ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
**Kind**: static class of [<code>@carboncollins/mobileconfig</code>](#module_@carboncollins/mobileconfig)  
**Extends**: [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  

* [.CardDAVPayload](#module_@carboncollins/mobileconfig.CardDAVPayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
    * [new CardDAVPayload()](#new_module_@carboncollins/mobileconfig.CardDAVPayload_new)
    * [.accountDescription](#module_@carboncollins/mobileconfig.CardDAVPayload.accountDescription) : <code>String</code>
    * [.hostname](#module_@carboncollins/mobileconfig.CardDAVPayload.hostname) : <code>String</code>
    * [.username](#module_@carboncollins/mobileconfig.CardDAVPayload.username) : <code>String</code>
    * [.password](#module_@carboncollins/mobileconfig.CardDAVPayload.password) : <code>String</code>
    * [.useSSL](#module_@carboncollins/mobileconfig.CardDAVPayload.useSSL) : <code>Boolean</code>
    * [.port](#module_@carboncollins/mobileconfig.CardDAVPayload.port) : <code>Number</code>
    * [.principalURL](#module_@carboncollins/mobileconfig.CardDAVPayload.principalURL) : <code>String</code>
    * [.plistSafeObject](#module_@carboncollins/mobileconfig.CardDAVPayload.plistSafeObject) ⇒ <code>Object</code>

<a name="new_module_@carboncollins/mobileconfig.CardDAVPayload_new"></a>

#### new CardDAVPayload()
Structured model data for the CardDAV payload

<a name="module_@carboncollins/mobileconfig.CardDAVPayload.accountDescription"></a>

#### CardDAVPayload.accountDescription : <code>String</code>
The description of the account.

**Kind**: static property of [<code>CardDAVPayload</code>](#module_@carboncollins/mobileconfig.CardDAVPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.CardDAVPayload.hostname"></a>

#### CardDAVPayload.hostname : <code>String</code>
The server address. In macOS, this key is required.

**Kind**: static property of [<code>CardDAVPayload</code>](#module_@carboncollins/mobileconfig.CardDAVPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.CardDAVPayload.username"></a>

#### CardDAVPayload.username : <code>String</code>
The user's login name. In macOS, this key is required.

**Kind**: static property of [<code>CardDAVPayload</code>](#module_@carboncollins/mobileconfig.CardDAVPayload)  
**Default**: <code>&#x27;&#x27;</code>  
<a name="module_@carboncollins/mobileconfig.CardDAVPayload.password"></a>

#### CardDAVPayload.password : <code>String</code>
The user's login password.

**Kind**: static property of [<code>CardDAVPayload</code>](#module_@carboncollins/mobileconfig.CardDAVPayload)  
**Default**: <code>&#x27;&#x27;</code>  
<a name="module_@carboncollins/mobileconfig.CardDAVPayload.useSSL"></a>

#### CardDAVPayload.useSSL : <code>Boolean</code>
Whether or not to use SSL. In macOS, this key is optional.

**Kind**: static property of [<code>CardDAVPayload</code>](#module_@carboncollins/mobileconfig.CardDAVPayload)  
**Default**: <code>false</code>  
<a name="module_@carboncollins/mobileconfig.CardDAVPayload.port"></a>

#### CardDAVPayload.port : <code>Number</code>
The port on which to connect to the server.

**Kind**: static property of [<code>CardDAVPayload</code>](#module_@carboncollins/mobileconfig.CardDAVPayload)  
**Default**: <code>(this.useSSL) ? 443 : 80</code>  
<a name="module_@carboncollins/mobileconfig.CardDAVPayload.principalURL"></a>

#### CardDAVPayload.principalURL : <code>String</code>
Not supported on macOS. The base URL to the user’s address book.

**Kind**: static property of [<code>CardDAVPayload</code>](#module_@carboncollins/mobileconfig.CardDAVPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.CardDAVPayload.plistSafeObject"></a>

#### CardDAVPayload.plistSafeObject ⇒ <code>Object</code>
generates a plist safe js object with all the required information for generating
a mobileconfig profile

**Kind**: static property of [<code>CardDAVPayload</code>](#module_@carboncollins/mobileconfig.CardDAVPayload)  
**Returns**: <code>Object</code> - a plist object encoded into a js object  
**Read only**: true  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  
<a name="module_@carboncollins/mobileconfig.CertificatePayload"></a>

### @carboncollins/mobileconfig.CertificatePayload ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
**Kind**: static class of [<code>@carboncollins/mobileconfig</code>](#module_@carboncollins/mobileconfig)  
**Extends**: [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  

* [.CertificatePayload](#module_@carboncollins/mobileconfig.CertificatePayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
    * [new CertificatePayload()](#new_module_@carboncollins/mobileconfig.CertificatePayload_new)
    * [.certificateFileName](#module_@carboncollins/mobileconfig.CertificatePayload.certificateFileName) : <code>String</code>
    * [.content](#module_@carboncollins/mobileconfig.CertificatePayload.content) : <code>Buffer</code>
    * [.password](#module_@carboncollins/mobileconfig.CertificatePayload.password) : <code>String</code>
    * [.plistSafeObject](#module_@carboncollins/mobileconfig.CertificatePayload.plistSafeObject) ⇒ <code>Object</code>

<a name="new_module_@carboncollins/mobileconfig.CertificatePayload_new"></a>

#### new CertificatePayload()
Structured model data for the Certificate payload

<a name="module_@carboncollins/mobileconfig.CertificatePayload.certificateFileName"></a>

#### CertificatePayload.certificateFileName : <code>String</code>
The file name of the enclosed certificate.

**Kind**: static property of [<code>CertificatePayload</code>](#module_@carboncollins/mobileconfig.CertificatePayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.CertificatePayload.content"></a>

#### CertificatePayload.content : <code>Buffer</code>
The base64 representation of the payload with a line length of 52.

**Kind**: static property of [<code>CertificatePayload</code>](#module_@carboncollins/mobileconfig.CertificatePayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.CertificatePayload.password"></a>

#### CertificatePayload.password : <code>String</code>
For PKCS#12 certificates, contains the password to the identity.

**Kind**: static property of [<code>CertificatePayload</code>](#module_@carboncollins/mobileconfig.CertificatePayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.CertificatePayload.plistSafeObject"></a>

#### CertificatePayload.plistSafeObject ⇒ <code>Object</code>
generates a plist safe js object with all the required information for generating
a mobileconfig profile

**Kind**: static property of [<code>CertificatePayload</code>](#module_@carboncollins/mobileconfig.CertificatePayload)  
**Returns**: <code>Object</code> - a plist object encoded into a js object  
**Read only**: true  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  
<a name="module_@carboncollins/mobileconfig.CertificatePreferencePayload"></a>

### @carboncollins/mobileconfig.CertificatePreferencePayload ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
**Kind**: static class of [<code>@carboncollins/mobileconfig</code>](#module_@carboncollins/mobileconfig)  
**Extends**: [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  

* [.CertificatePreferencePayload](#module_@carboncollins/mobileconfig.CertificatePreferencePayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
    * [new CertificatePreferencePayload()](#new_module_@carboncollins/mobileconfig.CertificatePreferencePayload_new)
    * [.name](#module_@carboncollins/mobileconfig.CertificatePreferencePayload.name) : <code>String</code>
    * [.certificateUUID](#module_@carboncollins/mobileconfig.CertificatePreferencePayload.certificateUUID) : <code>String</code>
    * [.plistSafeObject](#module_@carboncollins/mobileconfig.CertificatePreferencePayload.plistSafeObject) ⇒ <code>Object</code>

<a name="new_module_@carboncollins/mobileconfig.CertificatePreferencePayload_new"></a>

#### new CertificatePreferencePayload()
Structured model data for the Certificate Preference payload

<a name="module_@carboncollins/mobileconfig.CertificatePreferencePayload.name"></a>

#### CertificatePreferencePayload.name : <code>String</code>
An email address (RFC822) or other name for which a preferred certificate is
requested.

**Kind**: static property of [<code>CertificatePreferencePayload</code>](#module_@carboncollins/mobileconfig.CertificatePreferencePayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.CertificatePreferencePayload.certificateUUID"></a>

#### CertificatePreferencePayload.certificateUUID : <code>String</code>
The UUID of another payload within the same profile that installed the
certificate; for example, a 'com.apple.security.root' payload.

**Kind**: static property of [<code>CertificatePreferencePayload</code>](#module_@carboncollins/mobileconfig.CertificatePreferencePayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.CertificatePreferencePayload.plistSafeObject"></a>

#### CertificatePreferencePayload.plistSafeObject ⇒ <code>Object</code>
generates a plist safe js object with all the required information for generating
a mobileconfig profile

**Kind**: static property of [<code>CertificatePreferencePayload</code>](#module_@carboncollins/mobileconfig.CertificatePreferencePayload)  
**Returns**: <code>Object</code> - a plist object encoded into a js object  
**Read only**: true  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  
<a name="module_@carboncollins/mobileconfig.MobileConfigPayload"></a>

### @carboncollins/mobileconfig.MobileConfigPayload
**Kind**: static class of [<code>@carboncollins/mobileconfig</code>](#module_@carboncollins/mobileconfig)  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  

* [.MobileConfigPayload](#module_@carboncollins/mobileconfig.MobileConfigPayload)
    * [new MobileConfigPayload()](#new_module_@carboncollins/mobileconfig.MobileConfigPayload_new)
    * [.type](#module_@carboncollins/mobileconfig.MobileConfigPayload.type) : <code>String</code>
    * [.version](#module_@carboncollins/mobileconfig.MobileConfigPayload.version) : <code>Number</code>
    * [.identifier](#module_@carboncollins/mobileconfig.MobileConfigPayload.identifier) : <code>String</code>
    * [.uuid](#module_@carboncollins/mobileconfig.MobileConfigPayload.uuid) : <code>String</code>
    * [.displayName](#module_@carboncollins/mobileconfig.MobileConfigPayload.displayName) : <code>String</code>
    * [.description](#module_@carboncollins/mobileconfig.MobileConfigPayload.description) : <code>String</code>
    * [.organisation](#module_@carboncollins/mobileconfig.MobileConfigPayload.organisation) : <code>String</code>
    * [.plistSafeObject](#module_@carboncollins/mobileconfig.MobileConfigPayload.plistSafeObject) ⇒ <code>Object</code>

<a name="new_module_@carboncollins/mobileconfig.MobileConfigPayload_new"></a>

#### new MobileConfigPayload()
Structured model data to be extended for each payload which can be added to a
profile

<a name="module_@carboncollins/mobileconfig.MobileConfigPayload.type"></a>

#### MobileConfigPayload.type : <code>String</code>
The payload type. The payloads are described in the payload specific classes.

**Kind**: static property of [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Default**: <code>&#x27;&#x27;</code>  
<a name="module_@carboncollins/mobileconfig.MobileConfigPayload.version"></a>

#### MobileConfigPayload.version : <code>Number</code>
The version number of the individual payload. A profile can consist of payload
with different version numbers. For example changes to the vpn software in iOS might
introduce a new payload version to support additional features, but mail payload versions
wont necessarily change in the same release.

**Kind**: static property of [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Default**: <code>1</code>  
<a name="module_@carboncollins/mobileconfig.MobileConfigPayload.identifier"></a>

#### MobileConfigPayload.identifier : <code>String</code>
A reverse-DNS-style identifier for the specific payload. It is usually the
same identifier as the root-level PayloadIdentifier value with an additional component
appended.

**Kind**: static property of [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Default**: <code>com.example.myprofile.mypayload</code>  
<a name="module_@carboncollins/mobileconfig.MobileConfigPayload.uuid"></a>

#### MobileConfigPayload.uuid : <code>String</code>
A globally unique identifier for the payload. The actual content is
unimportant, but it must be globally unique. If left blank a random UUID will be generated.
In macOS, you can use uuidgen to generate reasonable UUIDs.

**Kind**: static property of [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Default**: <code>new UUIDv4()</code>  
<a name="module_@carboncollins/mobileconfig.MobileConfigPayload.displayName"></a>

#### MobileConfigPayload.displayName : <code>String</code>
A human-readable name for the profile payload. This name is displayed on the
Detail screen. It does not have to be unique.

**Kind**: static property of [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Default**: <code>&#x27;&#x27;</code>  
<a name="module_@carboncollins/mobileconfig.MobileConfigPayload.description"></a>

#### MobileConfigPayload.description : <code>String</code>
A human-readable description of this payload. This description is shown on the
Detail screen.

**Kind**: static property of [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.MobileConfigPayload.organisation"></a>

#### MobileConfigPayload.organisation : <code>String</code>
A human-readable string containing the name of the organization that provided
the profile. The payload organization for a payload need not match the payload organization
in the enclosing profile.

**Kind**: static property of [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.MobileConfigPayload.plistSafeObject"></a>

#### MobileConfigPayload.plistSafeObject ⇒ <code>Object</code>
generates a plist safe js object to be converted to plist xml

**Kind**: static property of [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Returns**: <code>Object</code> - a plist object encoded into a js object  
**Read only**: true  
<a name="module_@carboncollins/mobileconfig.MobileConfigProfile"></a>

### @carboncollins/mobileconfig.MobileConfigProfile
**Kind**: static class of [<code>@carboncollins/mobileconfig</code>](#module_@carboncollins/mobileconfig)  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  

* [.MobileConfigProfile](#module_@carboncollins/mobileconfig.MobileConfigProfile)
    * [new MobileConfigProfile()](#new_module_@carboncollins/mobileconfig.MobileConfigProfile_new)
    * _static_
        * [.type](#module_@carboncollins/mobileconfig.MobileConfigProfile.type) : <code>String</code>
        * [.version](#module_@carboncollins/mobileconfig.MobileConfigProfile.version) : <code>Number</code>
        * [.scope](#module_@carboncollins/mobileconfig.MobileConfigProfile.scope) : <code>String</code>
        * [.content](#module_@carboncollins/mobileconfig.MobileConfigProfile.content) : [<code>Array.&lt;MobileConfigPayload&gt;</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
        * [.description](#module_@carboncollins/mobileconfig.MobileConfigProfile.description) : <code>String</code>
        * [.displayName](#module_@carboncollins/mobileconfig.MobileConfigProfile.displayName) : <code>String</code>
        * [.expirationDate](#module_@carboncollins/mobileconfig.MobileConfigProfile.expirationDate) : <code>Date</code>
        * [.identifier](#module_@carboncollins/mobileconfig.MobileConfigProfile.identifier) : <code>String</code>
        * [.organization](#module_@carboncollins/mobileconfig.MobileConfigProfile.organization) : <code>String</code>
        * [.uuid](#module_@carboncollins/mobileconfig.MobileConfigProfile.uuid) : <code>String</code>
        * [.removeDisallowed](#module_@carboncollins/mobileconfig.MobileConfigProfile.removeDisallowed) : <code>Boolean</code>
        * [.removalDate](#module_@carboncollins/mobileconfig.MobileConfigProfile.removalDate) : <code>Date</code>
        * [.durationUntilRemoval](#module_@carboncollins/mobileconfig.MobileConfigProfile.durationUntilRemoval) : <code>Number</code>
        * [.consentText](#module_@carboncollins/mobileconfig.MobileConfigProfile.consentText) : <code>Object</code>
        * [.plistSafeObject](#module_@carboncollins/mobileconfig.MobileConfigProfile.plistSafeObject) ⇒ <code>Object</code>
    * _inner_
        * [~addPayload(any)](#module_@carboncollins/mobileconfig.MobileConfigProfile..addPayload)
        * [~clearPayloads()](#module_@carboncollins/mobileconfig.MobileConfigProfile..clearPayloads)

<a name="new_module_@carboncollins/mobileconfig.MobileConfigProfile_new"></a>

#### new MobileConfigProfile()
Structured model data for the mobileconfig profile

<a name="module_@carboncollins/mobileconfig.MobileConfigProfile.type"></a>

#### MobileConfigProfile.type : <code>String</code>
Can only be `Configuration` currently

**Kind**: static property of [<code>MobileConfigProfile</code>](#module_@carboncollins/mobileconfig.MobileConfigProfile)  
**Default**: <code>Configuration</code>  
<a name="module_@carboncollins/mobileconfig.MobileConfigProfile.version"></a>

#### MobileConfigProfile.version : <code>Number</code>
The version number of the profile format. This describes the version of the
configuration profile as a whole, not of the individual payloads within it. This should
start at 1

**Kind**: static property of [<code>MobileConfigProfile</code>](#module_@carboncollins/mobileconfig.MobileConfigProfile)  
**Default**: <code>1</code>  
<a name="module_@carboncollins/mobileconfig.MobileConfigProfile.scope"></a>

#### MobileConfigProfile.scope : <code>String</code>
Determines if the profile should be installed for the system or for the user.
In many cases, it determines the location of the certificate items, such as keychains.
Though it is not possible to declare different payload scopes, payloads, like VPN, may
automaticaly install their items in both scopes if needed. Values can be: `System`
or `User`.

**Kind**: static property of [<code>MobileConfigProfile</code>](#module_@carboncollins/mobileconfig.MobileConfigProfile)  
**Default**: <code>User</code>  
<a name="module_@carboncollins/mobileconfig.MobileConfigProfile.content"></a>

#### MobileConfigProfile.content : [<code>Array.&lt;MobileConfigPayload&gt;</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
An array of payload objects.

**Kind**: static property of [<code>MobileConfigProfile</code>](#module_@carboncollins/mobileconfig.MobileConfigProfile)  
**Default**: <code>[]</code>  
<a name="module_@carboncollins/mobileconfig.MobileConfigProfile.description"></a>

#### MobileConfigProfile.description : <code>String</code>
A description of the profile, shown on the detail screen for the profile. This
should be descriptive enough to help the user decide whether to install the profile.

**Kind**: static property of [<code>MobileConfigProfile</code>](#module_@carboncollins/mobileconfig.MobileConfigProfile)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.MobileConfigProfile.displayName"></a>

#### MobileConfigProfile.displayName : <code>String</code>
A human-readable name for the profile. This value is displayed on the detail
screen. It does not have to be unique.

**Kind**: static property of [<code>MobileConfigProfile</code>](#module_@carboncollins/mobileconfig.MobileConfigProfile)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.MobileConfigProfile.expirationDate"></a>

#### MobileConfigProfile.expirationDate : <code>Date</code>
A date in which a profile is considered to have expired and can be updated over
the air. This key is only used if the profile is delivered via over-the-air profile
delivery

**Kind**: static property of [<code>MobileConfigProfile</code>](#module_@carboncollins/mobileconfig.MobileConfigProfile)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.MobileConfigProfile.identifier"></a>

#### MobileConfigProfile.identifier : <code>String</code>
A reverse-DNS style identifier (com.example.myprofile, for example) that
identifies the profile. The string is used to determine whether a new profile should
replace an existing one or should be added.

**Kind**: static property of [<code>MobileConfigProfile</code>](#module_@carboncollins/mobileconfig.MobileConfigProfile)  
**Default**: <code>com.example.myprofile</code>  
<a name="module_@carboncollins/mobileconfig.MobileConfigProfile.organization"></a>

#### MobileConfigProfile.organization : <code>String</code>
A human-readable string containing the name of the organisation that provided
the profile

**Kind**: static property of [<code>MobileConfigProfile</code>](#module_@carboncollins/mobileconfig.MobileConfigProfile)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.MobileConfigProfile.uuid"></a>

#### MobileConfigProfile.uuid : <code>String</code>
A globaly unique identifier for the profile. The actual content is
unimportant, but it must be globaly unique. If left blank a new uuid will be generated.
If in macOS you can use uuidgen to generate reasonable UUIDs.

**Kind**: static property of [<code>MobileConfigProfile</code>](#module_@carboncollins/mobileconfig.MobileConfigProfile)  
**Default**: <code>new UUIDv4()</code>  
<a name="module_@carboncollins/mobileconfig.MobileConfigProfile.removeDisallowed"></a>

#### MobileConfigProfile.removeDisallowed : <code>Boolean</code>
Supervised only. If present and set to true, the user cannot delete the profile
(unless the profile has a removal password and the user provides it)

**Kind**: static property of [<code>MobileConfigProfile</code>](#module_@carboncollins/mobileconfig.MobileConfigProfile)  
**Default**: <code>false</code>  
<a name="module_@carboncollins/mobileconfig.MobileConfigProfile.removalDate"></a>

#### MobileConfigProfile.removalDate : <code>Date</code>
The date on which the profile will automaticaly be removed. If
`durationUntilRemoval` is also defined, whichever field yeilds the earliest date will be
used.

**Kind**: static property of [<code>MobileConfigProfile</code>](#module_@carboncollins/mobileconfig.MobileConfigProfile)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.MobileConfigProfile.durationUntilRemoval"></a>

#### MobileConfigProfile.durationUntilRemoval : <code>Number</code>
Number of seconds untill the profile is automaticaly removed. If `removalDate`
is also defined, whichever field yeilds the earliest date will be used.

**Kind**: static property of [<code>MobileConfigProfile</code>](#module_@carboncollins/mobileconfig.MobileConfigProfile)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.MobileConfigProfile.consentText"></a>

#### MobileConfigProfile.consentText : <code>Object</code>
An object consiting of a key in IETF BCP 47 language identifier (e.g. `en`,
`jp`) and a stirng value consisting of a lisence agreement the user must agree to before
installing the profile. The system will choose which language to use based on the users
current lanuage setting. If the language is not found then the default localisation is
used. If the default is not found then `en` localisation is used. If there is no `en`
localisation then the first available localisation is used.\n You should provide a default
value if possible. No warning shall be displayed if the users locale does not match any
localisation in the consentTest object.

**Kind**: static property of [<code>MobileConfigProfile</code>](#module_@carboncollins/mobileconfig.MobileConfigProfile)  
**Default**: <code>{}}</code>  
<a name="module_@carboncollins/mobileconfig.MobileConfigProfile.plistSafeObject"></a>

#### MobileConfigProfile.plistSafeObject ⇒ <code>Object</code>
generates a plist safe js object with all the required information for generating
a mobileconfig profile

**Kind**: static property of [<code>MobileConfigProfile</code>](#module_@carboncollins/mobileconfig.MobileConfigProfile)  
**Returns**: <code>Object</code> - a plist object encoded into a js object  
**Read only**: true  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  
<a name="module_@carboncollins/mobileconfig.MobileConfigProfile..addPayload"></a>

#### MobileConfigProfile~addPayload(any)
Adds a payload to the profile (allows multiple settings to be added to a profile)

**Kind**: inner method of [<code>MobileConfigProfile</code>](#module_@carboncollins/mobileconfig.MobileConfigProfile)  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  

| Param | Type | Description |
| --- | --- | --- |
| any | <code>Payload</code> | of the various payloads |

<a name="module_@carboncollins/mobileconfig.MobileConfigProfile..clearPayloads"></a>

#### MobileConfigProfile~clearPayloads()
Removes any previously added payloads from the profile

**Kind**: inner method of [<code>MobileConfigProfile</code>](#module_@carboncollins/mobileconfig.MobileConfigProfile)  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  
<a name="module_@carboncollins/mobileconfig.RawPayload"></a>

### @carboncollins/mobileconfig.RawPayload ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
**Kind**: static class of [<code>@carboncollins/mobileconfig</code>](#module_@carboncollins/mobileconfig)  
**Extends**: [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  

* [.RawPayload](#module_@carboncollins/mobileconfig.RawPayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
    * [new RawPayload()](#new_module_@carboncollins/mobileconfig.RawPayload_new)
    * [.raw](#module_@carboncollins/mobileconfig.RawPayload.raw) : <code>Object</code>
    * [.plistSafeObject](#module_@carboncollins/mobileconfig.RawPayload.plistSafeObject) ⇒ <code>Object</code>

<a name="new_module_@carboncollins/mobileconfig.RawPayload_new"></a>

#### new RawPayload()
Structured model data for a raw payload

<a name="module_@carboncollins/mobileconfig.RawPayload.raw"></a>

#### RawPayload.raw : <code>Object</code>
AN object of raw profile keys defined in the configuration profile reference
document. the base payload properties still apply but can be overriden with the raw fields

**Kind**: static property of [<code>RawPayload</code>](#module_@carboncollins/mobileconfig.RawPayload)  
**Default**: <code>{}</code>  
**See**: [https://developer.apple.com/library/content/featuredarticles/iPhoneConfigurationProfileRef/Introduction/Introduction.html](https://developer.apple.com/library/content/featuredarticles/iPhoneConfigurationProfileRef/Introduction/Introduction.html)  
<a name="module_@carboncollins/mobileconfig.RawPayload.plistSafeObject"></a>

#### RawPayload.plistSafeObject ⇒ <code>Object</code>
generates a plist safe js object with all the required information for generating
a mobileconfig profile

**Kind**: static property of [<code>RawPayload</code>](#module_@carboncollins/mobileconfig.RawPayload)  
**Returns**: <code>Object</code> - a plist object encoded into a js object  
**Read only**: true  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  
<a name="module_@carboncollins/mobileconfig.WebClipPayload"></a>

### @carboncollins/mobileconfig.WebClipPayload ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
**Kind**: static class of [<code>@carboncollins/mobileconfig</code>](#module_@carboncollins/mobileconfig)  
**Extends**: [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  

* [.WebClipPayload](#module_@carboncollins/mobileconfig.WebClipPayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
    * [new WebClipPayload()](#new_module_@carboncollins/mobileconfig.WebClipPayload_new)
    * [.url](#module_@carboncollins/mobileconfig.WebClipPayload.url) : <code>String</code>
    * [.label](#module_@carboncollins/mobileconfig.WebClipPayload.label) : <code>String</code>
    * [.icon](#module_@carboncollins/mobileconfig.WebClipPayload.icon) : <code>Buffer</code>
    * [.isRemovable](#module_@carboncollins/mobileconfig.WebClipPayload.isRemovable) : <code>Boolean</code>
    * [.plistSafeObject](#module_@carboncollins/mobileconfig.WebClipPayload.plistSafeObject) ⇒ <code>Object</code>

<a name="new_module_@carboncollins/mobileconfig.WebClipPayload_new"></a>

#### new WebClipPayload()
Structured model data for the WebClip payload

<a name="module_@carboncollins/mobileconfig.WebClipPayload.url"></a>

#### WebClipPayload.url : <code>String</code>
The URL that the Web Clip should open when clicked. The URL must begin with
HTTP or HTTPS or it won't work.

**Kind**: static property of [<code>WebClipPayload</code>](#module_@carboncollins/mobileconfig.WebClipPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.WebClipPayload.label"></a>

#### WebClipPayload.label : <code>String</code>
The name of the Web Clip as displayed on the Home screen.

**Kind**: static property of [<code>WebClipPayload</code>](#module_@carboncollins/mobileconfig.WebClipPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.WebClipPayload.icon"></a>

#### WebClipPayload.icon : <code>Buffer</code>
A PNG icon to be shown on the Home screen. Should be 59 x 60 pixels in size.
If not specified, a white square will be shown.

**Kind**: static property of [<code>WebClipPayload</code>](#module_@carboncollins/mobileconfig.WebClipPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.WebClipPayload.isRemovable"></a>

#### WebClipPayload.isRemovable : <code>Boolean</code>
If false, the web clip is unremovable. Defaults to true. Not available in
macOS.

**Kind**: static property of [<code>WebClipPayload</code>](#module_@carboncollins/mobileconfig.WebClipPayload)  
**Default**: <code>true</code>  
<a name="module_@carboncollins/mobileconfig.WebClipPayload.plistSafeObject"></a>

#### WebClipPayload.plistSafeObject ⇒ <code>Object</code>
generates a plist safe js object with all the required information for generating
a mobileconfig profile

**Kind**: static property of [<code>WebClipPayload</code>](#module_@carboncollins/mobileconfig.WebClipPayload)  
**Returns**: <code>Object</code> - a plist object encoded into a js object  
**Read only**: true  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload"></a>

### @carboncollins/mobileconfig.WiFiPayload ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
**Kind**: static class of [<code>@carboncollins/mobileconfig</code>](#module_@carboncollins/mobileconfig)  
**Extends**: [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  

* [.WiFiPayload](#module_@carboncollins/mobileconfig.WiFiPayload) ⇐ [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)
    * [new WiFiPayload()](#new_module_@carboncollins/mobileconfig.WiFiPayload_new)
    * [.ssid](#module_@carboncollins/mobileconfig.WiFiPayload.ssid) : <code>String</code>
    * [.hiddenNetwork](#module_@carboncollins/mobileconfig.WiFiPayload.hiddenNetwork) : <code>Boolean</code>
    * [.autoJoin](#module_@carboncollins/mobileconfig.WiFiPayload.autoJoin) : <code>Boolean</code>
    * [.isHotspot](#module_@carboncollins/mobileconfig.WiFiPayload.isHotspot) : <code>Boolean</code>
    * [.domainName](#module_@carboncollins/mobileconfig.WiFiPayload.domainName) : <code>String</code>
    * [.serviceProviderRoamingEnabled](#module_@carboncollins/mobileconfig.WiFiPayload.serviceProviderRoamingEnabled) : <code>Boolean</code>
    * [.roamingConsortiumOIs](#module_@carboncollins/mobileconfig.WiFiPayload.roamingConsortiumOIs) : <code>Array.&lt;String&gt;</code>
    * [.naiRealmNames](#module_@carboncollins/mobileconfig.WiFiPayload.naiRealmNames) : <code>Array.&lt;String&gt;</code>
    * [.mccAndMNCs](#module_@carboncollins/mobileconfig.WiFiPayload.mccAndMNCs) : <code>Array.&lt;String&gt;</code>
    * [.displayedOperatorName](#module_@carboncollins/mobileconfig.WiFiPayload.displayedOperatorName) : <code>String</code>
    * [.captiveBypass](#module_@carboncollins/mobileconfig.WiFiPayload.captiveBypass) : <code>Boolean</code>
    * [.qosMarkingPolicy](#module_@carboncollins/mobileconfig.WiFiPayload.qosMarkingPolicy) : [<code>qosMarkingPolocy</code>](#qosMarkingPolocy)
    * [.encryptionType](#module_@carboncollins/mobileconfig.WiFiPayload.encryptionType) : <code>String</code>
    * [.encryptionType](#module_@carboncollins/mobileconfig.WiFiPayload.encryptionType) : <code>String</code>
    * [.eapClientConfiguration](#module_@carboncollins/mobileconfig.WiFiPayload.eapClientConfiguration) : [<code>eapClientConfiguration</code>](#eapClientConfiguration)
    * [.payloadCertificateUUID](#module_@carboncollins/mobileconfig.WiFiPayload.payloadCertificateUUID) : <code>String</code>
    * [.proxyType](#module_@carboncollins/mobileconfig.WiFiPayload.proxyType) : <code>String</code>
    * [.proxyServer](#module_@carboncollins/mobileconfig.WiFiPayload.proxyServer) : <code>String</code>
    * [.proxyServerPort](#module_@carboncollins/mobileconfig.WiFiPayload.proxyServerPort) : <code>Number</code>
    * [.proxyUsername](#module_@carboncollins/mobileconfig.WiFiPayload.proxyUsername) : <code>String</code>
    * [.proxyPassword](#module_@carboncollins/mobileconfig.WiFiPayload.proxyPassword) : <code>String</code>
    * [.proxyPACURL](#module_@carboncollins/mobileconfig.WiFiPayload.proxyPACURL) : <code>String</code>
    * [.proxyPACFallbackAllowed](#module_@carboncollins/mobileconfig.WiFiPayload.proxyPACFallbackAllowed) : <code>Boolean</code>
    * [.plistSafeObject](#module_@carboncollins/mobileconfig.WiFiPayload.plistSafeObject) ⇒ <code>Object</code>

<a name="new_module_@carboncollins/mobileconfig.WiFiPayload_new"></a>

#### new WiFiPayload()
Structured model data for the WiFi payload

<a name="module_@carboncollins/mobileconfig.WiFiPayload.ssid"></a>

#### WiFiPayload.ssid : <code>String</code>
SSID of the Wi-Fi network to be used. In iOS 7.0 and later, this is optional
if a `domainName` value is provided

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.hiddenNetwork"></a>

#### WiFiPayload.hiddenNetwork : <code>Boolean</code>
Besides SSID, the device uses information such as broadcast type and encryption
type to differentiate a network. By default (false), it is assumed that all configured
networks are open or broadcast. To specify a hidden network, must be true.

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code>false</code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.autoJoin"></a>

#### WiFiPayload.autoJoin : <code>Boolean</code>
Optional. Default true. If true, the network is auto-joined. If false, the user
has to tap the network name to join it. Availability: Available in iOS 5.0 and later and in
all versions of macOS.

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code>true</code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.isHotspot"></a>

#### WiFiPayload.isHotspot : <code>Boolean</code>
Optional. Default false. If true, the network is treated as a hotspot.
Availability: Available in iOS 7.0 and later and in macOS 10.9 and later.

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code>false</code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.domainName"></a>

#### WiFiPayload.domainName : <code>String</code>
Optional. Domain Name used for Wi-Fi Hotspot 2.0 negotiation. This field can be
provided instead of `ssid`. Availability: Available in iOS 7.0 and later and in macOS 10.9
and later..

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.serviceProviderRoamingEnabled"></a>

#### WiFiPayload.serviceProviderRoamingEnabled : <code>Boolean</code>
Optional. If true, allows connection to roaming service providers. Defaults to
false. Availability: Available in iOS 7.0 and later and in macOS 10.9 and later.

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code>false</code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.roamingConsortiumOIs"></a>

#### WiFiPayload.roamingConsortiumOIs : <code>Array.&lt;String&gt;</code>
Optional. Array of Roaming Consortium Organization Identifiers used for Wi-Fi
Hotspot 2.0 negotiation. Availability: Available in iOS 7.0 and later and in macOS 10.9 and
later..

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code>[]</code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.naiRealmNames"></a>

#### WiFiPayload.naiRealmNames : <code>Array.&lt;String&gt;</code>
Optional. Array of strings. List of Network Access Identifier Realm names used
for Wi-Fi Hotspot 2.0 negotiation. Availability: Available in iOS 7.0 and later and in macOS
10.9 and later..

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code>[]</code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.mccAndMNCs"></a>

#### WiFiPayload.mccAndMNCs : <code>Array.&lt;String&gt;</code>
Optional. Array of strings. List of Mobile Country Code (MCC)/Mobile Network
Code (MNC) pairs used for Wi-Fi Hotspot 2.0 negotiation. Each string must contain exactly
six digits. Availability: Available in iOS 7.0 and later. This feature is not supported in
macOS.

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code>[]</code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.displayedOperatorName"></a>

#### WiFiPayload.displayedOperatorName : <code>String</code>
The operator name to display when connected to this network. Used only with
Wi-Fi Hotspot 2.0 access points. Availability: Available in iOS 7.0 and later and in macOS
10.9 and later.

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.captiveBypass"></a>

#### WiFiPayload.captiveBypass : <code>Boolean</code>
Optional. If set to true, Captive Network detection will be bypassed when the
device connects to the network. Defaults to false. Availability: Available in iOS 10.0 and
later.

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code>false</code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.qosMarkingPolicy"></a>

#### WiFiPayload.qosMarkingPolicy : [<code>qosMarkingPolocy</code>](#qosMarkingPolocy)
Optional. When this dictionary is not present for a Wi-Fi network, all apps are
whitelisted to use L2 and L3 marking when the Wi-Fi network supports Cisco QoS fast lane.
When present in the Wi-Fi payload, the QoSMarkingPolicy dictionary should contain the list
of apps that are allowed to benefit from L2 and L3 marking. For dictionary keys, see the
table below. Availability: Available in iOS 10.0 and later and in macOS 10.13 and later.

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code>{}</code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.encryptionType"></a>

#### WiFiPayload.encryptionType : <code>String</code>
The possible values are `WEP`, `WPA`, `WPA2`, `Any`, and `None`. WPA specifies
WPA only; WPA2 applies to both encryption types. Make sure that these values exactly match
the capabilities of the network access point. If you're unsure about the encryption type, or
would prefer that it apply to all encryption types, use the value Any. Availability: Key
available in iOS 4.0 and later and in all versions of macOS. The None value is available in
iOS 5.0 and later and the WPA2 value is available in iOS 8.0 and later.

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.encryptionType"></a>

#### WiFiPayload.encryptionType : <code>String</code>
Optional. If the `encryptionType` field is set to WEP, WPA, or ANY, then this
field is used. Note: The absence of a password does not prevent a network from being added
to the list of known networks. The user is eventually prompted to provide the password
when connecting to that network.

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.eapClientConfiguration"></a>

#### WiFiPayload.eapClientConfiguration : [<code>eapClientConfiguration</code>](#eapClientConfiguration)
Optional. If the `encryptionType` field is set to WEP, WPA, or ANY, then this
field is used

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code>{}</code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.payloadCertificateUUID"></a>

#### WiFiPayload.payloadCertificateUUID : <code>String</code>
Optional. If the `encryptionType` field is set to WEP, WPA, or ANY, then this
field is used. Should be the uuid of the certificate to use.

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.proxyType"></a>

#### WiFiPayload.proxyType : <code>String</code>
Optional. Valid values are `None`, `Manual`, and `Auto`. Availability:
Available in iOS 5.0 and later and on all versions of macOS.

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.proxyServer"></a>

#### WiFiPayload.proxyServer : <code>String</code>
The proxy server's network address.

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.proxyServerPort"></a>

#### WiFiPayload.proxyServerPort : <code>Number</code>
The proxy server's port.

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.proxyUsername"></a>

#### WiFiPayload.proxyUsername : <code>String</code>
Optional. The username used to authenticate to the proxy server.

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.proxyPassword"></a>

#### WiFiPayload.proxyPassword : <code>String</code>
Optional. The password used to authenticate to the proxy server.

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.proxyPACURL"></a>

#### WiFiPayload.proxyPACURL : <code>String</code>
Optional. The URL of the PAC file that defines the proxy configuration.

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code></code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.proxyPACFallbackAllowed"></a>

#### WiFiPayload.proxyPACFallbackAllowed : <code>Boolean</code>
Optional. If false, prevents the device from connecting directly to the
destination if the PAC file is unreachable. Default is false. Availability: Available
in iOS 7 and later.

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Default**: <code>false</code>  
<a name="module_@carboncollins/mobileconfig.WiFiPayload.plistSafeObject"></a>

#### WiFiPayload.plistSafeObject ⇒ <code>Object</code>
generates a plist safe js object with all the required information for generating
a mobileconfig profile

**Kind**: static property of [<code>WiFiPayload</code>](#module_@carboncollins/mobileconfig.WiFiPayload)  
**Returns**: <code>Object</code> - a plist object encoded into a js object  
**Read only**: true  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  
<a name="module_@carboncollins/mobileconfig.generatePropertyList"></a>

### @carboncollins/mobileconfig.generatePropertyList(profile) ⇒ <code>String</code>
generates a mobileconfig file from an input profile

**Kind**: static method of [<code>@carboncollins/mobileconfig</code>](#module_@carboncollins/mobileconfig)  
**Returns**: <code>String</code> - a plist xml string to be exported  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  

| Param | Type | Description |
| --- | --- | --- |
| profile | [<code>MobileConfigProfile</code>](#module_@carboncollins/mobileconfig.MobileConfigProfile) | an input profile to be generated into a propertylist file and then saved as a .mobileconfig file |

<a name="module_@carboncollins/mobileconfig.generateSignedPropertyList"></a>

### @carboncollins/mobileconfig.generateSignedPropertyList(profile, [options]) ⇒ <code>String</code>
generates a signed mobileconfig file from an input profile

**Kind**: static method of [<code>@carboncollins/mobileconfig</code>](#module_@carboncollins/mobileconfig)  
**Returns**: <code>String</code> - a signed plist xml string to be exported  
**Author**: CarbonCollins <toastyghost@carboncollins.uk>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| profile | [<code>MobileConfigProfile</code>](#module_@carboncollins/mobileconfig.MobileConfigProfile) |  | an input profile to be generated into a propertylist file and then saved as a .mobileconfig file |
| [options] | <code>Object</code> | <code>{}</code> | options used for signing |

<a name="airPrintServers"></a>

## airPrintServers : <code>Object</code>
Each item in the AirPrint array must contain the following keys and values

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| ipAddress | <code>String</code> |  | The IP Address of the AirPrint destination. |
| resourcePath | <code>String</code> |  | The Resource Path associated with the printer. This corresponds to the rp parameter of the _ipps.tcp Bonjour record. For example: `printers/Canon_MG5300_series` `printers/Xerox_Phaser_7600` `ipp/print` `Epson_IPP_Printer` |
| [port] | <code>Number</code> |  | Listening port of the AirPrint destination. If this key is not specified AirPrint will use the default port. Availability: Available only in iOS 11.0 and later. |
| [forceTLS] | <code>Boolean</code> | <code>false</code> | If true AirPrint connections are secured by Transport Layer Security (TLS). Default is false. Availability: Available only in iOS 11.0 and later. |

<a name="apnDescriptior"></a>

## apnDescriptior : <code>Object</code>
an object containing the various apn infomration

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| apn | <code>String</code> | This string specifies the Access Point Name. |
| username | <code>String</code> | This string specifies the user name for this APN. If it is missing, the device prompts for it during profile installation. |
| [password] | <code>Buffer</code> | Optional. This data represents the password for the user for this APN. For obfuscation purposes, the password is encoded. If it is missing from the payload, the device prompts for the password during profile installation. |
| [proxy] | <code>String</code> | Optional. The IP address or URL of the APN proxy. |
| [proxyPort] | <code>Number</code> | Optional. The port number of the APN proxy. |

<a name="AppDescriptor"></a>

## AppDescriptor : <code>Object</code>
an object containing the various app information and options

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| identifier | <code>String</code> | The bundle identifier of the application. |
| options | [<code>AppOptionsDescriptor</code>](#AppOptionsDescriptor) | Optional. Availability: Available only in iOS 7.0 and later. |
| userEnabledOptions | [<code>UserEnabledOptionsDescriptor</code>](#UserEnabledOptionsDescriptor) | Optional. Availability: Available only in iOS 7.0 and later. |

<a name="AppOptionsDescriptor"></a>

## AppOptionsDescriptor : <code>Object</code>
an object containing the various app options

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [disableTouch] | <code>Boolean</code> | <code>false</code> | Optional. If `true`, the touch screen is disabled. Default is `false`. Available in tvOS 10.2 and later. |
| [disableDeviceRotation] | <code>Boolean</code> | <code>false</code> | Optional. If `true`, device rotation sensing is disabled. Default is `false`. |
| [disableVolumeButtons] | <code>Boolean</code> | <code>false</code> | Optional. If `true`, the volume buttons are disabled. Default to `false`. |
| [disableRingerSwitch] | <code>Boolean</code> | <code>false</code> | Optional. If `true`, the ringer switch is disabled. Default is `false`. When disabled, the ringer behavior depends on what position the switch was in when it was first disabled. |
| [disableSleepWakeButton] | <code>Boolean</code> | <code>false</code> | Optional. If `true`, the sleep/wake button is disabled. Default is `false`. |
| [disableAutoLock] | <code>Boolean</code> | <code>false</code> | Optional. If `true`, the device will not automatically go to sleep after an idle period. Available in tvOS 10.2 and later. |
| [enableVoiceOver] | <code>Boolean</code> | <code>false</code> | Optional. If `true`, VoiceOver is turned on. Default is `false`. Available in tvOS 10.2 and later. |
| [enableZoom] | <code>Boolean</code> | <code>false</code> | Optional. If `true`, Zoom is turned on. Default is `false`. Available in tvOS 10.2 and later. |
| [enableInvertColors] | <code>Boolean</code> | <code>false</code> | Optional. If `true`, Invert Colors is turned on. Default is `false`. Available in tvOS 10.2 and later. |
| [enableAssistiveTouch] | <code>Boolean</code> | <code>false</code> | Optional. If `true`, AssistiveTouch is turned on. Default is `false`. |
| [enableSpeakSelection] | <code>Boolean</code> | <code>false</code> | Optional. If `true`, Speak Selection is turned on. Default is `false`. |
| [enableMonoAudio] | <code>Boolean</code> | <code>false</code> | Optional. If `true`, Mono Audio is turned on. Default is `false`. |

<a name="UserEnabledOptionsDescriptor"></a>

## UserEnabledOptionsDescriptor : <code>Object</code>
an object containing the various user enabled options

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [voiceOver] | <code>Boolean</code> | <code>false</code> | Optional. If `true`, allow VoiceOver adjustment. Default is `false`. |
| [zoom] | <code>Boolean</code> | <code>false</code> | Optional. If `true`, allow Zoom adjustment. Default is `false`. |
| [invertColors] | <code>Boolean</code> | <code>false</code> | Optional. If `true`, allow Invert Colors adjustment. Default is `false`. |
| [assistiveTouch] | <code>Boolean</code> | <code>false</code> | Optional. If `true`, allow AssistiveTouch adjustment. Default is `false`. |

<a name="qosMarkingPolocy"></a>

## qosMarkingPolocy : <code>Object</code>
should contain a list of apps that are aloud to use L3 and L3 marking

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| qosMarkingWhitelistedAppIdentifiers | <code>Array.&lt;String&gt;</code> |  | Optional. Array of app bundle identifiers that will be whitelisted for L2 and L3 marking for traffic sent to the Wi-Fi network. If the array is not present but the QoSMarkingPolicy key is present (even empty) no app gets whitelisted. |
| [qosMarkingAppleAudioVideoCalls] | <code>Boolean</code> | <code>false</code> | Optional. Specifies if audio and video traffic of built-in audio/video services such as FaceTime and Wi-Fi Calling will be whitelisted for L2 and L3 marking for traffic sent to the Wi-Fi network. Defaults to true. |
| [qosMarkingEnabled] | <code>Boolean</code> | <code>true</code> | Optional. May be used to disable L3 marking and only use L2 marking for traffic sent to the Wi-Fi network. When this key is false the system behaves as if Wi-Fi was not associated with a Cisco QoS fast lane network. Defaults to true. |

<a name="eapClientConfiguration"></a>

## eapClientConfiguration : <code>Object</code>
In addition to the standard encryption types, it is possible to specify an
enterprise profile for a given network via the `eapClientConfiguration` key. If present, its value
is a dictionary with the following keys.

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [username] | <code>String</code> | <code></code> | Optional. Unless you know the exact user name, this property won't appear in an imported configuration. Users can enter this information when they authenticate. |
| [acceptEAPTypes] | <code>Array.&lt;Number&gt;</code> | <code>[]</code> | The following EAP types are accepted: `13 = TLS`, `17 = LEAP`, `18 = EAP-SIM`, `21 = TTLS`, `23 = EAP-AKA`, `25 = PEAP`, and `43 = EAP-FAST` |
| [userPassword] | <code>String</code> | <code></code> | Optional. User password. If not provided, the user may be prompted during login. |
| [oneTimePassword] | <code>Boolean</code> | <code>false</code> | Optional. If true, the user will be prompted for a password each time they connect to the network. Defaults to false. |
| [certificateAnchorUUID] | <code>Array.&lt;String&gt;</code> | <code>[]</code> | Optional. Identifies the certificates to be trusted for this authentication. Each entry must contain the `uuid` of a certificate payload. Use this key to prevent the device from asking the user if the listed certificates are trusted. Dynamic trust (the certificate dialogue) is disabled if this property is specified, unless `tlsAllowTrustExceptions` is also specified with the value true. |
| [tlsTrustedServerNames] | <code>Array.&lt;String&gt;</code> | <code>[]</code> | Optional. This is the list of server certificate common names that will be accepted. You can use wildcards to specify the name, such as wpa.*.example.com. If a server presents a certificate that isn't in this list, it won't be trusted. Used alone or in combination with `certificateAnchorUUID`, the property allows someone to carefully craft which certificates to trust for the given network, and avoid dynamically trusted certificates. Dynamic trust (the certificate dialogue) is disabled if this property is specified, unless `tlsAllowTrustExceptions` is also specified with the value true. |
| [tlsAllowTrustExceptions] | <code>Boolean</code> | <code>true|false</code> | Optional. Allows/disallows a dynamic trust decision by the user. The dynamic trust is the certificate dialogue that appears when a certificate isn't trusted. If this is false, the authentication fails if the certificate isn't already trusted. See `certificateAnchorUUID` and `tlsTrustedNames` above. The default value of this property is true unless either `certificateAnchorUUID` or `tlsTrustedServerNames` is supplied, in which case the default value is false. Availability: Deprecated and ignored in iOS 8.0 and later. |
| [tlsCertificateIsRequired] | <code>Boolean</code> | <code>true|false</code> | Optional. If true, allows for two-factor authentication for EAP-TTLS, PEAP, or EAP-FAST. If false, allows for zero-factor authentication for EAP-TLS. The default is true for EAP-TLS, and false for other EAP types. Availability: Available in iOS 7.0 and later. |
| [tlsMinimumVersion] | <code>String</code> | <code></code> | Optional. The minimum TLS version to be used with EAP authentication. Value may be `1.0`, `1.1`, or `1.2`. If no value is specified, the default minimum is 1.0. Availability: Available in iOS 11.0 and macOS 10.13 and later. |
| [outerIdentity] | <code>String</code> | <code></code> | Optional. This key is only relevant to `TTLS`, `PEAP`, and `EAP-FAST`. This allows the user to hide his or her identity. The user's actual name appears only inside the encrypted tunnel. For example, it could be set to "anonymous" or "anon", or "anon@mycompany.net". It can increase security because an attacker can't see the authenticating user's name in the clear. |
| [ttlsInnerAuthentication] | <code>String</code> | <code>MSCHAPv2</code> | Optional. Specifies the inner authentication used by the TTLS module. Possible values are `PAP`, `CHAP`, `MSCHAP`, `MSCHAPv2`, and `EA`. Defaults to `MSCHAPv2`. |
| [eapFASTUsePAC] | <code>Boolean</code> | <code>false</code> | Optional.If true, the device will use an existing PAC if it's present. Otherwise, the server must present its identity using a certificate. Defaults to false. |
| [eapFASTProvisionPAC] | <code>Boolean</code> | <code>false</code> | Optional. Used only if `eapFASTUsePAC` is true. If set to true, allows PAC provisioning. Defaults to false. This value must be set to true for EAP-FAST PAC usage to succeed, because there is no other way to provision a PAC. |
| [eapFASTProvisionPACAnonymously] | <code>Boolean</code> | <code>false</code> | Optional. If true, provisions the device anonymously. Note that there are known man-in-the-middle attacks for anonymous provisioning. Defaults to false. |
| [eapSIMNumberOfRANDs] | <code>Number</code> | <code>3</code> | Optional. Number of expected RANDs for EAPSIM. Valid values are `2` and `3`. Defaults to 3. |

