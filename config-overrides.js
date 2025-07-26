const path = require('path');

module.exports = function override(config, env) {
  // Add raw-loader for markdown files
  config.module.rules.push({
    test: /\.md$/,
    loader: 'raw-loader',
    options: {
      esModule: false,
    }
  });

  return config;
}; 