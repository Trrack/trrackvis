/* eslint-disable no-template-curly-in-string */
const name = require('./package.json').name;
const libraryFolderName = require('./project.json').name;
const srcRoot = `packages/${libraryFolderName}`;

module.exports = {
    extends: 'release.config.base.js',
    branches: [
        'main',
        {
            name: '**/*',
        },
    ],
    pkgRoot: `dist/${srcRoot}`,
    tagFormat:
        `${name}-${process.env.BRANCH.replace('/', '_')}` + '@${version}',
    commitPaths: [`${srcRoot}/*`],
    plugins: ['@semantic-release/commit-analyzer', '@semantic-release/npm'],
};
