
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { FiSearch, FiChevronDown } from 'react-icons/fi';

export default function Charger_Listing_Page() {
  const {
    getAllChargingStations,
    stations,
    setStations,
    deleteChargingStation,
    editChargingStation,
    loading,
    error,
  } = useContext(AppContext);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentStation, setCurrentStation] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [statusOpen, setStatusOpen] = useState(false);
  const [selectedConnector, setSelectedConnector] = useState('');
  const [connectorOpen, setConnectorOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStations, setFilteredStations] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    status: '',
    powerOutput: '',
    connectorType: '',
    latitude: '',
    longitude: '',
  });

  const statusOptions = ['All', 'Active', 'Inactive'];
  const connectorOptions = ['All', 'CCS', 'Type2', 'CHAdeMO'];

  // Fetching and filtering stations
  useEffect(() => {
    fetchStations();
  }, []);

  // Apply filters whenever filter conditions change
  useEffect(() => {
    applyFilters();
 
  }, [stations, selectedStatus, selectedConnector, searchTerm]);

  const fetchStations = async () => {
    const data = await getAllChargingStations();
    setStations(data);
  };

  const applyFilters = () => {
    let filtered = [...stations];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter((station) =>
        station.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (selectedStatus && selectedStatus !== 'All') {
      filtered = filtered.filter((station) => station.status === selectedStatus);
    }

    // Connector type filter
    if (selectedConnector && selectedConnector !== 'All') {
      filtered = filtered.filter((station) => station.connectorType === selectedConnector);
    }

    setFilteredStations(filtered);
  };

  const handleEditClick = (station) => {
    setCurrentStation(station);
    setFormData({
      name: station.name || '',
      status: station.status || '',
      powerOutput: station.powerOutput || '',
      connectorType: station.connectorType || '',
      latitude: station.location?.latitude || '',
      longitude: station.location?.longitude || '',
    });
    setEditModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (!currentStation?._id) return;
    await editChargingStation(currentStation._id, formData);
    setEditModalOpen(false);
    fetchStations(); // Refresh
  };

  const resetFilters = () => {
    setSelectedStatus('');
    setSelectedConnector('');
    setSearchTerm('');
  };

  return (
    <div className="h-full p-2">
      <h1 className="text-3xl font-bold mb-6 text-center">Charging Stations</h1>
      
      {/* Filters Container */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4  mb-6">
        {/* Search Input */}
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search stations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        {/* Filter Dropdowns */}
        <div className="flex gap-3">
          {/* Status Filter */}
          <div className="relative">
            <button
              onClick={() => setStatusOpen(!statusOpen)}
              className="flex items-center justify-between w-32 px-4 py-2 rounded-lg bg-green-50 text-gray-700"
            >
              <span>{selectedStatus || 'Status'}</span>
              <FiChevronDown />
            </button>
            {statusOpen && (
              <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg z-10">
                {statusOptions.map((option) => (
                  <div
                    key={option}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedStatus(option);
                      setStatusOpen(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Connector Filter */}
          <div className="relative">
            <button
              onClick={() => setConnectorOpen(!connectorOpen)}
              className="flex items-center justify-between w-40 px-4 py-2 rounded-lg bg-green-50 text-gray-700"
            >
              <span>{selectedConnector || 'Connector Type'}</span>
              <FiChevronDown />
            </button>
            {connectorOpen && (
              <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg z-10">
                {connectorOptions.map((option) => (
                  <div
                    key={option}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedConnector(option);
                      setConnectorOpen(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Reset Filters */}
          {(selectedStatus || selectedConnector || searchTerm) && (
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {loading && <p className="text-center text-blue-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && filteredStations.length > 0 ? (
        <div className="shadow-lg rounded-lg bg-white max-h-[70vh] overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 text-sm text-left">
            <thead className="sticky top-0 bg-gray-200 text-gray-700 uppercase">
              <tr className="*:font-medium *:text-gray-900">
                <th className="px-4 py-2 whitespace-nowrap">#</th>
                <th className="px-4 py-2 whitespace-nowrap">Name</th>
                <th className="px-4 py-2 whitespace-nowrap">Status</th>
                <th className="px-4 py-2 whitespace-nowrap">Power Output</th>
                <th className="px-4 py-2 whitespace-nowrap">Connector</th>
                <th className="px-4 py-2 whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredStations.map((station, index) => (
                <tr key={station._id || index} className="*:text-gray-900 *:first:font-medium">
                  <td className="px-4 py-2 whitespace-nowrap">{index + 1}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{station.name}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      station.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {station.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">{station.powerOutput}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{station.connectorType}</td>
                  <td className="py-2 flex gap-4 whitespace-nowrap">
                    <button
                      onClick={() => handleEditClick(station)}
                      className="px-2 py-2 text-sm hover:bg-gray-100"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteChargingStation(station._id)}
                      className="px-2 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading && <p className="text-center text-gray-600">No stations found.</p>
      )}



      {/* ---------------------------------Edit Modal------------------------------------ */}
      {editModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg relative">
            <h2 className="text-xl font-bold mb-4">Edit Charging Station</h2>
            <form onSubmit={handleEditSubmit} className="space-y-4 grid grid-cols-2 items-center justify-center">
              {['name', 'status', 'powerOutput', 'connectorType', 'latitude', 'longitude'].map((field) => (
                <React.Fragment key={field}>
                  <label className="uppercase">{field}</label>
                  <input
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="w-full px-4 py-2 border rounded"
                    required
                  />
                </React.Fragment>
              ))}
              <div className="col-span-2 flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  className="bg-gray-300 px-4 py-2 rounded"
                  onClick={() => setEditModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
