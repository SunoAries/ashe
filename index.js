const express = require('express')
const bodyParser = require('body-parser')
const Mock = require('mockjs')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


const apiJson = Mock.mock({
  'User.login': {
    name: '',
    age: '12',
  },
  'User.logout': 'cool',
  'AgentService.GetAgentList': {
    'agents|1-10': [{
      id: '@id',
      state:['online','offline'],
      host: '@cname',
      ip: '@ip',
      comment: '@word',
      last_seen_at: '@datetime'
    }]
  },
  'AgentService.DeleteAgent':{
    status:'done'
  },
  'AgentService.EditAgent':[{
    id: '@id',
    state:['online','offline'],
    host: '@cname',
    ip: '@ip',
    comment: '@word',
    last_seen_at: '@datetime'
  }]
})

app.post('/rpc', (req, res)=> {
  console.log(JSON.stringify(req.body))
  const method = req.body.method || 'default'
  return res.json({"code": 200, "message": "success", "result": apiJson[method], "requestId": null})
})

app.listen(3000, () => console.log('fake app listening on port 3000!'))