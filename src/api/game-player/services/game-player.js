'use strict';

/**
 * game-player service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::game-player.game-player');
