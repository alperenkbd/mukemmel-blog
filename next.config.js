module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
      });

      {
          plugins: [
              { src: '~plugins/ga.js', mode: 'client' }
          ]
      }

    return config;
  }
};

