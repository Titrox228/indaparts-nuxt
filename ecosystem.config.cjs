module.exports = {
    apps: [
      {
        name: 'msk.indaparts.ru',
        port: '3001',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }