'use strict';

/**
 * system-message router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::system-message.system-message');
