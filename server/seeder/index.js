module.exports = {
  config: require('./configSeeder')(),
  pages: require('./pageSeeder')(),
  client: require('./clientSeeder')(),
  team: require('./teamSeeder')()
}