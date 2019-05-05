// const Koa = reuqire('koa')
const redis = require('redis'),
  RES_PORT = 6379,
  RES_HOST = '10.33.106.182',
  RDS_PWD = '123qwe',
  RES_OPTS = {auth_pass: '123qwe'}

const client = redis.createClient(RES_PORT, RES_HOST, RES_OPTS)

client.on('ready', (err, res) => {
  console.log('ready')
})

client.on('connect', (err, res) => {
  if (err) console.log(err)
  // client.set('age', 18, redis.print)
  // client.get('age', redis.print)

  client.hmset("hosts2", "mjr", "1", "another", "23", "home", "1234")
  client.hgetall('hosts2', (err, obj) => {
    console.dir(obj)
  })

})
