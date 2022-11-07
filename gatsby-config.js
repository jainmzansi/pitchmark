// Initialize dotenv
require('dotenv').config()


module.exports = {
  siteMetadata: {
    title: `Pitchmark`,
    siteUrl: `https://pitchmark.co`,
    description: `Win ClimateTech pitches`
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_KEY, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: process.env.BASE_CLIMATECOLLAB,
            tableName: `InvestorQuestions`,
            tableView: `Live`,
            queryName: `InvestorQuestions`,
            tableLinks: ['PitchPages'],
          },
          {
            baseId: process.env.BASE_CLIMATECOLLAB,
            tableName: `PitchPages`,
            tableView: `Live`,
            queryName: `PitchPages`,
            tableLinks: ['InvestorQuestions'],
          },
          {
            baseId: process.env.BASE_CLIMATECOLLAB,
            tableName: `PitchSections`,
            tableView: `Live`,
            queryName: `PitchSections`,
            tableLinks: ['PitchPages'],
          },
        ]
      }
    }
  ],
}