require('dotenv').config()


const server = require('./api/server.js');

const PORT = process.env.PORT || 5020

server.listen(PORT, ()=>{
    console.log(`server is listening on ${PORT}`)
})