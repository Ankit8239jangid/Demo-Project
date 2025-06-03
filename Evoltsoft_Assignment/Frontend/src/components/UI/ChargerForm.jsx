import React, { useState, useContext } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { AppContext } from '../../context/AppContext';


const ChargerForm = () => {
  const {
    chargingstationsInput,
    handle_Charging_Stations_Change,
    setChargingStationsInput,
    CreatChargingStations,
    loading
  } = useContext(AppContext);

  const [statusOpen, setStatusOpen] = useState(false);
  const [connectorOpen, setConnectorOpen] = useState(false);

  const statusOptions = ['Active', 'Inactive'];
  const connectorOptions = ['Type 1', 'Type 2', 'CCS', 'CHAdeMO', 'Tesla'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    await CreatChargingStations(); // 🔥 call the context function
  };
  
  return (
    <div className="max-w-2xl mx-auto p-4 md:p-5 font-sans">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Add New Charger</h1>

        {/* Charger Name */}
        <div className="mb-5">
          <label htmlFor="name" className="block font-medium text-gray-700 mb-2">Charger Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={chargingstationsInput.name}
            onChange={handle_Charging_Stations_Change}
            placeholder="Enter charger name"
            className="w-full p-3 border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* Latitude and Longitude */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div>
            <label htmlFor="latitude" className="block font-medium text-gray-700 mb-2">Latitude</label>
            <input
              type="text"
              id="latitude"
              name="latitude"
              value={chargingstationsInput.latitude}
              onChange={handle_Charging_Stations_Change}
              placeholder="Enter latitude"
              className="w-full p-3 border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="longitude" className="block font-medium text-gray-700 mb-2">Longitude</label>
            <input
              type="text"
              id="longitude"
              name="longitude"
              value={chargingstationsInput.longitude}
              onChange={handle_Charging_Stations_Change}
              placeholder="Enter longitude"
              className="w-full p-3 border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

       <div className=" flex items-center w-full  justify-between">
         {/* Status Dropdown */}
         <div className="mb-5">
          <label htmlFor="status" className="block font-medium text-gray-700 mb-2">Status</label>
          <div className="relative ">
            <div
              className="flex justify-between items-center p-3 border border-gray-200 rounded-md bg-white cursor-pointer h-[46px]"
              onClick={() => setStatusOpen(!statusOpen)}
            >
              <span className="text-gray-600">{chargingstationsInput.status || 'Select status'}</span>
              {statusOpen ? <FiChevronUp className="text-green-500" /> : <FiChevronDown className="text-green-500" />}
            </div>
            {statusOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-y-auto">
                {statusOptions.map((option) => (
                  <div
                    key={option}
                    className="p-3 hover:bg-gray-50 cursor-pointer"
                    onClick={() => {
                      setChargingStationsInput((prev) => ({
                        ...prev,
                        status: option,
                      }));
                      setStatusOpen(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Power Output */}
        <div className="mb-5">
          <label htmlFor="powerOutput" className="block font-medium text-gray-700 mb-2">Power Output (kW)</label>
          <input
            type="text"
            id="powerOutput"
            name="powerOutput"
            value={chargingstationsInput.powerOutput}
            onChange={handle_Charging_Stations_Change}
            placeholder="Enter power output"
            className="w-full p-3 border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
       </div>

        {/* Connector Type Dropdown */}
        <div className="mb-5">
          <label htmlFor="connectorType" className="block font-medium text-gray-700 mb-2">Connector Type</label>
          <div className="relative">
            <div
              className="flex justify-between items-center p-3 border border-gray-200 rounded-md bg-white cursor-pointer h-[46px]"
              onClick={() => setConnectorOpen(!connectorOpen)}
            >
              <span className="text-gray-600">{chargingstationsInput.connectorType || 'Select connector'}</span>
              {connectorOpen ? <FiChevronUp className="text-green-500" /> : <FiChevronDown className="text-green-500" />}
            </div>
            {connectorOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-y-auto">
                {connectorOptions.map((option) => (
                  <div
                    key={option}
                    className="p-3 hover:bg-gray-50 cursor-pointer"
                    onClick={() => {
                      setChargingStationsInput((prev) => ({
                        ...prev,
                        connectorType: option,
                      }));
                      setConnectorOpen(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-full font-medium transition-colors w-full md:w-auto"
          >
            { loading ? 'please wait...' : 'Add Charger'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChargerForm;
