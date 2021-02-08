import Counter from './Incidents/Counter';

const pkg = require('../package.json');

export default {
  npm_name: pkg.name, // don't touch this
  version: pkg.version, // don't touch this
  incidents: [
    {
      exportable: Counter,
      name: "Counter",
      attributesValidationRules: {
        animatedAttrs: {
          type: "object",
          props: {
            count: {
              type: 'number',
            }
          }
        },
        decimals: {
          type: 'number',
          optional: true,
          min: 0,
          max: 20,
          integer: true
        }
      },
    }
  ]
};