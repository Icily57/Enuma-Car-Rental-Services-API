import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import "dotenv/config"


import { authRouter } from './Authentication-Table/Authentication.router';  
import assert from 'assert';


const app = new Hono()

// default route
// app.get('/', (c) => {
//   return c.html(
//     html`
//    <h1>Welcome to Restaurant-management-system-API </h1>
//    <h2>Hello 🤗, my name is Mikaela Muthoni 😀</h2>
//    <p>Feel free to interact with my API 😁</p>
    
//     `)
// })

app.get('/ok', (c) => {
  return c.text('The server is running📢😏😏😏!')
})


//custom routes
app.route("/auth", authRouter)
 

assert(process.env.PORT, "PORT is not set in the .env file")

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT )
})

console.log(`Server is running on port ${process.env.PORT} 📢`)