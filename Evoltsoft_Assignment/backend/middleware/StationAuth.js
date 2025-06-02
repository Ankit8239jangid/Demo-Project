import charging_stationsDb from "../DB/charging_stations.db.js";

export async function StationAuth(req, res, next) {
  const { name, latitude, longitude } = req.body;

  if (!name || !latitude || !longitude) {
    return res.status(400).json({ error: "Name, latitude, and longitude are required." });
  }

  try {
    const existing = await charging_stationsDb.findOne({
      name,
      "location.latitude": latitude,
      "location.longitude": longitude,
    });

    if (existing) {
      return res.status(409).json({ error: "Charging station already exists." });
    }

    next();
  } catch (err) {
    return res.status(500).json({ error: "Server error checking station uniqueness." });
  }
}
