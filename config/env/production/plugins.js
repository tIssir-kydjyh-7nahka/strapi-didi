// file: config/plugins.js
"use strict";

module.exports = () => ({
  // ...
  "entity-relationship-chart": {
    enabled: true,
    config: {
      // By default all contentTypes and components are included.
      // To exlclude strapi's internal models, use:
      exclude: [
        "strapi::core-store",
        "webhook",
        "admin::permission",
        "admin::user",
        "admin::role",
        "admin::api-token",
        "plugin::upload.file",
        "plugin::i18n.locale",
        "plugin::users-permissions.permission",
        "plugin::users-permissions.role",
      ],
    },
  },

  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 50,
      amountLimit: 300,
      defaultLimit: 300,
      maxLimit: 100,
      apolloServer: {
        tracing: false,
        introspection: true,
      },
    },
  },
  // ...
});
