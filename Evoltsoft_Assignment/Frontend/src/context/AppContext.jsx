import { createContext, useState } from 'react';
import API from '../util/Api';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [stations, setStations] = useState([]);

  const [chargingstationsInput, setChargingStationsInput] = useState({
    name: "",
    status: "",
    latitude: "",
    longitude: "",
    powerOutput: "",
    connectorType: ""
  });


  // 🔧 Corrected name & function
  const handle_Charging_Stations_Change = (e) => {
    const { name, value } = e.target;
    setChargingStationsInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 📥 Get all charging stations
  const getAllChargingStations = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await API.get("/charging-stations/stations");
      return response.data;
    } catch (error) {
      console.error("❌ Fetch error:", error);
      return error.response?.data?.message || "Failed to fetch charging stations.";
    }
    finally {
      setLoading(false);
    }
  };


  // Delete charging station by id
  const deleteChargingStation = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await API.delete(`/charging-stations/delete/${id}`);  // Backend me id ke sath delete request
      setStations((prev) => prev.filter((station) => station._id !== id)); 
      console.log("Station deleted successfully");
    } catch (err) {
      setError("Failed to delete station");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };



  return (
    <AppContext.Provider
      value={{
        chargingstationsInput,
        setChargingStationsInput,
        handle_Charging_Stations_Change,
        getAllChargingStations,
        deleteChargingStation,
        stations,
        setStations,
        loading,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
