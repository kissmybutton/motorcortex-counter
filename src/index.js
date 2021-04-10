import Counter from "./Incidents/Counter";
import { name, version } from "../package.json";

export default {
  npm_name: name, // don't touch this
  version: version, // don't touch this
  incidents: [
    {
      exportable: Counter,
      name: "Counter",
      attributesValidationRules: {
        animatedAttrs: {
          type: "object",
          props: {
            count: {
              type: "number",
            },
          },
        },
        decimals: {
          type: "number",
          optional: true,
          min: 0,
          max: 20,
          integer: true,
        },
      },
    },
  ],
};
