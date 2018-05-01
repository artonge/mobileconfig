## Classes

<dl>
<dt><a href="#MobileConfig">MobileConfig</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#isValueEmpty">isValueEmpty(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determins if an input <code>value</code> is empty/null/undefined/0-length/no-keys</p>
</dd>
<dt><a href="#deleteEmptyKeys">deleteEmptyKeys(value)</a> ⇒ <code>Object</code></dt>
<dd><p>removes any keys in an object that are consiered empty</p>
</dd>
<dt><a href="#toSafeString">toSafeString(value)</a> ⇒ <code>String</code></dt>
<dd><p>formats the input value into a string or null value if it is unable too</p>
</dd>
<dt><a href="#toSafeInteger">toSafeInteger(value)</a> ⇒ <code>Number</code></dt>
<dd><p>formats the input value into a integer or null value if it is unable too</p>
</dd>
</dl>

<a name="MobileConfig"></a>

## MobileConfig
**Kind**: global class  
**Author**: Steven Collins <steven.collins@capgemini.com>  

* [MobileConfig](#MobileConfig)
    * [new MobileConfig()](#new_MobileConfig_new)
    * [.generatePropertyList(profile)](#MobileConfig.generatePropertyList) ⇒ <code>String</code>

<a name="new_MobileConfig_new"></a>

### new MobileConfig()
Main entrypoint for creating mobile configuration profiles

<a name="MobileConfig.generatePropertyList"></a>

### MobileConfig.generatePropertyList(profile) ⇒ <code>String</code>
generates the plist xml data frm an input payload

**Kind**: static method of [<code>MobileConfig</code>](#MobileConfig)  
**Returns**: <code>String</code> - a plist xml configuration string  
**Author**: Steven Collins <steven.collins@capgemini.com>  

| Param | Type | Description |
| --- | --- | --- |
| profile | <code>MobileConfigProfile</code> | a mobile profile object to generate a plist for |

<a name="isValueEmpty"></a>

## isValueEmpty(value) ⇒ <code>boolean</code>
Determins if an input `value` is empty/null/undefined/0-length/no-keys

**Kind**: global function  
**Export**:   
**Author**: Steven Collins <steven@carboncollins.uk>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | an input value to be checked |

<a name="deleteEmptyKeys"></a>

## deleteEmptyKeys(value) ⇒ <code>Object</code>
removes any keys in an object that are consiered empty

**Kind**: global function  
**Returns**: <code>Object</code> - returns the existing object reference but with the empty keys deleted  
**Export**:   
**Author**: Steven Collins <steven@carboncollins.uk>  

| Param | Type |
| --- | --- |
| value | <code>Object</code> | 

<a name="toSafeString"></a>

## toSafeString(value) ⇒ <code>String</code>
formats the input value into a string or null value if it is unable too

**Kind**: global function  
**Export**:   
**Author**: Steven Collins <steven@carboncollins.uk>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | the input value to convert to a safe string |

<a name="toSafeInteger"></a>

## toSafeInteger(value) ⇒ <code>Number</code>
formats the input value into a integer or null value if it is unable too

**Kind**: global function  
**Export**:   
**Author**: Steven Collins <steven@carboncollins.uk>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | the input value to convert to a safe integer |

