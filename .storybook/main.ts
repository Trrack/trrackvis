export const framework = {
  name: '@storybook/react-vite',
  options: {},
};
export const docs = {
  autodocs: true,
};

export const rootMain: any = {
  stories: [],
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs
  //   // Return the altered config
  //   return config;
  // },
  framework,
  docs,
};
