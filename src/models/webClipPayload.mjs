'use strict';

import MobileConfigPayload from './payload.mjs';

import { toSafeString, toSafeBoolean, toSafeData, hasRequiredValues, deleteEmptyKeys } from '../safe.mjs';

const requiredValues = ['URL', 'Label'];

/**
 * @class
 * @description A class for containing all of the common structure data used in an WebClip payload
 * @extends MobileConfigPayload
 * @author Steven Collins <CarbonCollins>
 * @date 29th April 2018
 */
export default class WebClipPayload extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of WebClipPayload
   * @param {Object|WebClipPayload} [options={}] An object of options
   * @author Steven Collins <CarbonCollins>
   * @date 29th April 2018
   */
  constructor(options = {}) {
    super(Object.assign({}, options, { type: 'com.apple.webClip.managed' }));
    
    this.url = options.url || null;
    this.label = options.label || null;
    this.icon = options.icon || null;
    this.isRemovable = options.isRemovable || null;
  }
  
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
