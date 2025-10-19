import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import {clerkMiddleware} from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import userRouter from "./routes/user.routes.js";

import agencyRouter from "./routes/agency.routes.js";
import propertyRouter from "./routes/property.routes.js";
import bookingRouter from "./routes/booking.routes.js";

await connectDB()

const app = express(); 
app.use(cors()); 

app.use(express.json())
app.use(clerkMiddleware())

app.use("/api/clerk", clerkWebhooks)

app.use("/api/user", userRouter)
app.use("/api/agencies", agencyRouter)
app.use("/api/properties", propertyRouter)
app.use("/api/bookings", bookingRouter)

app.get("/", (req, res) => {
  res.send("API successfully connected");
});

const port = process.env.PORT || 4000; 


app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);



