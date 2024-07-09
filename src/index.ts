import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import "dotenv/config"


import { authRouter } from './Authentication-Table/Authentication.router';  
import assert from 'assert';
import bookingsRouter from './Bookings Table/Bookings.router';
import customerSupportTicketsRouter from './customerSupportTickets Table/customerSupportTickets.router';
import { authOnUsersRouter } from './AuthOnUsers Table/AuthOnUsers.router';
import { FleetManagementRouter } from './FleetManagementTable/FleetManagement.router';
import { BranchesRouter } from './Location-BranchesTable/Location-Branches.router';
import { PaymentsRouter } from './Payments Table/Payments.router';
import { userRouter } from './Users Table/Users.router';
import { vehicleRouter } from './Vehicles Table/Vehicles.router';
import { vehicleSpecificationRouter } from './VehicleSpecifications Table/VehicleSpecifications.router';


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
app.route("/auth", authOnUsersRouter)
app.route("/auth", bookingsRouter)
app.route("/auth", customerSupportTicketsRouter)
app.route("/auth", FleetManagementRouter)
app.route("/auth", BranchesRouter)
app.route("/auth", PaymentsRouter)
app.route("/auth", userRouter)
app.route("/auth", vehicleRouter)
app.route("/auth", vehicleSpecificationRouter)
 

assert(process.env.PORT, "PORT is not set in the .env file")

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT )
})

console.log(`Server is running on port ${process.env.PORT} 📢`)