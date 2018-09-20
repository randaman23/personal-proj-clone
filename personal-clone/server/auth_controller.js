module.exports ={

login: async (req, res) =>{
  let payload = {
    client_id: REACT_APP_CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: req.query.code,
    grant_type: 'authorization_code',
    redirect_uri: `http://${req.headers.host}/auth/callback`
      }
let tokenRes = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)

let userRes = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${tokenRes.data.access_token}`)

  const db = req.app.get('db')
  const {first_name, last_name, email, auth_id} = userRes.data

  let foundUser = await db.find_user([sub])
  if(foundUser[0]) {
      req.session.user = foundUser[0];
  } else {
    let createdUser = await db.create_user([first_name, last_name, email, auth_id])
    req.session.user = createdUser[0]
  }
  res.redirect('/')

 },

 userData: async (req, res) => {
  if(req.session.user) {
    res.status(200).send(req.session.user)
  } else {
    res.status(401).send('Create Account')
  }
 }

}