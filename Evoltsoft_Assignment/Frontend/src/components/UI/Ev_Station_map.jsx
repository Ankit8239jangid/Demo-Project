import React, { useState, useEffect, useContext } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  ZoomControl
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FiSearch, FiChevronDown, FiZap, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { TfiPlug } from "react-icons/tfi";
import { AppContext } from '../../context/AppContext';

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function ChangeView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

export default function EvMap_page() {
  const defaultCenter = [20.5937, 78.9629];
  const defaultZoom = 5;

  const [center, setCenter] = useState(defaultCenter);
  const [zoom, setZoom] = useState(defaultZoom);
  const [filteredStations, setFilteredStations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedConnector, setSelectedConnector] = useState('');
  const [statusOpen, setStatusOpen] = useState(false);
  const [connectorOpen, setConnectorOpen] = useState(false);

  const {
    getAllChargingStations,
    stations,
    setStations,
    loading
  } = useContext(AppContext);

  const statusOptions = ['All', 'Active', 'Inactive'];
  const connectorOptions = ['All', 'CCbcc', 'Type2', 'CHAdeMO'];

  useEffect(() => {
    const fetchStations = async () => {
      const data = await getAllChargingStations();
      const formatted = data.map((station) => ({
        ...station,
        position: [station.location.latitude, station.location.longitude]
      }));
      setStations(formatted);
      setFilteredStations(formatted);
    };
    fetchStations();
  }, []);

  const applyFilters = () => {
    let filtered = stations;

    if (searchTerm) {
      filtered = filtered.filter((s) =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase())
      
      );
    }

    if (selectedStatus && selectedStatus !== 'All') {
      filtered = filtered.filter((s) => s.status === selectedStatus);
    }

    if (selectedConnector && selectedConnector !== 'All') {
      filtered = filtered.filter((s) => s.connectorType === selectedConnector);
    }

    setFilteredStations(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [searchTerm, selectedStatus, selectedConnector, stations]);

  return (
    <div className="max-w-7xl mx-auto p-5">
      {/* Top Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-3 mt-10 md:mt-0 relative z-[999]">
        {/* Search Bar */}
        <div className="relative w-full md:w-1/2">
          <FiSearch className="absolute top-3.5 left-3 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search charging station by name"
            className="w-full py-3 pl-10 pr-4 rounded-lg bg-green-50 border-none focus:ring-2 focus:ring-green-200"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-3">
          {/* Status Filter */}
          <div className="relative z-[999]">
            <button
              onClick={() => setStatusOpen(!statusOpen)}
              className="flex items-center justify-between w-32 px-4 py-2 rounded-lg bg-green-50 text-gray-700"
            >
              <span>{selectedStatus || 'Status'}</span>
              <FiChevronDown />
            </button>
            {statusOpen && (
              <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg z-[999]">
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
          <div className="relative z-[999]">
            <button
              onClick={() => setConnectorOpen(!connectorOpen)}
              className="flex items-center justify-between w-40 px-4 py-2 rounded-lg bg-green-50 text-gray-700"
            >
              <span>{selectedConnector || 'Connector Type'}</span>
              <FiChevronDown />
            </button>
            {connectorOpen && (
              <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg z-[999]">
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
        </div>
      </div>

      {/* Map */}
      <div className="relative md:h-[500px] h-[400px] rounded-lg overflow-hidden shadow-md border border-gray-200">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <p>Loading map...</p>
          </div>
        ) : (
          <MapContainer
            center={center}
            zoom={zoom}
            className="h-full w-full"
            zoomControl={false}
          >
            <ChangeView center={center} zoom={zoom} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {filteredStations.map((station , index) => (
              <Marker
                key={station._id || index}
                position={station.position}
                eventHandlers={{
                  click: () => {
                    setCenter(station.position);
                    setZoom(15);
                  },
                }}
              >
                <Popup>
                  <div className="text-sm space-y-1">
                    <h3 className="font-bold text-base">{station.name}</h3>
                    <p className="flex items-center gap-2 text-gray-700">
                      <FiZap className="text-green-600" /> Power: {station.powerOutput} kW
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                      <TfiPlug className="text-blue-600" /> {station.connectorType}
                    </p>
                    <p className={`flex items-center gap-2 font-semibold ${station.status === 'Active' ? 'text-green-600' : 'text-red-500'}`}>
                      {station.status === 'Active' ? <FiCheckCircle /> : <FiXCircle />}
                      Status: {station.status}
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>
    </div>
  );
}
