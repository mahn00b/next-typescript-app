module.exports = {
  "stories": ["../**/*.stories.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", {
    name: '@storybook/addon-styling',
    options: {
      sass: {
        // Require your Sass preprocessor here
        implementation: require('sass')
      }
    }
  }],
  docs: {
    autodocs: true
  },
  core: {
    builder: "webpack5"
  }
};
