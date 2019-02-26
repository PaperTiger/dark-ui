module.exports = function (api) {
  const presets = ["@babel/preset-env"];
  const plugins = [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-regenerator",
    "@babel/plugin-transform-shorthand-properties",
    "@babel/plugin-transform-template-literals",
    "@babel/plugin-transform-classes",
    "@babel/plugin-transform-spread",
    "@babel/plugin-proposal-object-rest-spread"
  ];

  api.cache(true);

  return {
    presets,
    plugins
  };
}