const path = require('path');
const withImages = require('next-images')

module.exports = withImages({
  exclude: path.resolve(__dirname, 'src/assets/svgs/github-icon.svg'),
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      exclude: path.resolve(__dirname, 'src/assets/images/'),
      use: ["@svgr/webpack"]
    });
    
    return config
  }
});
