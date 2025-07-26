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

  // Add @ alias for src directory
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, 'src')
  };

  return config;
}; 