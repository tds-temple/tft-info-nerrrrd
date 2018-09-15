//Services
const firebaseService = require('../firebase')

const agentPassword = 'journey18'
const adminPassword = '12507'

const login = (userData, cb) => {
  if(userData.password !== agentPassword && userData.password !== adminPassword) {
    cb({ error: 'Password is invalid' }, null)
  } else {
    firebaseService.getUsers((err, data) => {
      if(userData.password === agentPassword) {
        const user = data.find(x => x.username === userData.username)
        if(user) {
          cb(null, { user: user, mode: 'agent' })
        } else {
          cb({ error: 'Username is invalid' }, null)
        }
        return
      }
  
      if(userData.password === adminPassword) {
        const user = data.find(x => x.username === userData.username)
        if(user) {
          cb(null, { user: user, mode: 'admin' })
        } else {
          cb({ error: 'Username is invalid' }, null)
        }
        return
      }
    })
  }
}

module.exports = {
  login
}