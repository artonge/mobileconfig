'use strict';

import MobileConfigPayload from './payload.mjs';

import { toSafeString, toSafeBoolean, deleteEmptyKeys } from '../safe.mjs';

/**
 * @description generates a plist safe dictionary
 * @author Steven Collins <steven@carboncollins.uk>
 * @param {Object} value an object of app lock options
 * @returns {Object[]} an array of plist safe app lock options object
 * @private
 */
function toSafeOptions(value = {}) {
  if (value === undefined || value === null
  || typeof value !== typeof {} || Object.keys(value) === 0) {
    return null;
  }
  const appObj = {
    DisableTouch: toSafeBoolean(value.disableTouch),
    DisableDeviceRotation: toSafeBoolean(value.disableDeviceRotation),
    DisableVolumeButtons: toSafeBoolean(value.disableVolumeButtons),
    DisableRingerSwitch: toSafeBoolean(value.disableRingerSwitch),
    DisableSleepWakeButton: toSafeBoolean(value.disableSleepWakeButton),
    DisableAutoLock: toSafeBoolean(value.disableAutoLock),
    EnableVoiceOver: toSafeBoolean(value.enableVoiceOver),
    EnableZoom: toSafeBoolean(value.enableZoom),
    EnableInvertColors: toSafeBoolean(value.enableInvertColors),
    EnableAssistiveTouch: toSafeBoolean(value.enableAssistiveTouch),
    EnableSpeakSelection: toSafeBoolean(value.enableSpeakSelection),
    EnableMonoAudio: toSafeBoolean(value.enableMonoAudio)
  };

  return deleteEmptyKeys(appObj);
}

/**
 * @description generates a plist safe dictionary
 * @author Steven Collins <steven@carboncollins.uk>
 * @param {Object} value an object of app lock user enabed options
 * @returns {Object[]} an array of plist safe app lock user enabled options object
 * @private
 */
function toSafeUserEnabledOptions(value = {}) {
  if (value === undefined || value === null
  || typeof value !== typeof {} || Object.keys(value) === 0) {
    return null;
  }
  const appObj = {
    VoiceOver: toSafeBoolean(value.voiceOver),
    Zoom: toSafeBoolean(value.zoom),
    InvertColors: toSafeBoolean(value.invertColors),
    AssistiveTouch: toSafeBoolean(value.assistiveTouch)
  };

  return deleteEmptyKeys(appObj);
}

/**
 * @description generates a plist safe dictionary
 * @author Steven Collins <steven@carboncollins.uk>
 * @param {Object} value an object of app lock settings
 * @returns {Object[]} an array of plist safe app lock object
 * @private
 */
function toSafeAppList(value = {}) {
  if (value === undefined || value === null
  || typeof value !== typeof {} || Object.keys(value) === 0) {
    return null;
  }
  const appObj = {
    Identifier: toSafeString(value.identifier || null),
    Options: toSafeOptions(value.options),
    UserEnabledOptions: toSafeUserEnabledOptions(this.userEnabledOptions)
  };

  return deleteEmptyKeys(appObj);
}

/**
 * @class AppLockPayload
 * @description Structured model data for the AirPlay payload
 * @author CarbonCollins <toastyghost@carboncollins.uk>
 * @memberof module:@carboncollins/mobileconfig
 * @extends module:@carboncollins/mobileconfig.MobileConfigPayload
 */
export default class AppLockPayload extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of AppLockPayload
   * @param {Object|module:@carboncollins/mobileconfig.AppLockPayload} [options={}] An object of
   * options
   */
  constructor(options = {}) {
    super(Object.assign({}, options, { type: 'com.apple.app.lock' }));

    /**
     * @member {AppDescriptor} [app={}]
     * @memberof module:@carboncollins/mobileconfig.AppLockPayload
     * @description An object containing information about the app.
     */
    this.app = options.app || {};
  }

  /**
   * @description generates a plist safe js object with all the required information for generating
   * a mobileconfig profile
   * @readonly
   * @memberof module:@carboncollins/mobileconfig.AppLockPayload
   * @author CarbonCollins <toastyghost@carboncollins.uk>
   * @returns {Object} a plist object encoded into a js object
   */
  get plistSafeObject() {
    const plistObj = {
      App: toSafeAppList(Object.assign({}, this.app))
    };

    return Object.assign({}, super.plistSafeObject, plistObj);
  }
}

/**
 * @typedef {Object} AppDescriptor
 * @description an object containing the various app information and options
 *
 * @property {String} identifier The bundle identifier of the application.
 *
 * @property {AppOptionsDescriptor} options Optional. Availability: Available only in iOS 7.0 and
 * later.
 *
 * @property {UserEnabledOptionsDescriptor} userEnabledOptions Optional. Availability: Available
 * only in iOS 7.0 and later.
 */

/**
 * @typedef {Object} AppOptionsDescriptor
 * @description an object containing the various app options
 *
 * @property {Boolean} [disableTouch=false] Optional. If `true`, the touch screen is disabled.
 * Default is `false`. Available in tvOS 10.2 and later.
 *
 * @property {Boolean} [disableDeviceRotation=false] Optional. If `true`, device rotation
 * sensing is disabled. Default is `false`.
 *
 * @property {Boolean} [disableVolumeButtons=false] Optional. If `true`, the volume buttons
 * are disabled. Default to `false`.
 *
 * @property {Boolean} [disableRingerSwitch=false] Optional. If `true`, the ringer switch is
 * disabled. Default is `false`. When disabled, the ringer behavior depends on what position
 * the switch was in when it was first disabled.
 *
 * @property {Boolean} [disableSleepWakeButton=false] Optional. If `true`, the sleep/wake button is
 * disabled. Default is `false`.
 *
 * @property {Boolean} [disableAutoLock=false] Optional. If `true`, the device will not
 * automatically go to sleep after an idle period. Available in tvOS 10.2 and later.
 *
 * @property {Boolean} [enableVoiceOver=false] Optional. If `true`, VoiceOver is turned on. Default
 * is `false`. Available in tvOS 10.2 and later.
 *
 * @property {Boolean} [enableZoom=false] Optional. If `true`, Zoom is turned on. Default is
 * `false`. Available in tvOS 10.2 and later.
 *
 * @property {Boolean} [enableInvertColors=false] Optional. If `true`, Invert Colors is turned on.
 * Default is `false`. Available in tvOS 10.2 and later.
 *
 * @property {Boolean} [enableAssistiveTouch=false] Optional. If `true`, AssistiveTouch is turned
 * on. Default is `false`.
 *
 * @property {Boolean} [enableSpeakSelection=false] Optional. If `true`, Speak Selection is turned
 * on. Default is `false`.
 *
 * @property {Boolean} [enableMonoAudio=false] Optional. If `true`, Mono Audio is turned on. Default
 * is `false`.
 */


/**
 * @typedef {Object} UserEnabledOptionsDescriptor
 * @description an object containing the various user enabled options
 *
 * @property {Boolean} [voiceOver=false] Optional. If `true`, allow VoiceOver adjustment. Default
 * is `false`.
 *
 * @property {Boolean} [zoom=false] Optional. If `true`, allow Zoom adjustment. Default is `false`.
 *
 * @property {Boolean} [invertColors=false] Optional. If `true`, allow Invert Colors adjustment.
 * Default is `false`.
 *
 * @property {Boolean} [assistiveTouch=false] Optional. If `true`, allow AssistiveTouch adjustment.
 * Default is `false`.
 */
