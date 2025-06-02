// routes/chargingStation.route.js
import express from "express";
import { verifyToken } from "../middleware/User.auth.js";
import charging_stationsDb from "../DB/charging_stations.db.js";
import { StationAuth } from "../middleware/StationAuth.js";

export const charging_Station_Route = express.Router();

// ✅ Create (POST) - Register a new charging station
charging_Station_Route.post("/register", verifyToken, StationAuth, async (req, res) => {
    const { name, latitude, longitude, status, powerOutput, connectorType } = req.body;

    if (!name || !latitude || !longitude || !status || !powerOutput || !connectorType) {
        return res.status(400).json({ error: "All fields are required." });
    }

    try {
        const station = await charging_stationsDb.create({
            name,
            location: {
                latitude,
                longitude
            },
            status,
            powerOutput,
            connectorType
        });

        res.status(201).json({
            message: "Charging station registered successfully.",
            station
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a charging station by ID
charging_Station_Route.put("/update/:id", verifyToken, async (req, res) => {
    try {
        const updated = await charging_stationsDb.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ error: "Charging station not found." });
        }

        res.status(200).json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a charging station by ID
charging_Station_Route.delete("/delete/:id", verifyToken, async (req, res) => {
    try {
        const deleted = await charging_stationsDb.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ error: "Charging station not found." });
        }

        res.status(200).json({ message: "Charging station deleted successfully." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Get (GET) - Fetch all charging stations
charging_Station_Route.get("/stations", verifyToken, async (req, res) => {
    try {
        const stations = await charging_stationsDb.find();
        res.status(200).json(stations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
