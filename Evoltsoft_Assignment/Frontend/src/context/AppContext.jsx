import { createContext, useState } from 'react';
import toast from 'react-hot-toast';
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

  const handle_Charging_Stations_Change = (e) => {
    const { name, value } = e.target;
    setChargingStationsInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Get all charging stations
  const getAllChargingStations = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await API.get("/charging-stations/stations");
      return response.data;
    } catch (error) {
      console.error("❌ Fetch error:", error);
      toast.error("Failed to fetch stations");
      return error.response?.data?.message || "Failed to fetch charging stations.";
    } finally {
      setLoading(false);
    }
  };

  // Edit charging station
  const editChargingStation = async (id, updatedData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await API.put(`/charging-stations/update/${id}`, updatedData);
      toast.success("Charging station updated!");
      return response.data;
    } catch (error) {
      console.error("❌ Edit error:", error);
      toast.error("Failed to update station");
      setError(error.response?.data?.message || "Failed to update station.");
    } finally {
      setLoading(false);
    }
  };

  // Create new charging station
  const CreatChargingStations = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await API.post("/charging-stations/create", chargingstationsInput);
      toast.success("Charging station created!");
      return response.data;
    } catch (error) {
      console.error("❌ Creation error:", error);
      toast.error("Failed to create station");
      setError(error.response?.data?.message || "Failed to create station.");
    } finally {
      setLoading(false);
    }
  };

  // Delete charging station
  const deleteChargingStation = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await API.delete(`/charging-stations/delete/${id}`);
      setStations((prev) => prev.filter((station) => station._id !== id));
      toast.success("Charging station deleted");
    } catch (err) {
      toast.error("Failed to delete station");
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
        CreatChargingStations,
        deleteChargingStation,
        editChargingStation,
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
