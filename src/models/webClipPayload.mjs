'use strict';

import MobileConfigPayload from './payload.mjs';

import { toSafeString, toSafeBoolean, toSafeData, hasRequiredValues, deleteEmptyKeys } from '../safe.mjs';

const requiredValues = ['URL', 'Label'];

/**
 * @class WebClipPayload
 * @description Structured model data for the WebClip payload
 * @author CarbonCollins <toastyghost@carboncollins.uk>
 * @memberof module:@carboncollins/mobileconfig
 * @extends module:@carboncollins/mobileconfig.MobileConfigPayload
 */
export default class WebClipPayload extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of WebClipPayload
   * @param {Object|module:@carboncollins/mobileconfig.WebClipPayload} [options={}] An object of
   * options
   */
  constructor(options = {}) {
    super(Object.assign({}, options, { type: 'com.apple.webClip.managed' }));

    /**
     * @member {String} [url=null]
     * @memberof module:@carboncollins/mobileconfig.WebClipPayload
     * @description The URL that the Web Clip should open when clicked. The URL must begin with
     * HTTP or HTTPS or it won't work.
     */
    this.url = options.url || null;

    /**
     * @member {String} [label=null]
     * @memberof module:@carboncollins/mobileconfig.WebClipPayload
     * @description The name of the Web Clip as displayed on the Home screen.
     */
    this.label = options.label || null;

    /**
     * @member {Buffer} [icon=null]
     * @memberof module:@carboncollins/mobileconfig.WebClipPayload
     * @description A PNG icon to be shown on the Home screen. Should be 59 x 60 pixels in size.
     * If not specified, a white square will be shown.
     */
    this.icon = options.icon || null;

    /**
     * @member {Boolean} [isRemovable=true]
     * @memberof module:@carboncollins/mobileconfig.WebClipPayload
     * @description If false, the web clip is unremovable. Defaults to true. Not available in
     * macOS.
     */
    this.isRemovable = options.isRemovable || true;
  }

  /**
   * @description generates a plist safe js object with all the required information for generating
   * a mobileconfig profile
   * @readonly
   * @memberof module:@carboncollins/mobileconfig.WebClipPayload
   * @author CarbonCollins <toastyghost@carboncollins.uk>
   * @returns {Object} a plist object encoded into a js object
   */
  get plistSafeObject() {
    const plistObj = {
      URL: toSafeString(this.url),
      Label: toSafeString(this.label),
      Icon: toSafeData(this.icon),
      IsRemovable: toSafeBoolean(this.isRemovable)
    };

    deleteEmptyKeys(plistObj);

    return (hasRequiredValues(requiredValues, plistObj, 'com.apple.webClip.managed payload'))
      ? Object.assign({}, super.plistSafeObject, plistObj)
      : null;
  }
}
