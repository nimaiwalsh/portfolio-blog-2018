module.exports = {
  siteMetadata: {
    title: 'Nimai Walsh - Web Developer',
    desc: 'Portfolio and Blog for Nimai Walsh - Web Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'files',
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        //Place the end tag in markdown file to create excerpt
        excerpt_separator: `<!-- end -->`,
        plugins: [
          //Used for code blocks
          'gatsby-remark-prismjs',
        ],
      },
    },
  ],
};
