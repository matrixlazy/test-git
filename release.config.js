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
        successCmd: `echo "cdn_version=\${nextRelease.version}" >> $GITHUB_OUTPUT`,
      }
    ],
    [
      "semantic-release-slack-bot",
      {
        "notifyOnSuccess": false,
        "notifyOnFail": false,
        "slackWebhook": "https://hooks.slack.com/services/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",
        "branchesConfig": [
          {
            "pattern": "main",
            "notifyOnSuccess": true,
            "notifyOnFail": true
          }
        ]
      }
    ],
  ]
};
