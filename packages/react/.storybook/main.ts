/* eslint-disable @typescript-eslint/no-explicit-any */
import { rootMain } from '../../../.storybook/main';

import { mergeConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

const config: any = {
    ...rootMain,
    core: { ...rootMain.core, builder: '@storybook/builder-vite' },
    stories: [
        ...rootMain.stories,
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        'storybook-dark-mode',
        '@storybook/addon-essentials',
        ...(rootMain.addons || []),
    ],
    async viteFinal(config: any) {
        return mergeConfig(config, {
            plugins: [
                viteTsConfigPaths({
                    root: '../../',
                }),
            ],
        });
    },
};

module.exports = config;
