<a name="module_@carboncollins/mobileconfig"></a>

## @carboncollins/mobileconfig
Create and sign iOS mobileconfig configuration files


* [@carboncollins/mobileconfig](#module_@carboncollins/mobileconfig)
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
    * [.MobileConfigPayload](#module_@carboncollins/mobileconfig.MobileConfigPayload)
        * [new MobileConfigPayload()](#new_module_@carboncollins/mobileconfig.MobileConfigPayload_new)
        * [.type](#module_@carboncollins/mobileconfig.MobileConfigPayload.type) : <code>String</code>
        * [.version](#module_@carboncollins/mobileconfig.MobileConfigPayload.version) : <code>Number</code>
        * [.identifier](#module_@carboncollins/mobileconfig.MobileConfigPayload.identifier) : <code>String</code>
        * [.uuid](#module_@carboncollins/mobileconfig.MobileConfigPayload.uuid) : <code>String</code>
        * [.displayName](#module_@carboncollins/mobileconfig.MobileConfigPayload.displayName) : <code>String</code>
        * [.description](#module_@carboncollins/mobileconfig.MobileConfigPayload.description) : <code>String</code>
        * [.organisation](#module_@carboncollins/mobileconfig.MobileConfigPayload.organisation) : <code>String</code>
        * [.plistSafeObject](#module_@carboncollins/mobileconfig.MobileConfigPayload.plistSafeObject)
    * [.generatePropertyList(profile)](#module_@carboncollins/mobileconfig.generatePropertyList) ⇒ <code>String</code>
    * [.generateSignedPropertyList(profile, [options])](#module_@carboncollins/mobileconfig.generateSignedPropertyList) ⇒ <code>String</code>

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
    * [.plistSafeObject](#module_@carboncollins/mobileconfig.MobileConfigPayload.plistSafeObject)

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

#### MobileConfigPayload.plistSafeObject
generates a plist safe js object to be converted to plist xml

**Kind**: static property of [<code>MobileConfigPayload</code>](#module_@carboncollins/mobileconfig.MobileConfigPayload)  
**Read only**: true  
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

