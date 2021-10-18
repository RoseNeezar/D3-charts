const withTM = require("next-transpile-modules")(["mimic-fn", "mem"]);

module.exports = withTM({
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/:any*",
        destination: "/api/:any*",
      },
      // Rewrite everything else to use `pages/app`
      {
        source: "/app/:path*",
        destination: "/app",
      },
    ];
  },
});
