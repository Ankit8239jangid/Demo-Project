import React from "react";
import { useRouteError } from "react-router-dom";

export default function Err() {
  const error = useRouteError(); // This hook fetches the error object from the route
  console.error(error); // Log the error to the console for debugging

  return (
    <div>
      <h1>Error Occurred</h1>
      {/* You can display error details if necessary */}
      {error && (
        <pre>
          {JSON.stringify(error, null, 2)}
        </pre>
      )}
    </div>
  );
}
