module.exports = {
  siteMetadata: {
    githubUrl: 'https://github.com/collier'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        // Exclude global styles from the plugin using a RegExp:
        exclude: `\/global\/`
        // For all the options check babel-plugin-react-css-modules README link provided above
      }
    }
  ]
};
