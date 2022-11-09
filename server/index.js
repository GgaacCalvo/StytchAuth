

const express = require('express');

const app = express();
const cors = require('cors')
const stytch = require('stytch')

app.use(cors())
app.use(express.json())

const client = new stytch.Client({
    project_id: "project-test-6c215ab7-a139-42b2-b99c-c27a5ffea4d7",
    secret: "secret-test-HZE9haBP8ekrPxe4lBmeSLX_8aMkwisBJw4=", 
    env: stytch.envs.test
})

const authMiddleware = (req, res, next) => {
    const sessionToken = req.headers.sessiontoken;
    client.sessions.authenticate({session_token: sessionToken}).then(()=>{
        next()
    }).catch((err) => {
        res.status(401).json(err)
    })
}

app.post("/login", async (req, res) => {
    const email = req.body.email
    const params = {
        email,
        login_magic_link_url: "http://localhost:3000/auth",
        signup_magic_link_url: "http://localhost:3000/auth",
    }
    const response = await client.magicLinks.email.loginOrCreate(params)

    res.json(response)
})

app.post("/auth", async (req, res) =>{
    try {
        const token = req.body.token
    const sessionToken = await client.magicLinks.authenticate(token , {
        session_duration_minutes: 30,
    })
    console.log(sessionToken)
    res.json(sessionToken)
    } catch (err) {
        res.json(err)
    }
    
})


app.post("/test", authMiddleware, (req, res) =>{
    res.json("it WORKED, THIS USER IS AUTHENTICATED")
})

app.listen(3001, ()=>{
    console.log("server is running!")
})