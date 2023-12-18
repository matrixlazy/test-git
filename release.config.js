module.exports = {
  branches: ['master', 'main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/npm',
      {
        npmPublish: false
      }
    ],
    [
      '@semantic-release/github',
      {
        assets: [
          { 'path': 'bundle.txt' },
        ]
      }
    ],
    '@semantic-release/git',
    [
      '@semantic-release/exec',
      {
        publishCmd: `echo ${nextRelease.version}`,
        // successCmd: `echo "cdn_version=\$\{nextRelease.version\}" >> $GITHUB_OUTPUT`,
      }
    ]
  ]
};
