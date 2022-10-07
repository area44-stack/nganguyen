module.exports = {
  siteMetadata: {
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-emilia-core/gatsby-config.js
    siteTitle: `Nga Nguyen's Photos`,
    siteTitleAlt: `Nga Nguyen's Photos | 📷 by Nga Nguyen`,
    siteHeadline: `Nga Nguyen's Photos | 📷 by Nga Nguyen`,
    siteUrl: `https://itslongnhatnguyen.github.io/nganguyen`,
    siteDescription: "📷 by Nga Nguyen",
    siteImage: `/banner.jpg`,
    author: `@retro90s`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `Nga Nguyen's Photos`,
        socialMedia: {[]},
        showThemeAuthor: false,
        location: `Vietnam`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `2022 | 📷 by Nga Nguyen`,
        short_name: `2022`,
        description: `Photos by Nga Nguyen`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#3182ce`
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ].filter(Boolean),
}
