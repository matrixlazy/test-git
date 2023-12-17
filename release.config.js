module.exports = {
  branches: ['master', 'main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/github',
      {
        assets: [
          {'path': 'bundle.txt', 'label': 'JS distribution'},
        ]
      }
    ],
  ]
};
