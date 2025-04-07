import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setEmployees(response.data.slice(0, 4)); // Get first 10 employees
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch employee data.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <div className="w-16 h-16 border-8 border-t-8 border-blue-600 rounded-full animate-spin"></div>
  </div>
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Employee Dashboard
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-700">{employee.name}</h2>
                <p className="text-gray-500">{employee.company.name}</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">Email: {employee.email}</p>
                <p className="text-gray-600">Phone: {employee.phone}</p>
                <p className="text-gray-600">
                  Address: {employee.address.city}, {employee.address.street}
                </p>
              </div>
              <div className="mt-4 text-center">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                  onClick={() => alert(`More details of ${employee.name}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
