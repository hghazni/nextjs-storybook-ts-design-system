const path = require("path");
module.exports = {
  webpackFinal: async (baseConfig, options) => {
    const { module = {} } = baseConfig;
    const newConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])],
      },
    };
    // TypeScript with Next.js
    newConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
      include: [path.resolve(__dirname, "../src/components")],
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["next/babel", require.resolve("babel-preset-react-app")],
            plugins: ["react-docgen"],
          },
        },
      ],
    });
    newConfig.resolve.extensions.push(".ts", ".tsx");
    // SCSS preset for Storybook
    newConfig.module.rules.push(  {
      test: /\.(sass|css|scss)$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {url: false}
        },
        {
          loader: "postcss-loader",
          options: {
            plugins: () => [
              require("autoprefixer")()
            ],
          },
        },
        'sass-loader',
      ]
    },);
    
    return newConfig;
  },
};