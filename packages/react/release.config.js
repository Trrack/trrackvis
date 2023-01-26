const name = require('./package.json').name;
const libraryFolderName = 'react';
const srcRoot = `packages/${libraryFolderName}`;

module.exports = {
    extends: 'release.config.base.js',
    publishConfig: {
        access: 'public',
    },
    branches: [
        '+([0-9])?(.{+([0-9]),x}).x',
        'main',
        { name: 'beta', prerelease: true },
        { name: 'alpha', prerelease: true },
    ],
    pkgRoot: `dist/${srcRoot}`,
    tagFromat: name + '@${version}',
    commitPaths: [`${srcRoot}/*`],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/changelog',
            {
                changelogFile: `${srcRoot}/CHANGELOG.md`,
            },
        ],
        '@semantic-release/npm',
        [
            '@semantic-release/git',
            {
                assets: [`${srcRoot}/package.json`, `${srcRoot}/CHANGELOG.md`],
                message:
                    `release(version): Release ${name} ` +
                    '${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
            },
        ],
    ],
};
