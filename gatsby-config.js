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
    'gatsby-transformer-remark',
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
  ],
};
