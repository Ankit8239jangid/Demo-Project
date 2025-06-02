import express from "express";
import { userRoute } from "./user_Router.js";
import { charging_Station_Route } from "./charging_Router.js";

export const router = express.Router();


// User authentication routes
router.use('/user', userRoute);

router.use('/charging-stations', charging_Station_Route )
