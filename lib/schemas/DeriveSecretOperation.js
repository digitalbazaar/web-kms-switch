/*!
 * Copyright (c) 2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const context = require('./operationContext.js');

module.exports = {
  required: ['@context', 'invocationTarget', 'type', 'publicKey'],
  additionalProperties: false,
  properties: {
    '@context': context,
    invocationTarget: {
      type: 'string'
    },
    type: {
      type: 'string',
      enum: ['DeriveSecretOperation']
    },
    publicKey: {
      type: 'object'
    }
  }
};