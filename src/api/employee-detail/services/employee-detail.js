'use strict';

/**
 * employee-detail service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employee-detail.employee-detail');
