'use strict';

import MobileConfigPayload from './payload.mjs';

/**
 * @class
 * @description A class for adding a custom payload or one that has not been added to the model
 * lists yet
 * @extends MobileConfigPayload
 * @author Steven Collins <CarbonCollins>
 * @date 13th May 2018
 */
export default class RawPayload extends MobileConfigPayload {
  /**
   * @constructor
   * @description creates an instance of RawPayload
   * @param {Object|RawPayload} [options={}] An object of options
   * @author Steven Collins <CarbonCollins>
   * @date 13th May 2018
   */
  constructor(options = {}) {
    super(options);

    this.raw = options.raw;
  }

  /**
   * @description generates a plist safe js object to be converted into plist xml
   * @readonly
   * @memberof AirPlayPayload
   */
  get plistSafeObject() {
    return Object.assign({}, super.plistSafeObject, this.raw);
  }
}
