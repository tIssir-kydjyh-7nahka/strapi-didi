'use strict';

/**
 * system-message service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::system-message.system-message');
