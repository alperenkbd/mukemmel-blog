module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });

    return config;
  }
};

export default {
    plugins: [
        { src: '~plugins/ga.js', mode: 'client' }
    ]
}
