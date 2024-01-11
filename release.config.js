module.exports = {
  branches: ['master', 'main', 'feature/1'],
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
        successCmd: `echo "cdn_version=\${nextRelease.version}" >> $GITHUB_OUTPUT`,
      }
    ],
    [
      "semantic-release-slack-bot",
      {
        "notifyOnSuccess": false,
        "notifyOnFail": false,
        "branchesConfig": [
          {
            "pattern": ['master', 'main'],
            "notifyOnSuccess": true,
            "notifyOnFail": true
          }
        ]
      }
    ],
  ]
};
