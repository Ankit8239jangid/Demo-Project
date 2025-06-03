import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';

function Charger_Listing_Page() {
  const { getAllChargingStations,stations, setStations, deleteChargingStation, loading, error } = useContext(AppContext);
 ;

  const fetchChargingStations = async () => {
    const data = await getAllChargingStations();
    setStations(data);
  };

  useEffect(() => {
    fetchChargingStations();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Charging Stations</h1>

      {loading && <p className="text-center text-blue-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && stations.length > 0 ? (
        <div className="overflow-x-auto shadow rounded-lg">
          <table className="min-w-full bg-white border border-gray-300 text-sm text-left">
            <thead className="bg-gray-200 text-gray-700 uppercase">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Power Output</th>
                <th className="px-4 py-2">Connector Type</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {stations.map((station, index) => (
                <tr key={station._id} className="border-t">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{station.name}</td>
                  <td className="px-4 py-2">{station.status}</td>
                  {/* <td className="px-4 py-2">{station.location.latitude}</td>
                  <td className="px-4 py-2">{station.location.longitude}</td> */}
                  <td className="px-4 py-2">{station.powerOutput}</td>
                  <td className="px-4 py-2">{station.connectorType}</td>
                  <td className="px-4 py-2">

                    
                  <button className='bg-red-400 p-2 text-white rounded-lg font-semibold' onClick={() => deleteChargingStation(station._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading && <p className="text-center text-gray-600">No stations found.</p>
      )}
    </div>
  );
}

export default Charger_Listing_Page;
