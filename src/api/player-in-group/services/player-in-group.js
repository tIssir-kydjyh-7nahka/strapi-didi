'use strict';

/**
 * player-in-group service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::player-in-group.player-in-group');
