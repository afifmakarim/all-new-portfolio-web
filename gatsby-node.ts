// @ts-check

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bootstrap/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
