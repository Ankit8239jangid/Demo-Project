// models/ChargingStation.js
import mongoose from 'mongoose';

const ChargingStationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    required: true
  },
  powerOutput: { type: Number, required: true }, // in kW
  connectorType: { type: String, required: true }
}, {
  timestamps: true
});

export default mongoose.model("ChargingStation", ChargingStationSchema);
