module.exports = {
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
            modules: 'commonjs',
          },
        ],
        '@babel/preset-react',
        ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
      ],
    },
  },
};
